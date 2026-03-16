import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import nodemailer from "nodemailer";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const messagesFilePath = path.join(__dirname, "..", "data", "messages.json");

function normalizeInput(value) {
  return typeof value === "string" ? value.trim() : "";
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

async function saveMessage(message) {
  await fs.mkdir(path.dirname(messagesFilePath), { recursive: true });
  let existing = [];
  try {
    const fileContent = await fs.readFile(messagesFilePath, "utf8");
    existing = JSON.parse(fileContent);
    if (!Array.isArray(existing)) existing = [];
  } catch {
    existing = [];
  }

  existing.push(message);
  await fs.writeFile(messagesFilePath, JSON.stringify(existing, null, 2), "utf8");
}

async function sendEmailNotification(message) {
  const { EMAIL_USER, MAIL_USER, EMAIL_PASS, EMAIL_HOST, EMAIL_PORT, EMAIL_SECURE, MAIL_TO } = process.env;
  const emailUser = EMAIL_USER || MAIL_USER;
  if (!emailUser || !EMAIL_PASS) {
    console.warn("Email not configured: missing EMAIL_USER/MAIL_USER and/or EMAIL_PASS.");
    return false;
  }

  const port = EMAIL_PORT ? Number(EMAIL_PORT) : 587;
  const secure = EMAIL_SECURE ? EMAIL_SECURE === "true" : port === 465;
  const transporter = nodemailer.createTransport({
    host: EMAIL_HOST || "smtp.gmail.com",
    port,
    secure,
    auth: {
      user: emailUser,
      pass: EMAIL_PASS
    }
  });

  await transporter.sendMail({
    from: `"Portfolio Contact" <${emailUser}>`,
    to: MAIL_TO || emailUser,
    replyTo: message.email,
    subject: `[Portfolio] ${message.subject}`,
    text: `Nom: ${message.name}\nEmail: ${message.email}\n\nMessage:\n${message.message}`
  });

  return true;
}

export async function submitContact(req, res) {
  const name = normalizeInput(req.body?.name);
  const email = normalizeInput(req.body?.email);
  const subject = normalizeInput(req.body?.subject);
  const messageText = normalizeInput(req.body?.message);

  if (!name || !email || !subject || !messageText) {
    return res.status(400).json({ error: "Tous les champs sont obligatoires." });
  }

  if (!isValidEmail(email)) {
    return res.status(400).json({ error: "Adresse email invalide." });
  }

  const message = {
    id: Date.now().toString(),
    name,
    email,
    subject,
    message: messageText,
    createdAt: new Date().toISOString()
  };

  try {
    await saveMessage(message);
    let mailSent = false;
    try {
      mailSent = await sendEmailNotification(message);
    } catch (mailError) {
      console.error("Email notification error:", mailError);
      mailSent = false;
    }
    return res.status(201).json({
      message: "Message reçu avec succès.",
      mailSent
    });
  } catch (error) {
    console.error("Contact submit error:", error);
    return res.status(500).json({
      error: `Erreur serveur lors de l'envoi du message. ${error?.message || ""}`.trim()
    });
  }
}
