<script setup>
const projects = [
  {
    title: 'Market Scraper Dashboard — Agile Sprint Project',
    image: '/Market Pulse.png',
    description:
      'A full-stack web scraping dashboard built over a 4-week Agile sprint. I engineered the backend scraping layer with Flask — designing the data pipelines that pull real-time market data from multiple sources (WebScraper.io and CoinPaprika) and feed it into a Vue.js frontend. My work covered request routing, HTML parsing, and transforming raw scraped pages into clean, structured datasets the frontend could consume. The biggest technical win was getting the scrapers to run reliably without timing out — rate limiting, error handling, and delivery timing were what kept the whole product stable. Real-world data is messy, and I learned that the 20% of work spent on edge cases delivered 80% of our reliability.',
    tech: 'Python • Flask • Vue.js • Web Scraping • REST APIs • Agile • Scrum',
    team: 'Adam Jattiem (Backend Scrapers), Ihtishaam Johnson (Team Lead), Owam Gobingca (Scrum Master), Azhar Manie (QA), Zaarah Okkers (Backend API), Purrity Gwabeni (Backend Storage), Caleb Asia (Frontend Dashboard), Chad Gys (Frontend Features), Likona Mkhatshana (Frontend Three.js)',
    links: [
      { label: 'Live Demo', url: 'https://lnkd.in/d_8W5ZbE' },
      { label: 'GitHub',    url: 'https://lnkd.in/dzn3hmHR' }
    ]
  },
  {
    title: 'TutorLink — Startup Launch Challenge',
    image: '/tutorlink.jpg',
    description:
      'A full startup website built from scratch as part of the YouthCode Startup Launch Challenge at Life Choices Academy. Working in a team of five, we moved through the full Software Development Life Cycle — from problem definition and Figma wireframes, through development on individual GitHub branches, to final deployment. Each member owned specific pages and raised pull requests for review before merging into main. Our biggest challenge was merge conflicts when combining everyone\'s work; we solved it by clearly labelling code by page, which made changes easy to track and resolve. This project taught us more about shared codebases than any individual assignment could.',
    tech: 'HTML • CSS • JavaScript • Figma • GitHub • SDLC',
    team: 'Nikita Muller, Angela Solomons, Aphiwe Lukho Bija, Rushin Presence & Adam Jattiem',
    links: [
      { label: 'GitHub',    url: 'https://lnkd.in/duxcNdPK' },
      { label: 'Figma',     url: 'https://lnkd.in/ddQNef3Z' },
      { label: 'Live Site', url: 'https://lnkd.in/dwrmWvVn' }
    ]
  },
  {
    title: 'ModernTech HR Portal',
    image: '/moderntech.jpg',
    description:
      'A multi-page HR Portal built as a group project at Life Choices Academy — YouthCode. The goal was to design an Employee Management System that unifies core HR functions — employee records, payroll, and time-off management — into a single, functional web application. My role: I built and maintained the Time Off page, structuring its front-end logic, correcting data fetch paths so it could pull properly from our shared JSON data files, and resolving a number of Git merge conflicts across branches, including a tricky case-sensitivity conflict that took real debugging to track down. It reinforced that version control is as much a skill to build as the code itself.',
    tech: 'HTML • CSS • JavaScript • JSON • Git • GitHub',
    team: 'Khaalid Hattas, Lategan, Lisekho Smith & Lerato Yapi',
    links: [
      { label: 'Live Site', url: 'https://lnkd.in/dDuJWb9x' },
      { label: 'GitHub',    url: 'https://lnkd.in/djeZRueK' },
      { label: 'Figma',     url: 'https://lnkd.in/dXZAwGsb' }
    ]
  },
  {
    title: 'Python Mini Toolkit',
    description:
      'A comprehensive Python application featuring three practical tools: a Grade Calculator for computing student averages, a Number Guessing Game for interactive fun, and a Budget Tracker for personal finance management. Demonstrates proficiency in Python programming, user input handling, and data processing.',
    tech: 'Python • Data Processing • User Interface',
    links: [
      { label: 'GitHub', url: 'https://github.com/adamjattiem12-gif/Python-mini-toolkit.git' }
    ]
  }
]
</script>

<template>
  <section class="projects-section">
    <div class="container">
      <div class="projects-header">
        <h1>My <span class="highlight">Projects</span></h1>
        <p>Websites and applications demonstrating my growth as a developer</p>
      </div>

      <div class="projects-grid">
        <div v-for="project in projects" :key="project.title" class="project-card">
          <div v-if="project.image" class="project-image-wrap">
            <img
              :src="project.image"
              :alt="`Screenshot of ${project.title}`"
              class="project-image"
            />
          </div>

          <h2 class="project-title">{{ project.title }}</h2>
          <p class="project-description">{{ project.description }}</p>

          <span class="project-tech">{{ project.tech }}</span>

          <p v-if="project.team" class="project-team">
            <strong>Team:</strong> {{ project.team }}
          </p>

          <div class="project-links">
            <a
              v-for="link in project.links"
              :key="link.url"
              :href="link.url"
              class="project-link"
              target="_blank"
              rel="noopener"
            >
              {{ link.label }} →
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.projects-section {
  padding: 80px 0;
  background: linear-gradient(135deg, #1a1f2e 0%, #0f1419 100%);
  min-height: 100vh;
}

.projects-header {
  text-align: center;
  margin-bottom: 60px;
}

.projects-header h1 {
  font-size: 48px;
  font-weight: 700;
  color: #fff;
  margin-bottom: 15px;
}

.projects-header p {
  font-size: 16px;
  color: #a0a0a0;
  max-width: 600px;
  margin: 0 auto;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
}

.project-card {
  background-color: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 30px;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
}

.project-card:hover {
  background-color: rgba(0, 123, 255, 0.1);
  border-color: #007bff;
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0, 123, 255, 0.2);
}

/* Screenshot image */
.project-image-wrap {
  width: 100%;
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 20px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background-color: rgba(0, 0, 0, 0.2);
}

.project-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
  object-position: top;
  display: block;
  transition: transform 0.5s ease;
}

.project-card:hover .project-image {
  transform: scale(1.04);
}

.project-title {
  font-size: 22px;
  font-weight: 700;
  color: #fff;
  margin-bottom: 12px;
}

.project-description {
  font-size: 14px;
  color: #a0a0a0;
  line-height: 1.8;
  margin-bottom: 20px;
  flex-grow: 1;
}

.project-tech {
  font-size: 12px;
  color: #007bff;
  font-weight: 600;
  display: inline-block;
}

.project-team {
  font-size: 12px;
  color: #a0a0a0;
  font-style: italic;
  line-height: 1.6;
  margin: 10px 0 0 0;
}

.project-team strong {
  color: #fff;
  font-style: normal;
  font-weight: 600;
}

.project-links {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 20px;
}

.project-link {
  font-size: 12px;
  color: #fff;
  text-decoration: none;
  font-weight: 600;
  display: inline-block;
  padding: 8px 16px;
  background-color: rgba(0, 123, 255, 0.2);
  border: 1px solid #007bff;
  border-radius: 6px;
  transition: all 0.3s ease;
}

.project-link:hover {
  background-color: #007bff;
  color: #fff;
  transform: translateX(3px);
}
</style>
