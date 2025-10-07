# Stanford Student Personal Website

A minimal, professional personal website for a Stanford college student, designed to be hosted on GitHub Pages. The site features a clean, modern design with a macOS blue accent theme and is fully responsive.

## Features

- **Clean, Minimal Design**: Professional layout with ample whitespace and readable typography
- **Responsive**: Works perfectly on desktop, tablet, and mobile devices
- **Accessible**: WCAG compliant with proper semantic HTML, keyboard navigation, and screen reader support
- **Fast Loading**: Optimized for performance with system fonts and minimal JavaScript
- **SEO Optimized**: Proper meta tags, Open Graph support, and sitemap
- **GitHub Pages Ready**: Configured for easy deployment to GitHub Pages

## Site Structure

- **About** (`/`): Personal introduction with biography and headshot
- **Experience** (`/experience`): Resume-style page with experience, projects, and publications
- **Misc** (`/misc`): Personal interests and miscellaneous information
- **404** (`/404`): Custom error page

## Design System

### Color Palette

- **Accent Blue**: `#0A84FF` (macOS system blue)
- **Text**: `#111111` (dark gray)
- **Muted Text**: `#555555` (medium gray)
- **Background**: `#FFFFFF` (white)
- **Border**: `#E5E7EB` (light gray)

### Typography

- **Font Stack**: System fonts (`-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif`)
- **Page Title**: 44px (desktop) / 36px (mobile)
- **Section Headings**: 26px (desktop) / 22px (mobile)
- **Body Text**: 17px (desktop) / 16px (mobile)

### Spacing Scale

Based on 4px units: 4px, 8px, 12px, 16px, 24px, 32px, 48px

## File Structure

```
/
├── index.html          # About page (homepage)
├── experience.html     # Experience page
├── misc.html          # Misc page
├── 404.html           # Error page
├── css/
│   └── styles.css     # Main stylesheet
├── js/
│   └── main.js        # JavaScript for mobile menu
├── img/
│   └── HEADSHOT.svg   # Placeholder headshot image
├── robots.txt         # Search engine instructions
├── sitemap.xml        # Site structure for search engines
└── README.md          # This file
```

## Customization

### Personal Information

1. Replace "Student Name" with your actual name throughout all HTML files
2. Update the biography text in `index.html`
3. Replace the placeholder headshot (`img/HEADSHOT.svg`) with your actual photo
4. Update the address information in the About page
5. Customize the experience, projects, and publications in `experience.html`
6. Modify the interests list in `misc.html`

### Styling

- Colors can be customized in the CSS custom properties at the top of `css/styles.css`
- Typography and spacing can be adjusted using the design system variables
- The layout is built with CSS Grid and Flexbox for easy modifications

### Content Management

- All content is in static HTML files for simplicity
- For future extensibility, consider converting to a static site generator like Jekyll or Hugo
- The experience section can be easily converted to use JSON/YAML data files

## Deployment

### GitHub Pages

1. Push this repository to GitHub
2. Go to repository Settings → Pages
3. Select "Deploy from a branch" and choose "main"
4. Your site will be available at `https://yourusername.github.io`

### Local Development

1. Clone the repository
2. Open `index.html` in a web browser
3. For local development with live reload, use a simple HTTP server:

   ```bash
   # Using Python
   python -m http.server 8000

   # Using Node.js
   npx serve .

   # Using PHP
   php -S localhost:8000
   ```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- **Lighthouse Score**: Target 95+ on both desktop and mobile
- **No external dependencies**: Uses system fonts and minimal JavaScript
- **Optimized images**: SVG placeholder, ready for real image optimization
- **Minimal JavaScript**: Only for mobile menu functionality

## Accessibility Features

- Semantic HTML structure with proper headings hierarchy
- ARIA labels and roles for interactive elements
- Keyboard navigation support
- Focus indicators with high contrast
- Alt text for all images
- Skip link for keyboard users
- Reduced motion support for users with vestibular disorders

## License

This project is open source and available under the [MIT License](LICENSE).

## Contributing

This is a personal website template. Feel free to fork and customize for your own use. If you find bugs or have suggestions for improvements, please open an issue or submit a pull request.
