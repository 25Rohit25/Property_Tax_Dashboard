import { GoogleGenerativeAI } from "@google/generative-ai";

export const generateSummary = (data) => {
  const total = data.length;
  const approved = data.filter(d => d.status === 'Approved').length;
  const rejected = data.filter(d => d.status === 'Rejected').length;
  const pending = data.filter(d => d.status === 'Pending').length;
  const totalCollection = data.reduce((sum, d) => sum + d.collection_inr, 0);

  const cityStats = data.reduce((acc, curr) => {
    if (!acc[curr.tenant]) {
      acc[curr.tenant] = { collection: 0, count: 0, approved: 0, rejected: 0, pending: 0 };
    }
    acc[curr.tenant].collection += curr.collection_inr;
    acc[curr.tenant].count += 1;
    if (curr.status === 'Approved') acc[curr.tenant].approved += 1;
    else if (curr.status === 'Rejected') acc[curr.tenant].rejected += 1;
    else if (curr.status === 'Pending') acc[curr.tenant].pending += 1;
    return acc;
  }, {});

  return `Dataset Summary: Total properties: ${total}. Approved: ${approved}. Rejected: ${rejected}. Pending: ${pending}. Total Collection: ₹${totalCollection}. City breakdown: ${JSON.stringify(cityStats)}`;
};

export const askGemini = async (question, data) => {
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
  if (!apiKey) {
    return "API Key is missing. Please create a .env file and add VITE_GEMINI_API_KEY with your Google Gemini API key.";
  }

  try {
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-flash-latest" });
    
    const context = generateSummary(data);
    const prompt = `You are an AI assistant for a Property Tax Analytics Dashboard. 
Here is the summary of the currently selected property tax dataset:
${context}

User question: ${question}

Provide a concise, helpful, and accurate answer based on the dataset summary above. Format your response clearly.`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Sorry, I encountered an error while processing your request. Please check the console for more details.";
  }
};
