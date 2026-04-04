#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const ejs = require('ejs');

// Load configuration data
const siteConfig = JSON.parse(fs.readFileSync(path.join(__dirname, 'src/data/site-config.json'), 'utf8'));
const assignment1Data = JSON.parse(fs.readFileSync(path.join(__dirname, 'src/data/assignment1.json'), 'utf8'));
const assignment2Data = JSON.parse(fs.readFileSync(path.join(__dirname, 'src/data/assignment2.json'), 'utf8'));

// Ensure dist directory exists
const distDir = path.join(__dirname, 'dist');
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

// Helper function to render EJS templates
function renderTemplate(templatePath, data) {
  const templateContent = fs.readFileSync(templatePath, 'utf8');
  return ejs.render(templateContent, data, {
    filename: templatePath,
    root: path.join(__dirname, 'src')
  });
}

// Helper function to render components with explicit props
function component(componentPath, componentData = {}) {
  const fullPath = path.join(__dirname, 'src/components', `${componentPath}.ejs`);
  if (!fs.existsSync(fullPath)) {
    throw new Error(`Component not found: ${fullPath}`);
  }
  
  const componentContent = fs.readFileSync(fullPath, 'utf8');
  return ejs.render(componentContent, { ...componentData, component }, {
    filename: fullPath,
    root: path.join(__dirname, 'src/components')
  });
}

// Prepare data for each page
const pages = [
  {
    name: 'index',
    template: path.join(__dirname, 'src/pages/index.ejs'),
    output: path.join(distDir, 'index.html'),
    data: {
      ...siteConfig,
      page: 'home',
      gradient: 'gradient-home',
      themeColor: 'home'
    }
  },
  {
    name: 'assignment1',
    template: path.join(__dirname, 'src/pages/assignment1.ejs'),
    output: path.join(distDir, 'assignment1.html'),
    data: {
      ...siteConfig,
      ...assignment1Data,
      page: 'assignment1',
      assignment: assignment1Data.assignment,
      datasets: assignment1Data.datasets,
      technicalSummary: assignment1Data.technicalSummary
    }
  },
  {
    name: 'assignment2',
    template: path.join(__dirname, 'src/pages/assignment2.ejs'),
    output: path.join(distDir, 'assignment2.html'),
    data: {
      ...siteConfig,
      ...assignment2Data,
      page: 'assignment2',
      assignment: assignment2Data.assignment,
      reports: assignment2Data.reports,
      methodologyComparison: assignment2Data.methodologyComparison,
      dataset: assignment2Data.dataset,
      architectures: assignment2Data.architectures,
      augmentations: assignment2Data.augmentations,
      lossFunctions: assignment2Data.lossFunctions,
      trainingTechniques: assignment2Data.trainingTechniques,
      interpretability: assignment2Data.interpretability,
      deliverables: assignment2Data.deliverables,
      deliverableLinks: assignment2Data.deliverableLinks,
      hybridLoss: assignment2Data.hybridLoss
    }
  }
];

// Render each page
console.log('Building pages...');
pages.forEach(page => {
  try {
    console.log(`Building ${page.name} with data keys:`, Object.keys(page.data));
    console.log('site exists:', 'site' in page.data);
    if ('site' in page.data) {
      console.log('site keys:', Object.keys(page.data.site));
    }
    
    const html = renderTemplate(page.template, {
      ...page.data,
      component
    });
    
    fs.writeFileSync(page.output, html);
    console.log(`✓ Built ${page.name}.html`);
  } catch (error) {
    console.error(`✗ Error building ${page.name}.html:`, error.message);
    process.exit(1);
  }
});

console.log('Build complete!');