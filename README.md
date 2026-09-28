# Glow Studio — Beauty Salon Landing Page

A beginner-friendly, responsive one-page website for a fictional beauty salon called **Glow Studio**. Built with plain **HTML, CSS, and vanilla JavaScript** — no frameworks, no paid tools.

🔗 Live demo: *(add your live link here after deploying, e.g. on GitHub Pages / Netlify)*

## Features

- Responsive, mobile-first layout (works on phone, tablet, desktop)
- Sticky navbar with mobile hamburger menu
- Smooth scrolling to all sections
- Hero, Services, About, Gallery, Testimonials, Contact, Footer sections
- Contact form with client-side (browser only) validation
- WhatsApp "Book Now" button (placeholder number — replace with your own)
- Back-to-top button

## Tech Stack

- HTML5
- CSS3 (custom properties, Flexbox, Grid, media queries)
- Vanilla JavaScript (no libraries, no build tools)
- [Google Fonts](https://fonts.google.com/) — Playfair Display & Poppins
- Placeholder photos from [Unsplash](https://unsplash.com/) (free to use)

## Project Structure

```
glow-studio/
├── index.html      # Page structure and content
├── style.css        # All styling and responsive layout
├── script.js         # Mobile menu, form validation, small interactions
└── README.md        # This file
```

## Running It Locally

1. Download or clone this project folder.
2. Open the folder in any code editor (VS Code recommended).
3. Double-click `index.html`, or open it via **File → Open** in your browser.
   - Or, in VS Code, install the **Live Server** extension, right-click `index.html`, and choose **"Open with Live Server"** for auto-refresh while editing.

No install, no npm, no build step needed — it's plain HTML/CSS/JS.

## Replacing the Placeholder Images

All images currently point to free Unsplash URLs. To use your own photos:

1. Add your image files into an `images/` folder inside the project.
2. In `index.html`, find each `<img src="...">` tag and change the `src` to your local path, e.g.:
   ```html
   <img src="images/hero-photo.jpg" alt="Salon interior" />
   ```
3. Keep the `alt` text descriptive for accessibility.

Images used (all replaceable):
- Hero image
- About section image
- 4 gallery images

## Replacing Placeholder Contact Info

In `index.html`, update:
- Address, phone number, and email inside the `#contact` section
- The WhatsApp link: replace `919876543210` in the `wa.me` link with your real number (country code + number, no `+`, no spaces, no dashes)
- Social links (`#`) in the footer with your real Instagram / Facebook / Pinterest URLs

## About the Contact Form

The form validates input in the browser (name, valid email, message length) but **does not send data anywhere** — there is no backend/server connected. To actually collect messages, connect it to a service such as:
- [Formspree](https://formspree.io/)
- [EmailJS](https://www.emailjs.com/)
- [Netlify Forms](https://www.netlify.com/) (if hosting on Netlify)
- Your own backend/API

## Deploying (Optional)

Easiest free options:
- **GitHub Pages** — push this repo to GitHub, then enable Pages in repo Settings → Pages → deploy from `main` branch.
- **Netlify** — drag and drop this folder onto [app.netlify.com/drop](https://app.netlify.com/drop).

## License

Free to use and modify for learning or personal/portfolio projects.
