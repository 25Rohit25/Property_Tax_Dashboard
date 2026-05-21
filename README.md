# 🏙️ NUDM Property Tax Analytics Dashboard

A modern, AI-powered, and fully responsive Property Tax Analytics Dashboard built for the **NUDM Intern Assessment 2026** under the **UPYOG Multi-Tenant Platform**.

🌐 **Live Demo:**  
https://property-tax-dashboard-fa1p.vercel.app/

---

# ✨ Overview

The Property Tax Analytics Dashboard provides intelligent analytics and insights for property tax management across multiple Indian cities.

The platform enables:
- 📊 Real-time KPI analytics
- 🌍 Multi-city filtering
- 📈 Interactive visualizations
- 🤖 AI-powered conversational insights
- 📱 Fully responsive dashboard UI

Built entirely using **React.js**, **Vite**, and **Tailwind CSS**, the application integrates **Google Gemini AI** for contextual and intelligent analytics responses.

---

# 🚀 Features

## 📊 Real-Time KPI Dashboard

Dynamic KPI cards displaying:

- Total Properties Registered
- Total Approved Properties
- Total Rejected Properties
- Total Property Tax Collection

All values update dynamically based on the selected city.

---

## 🌍 Multi-Tenant City Filtering

Analyze data city-wise for:
- Delhi
- Mumbai
- Pune
- Bengaluru
- Chennai
- Hyderabad
- Ahmedabad
- Kolkata
- Jaipur
- Lucknow

The filter dynamically updates:
- KPI Cards
- Charts
- AI Assistant Context

---

## 📈 Interactive Data Visualization

Built using **Recharts** for responsive and interactive analytics.

### Included Charts
- 📊 Total Collection by City
- 📈 Approved vs Rejected Analytics
- 📉 Property Status Distribution

---

## 🤖 AI Chat Assistant

Integrated with **Google Gemini AI** to provide intelligent insights from the dataset.

### Example Questions

```plaintext
Which city has the highest total collection?
How many rejected properties are there in Mumbai?
Compare Pune and Jaipur registrations.
Which city has the most pending properties?
```

The AI assistant dynamically understands:
- selected city
- filtered dashboard state
- analytics summaries
- property statistics

---

# 🛠️ Tech Stack

| Category | Technology |
|---|---|
| Frontend | React.js + Vite |
| Styling | Tailwind CSS |
| Charts | Recharts |
| Icons | Lucide React |
| AI Integration | Google Gemini API |
| Deployment | Vercel |

---

# 📂 Project Structure

```plaintext
src/
│
├── components/
│   ├── KPIcard.jsx
│   ├── TenantFilter.jsx
│   ├── CollectionChart.jsx
│   ├── StatusChart.jsx
│   ├── ChatAssistant.jsx
│   └── Navbar.jsx
│
├── data/
│   └── properties.json
│
├── services/
│   └── geminiService.js
│
├── utils/
│   ├── analytics.js
│   └── summaryGenerator.js
│
├── App.jsx
├── main.jsx
└── index.css
```

---

# ⚙️ Installation & Setup

## 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/nudm-property-tax-dashboard.git
```

---

## 2️⃣ Navigate into the Project Folder

```bash
cd nudm-property-tax-dashboard
```

---

## 3️⃣ Install Dependencies

Install all required packages:

```bash
npm install
```

---

# 📦 Required Packages

The project uses the following packages:

```bash
npm install recharts lucide-react @google/generative-ai
```

---

# 🔑 Environment Variables Setup

Create a `.env` file in the root directory:

```env
VITE_GEMINI_API_KEY=your_gemini_api_key_here
```

⚠️ Important:
- Never commit `.env` to GitHub
- Add `.env` inside `.gitignore`

---

# 📁 Dataset Setup

Ensure the provided dataset file exists at:

```plaintext
src/data/properties.json
```

The dataset contains:
- 1000 property records
- 10 Indian cities
- property tax analytics information

---

# ▶️ Running the Project Locally

Start the development server:

```bash
npm run dev
```

After running the command, open:

```plaintext
http://localhost:5173
```

in your browser.

---

🔗 Live Project:  
https://property-tax-dashboard-fa1p.vercel.app/

---


# 🧠 AI Integration Workflow

```plaintext
Property Dataset
        ↓
Analytics Summary Generator
        ↓
User Question
        ↓
Google Gemini API
        ↓
AI Response
```

The AI assistant receives:
- filtered dashboard context
- analytics summaries
- property statistics
- user query

This enables accurate and contextual AI responses.

---

# 🎯 Core Functionalities

✅ Real-Time KPI Analytics  
✅ Dynamic Tenant Filtering  
✅ Interactive Charts  
✅ AI-Powered Insights  
✅ Responsive Dashboard UI  
✅ Modern SaaS Design  
✅ Frontend-Only Architecture  
✅ Optimized Performance  

---

# 📸 Screenshots

## Dashboard Overview
(Screenshot Here)
<img width="1885" height="996" alt="image" src="https://github.com/user-attachments/assets/611d6cec-1dd7-472b-af5f-ee07a23ffed0" />

<img width="1866" height="879" alt="image" src="https://github.com/user-attachments/assets/38c8e1a2-30ef-41d8-bfac-390e5a67c3a7" />

<img width="1881" height="891" alt="image" src="https://github.com/user-attachments/assets/8875291f-8595-4981-b8dc-8476dd9c8d68" />




---






# 📄 License

This project was developed for the **NUDM Intern Assessment 2026** under the **UPYOG Multi-Tenant Platform** for evaluation purposes.
