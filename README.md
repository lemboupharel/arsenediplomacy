# Dr. Arsène Romaric TATSAZEU - Static Portfolio

A fully static, frontend-only portfolio website for Dr. Arsène Romaric TATSAZEU, Diplomat & Expert en Psychologie Sociale.

## Features

- **Fully Static**: No backend, no database, no server dependencies
- **Same Design**: Identical UI/UX to the original dynamic version
- **All Sections**: Hero, About, Missions, Realizations, Gallery, Videos, News, Contact
- **Responsive**: Mobile and desktop optimized
- **Bilingual**: French/English language toggle
- **Dark Mode**: Theme toggle support
- **Interactive**: Lightbox, video modal, album gallery, filtering

## Project Structure

```
simple_front/
├── index.html          # Main HTML file
├── css/
│   └── main.css        # Complete styling (1226 lines)
├── js/
│   └── app.js          # Frontend logic with embedded static data
└── uploads/
    ├── hero_main.jpeg   # Hero background image
    ├── 2.jpeg          # About section image
    ├── photos/         # Gallery photos (29 images)
    ├── realisations/   # Realization images & PDFs (45 files)
    └── videos/         # Video files (5 videos)
```

## How to Run

### Option 1: Python Simple HTTP Server
```bash
cd simple_front
python3 -m http.server 8080
```
Then open http://localhost:8080 in your browser.

### Option 2: Node.js http-server
```bash
cd simple_front
npx http-server -p 8080
```

### Option 3: PHP Built-in Server
```bash
cd simple_front
php -S localhost:8080
```

### Option 4: Direct File Access
Simply open `index.html` directly in your browser (some features may be limited due to CORS).

## What Was Changed from Original

### Removed
- Backend server (Node.js/Express)
- SQLite database
- Admin panel and authentication
- API endpoints
- Database queries
- File upload functionality
- Analytics tracking

### Converted to Static
- All data (realizations, albums, videos, news) embedded directly in `js/app.js`
- Asset paths updated from `/uploads/` to `uploads/` for relative loading
- Admin link removed from footer
- No server-side dependencies

### Preserved
- All visual design and styling
- All animations and interactions
- All responsive layouts
- All assets (images, videos, PDFs)
- Bilingual support (FR/EN)
- Dark mode toggle
- Lightbox gallery
- Video modal
- Album stack animations
- Filtering and search functionality

## Data Management

To update content, edit the `staticData` object in `js/app.js`:

```javascript
const staticData = {
  realizations: [...],  // Update realizations here
  albums: [...],       // Update photo albums here
  videos: [...],       // Update videos here
  news: [...]          // Update news here
};
```

## Deployment

This static site can be deployed to any static hosting service:
- Netlify
- Vercel
- GitHub Pages
- GitLab Pages
- AWS S3 + CloudFront
- Any web server with static file support

Simply upload the entire `simple_front` directory to your hosting provider.

## Browser Compatibility

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Requires JavaScript for full functionality
- CSS Grid and Flexbox support required

## Credits

Original design and content by Dr. Arsène Romaric TATSAZEU.
Static conversion completed in 2026.
