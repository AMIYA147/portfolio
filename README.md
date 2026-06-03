# Amiya Kumar Behera - Personal Engineering Portfolio

A premium, interactive, and high-performance engineering portfolio showcasing work at the intersection of **Electronics & Communication Engineering (ECE)** and **Full Stack Software Development**. 

Built with React, TypeScript, TailwindCSS, and Framer Motion, featuring luxury lag-inertia cursor trails, responsive grid networks, live system telemetry components, and smooth custom animations.

## 🚀 Tech Stack

- **Frontend Core**: React 19, TypeScript, Vite
- **Styling**: TailwindCSS, Vanilla CSS, Glassmorphic panels
- **Animations**: Framer Motion, custom CSS grid/pulse wire traces
- **Icons**: Lucide React
- **Services Integration**: EmailJS (secure client-side telemetry communication tunnel)

## 📁 Repository Structure

```
├── public/                 # Static assets
├── src/
│   ├── components/         # Reusable interactive visual blocks
│   │   ├── CircuitTraces.tsx     # Custom hardware circuit animations
│   │   ├── GlareCard.tsx         # 3D interactive tilting cards
│   │   ├── Magnet.tsx            # Fluid cursor-gravity attraction hook
│   │   └── ParticleBackground.tsx# High-performance interactive background canvas
│   ├── sections/           # Modular content layers
│   │   ├── About.tsx             # Career milestone chronology & narratives
│   │   ├── Achievements.tsx      # Awards & key certifications
│   │   ├── Contact.tsx           # Telemetry console input & EmailJS client
│   │   ├── Experience.tsx        # Realistic student experience & project milestones
│   │   ├── GithubStats.tsx       # Live carbon coding telemetry contribution cells
│   │   ├── Hero.tsx              # Dynamic terminal banner intro & custom badging
│   │   ├── Navbar.tsx            # Sticky navigation hub with section tracker
│   │   └── Projects.tsx          # Case-studies & mock-telemetry previews
│   ├── App.tsx             # Main canvas frame & cursor trails
│   ├── index.css           # Core styling sheets
│   └── main.tsx            # Render client entry point
```

## 🛠️ Local Installation & Development

### Prerequisites
Ensure you have **Node.js** (v18+) and **npm** installed.

1. **Clone the repository**:
   ```bash
   git clone https://github.com/AMIYA147/latest-portfolio.git
   cd latest-portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Configure environment variables**:
   Create a `.env` file in the root directory:
   ```env
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```

4. **Launch development server**:
   ```bash
   npm run dev
   ```

5. **Build for production**:
   ```bash
   npm run build
   ```

## 📝 Compliance & Performance Audits
- **Purity Check**: Verified 100% pure component render structures (removing random rendering impurities).
- **Security Check**: `.env` configurations correctly hidden from Git tracking. All secure parameters encapsulated in client-side runtime variables.
- **Build Status**: Fully compiled with `vite build` and audited with `eslint` showing **0 warnings** and **0 errors**.
