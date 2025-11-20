# KatchanVT Website — README (EN)

## 1. Project description

This website is designed for the twitch streamer KatchanVT. He was built to showcase and support a streamer's activity. It centralizes content and features such as:
- Social media links and branding on the homepage (`/`),
- Live stream display (`/live`),
- Clips listing (`/clips`),
- VODs and replays (`/vod`),
- Schedule and planning banner (`/planning`),
- Informational pages (e.g. `/about`),
- Server-side API routes to fetch external data (under `src/app/api/*`).

Main technologies: Next.js (app router), React, TypeScript and Tailwind CSS. Reusable components are in `src/components`, API helpers in `src/utils`, and assets in `public/`.

Goal: provide a modern, responsive and useful site tailored for the community, easy to deploy and maintain.

## 2. Learning outcomes

Below are compact CAR entries focused on the concrete skills I developed while building this project.

- Node.js for development
  - Context: Needed a lightweight server runtime for APIs and build/dev scripts.
  - Action: Used Node.js to run Next.js, manage npm scripts (`dev`/`build`/`start`) and handle server-side API routes.
  - Result: Solid understanding of the Node.js ecosystem (npm, scripts, dependency management) and server-side execution patterns.

- Learning React
  - Context: Build an interactive, component-based front-end for Live/Clips/VOD pages.
  - Action: Implemented modular React components in `src/components` and organized pages with the Next.js app router.
  - Result: Improved component design, state handling patterns, and TypeScript usage in React.

- Learning Tailwind CSS
  - Context: Need for fast, consistent styling and responsive layouts.
  - Action: Integrated Tailwind CSS across the project and used utility classes for rapid styling.
  - Result: Faster UI development, consistent visual language, and maintainable styles.

- Responsive site
  - Context: Users access the site from desktop, tablet and mobile.
  - Action: Used Tailwind's responsive utilities and tested layouts across screen sizes.
  - Result: Responsive user experience with prioritized content for smaller screens.

Skills strengthened: Node.js, React (with TypeScript), Tailwind CSS, responsive design, and deployment with Next.js.

## 3. How to run and use

Prerequisites
- Node.js (recommended: 18+)
- npm (or pnpm/yarn)

Install

1. From the project root, install dependencies:

```powershell
npm install
```

Environment variables (optional)
- Create `.env.local` with your keys if you use external integrations:

```
TWITCH_CLIENT_ID=...
TWITCH_ACCESS_TOKEN=...
YOUTUBE_API_KEY=...
```

Development

```powershell
npm run dev
```

Open `http://localhost:3000`. Main routes: `/`, `/live`, `/clips`, `/vod`, `/planning`, `/about`.

Build & production

```powershell
npm run build
npm start
```

Lint

```powershell
npm run lint
```

Troubleshooting
- Check environment variables for API-related failures.
- For TypeScript/Next.js errors: delete `node_modules` and `package-lock.json`, then reinstall.

Deployment
- Vercel auto-detects Next.js projects. Push to Git and connect the repository to Vercel, or use the Vercel dashboard to deploy.


