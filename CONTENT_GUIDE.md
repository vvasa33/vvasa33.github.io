# Portfolio Content Management Guide

## Overview
Your entire portfolio is now controlled through a single file: **`src/data/portfolio.json`**

This centralized system allows you to edit all text, links, projects, skills, and metadata without touching any React component code.

---

## How to Edit Your Portfolio

### 1. Open the Content File
Navigate to: `src/data/portfolio.json`

### 2. Edit Any Section
All content is organized into clear sections. Simply find the section you want to change and update the text.

---

## Content Structure

### **Personal Information**
```json
"personal": {
  "name": "Your Name",
  "role": "Your Title",
  "motto": "Your personal motto or tagline",
  "email": "your@email.com",
  "linkedin": "https://linkedin.com/in/yourprofile",
  "github": "https://github.com/yourusername"
}
```

### **SEO Metadata**
```json
"meta": {
  "title": "Page Title",
  "description": "SEO description",
  "canonical": "/"
}
```

### **Hero Section**
- **Newspaper Title**: The main masthead title
- **News Ticker**: Scrolling headlines with stats
- **Metrics**: The stat boxes next to your name (left/right columns)
- **Blurbs**: Three main content sections (Professional Overview, Technical Approach, Let's Connect)
  - Each blurb now has customizable title, date, author, tag, content, and sidebar boxes

### **Featured Project (SenseGuard)**
```json
"featured": {
  "title": "Company Name",
  "role": "Your Role",
  "description": "Project description",
  "stats": [...],
  "techStack": ["Tech1", "Tech2"]
}
```

### **Projects**
Array of project cards:
```json
"projects": [
  {
    "title": "Project Name",
    "description": "Short summary for the grid card",
    "longDescription": "Detailed explanation that appears on hover",
    "techStack": ["Tech1", "Tech2"],
    "githubUrl": "https://github.com/...",
    "liveUrl": "https://...",
    "status": "Active"
  }
]
```

### **Education & Certifications**
```json
"education": [
  {
    "id": "EDU-001",
    "institution": "School Name",
    "title": "Degree",
    "subtitle": "Major/Concentration",
    "badgeYear": "2024",
    "type": "academic",
    "description": "Brief description",
    "courses": ["Course1", "Course2"]
  }
]
```

### **Skills**
```json
"skills": [
  {
    "category": "Category Name",
    "color": "bg-cmyk-cyan",
    "items": [
      {
        "name": "Skill Name",
        "description": "What you do with this skill",
        "context": "Real-world example of using this skill"
      }
    ]
  }
]
```

### **Blurbs (Newspaper Articles)**
Each blurb can be fully customized:
```json
"blurbs": {
  "professionalOverview": {
    "title": "Article Title",
    "icon": "ScrollText",
    "date": "January 3, 2026",
    "author": "Your Name",
    "tag": "FEATURED",
    "paragraphs": [
      "Main content paragraph 1",
      "Main content paragraph 2"
    ],
    "sidebar": [
      {
        "title": "Sidebar Box Title",
        "content": "Sidebar content text",
        "color": "bg-cmyk-yellow"
      },
      {
        "title": "Another Box",
        "content": "More sidebar content", 
        "color": "bg-cmyk-cyan"
      }
    ]
  }
}
```

**Available Sidebar Colors:**
- `bg-cmyk-yellow`
- `bg-cmyk-cyan` 
- `bg-cmyk-magenta`
- `bg-highlighter-green`

### **Footer**
```json
"footer": {
  "tagline": "Your tagline",
  "systemStatus": {
    "coffee": "High",
    "bugs": "Low",
    "uptime": "99.9%"
  },
  "sections": [
    { "name": "Section Name", "href": "#" }
  ]
}
```

---

## Icon System

Icons are referenced by their Lucide React name as strings. Available icons:
- `TrendingDown`, `TrendingUp`
- `Wifi`, `Shield`, `Award`, `Battery`
- `ScrollText`, `Cpu`, `Radio`
- `Briefcase`, `Github`, `Linkedin`, `Mail`

To add new icons:
1. Add the icon name to `src/utils/iconMap.js`
2. Import it from `lucide-react`
3. Add it to the `iconMap` object

---

## Tips

### Adding HTML in Text
For the "Let's Connect" section, you can use HTML tags:
```json
"paragraphs": [
  "Email me at <a href=\"mailto:you@email.com\" class=\"font-bold underline\">you@email.com</a>"
]
```

### Color Classes
Available colors for skill categories:
- `bg-cmyk-cyan`
- `bg-cmyk-magenta`
- `bg-cmyk-yellow`
- `bg-highlighter-green`

### Status Values
For projects: `"Active"`, `"Beta"`, `"Completed"`

---

## What NOT to Edit

**Do not modify:**
- Any `.jsx` files (unless you know React)
- The structure of the JSON (only change values, not keys)
- Icon names that don't exist in `iconMap.js`

---

## Testing Your Changes

1. Save `portfolio.json`
2. The dev server will auto-reload
3. Check your browser to see changes instantly

---

## Troubleshooting

**Site won't load after editing?**
- Check for JSON syntax errors (missing commas, quotes, brackets)
- Use a JSON validator: https://jsonlint.com/

**Icon not showing?**
- Verify the icon name matches exactly (case-sensitive)
- Check if it's in `src/utils/iconMap.js`

**Text looks weird?**
- Check for unescaped quotes: use `\"` inside strings
- Ensure multi-line text is in an array of paragraphs

---

## Quick Reference: Common Edits

| What to Change | Location in portfolio.json |
|----------------|---------------------------|
| Your name | `personal.name` |
| Your role | `personal.role` |
| Your motto | `personal.motto` |
| Email address | `personal.email` |
| Social links | `personal.github`, `personal.linkedin` |
| Intro paragraph | `hero.blurbs.professionalOverview.paragraphs` |
| Blurb titles | `hero.blurbs.professionalOverview.title` |
| Blurb author | `hero.blurbs.professionalOverview.author` |
| Blurb date | `hero.blurbs.professionalOverview.date` |
| Blurb tag | `hero.blurbs.professionalOverview.tag` |
| Sidebar content | `hero.blurbs.professionalOverview.sidebar` |
| Add a project | Add object to `projects` array |
| Update a skill | Edit `skills[category].items[skill]` |
| Change footer tagline | `footer.tagline` |
| News ticker headlines | `hero.ticker` |

---

**That's it!** You now have complete control over your portfolio content from one file.
