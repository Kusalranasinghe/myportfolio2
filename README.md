# Kusal Ranasinghe - Advanced Personal Portfolio

A modern, high-performance personal portfolio website built for **Kusal Ranasinghe** (Dananjaya Kusal), BSc Computer Science Undergraduate at the University of Sri Jayewardenepura (USJ) and Founder of **Kubi Forge**.

---

## 🌟 Highlights & Features

- **Hero Showcase**: Features Kusal's graduation photo, typewriter roles, real-time availability indicator, academic credentials, and direct action CTAs.
- **Academic Timeline**:
  - **University of Sri Jayewardenepura (USJ)** - BSc in Computer Science (2025 - Present) studying Computer Science, Mathematics, & Physics.
  - **IMBS Green Campus** - Diploma in Information Technology (2024 - 2025) graduated with honors **GPA 3.54**.
  - **Ananda Sastralaya Mathugama** - Collegiate Education (Grade 6 - 13, O/L & A/L).
  - **Kalutara Gnanodaya College** - Primary Education (Grade 1 - 5).
- **Startup Spotlight - Kubi Forge**: Dedicated feature presentation of Kubi Forge with enterprise service capabilities, tech stack json terminal, and inquiry links.
- **Interactive Skills Matrix**: Tabbed categorization across Languages, Frontend & UI/UX, Backend & DB, and AI Tools (ChatGPT, Claude, Gemini).
- **Projects Showcase**:
  - **Flood Relief Support Center** (Emergency disaster logistics and rescue platform)
  - **FuelGo** (Smart fuel queue & quota management system)
  - **Cineru-26** (Cinema booking and media entertainment platform)
  - **Kubi Forge Digital Ecosystem**
  - Includes interactive **Architecture & Details Modal**.
- **Interactive Terminal Shell (`kusal-cli`)**: An interactive command-line experience with commands like `help`, `about`, `edu`, `skills`, `projects`, `startup`, `contact`, and `sudo hire` easter egg.
- **Direct Connect**:
  - Instant WhatsApp chat integration (`+94 78 799 6831`)
  - Direct email (`dananjayakusal39@gmail.com`)
  - Interactive contact form with confetti & toast notifications.

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Locally in Development Mode
```bash
npm run dev
```
Open your browser at `http://localhost:3000` (or the port displayed in your terminal).

### 3. Build for Production
```bash
npm run build
```
Creates an optimized production bundle in the `dist/` directory.

### 4. Preview Production Build
```bash
npm run preview
```

---

## ⚙️ How to Update Data

All portfolio information is centralized in:
[`src/data/portfolioData.js`](src/data/portfolioData.js)

You can easily modify:
- Contact information (LinkedIn URL, GitHub URL, phone numbers)
- Add new projects with custom tags and descriptions
- Add new skills or certifications
- Update education milestones

---

## 🚀 Free Deployment Guide

### Deploying to Vercel (Recommended)
1. Push this project to your GitHub account:
   ```bash
   git add .
   git commit -m "Initial portfolio commit"
   git branch -M main
   git remote add origin https://github.com/your-username/myportfolio.git
   git push -u origin main
   ```
2. Go to [vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Import your repository and click **Deploy**.
4. Your portfolio will be live worldwide on a custom `.vercel.app` URL with automatic SSL!

---

Created with ❤️ by **Kusal Ranasinghe** & **Kubi Forge**.
