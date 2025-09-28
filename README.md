# D1 - Skincare for Real Men - 24 Hour Coding Challenge by - Jan Kane T. Reroma

A modern, responsive eCommerce homepage for D1 skincare products, built with semantic HTML5, SCSS, and vanilla JavaScript.

## 🚀 Live Demo
[View the live site here](https://24hcckanereroma.vercel.app/)  

---

## 🛠 Tech Stack
- **HTML5** - Semantic markup with accessibility features
- **SCSS (SASS)** - Modular styling with variables, mixins, and partials
- **Vanilla JavaScript** - Interactive functionality and animations
- **Flickity** - Carousel/slider functionality
- **Google Fonts** - Inter and Roboto Mono typography
- **CSS Grid & Flexbox** - Responsive layout system

---

## 📁 Project Structure
```
├── assets/                    # Images, logos, and media files
│   ├── product/              # Product images
│   └── element/              # UI elements and icons
├── scss/                     # SCSS source files
│   ├── base/                 # Base styles
│   │   ├── _reset.scss       # CSS reset
│   │   ├── _variables.scss   # SCSS variables
│   │   ├── _mixins.scss      # Reusable mixins
│   │   └── _animations.scss  # Keyframe animations
│   ├── layout/               # Layout components
│   │   ├── _header.scss      # Header styles
│   │   ├── _footer.scss      # Footer styles
│   │   └── _main.scss        # Main content layout
│   ├── components/           # Reusable components
│   │   ├── _buttons.scss     # Button styles
│   │   ├── _cards.scss       # Card components
│   │   ├── _dropdown.scss    # Dropdown menus
│   │   ├── _modal.scss       # Modal dialogs
│   │   ├── _marquee.scss     # Scrolling text
│   │   └── _cart.scss        # Shopping cart
│   ├── sections/             # Page sections
│   │   ├── _hero.scss        # Hero section
│   │   └── _section-*.scss   # Individual sections
│   └── main.scss             # Main SCSS file (imports all partials)
├── dist/                     # Compiled CSS output
│   └── css/
│       ├── main.css          # Compiled CSS
│       ├── main.css.map      # Source map
│       └── styles.css       # Alternative compiled CSS
├── index.html                # Main homepage
├── script.js                 # Main JavaScript functionality
├── app.js                    # Additional JavaScript features
└── vercel.json               # Vercel deployment configuration
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/devkane2343/24hcckanereroma
   cd 24hcckanereroma
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the SCSS watcher:**
   ```bash
   npm run watch:sass
   ```

4. **Open in browser:**
   - Open `index.html` in your browser
   - Or use a local server: `python -m http.server 8000`

5. **Open in Vercel** 
   - No setup needed
   - Link : https://24hcckanereroma.vercel.app/

---

## 🎨 Features

- **Responsive Design** - Mobile-first approach with breakpoints for all devices
- **Modern UI/UX** - Clean, professional design with smooth animations
- **Interactive Elements** - Dropdown menus, modals, carousels, and scroll effects
- **Accessibility** - Semantic HTML, ARIA labels, and keyboard navigation
- **Performance Optimized** - Compressed CSS, lazy loading, and efficient animations
- **Shopping Cart** - Interactive cart functionality with item counting
- **Product Showcase** - Dynamic product displays with hover effects

---

## 🛠 Development

### SCSS Architecture
The project uses a modular SCSS architecture:
- **Base**: Reset, variables, mixins, and animations
- **Layout**: Header, footer, and main content areas
- **Components**: Reusable UI components
- **Sections**: Page-specific sections

### JavaScript Features
- Mobile menu toggle with accessibility
- Header scroll effects
- Flickity carousel initialization
- Interactive cart functionality
- Smooth scrolling and animations

---

## 📱 Responsive Breakpoints
- **Mobile**: 320px - 767px
- **Tablet**: 768px - 1023px
- **Desktop**: 1024px+

---

## 🚀 Deployment

The project is configured for Vercel deployment with:
- Build command: `npm run build`
- Output directory: `dist`
- Install command: `npm install`

---

## 📄 License

This project is part of a frontend code challenge and is for demonstration purposes.

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit changes: `git commit -m 'Add new feature'`
4. Push to branch: `git push origin feature/new-feature`
5. Submit a pull request