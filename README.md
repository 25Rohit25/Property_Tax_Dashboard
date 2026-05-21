# NUDM Property Tax Analytics Dashboard

A modern, scalable, and responsive Property Tax Analytics Dashboard for the UPYOG Multi-Tenant Platform built with React, Vite, and Tailwind CSS.

## Features
- **Real-time KPI Dashboard**: View total properties registered, approved, rejected, and total collection.
- **Tenant Filter**: Filter analytics by specific cities instantly.
- **Interactive Charts**: Visualize collection by city and status distribution using Recharts.
- **AI Chat Assistant**: AI-powered conversational assistant to help you gain insights from the property tax data, powered by Google Gemini.

## Tech Stack
- **Frontend**: React.js, Vite
- **Styling**: Tailwind CSS
- **Charts**: Recharts
- **Icons**: Lucide React
- **AI Integration**: Google Gemini API (`@google/generative-ai`)

## Installation Steps

1. **Clone the repository or navigate to the project directory:**
   ```bash
   cd nudm-property-tax-dashboard
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Environment Setup:**
   Create a `.env` file in the root directory and add your Google Gemini API key:
   ```env
   VITE_GEMINI_API_KEY=your_api_key_here
   ```
   *(You can use `.env.example` as a template)*

4. **Data Setup:**
   Ensure you have your `properties.json` inside `src/data/`. (A synthetic one is provided for development).

## Running the Project

Start the development server:
```bash
npm run dev
```

Visit `http://localhost:5173` in your browser.

## Deployment

This project is frontend-only and can be easily deployed to Vercel or Netlify.

### Vercel Deployment
1. Push the code to a GitHub repository.
2. Import the project on [Vercel](https://vercel.com).
3. Add the `VITE_GEMINI_API_KEY` to the Environment Variables settings.
4. Click **Deploy**.

## AI Integration
The AI Assistant contextually analyzes the filtered dashboard state. When a city is filtered, the AI is aware of the current data subset and can provide relevant, accurate answers.
