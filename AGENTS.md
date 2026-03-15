# AGENTS.md - Project Guidelines for AI Assistants

This document provides guidelines for AI assistants working on the Deep Learning Assignments GitHub Pages project.

## 🏗️ Project Overview

This is a modern static site built with **Atomic Design principles** and **Tailwind CSS**. The project transforms Bootstrap-based assignment pages into a maintainable, component-based architecture.

**Key Technologies:**
- **EJS**: Templating engine for component-based HTML generation
- **Tailwind CSS**: Utility-first CSS framework with custom design system
- **PostCSS**: CSS processing with Tailwind and Autoprefixer
- **Node.js**: Build pipeline and development server

## 📁 Project Structure

```
src/
├── components/           # Atomic Design components
│   ├── atoms/           # Basic UI elements (Button, etc.)
│   ├── molecules/       # Groups of atoms
│   └── organisms/       # Complex sections (Header, Footer, Head)
├── layouts/             # Page templates
├── pages/               # Page definitions
├── data/                # JSON configuration
└── styles/              # CSS and design tokens
```

## 🛠️ Build Commands

Always run these commands in sequence when making changes:

```bash
# Full clean build
npm run build

# Individual build steps
npm run build:clean    # Clean dist directory
npm run build:pages    # Build HTML pages only
npm run build:css      # Build Tailwind CSS only
npm run build:copy     # Copy config files to dist

# Development
npm run dev            # Start dev server with live reload
npm run preview        # Build and preview
npm run build:watch    # Watch for changes and rebuild pages
```

## 🚨 Critical Rules

### 1. Component Development
- **Use `component()` function**: Never use EJS's built-in `include`. Always use:
  ```ejs
  <%- component('organisms/Header/Header', { props }) -%>
  ```
- **Variable scoping**: Rename component props to avoid conflicts:
  ```javascript
  // BAD: Conflicts with parent scope
  const title = typeof title !== 'undefined' ? title : 'Default';
  
  // GOOD: Unique variable names
  const headerTitle = typeof title !== 'undefined' ? title : 'Default';
  ```
- **Default props**: Always provide defaults for optional props in components.

### 2. EJS Template Guidelines
- **No inline Bootstrap**: Use Tailwind utility classes instead
- **Conditional rendering**: Use EJS conditionals (`<% if %>`) for dynamic content
- **Loops**: Use EJS loops (`<% forEach %>`) for iterating over arrays
- **Escaping**: Use `<%= %>` for escaped output, `<%- %>` for raw HTML

### 3. Tailwind CSS Conventions
- **Use design tokens**: Reference colors from `tailwind.config.js`:
  - `text-primary-600`, `bg-assignment1-light`, etc.
- **Responsive design**: Use mobile-first breakpoints (`sm:`, `md:`, `lg:`)
- **Custom utilities**: Add to `src/styles/input.css` if needed
- **No custom CSS**: Prefer Tailwind utilities over custom CSS

### 4. Data Management
- **Centralized config**: All content in `src/data/` JSON files
- **Separation of concerns**:
  - `site-config.json`: Global site data (group, instructor, navigation)
  - `assignment1.json`: Assignment 1 content with tabbed datasets (Image, Text, Multimodal)
  - `assignment2.json`: Assignment 2 content with detailed reports structure
- **No hardcoded content**: Use data variables in templates

## 🔧 Common Tasks

### Adding a New Page
1. Create layout template in `src/layouts/`
2. Create page definition in `src/pages/`
3. Add data configuration in `src/data/`
4. Update navigation in `site-config.json`
5. Add page to `build.js` pages array
6. Run `npm run build` to test

### Creating a New Component
1. Choose appropriate atomic level (atom/molecule/organism)
2. Create component directory: `src/components/[level]/[ComponentName]/`
3. Create `[ComponentName].ejs` file
4. Add default props and error handling
5. Test component in a page template

### Modifying Design System
1. Edit `tailwind.config.js` for colors, fonts, spacing
2. Update `src/styles/input.css` for custom utilities
3. Run `npm run build:css` to regenerate styles
4. Test changes in browser

## 🐛 Troubleshooting Guide

### Build Errors
- **"variable is not defined"**: Check prop passing and variable scoping
- **"Component not found"**: Verify component path in `component()` call
- **Missing styles**: Run `npm run build:css` and check `tailwind.config.js` content paths
- **EJS syntax errors**: Validate EJS template syntax

### Component Issues
- **Props not passing**: Ensure props are passed in `component()` call
- **Styling conflicts**: Check for conflicting Tailwind classes
- **Responsive issues**: Verify breakpoint prefixes are correct

### Development Server
- **Live reload not working**: Check `nodemon` and `live-server` are running
- **Port in use**: Change port in `package.json` scripts
- **File changes not detected**: Verify `nodemon` watch patterns

## 📋 Quality Checklist

Before committing changes:

### Code Quality
- [ ] No console errors in browser
- [ ] All pages build successfully (`npm run build`)
- [ ] Tailwind CSS compiles without warnings
- [ ] Components render correctly with different props
- [ ] Responsive design works on mobile/tablet/desktop

### Content Compliance
- [ ] All Section 6 requirements are met (check assignment PDFs)
- [ ] Placeholders replaced with actual content
- [ ] Links work correctly
- [ ] Images and media load properly

### Performance
- [ ] CSS file size is reasonable (< 100KB)
- [ ] No unused Tailwind classes (run purge in production)
- [ ] Images optimized for web
- [ ] Page load time under 3 seconds

## 🔄 Update Log

### 2025-03-15 - Initial Migration
- Converted Bootstrap HTML to Atomic Design + Tailwind CSS
- Implemented EJS component system with `component()` function
- Created build pipeline with PostCSS and Node.js
- Added development server with live reload

### Future Improvements
- Add more atoms and molecules (Card, Badge, Table, etc.)
- Implement dark mode toggle
- Add PDF viewer for assignment documents
- Optimize images and assets
- Add accessibility (ARIA labels, keyboard navigation)

## 📚 References

### External Documentation
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [EJS Documentation](https://ejs.co/)
- [Atomic Design by Brad Frost](http://atomicdesign.bradfrost.com/)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)

### Internal Documentation
- `README.md` - Project overview and setup guide
- `package.json` - Dependencies and scripts
- `tailwind.config.js` - Design system configuration
- `build.js` - Build process implementation

---

**Remember**: This project follows Atomic Design principles. Always consider the component hierarchy before making changes.