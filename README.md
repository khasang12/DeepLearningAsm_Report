# Deep Learning Assignments - Modern Static Site

A modern, maintainable GitHub Pages site for Deep Learning (HK252) assignments built with **Atomic Design principles** and **Tailwind CSS**. This project transforms the original Bootstrap-based HTML pages into a scalable, component-based architecture that follows Section 6 requirements from both assignment PDFs.

## 🏗️ Architecture Overview

### Atomic Design Structure
The project follows Brad Frost's Atomic Design methodology for component organization:

```
src/
├── components/           # Atomic Design components
│   ├── atoms/           # Basic building blocks (Button, etc.)
│   ├── molecules/       # Groups of atoms (to be implemented)
│   └── organisms/       # Complex UI sections
│       ├── Head/        # HTML head with meta tags
│       ├── Header/      # Page header with gradients
│       └── Footer/      # Site footer
├── layouts/             # Page templates
│   ├── HomePageTemplate.ejs
│   ├── Assignment1Template.ejs
│   └── Assignment2Template.ejs
├── pages/               # Page definitions
│   ├── index.ejs
│   ├── assignment1.ejs
│   └── assignment2.ejs
├── data/                # JSON configuration files
│   ├── site-config.json
│   ├── assignment1.json
│   └── assignment2.json
└── styles/              # CSS and design system
    ├── input.css        # Tailwind directives
    └── tailwind.config.js
```

### Design System
- **Tailwind CSS v3.4** with custom configuration
- **Color themes**: Primary palette + assignment-specific colors (Assignment 1: blue, Assignment 2: purple)
- **Typography**: Inter (sans-serif) + JetBrains Mono (monospace)
- **Responsive**: Mobile-first design with breakpoints
- **Gradients**: Custom background gradients for each page

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ and npm/yarn

### Installation
```bash
npm install
```

### Development
```bash
# Build all pages and CSS
npm run build

# Development server with live reload
npm run dev

# Preview built site
npm run preview

# Watch for changes and rebuild pages
npm run build:watch
```

### Build Process
The build pipeline uses:
- **EJS templates** for component-based HTML generation
- **PostCSS** with Tailwind for CSS processing
- **Custom build script** (`build.js`) for data-driven page generation

## 🎨 Customization

### 1. Update Configuration Files
Edit the JSON files in `src/data/`:

#### `site-config.json`
```json
{
  "site": {
    "title": "Deep Learning Assignments",
    "course": "Deep Learning (HK252)",
    "academicYear": "2024-2025",
    "university": "Your University"
  },
  "group": {
    "name": "Your Group Name",
    "members": ["Member 1", "Member 2", "Member 3"]
  },
  "instructor": {
    "name": "Instructor Name"
  }
}
```

#### `assignment1.json` & `assignment2.json`
- Update assignment-specific content
- Add actual metrics, results, and technical details
- Replace placeholder links with actual URLs

### 2. Modify Design System
Edit `tailwind.config.js` to:
- Change color schemes
- Update typography
- Add custom utilities

### 3. Add New Components
Follow the Atomic Design pattern:
- **Atoms**: Basic UI elements (buttons, inputs, icons)
- **Molecules**: Groups of atoms (forms, cards)
- **Organisms**: Complex sections (headers, footers, content blocks)

## 📁 Output Structure
Built files are generated in the `dist/` folder:

```
dist/
├── index.html          # Home page
├── assignment1.html    # Assignment 1 page
├── assignment2.html    # Assignment 2 page
├── styles.css         # Compiled Tailwind CSS
├── _config.yml        # GitHub Pages config
└── .nojekyll          # Disable Jekyll processing
```

## 🌐 Deployment to GitHub Pages

### Option 1: Deploy from `dist/` folder
1. Push the entire project to GitHub
2. Configure GitHub Pages to deploy from the `dist/` folder:
   - Settings → Pages → Build and deployment
   - Source: **Deploy from a branch**
   - Branch: `main` (or your branch), folder: `/dist`

### Option 2: Deploy from root (for User/Organization sites)
1. Copy contents of `dist/` to project root
2. Push to `gh-pages` branch or main branch
3. Configure GitHub Pages to deploy from root

### Custom Domain
Add `CNAME` file to `dist/` with your domain name.

## ✅ Section 6 Requirements Compliance

### Assignment 1 (Classification Tasks)
- ✅ Home page with group and course information
- ✅ Assignment 1 page with deliverables section
- ✅ **Tabbed results interface** for Image, Text, and Multimodal datasets
- ✅ Performance metrics and confusion matrix for each dataset type
- ✅ Comprehensive technical summary covering all techniques used
- ✅ Navigation between assignments

### Assignment 2 (Selected Topic)
- ✅ Detailed reports structure following Section 6.1.2
- ✅ EDA, Data Preparation, Methodology, Experimental Results, Extension reports
- ✅ Methodology comparison table (at least 2 methods)
- ✅ Clear visual separation from Assignment 1
- ✅ Badge showing selected topic (Segmentation/Detection/Recognition/Generation)

## 🔧 Development Workflow

### Adding New Pages
1. Create page template in `src/layouts/`
2. Create page definition in `src/pages/`
3. Add data configuration in `src/data/`
4. Update navigation in `site-config.json`
5. Run `npm run build` to generate HTML

### Styling Components
- Use Tailwind utility classes in EJS templates
- Add custom styles to `src/styles/input.css`
- Extend design tokens in `tailwind.config.js`

### Component Props
Components use explicit props passed via the `component()` function:
```ejs
<%- component('organisms/Header/Header', {
    title: site.title,
    gradient: 'gradient-home',
    group: group,
    instructor: instructor
}) -%>
```

## 📚 File Reference

### Configuration Files
- `package.json` - Dependencies and scripts
- `postcss.config.js` - PostCSS configuration
- `tailwind.config.js` - Tailwind design system
- `build.js` - EJS template compilation

### Source Files
- `src/components/` - Reusable UI components
- `src/layouts/` - Page layout templates
- `src/pages/` - Page definitions
- `src/data/` - Content and configuration
- `src/styles/` - CSS and design tokens

### Build Output
- `dist/` - Production-ready static site

## 🐛 Troubleshooting

### Build Errors
- **EJS compilation errors**: Check component prop names and variable scoping
- **Missing styles**: Ensure `tailwind.config.js` content paths are correct
- **Missing dependencies**: Run `npm install` to install all packages

### GitHub Pages Issues
- **404 errors**: Verify `_config.yml` and `.nojekyll` are in `dist/`
- **Styles not loading**: Check CSS file path in generated HTML
- **Custom domain not working**: Ensure `CNAME` file is in `dist/`


## 🙏 Acknowledgements
- **Atomic Design** by Brad Frost
- **Tailwind CSS** for utility-first CSS framework
- **Bootstrap Icons** for icon set
- **Google Fonts** for typography

---

**Built with ❤️ for HK252 Deep Learning Course**