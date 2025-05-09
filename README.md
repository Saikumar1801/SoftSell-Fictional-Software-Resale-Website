# SoftSell - Fictional Software Resale Website

This project is a responsive, single-page marketing website for "SoftSell," a fictional software resale startup, built for the Credex Web Development Internship assignment.

![screencapture-soft-sell-fictional-software-resale-website-l4e5-vercel-app-2025-05-09-23_39_27](https://github.com/user-attachments/assets/7ffb6a15-a7b8-41d2-ab96-684eb8a0edbe)

**Live URL:** https://soft-sell-fictional-software-resale-website-l4e5.vercel.app/
**GitHub Repo:** https://github.com/Saikumar1801/SoftSell-Fictional-Software-Resale-Website

## Objective

To build a responsive, single-page marketing website demonstrating the ability to quickly ship a usable product with clean code, relevant content, and good design instincts.

## Features Implemented

*   **Hero Section:** Engaging headline, subheading, and Call-to-Action (CTA) buttons.
*   **How It Works Section:** Clear three-step process with icons and descriptions.
*   **Why Choose Us Section:** Four key benefits highlighted with icons and descriptions in a tiled layout.
*   **Customer Testimonials Section:** Two dummy reviews showcasing positive customer experiences.
*   **Contact / Lead Form:** Includes fields for Name, Email, Company, License Type (dropdown), and Message. Features client-side validation.
*   **Responsive Design:** Fully responsive layout adapting to mobile, tablet, and desktop screens.
*   **Modern UI/UX:** Visually appealing design with a coherent color palette and typography.
*   **Smooth Scrolling:** Navigation links smoothly scroll to respective page sections.
*   **Animations:** Subtle animations using Framer Motion for section reveals, component interactions, and visual appeal.
*   **Logo Placeholder & Favicon:** Included a simple SVG logo and uses it as a favicon.
*   **SEO Meta Tags:** Basic SEO meta tags (title, description, keywords) and page title are implemented using `react-helmet-async`.
*   **Light/Dark Mode Toggle:** Users can switch between light and dark themes, with preferences stored in local storage.
*   **(Bonus) LLM-Powered Chat Feature:**
    *   A basic AI-powered customer chat widget.
    *   Uses hardcoded example questions and responses (mocked LLM).
    *   Intuitive chat UX with a floating button and modal window.
    *   Includes loading indicators and clear fallback responses.

## Tech Stack

*   **Framework:** React.js + Vite (with TypeScript)
*   **Styling:** Tailwind CSS (JIT mode, dark mode support)
*   **Animations:** Framer Motion
*   **Form Handling:** React Hook Form (for contact form validation)
*   **Icons:** Heroicons, Lucide React (for some icons if needed)
*   **SEO:** React Helmet Async
*   **State Management:** React Context API (for theme), component-level state (`useState`)
*   **Deployment:** Vercel (or Netlify/GitHub Pages)

## Design Choices

*   **Color Palette:**
    *   Primary: Blue (Tailwind `sky` shades) - Evokes trust and professionalism.
    *   Accent: Emerald Green (Tailwind `emerald` shades) - Suggests growth, value, and success.
    *   Neutrals: Grays (Tailwind `slate` shades) - For text, backgrounds, and borders.
    *   The palette is designed to be modern, clean, and accessible, with distinct light and dark mode variants. CSS variables are used for easy theming.
*   **Typography:**
    *   Font Family: "Inter" (via Google Fonts), with a system sans-serif stack as a fallback. Chosen for its excellent readability on screens.
*   **Layout:**
    *   Single-page application for a focused user journey.
    *   Mobile-first responsive approach using Tailwind's utility classes.
    *   Sections are clearly delineated with consistent padding (`section-padding`).
    *   Cards (`card` class) are used for grouping content in "How It Works," "Why Choose Us," and "Testimonials" for visual structure.
*   **Visuals:**
    *   Icons from Heroicons are used extensively for their modern and consistent style.
    *   Animations are kept subtle (fade-ins, slide-ins, scale transformations on hover) to enhance UX without being distracting.
*   **Chat Widget UX:**
    *   A floating action button (FAB) provides a non-intrusive way to access the chat.
    *   The chat window opens as a modal overlay, common for such widgets.
    *   Messages are clearly distinguished by sender.
    *   Includes example questions to guide the user and a typing indicator for bot responses.

## Setup and Running Locally

1.  **Clone the repository:**
    ```bash
    git clone [repository-url]
    cd softsell-app
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```
3.  **Run the development server:**
    ```bash
    npm run dev
    # or
    yarn dev
    ```
    The application will be available at `http://localhost:5173` (or another port if 5173 is busy).

## Time Spent

*   **Initial Setup & Core Structure:** 3 hours
*   **Component Development (Hero, HowItWorks, WhyChooseUs, Testimonials, ContactForm, Footer, Navbar):** 8 hours
*   **Styling & Responsiveness:** 5 hours
*   **Functionality (Dark Mode, Form Validation, Smooth Scroll):** 4 hours
*   **Animations (Framer Motion):** 2 hours
*   **Bonus: LLM Chat Widget (Mocked):** 3 hours
*   **SEO, Favicon, Logo:** 1 hour
*   **Review, Refinements, README:** 2 hours
*   **Total Estimated Time:** ~28 hours

