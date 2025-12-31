# Usama Amanat - Portfolio Website

A modern, minimalist portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- Clean, minimalist design
- Responsive layout
- Modern typography with serif and sans-serif fonts
- Hero section with profile and statistics
- Skills showcase
- Experience timeline
- **Interactive Projects Portfolio** - Click on any project card to view detailed information, images, and features
- Project detail modal with image gallery
- Contact information

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Build for Production

```bash
npm run build
npm start
```

## Tech Stack

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Google Fonts (Inter & Playfair Display)

## Adding Project Images

To add images to your projects:

1. Place your project images in the `public/projects/` folder
2. Update the `images` array in `components/Projects.tsx` with the image paths:

```typescript
{
  title: "Your Project",
  images: [
    "/projects/project1-image1.jpg",
    "/projects/project1-image2.jpg",
  ],
  // ... other project data
}
```

Images should be placed in the `public` folder and referenced with paths starting with `/`.

