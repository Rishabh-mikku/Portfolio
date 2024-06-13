# Portfolio Website

This is a portfolio website built using React and Vite, styled with Tailwind CSS, and deployed using Firebase Hosting. The website consists of several sections including Home, About, Resume, Projects, and Contact.

## Table of Contents
- [Features](#features)
- [Demo](#demo)
- [Installation](#installation)
- [Usage](#usage)
- [Deployment](#deployment)
- [Folder Structure](#folder-structure)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Features
- **Home**: Introduction and welcome message.
- **About**: Information about the person or entity.
- **Resume**: Detailed resume with downloadable link.
- **Projects**: Showcase of projects with descriptions and links.
- **Contact Us**: Form to get in touch.

## Demo
You can view a live demo of the website [here](https://rishabh-415bd.web.app/).

## Installation
To set up the project locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Rishabh-mikku/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

## Usage
To start the development server, run:
```bash
npm run dev
```
This will launch the website on `http://localhost:5173`.

## Deployment
To deploy the website to Firebase Hosting, follow these steps:

1. **Build the project**:
   ```bash
   npm run build
   ```

2. **Install Firebase CLI**:
   ```bash
   npm install -g firebase-tools
   ```

3. **Login to Firebase**:
   ```bash
   firebase login
   ```

4. **Initialize Firebase**:
   ```bash
   firebase init
   ```
   - Select `Hosting` from the options.
   - Select the project you want to deploy.
   - Use `dist` as the public directory.
   - Configure as a single-page app (rewrite all URLs to /index.html).

5. **Deploy to Firebase**:
   ```bash
   firebase deploy
   or
   firebase deploy --only hosting
   ```

## Folder Structure
```
├── public
│   └── vite.svg
├── src
│   ├── assets
│   ├── components
│   │   ├── About
│   │   │   ├── About.jsx
│   │   │   └── About.module.css
│   │   ├── Banner
│   │   │   ├── Banner.jsx
│   │   │   ├── LeftBanner.jsx
│   │   │   ├── Media.jsx
│   │   │   └── RightBanner.jsx
│   │   ├── Contact
│   │   │   ├── Contact.jsx
│   │   │   └── ContactLeft.jsx
│   │   ├── Layouts
│   │   │   └── Title.jsx
│   │   ├── Navbar
│   │   │   └── Navbar.jsx
│   │   ├── Projects
│   │   │   ├── Projects.jsx
│   │   │   └── ProjectsCard.jsx
│   │   ├── Resume
│   │   │   ├── Achievement.jsx
│   │   │   ├── Education.jsx
│   │   │   ├── Experience.jsx
│   │   │   ├── Resume.jsx
│   │   │   └── ResumeCard.jsx
│   │   ├── Skills
│   │   │   ├── Skills.jsx
│   │   │   └── Skills.module.css
│   ├── App.jsx
│   ├── main.jsx
│   └── styles
│       └── main.css
├── .gitignore
├── firebase.json
├── index.html
├── package.json
├── postcss.config.js
├── README.md
├── tailwind.config.js
└── vite.config.js

```

## Technologies Used
- **Frontend**:
  - React
  - Vite
  - Tailwind CSS

- **Deployment**:
  - Firebase Hosting

## Contributing
Contributions are welcome! Please fork the repository and create a pull request.

---

Feel free to customize this README file as per your project's requirements.
