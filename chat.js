import express from "express";
import { GoogleGenAI } from "@google/genai";

const router = express.Router();

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY
});

router.post("/chat", async (req, res) => {

  try {

    const { message } = req.body;

    if (!message) {
      return res.status(400).json({
        error: "Message kosong"
      });
    }

    const response =
      await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: message
      });

    res.json({
      success: true,
      reply: response.text
    });

  } catch (err) {

    console.log(err);

    res.status(500).json({
      success: false,
      error: err.message
    });

  }

});

export default router;