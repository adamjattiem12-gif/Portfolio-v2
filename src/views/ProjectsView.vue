<script setup>
import { reactive } from 'vue'

const projects = [
  {
    title: 'FoodBoxx — Module 3 Core Project',
    image: '/foodboxx.png',
    description:
      'FoodBoxx is our live, deployed capstone project from YouthCode\'s full-stack development programme at Life Choices Academy. I served as Project Manager and Backend Engineer, leading a four-person team while building the backend. I managed the project charter, milestones, delivery deadlines, frontend and backend integration, dependencies, and risks, while also engineering Node.js and Express.js server logic with secure authentication and session management. I designed MySQL schemas for Customers, Products, and Orders, built payment and checkout workflows, and developed RESTful APIs for cart state, order tracking, and accounts. Balancing technical problem-solving with team leadership was my biggest challenge, and it taught me how much successful software depends on both good code and good collaboration.',
    tech: 'HTML5 • CSS3 • ES6+ JavaScript • Node.js • Express.js • MySQL • Figma',
    team: 'Me: Project Manager & Backend Lead. Caleb Asia (Frontend Lead), Sisamila Sigabi (Frontend Development), and Michaela Maart (QA & Testing)',
    links: [
      { label: 'Live Deployment', url: 'https://lnkd.in/dvPCaKPU' },
      { label: 'Figma',           url: 'https://lnkd.in/dsAiy6BS' },
      { label: 'GitHub',          url: 'https://lnkd.in/d7HuyAKF' }
    ]
  },
  {
    title: 'Market Scraper Dashboard — Agile Sprint Project',
    image: '/market-pulse.png',
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
    title: 'Personal Portfolio Website — HTML & CSS',
    image: '/portfolio.png',
    description:
      'I created a personal portfolio website as part of my web development learning journey at Life Choices Academy. Across six customized pages — Home, About, Skills, Education, Projects, and Contact — I built a digital home that introduces who I am, showcases my skills, and highlights what I have learned so far. This project helped me practise HTML and CSS concepts including semantic structure, links, images, lists, forms, the box model, Flexbox, responsive design, CSS Grid, and clean layout design. I also displayed my Python Mini Toolkit project in the portfolio. One challenge was managing card sizing and spacing on smaller screens, which I solved by using responsive design, CSS Grid, and browser developer tools to balance padding and margins.',
    tech: 'HTML • CSS • Responsive Design • CSS Grid • Flexbox',
    links: [
      { label: 'GitHub',    url: 'https://lnkd.in/dd4kePm2' },
      { label: 'Live Site', url: 'https://lnkd.in/d2GTUnzW' }
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
  const expanded = reactive({})

  function toggleExpand(title) {
    expanded[title] = !expanded[title]
  }
  </script>

  <template>
    <section class="projects-section">
      <div class="container">
        <div class="projects-header">
          <h1>My <span class="highlight">Projects</span></h1>
          <p>Websites and applications demonstrating my growth as a developer</p>
        </div>

        <div class="projects-list">
          <div v-for="project in projects" :key="project.title" class="project-card">
            <div v-if="project.image" class="project-image-wrap">
              <img
                :src="project.image"
                :alt="`Screenshot of ${project.title}`"
                class="project-image"
              />
            </div>

            <h2 class="project-title">{{ project.title }}</h2>

            <p
              v-if="expanded[project.title]"
              class="project-description"
            >
              {{ project.description }}
            </p>

            <span class="project-tech">{{ project.tech }}</span>

            <p v-if="project.team" class="project-team">
              <strong>Team:</strong> {{ project.team }}
            </p>

            <button
              type="button"
              class="read-more-btn"
              @click="toggleExpand(project.title)"
            >
              {{ expanded[project.title] ? 'Show Less ↑' : 'Read More ↓' }}
            </button>

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

  .projects-list {
    display: flex;
    flex-direction: column;
    gap: 40px;
    width: 100%;
    max-width: 780px;
    margin: 0 auto;
  }

  .project-card {
    width: 100%;
    min-width: 0;
    background-color: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 12px;
    padding: 28px;
    transition: background-color 0.3s ease, border-color 0.3s ease,
          box-shadow 0.3s ease;
    display: flex;
    flex-direction: column;
    overflow-wrap: anywhere;
  }

  .project-card:hover {
    background-color: rgba(0, 123, 255, 0.08);
    border-color: #007bff;
    box-shadow: 0 20px 40px rgba(0, 123, 255, 0.15);
  }

  /* Screenshot image */
  .project-image-wrap {
    width: 100%;
    border-radius: 8px;
    overflow: hidden;
    margin-bottom: 24px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    background-color: rgba(0, 0, 0, 0.2);
  }

  .project-image {
    width: 100%;
    height: auto;
    display: block;
  }

  .project-title {
    font-size: 24px;
    font-weight: 700;
    color: #fff;
    margin-bottom: 14px;
  }

  /* Description is rendered only after the card is expanded. */
  .project-description {
    font-size: 15px;
    color: #a0a0a0;
    line-height: 1.8;
    margin-bottom: 20px;
  }

  .project-tech {
    font-size: 13px;
    color: #007bff;
    font-weight: 600;
    display: inline-block;
  }

  .project-team {
    font-size: 12px;
    color: #a0a0a0;
    font-style: italic;
    line-height: 1.6;
    margin: 12px 0 0 0;
  }

  .project-team strong {
    color: #fff;
    font-style: normal;
    font-weight: 600;
  }

  /* Read More / Show Less button */
  .read-more-btn {
    background: transparent;
    border: none;
    color: #007bff;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    padding: 0;
    margin: 16px 0 0 0;
    text-align: left;
    font-family: inherit;
    transition: color 0.3s ease;
    width: fit-content;
  }

  .read-more-btn:hover {
    color: #4da3ff;
    text-decoration: underline;
  }

  .project-links {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    margin-top: 24px;
  }

  .project-link {
    font-size: 13px;
    color: #fff;
    text-decoration: none;
    font-weight: 600;
    display: inline-block;
    padding: 10px 18px;
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

  @media (max-width: 768px) {
    .project-card {
      padding: 24px 20px;
    }

    .project-title {
      font-size: 20px;
    }

    .project-description {
      font-size: 14px;
    }
  }
</style>
