# Ethics Explorer 倫理探索

A bilingual (English / Traditional Chinese) web application for teaching Christian Ethics to Grade 7-9 students in a cosmopolitan, multi-religious context.

**Live:** https://ethic-ed-assistant.vercel.app

## Features

### For Students (In Class)
- **24 Ethics Lessons** across 4 cycles covering identity, justice, bioethics, and global citizenship
- **5-Stage Lesson Flow:** Life Questions → Three Perspectives → Tension Guide → Discussion → Integration
- **AI Feedback** powered by Gemini on student reflections
- **Text-to-Speech** narration on all lesson content and AI responses
- **Speech-to-Text** input on all text fields
- **Wednesday AI Assistant** — GPT-4o powered chat for in-class support
- **Class Insights** — simulated peer response data with word clouds and belief distribution

### For Teachers (Before Class)
- **Sidebar Navigation** with 7 sections:
  - Content Management — CRUD for lessons (Supabase-backed)
  - Wednesday — AI assistant for lesson preparation
  - Student & Wednesday — view student-AI conversations (coming soon)
  - Teacher & Students — in-class interaction tools (coming soon)
  - Student Progress — track student completion (Supabase-backed)
  - Analysis — learning analytics (coming soon)
  - Assignments — manage assignments (coming soon)

### Bilingual Support
- Full EN/繁中 toggle for all UI text
- Language-aware TTS (reads only the active language)
- Bilingual lesson content with automatic language splitting

## Three Ethical Frameworks

Every lesson examines dilemmas through:
1. **Virtue Ethics 德性倫理** — What kind of person should I become?
2. **Duty Ethics 義務倫理** — What is my moral obligation?
3. **Consequentialism 後果倫理** — What produces the best result?

Drawing from Christian, Confucian, Buddhist, Islamic, Hindu, Jewish, Sikh, and secular traditions.

## Tech Stack

- **Frontend:** React + TypeScript + Tailwind CSS
- **Build:** Vite
- **AI:** Google Gemini (feedback + TTS), OpenAI GPT-4o (chat)
- **Database:** Supabase (PostgreSQL)
- **Deployment:** Vercel

## Setup

```bash
npm install
```

### Environment Variables

Create a `.env` file:

```env
# Supabase
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key

# AI APIs (accessed via process.env in Vite config)
API_KEY=your-gemini-api-key
OPENAI_API_KEY=your-openai-api-key
```

### Database Setup

Run `supabase-schema.sql` in the Supabase SQL Editor to create:
- `cycles` — lesson cycle groups
- `modules` — lesson content
- `student_progress` — student completion tracking

### Development

```bash
npm run dev
```

### Build

```bash
npm run build
```

## Login

- **Before Class** (Teacher): requires password
- **In Class** (Student): enter name to begin

## License

All rights reserved.
