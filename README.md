# For Kenzie ❤️

**Status:** Deployed directly to your heart.  
**Version:** 1.0.0 (Forever)

## Overview

This repository contains the source code for a single-page application designed with one specific user in mind: **Kenzie**. It combines modern frontend architecture with timeless romance to create a digital experience that validates our connection.

Built with **Next.js 15**, **Tailwind CSS**, and **Framer Motion**, this project is highly optimized for performance, accessibility, and emotional impact.

## The Architecture of Affection

The application relies on a component-based structure to deliver its payload of love:

*   **`Hero.tsx`**: Initializes the romantic context with a fade-in animation and a floating heart SVG. It sets the `mood` state to `romantic`.
*   **`Timeline.tsx`**: A chronological rendering of our shared history. It maps over an array of `Memory` objects, rendering them as interactive cards with hover states that symbolize how you lift me up.
*   **`InteractiveHeart.tsx`**: An event-driven component. On `click`, it triggers a `confetti` explosion and returns a random string from the `reasonsILoveYou` array.
*   **`Proposal.tsx`**: The core logic. contains a critical Boolean question.
    *   The **"No"** button implements collision detection and random velocity vectors to ensure it remains unclickable (an infinite loop of evasion).
    *   The **"Yes"** button triggers a system-wide celebration event.

## Tech Stack

*   **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
*   **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
*   **Animation**: [Framer Motion](https://www.framer.com/motion/) & [Canvas Confetti](https://www.npmjs.com/package/canvas-confetti)
*   **Icons**: [Lucide React](https://lucide.dev/)
*   **Audio**: Custom `HTMLAudioElement` integration for the soundtrack.

## Getting Started

To run this locally (and relive the moment):

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/kalil/kenzie-valentine.git
    cd kenzie
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
    ```

4.  **Open your browser:**
    Navigate to [http://localhost:3000](http://localhost:3000)

## Deployment

This project is ready to be deployed to Vercel, Netlify, or your heart.

## License

**Proprietary.** This code and the love it represents are exclusive to Kenzie. Unauthorized forks of this relationship are strictly prohibited.

---

*Made with ❤️, TypeScript, and a lot of coffee.*
