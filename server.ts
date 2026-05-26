import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI, Type } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// In-memory array to simulate CRM lead capturing
const serverLeadsStore: Array<any> = [];

// Lazy-loaded secure Gemini client helper
let geminiClient: GoogleGenAI | null = null;

function getGeminiClient(): GoogleGenAI {
  if (!geminiClient) {
    const key = process.env.GEMINI_API_KEY;
    if (!key) {
      // Return a temporary client or let it fail gracefully on execution
      console.warn("GEMINI_API_KEY is not defined. AI Diagnostic engine will run in simulated premium mode.");
    }
    geminiClient = new GoogleGenAI({
      apiKey: key || "MOCK_KEY",
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build",
        },
      },
    });
  }
  return geminiClient;
}

// -------------------------------------------------------------
// API ENDPOINTS
// -------------------------------------------------------------

// Capture leads securely
app.post("/api/submit-lead", (req, res) => {
  try {
    const { name, email, phone, businessName, website, message, bottleneck, revenue, diagnosticResult } = req.body;
    
    if (!name || !email) {
      return res.status(400).json({ error: "Name and email are required." });
    }

    const newLead = {
      id: "LD-" + Date.now().toString().slice(-6),
      name,
      email,
      phone: phone || "",
      businessName: businessName || "",
      website: website || "",
      message: message || "",
      bottleneck: bottleneck || "",
      revenue: revenue || "",
      diagnosticResult: diagnosticResult || null,
      timestamp: new Date().toISOString()
    };

    serverLeadsStore.unshift(newLead);
    console.log(`[CRM Integration] Captured qualified lead: ${name} (${businessName})`);

    return res.status(200).json({
      success: true,
      message: "Lead captured successfully on secure consulting pipeline.",
      leadId: newLead.id
    });
  } catch (error: any) {
    console.error("Error saving lead:", error);
    return res.status(500).json({ error: "Failed to capture lead: " + error.message });
  }
});

// Fetch captured leads for demonstrating system operations in preview
app.get("/api/leads", (req, res) => {
  return res.json({ leads: serverLeadsStore });
});

// Generate dynamic tailored Growth Blueprint backed by Gemini
app.post("/api/generate-blueprint", async (req, res) => {
  try {
    const { businessName, website, industry, bottleneck, currentRevenue, targetChannel } = req.body;

    if (!businessName || !industry || !bottleneck) {
      return res.status(400).json({ error: "Please provide Business Name, Industry/Niche, and main Growth Bottleneck." });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey || apiKey === "MY_GEMINI_API_KEY") {
      // Return simulated rich strategic analysis if API key is not yet set
      console.warn("Using high-fidelity pre-compiled consulting model (Simulated Mode) due to missing GEMINI_API_KEY");
      
      const mockBlueprint = {
        executiveConcept: `CONCEITO DE COORDENAÇÃO DE CRESCIMENTO PARA ${businessName.toUpperCase()}`,
        positioningAngle: `Upgrade premium focado em autoridade técnica e posicionamento high-ticket na categoria de ${industry}.`,
        acquisitionStrategy: `Implementação de um Funil de Conteúdo 'Showcase' aliado a Vendas Ativas e Tráfego Pago Micro-Direcionado (In-feed & Search).`,
        aiSystemsEngine: `Criação de um AI Clone da liderança para processar roteiros e gerar interações iniciais qualificadas, escalando a produção sem diluir a marca.`,
        funnelArchitecture: `Aquisição por Anúncio Editorial -> Página de Diagnóstico de Valor (VSL) -> Agendamento Direto no Calendly com Pré-Qualificação de C-Level.`,
        projectedRoi: `Aumento imediato de 25-40% na taxa de conversão de reuniões com leads qualificados, reduzindo o CAC em até 30% em 90 dias.`,
        consultantAdvice: `Não dependa de postagens genéricas de agências tradicionais. Foque em anúncios com quebra de padrão intelectual e sistemas robustos de filtragem de leads.`
      };

      return res.status(200).json({
        blueprint: mockBlueprint,
        isSimulated: true
      });
    }

    const ai = getGeminiClient();

    const systemPrompt = `You are an Elite Growth, Client Acquisition, and Marketing Operations Consultant with international execution experience. 
Your tone is highly direct, confident, analytical, and premium. You reject lazy agency fluff and focus on systems, high-ticket positioning, and ROI.
Deliver an ultra-strategic, hyper-customized corporate growth blueprint for the user's business.

Analyze the user's details:
- Business Name: "${businessName}"
- Website: "${website || "Not provided"}"
- Industry/Niche: "${industry}"
- Scaling Bottleneck: "${bottleneck}"
- Estimated Revenue Class: "${currentRevenue || "Confidential"}"
- Target Channels: "${targetChannel || "Multichannel Ads & Automated Systems"}"

Generate the analysis structured strictly as a JSON object matching this schema:
{
  "executiveConcept": "A bold heading establishing the concept or core strategy. Write in PORTUGUESE (BR). Use aggressive, high-ticket terminology.",
  "positioningAngle": "A detailed 2-sentence tactical recommendation on brand positioning to increase customer perception of high-ticket value. In Portuguese.",
  "acquisitionStrategy": "A rigorous 2-sentence multichannel marketing paid and organic strategy description. In Portuguese.",
  "aiSystemsEngine": "How to specifically deploy Artificial Intelligence Clones, scalable systems, or workflows to overcome their exact bottleneck. In Portuguese.",
  "funnelArchitecture": "A breakdown of the recommended customer journey funnel (e.g. Lead Magnet -> Qualification -> High-Ticket Call). In Portuguese.",
  "projectedRoi": "A realistic metrics improvement expectation (e.g., reduce CAC by 35%) and strategic outlook. In Portuguese.",
  "consultantAdvice": "A punchy, elite consultant quote that provides extreme clarity and builds urgency to book a call. In Portuguese."
}`;

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: systemPrompt,
      config: {
        responseMimeType: "application/json",
        temperature: 0.7,
      }
    });

    const responseText = response.text || "";
    try {
      const blueprintParsed = JSON.parse(responseText.trim());
      return res.status(200).json({
        blueprint: blueprintParsed,
        isSimulated: false
      });
    } catch (parseError) {
      console.error("Error parsing Gemini JSON response. Fallback to raw text parser.", responseText);
      // Fallback in case formatting fails
      return res.status(200).json({
        rawText: responseText,
        isSimulated: false
      });
    }

  } catch (error: any) {
    console.error("Gemini Blueprint API Error:", error);
    return res.status(500).json({ error: "Desculpe, ocorreu um erro ao gerar o seu planejamento via Inteligência Artificial: " + error.message });
  }
});


// -------------------------------------------------------------
// VITE OR STATIC RUNTIME CONFIGURATION
// -------------------------------------------------------------
async function bootstrap() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
    console.log("[Vite Engine] Mounted hot-module middleware for dev server.");
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
    console.log("[Production Engine] Serving compiled assets from static dist/.");
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`[Grow Consulting App] Server initialized. Listening on http://localhost:${PORT}`);
  });
}

bootstrap();
