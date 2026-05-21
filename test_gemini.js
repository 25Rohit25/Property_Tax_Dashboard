import { GoogleGenerativeAI } from "@google/generative-ai";
import fs from "fs";
import dotenv from "dotenv";

dotenv.config();

async function run() {
  try {
    const apiKey = process.env.VITE_GEMINI_API_KEY;
    console.log("Fetching models...");
    const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models?key=${apiKey}`);
    const data = await res.json();
    if (data.error) {
       console.error("API Error:", data.error.message, data.error.status);
    } else {
       console.log("Models:", data.models.map(m => m.name).join(", "));
    }
  } catch (err) {
    console.error("Fetch failed:", err);
  }
}

run();
