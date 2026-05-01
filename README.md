# DigiTools Platform

DigiTools Platform is a simple responsive React app built with Vite. It is a digital tools landing page where users can browse products, add items to a cart, see the total price, and explore pricing and workflow sections.

## About The Project

This project was made to present premium digital tools in a clean and modern way. The design focuses on a product marketplace style layout with a hero section, product catalog, pricing cards, and a call to action for users.

## Features

- Responsive landing page design
- Hero section with CTA buttons
- Product catalog loaded from `public/productData.json`
- Products and cart toggle view
- Cart count shown in the navbar
- Add and remove selected items
- Toast notification when removing an item from the cart
- Total cart amount calculation
- Pricing plans section
- 3-step getting started section
- Workflow call-to-action section
- Footer with social links and site information

## Tech Stack

- React
- Vite
- Tailwind CSS
- DaisyUI
- React Toastify
- Lucide React
- Font Awesome

## Project Structure

- `src/App.jsx` - main page layout
- `src/components/banner` - hero section
- `src/components/products` - product cards and cart logic
- `src/components/pricingCard` - pricing section
- `src/components/steps` - getting started section
- `src/components/workflow` - call-to-action section
- `src/components/footer` - footer section

## Run Locally

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the development server:

   ```bash
   npm run dev
   ```

3. Build the project:

   ```bash
   npm run build
   ```

## Short Summary

This project is a frontend demo for a digital tools platform. It shows how users can explore products, manage a cart, and view pricing in one simple interface.

Live link -> https://smart-tools-digi.netlify.app/
