<script setup>
const skills = [
  {
    logo: '📄',
    name: 'HTML',
    description: 'The foundation of web development. I use semantic HTML5 to create accessible, well-structured markup that provides the backbone for all web applications.'
  },
  {
    logo: '🎨',
    name: 'CSS',
    description: 'Passionate about beautiful design and responsive layouts. Proficient in CSS3, Flexbox, CSS Grid, and creating modern, visually appealing user interfaces.'
  },
  {
    logo: '⚡',
    name: 'JavaScript',
    description: 'The powerhouse of interactivity. I use JavaScript to create dynamic, responsive user experiences with clean, efficient code and modern ES6+ syntax.'
  },
  {
    logo: '💚',
    name: 'Vue.js',
    description: 'My progressive framework of choice. I build reactive single-page applications using Vue 3\'s composition API, single-file components, and Vue Router for clean, component-driven frontends.'
  },
  {
    logo: '🧱',
    name: 'Bootstrap',
    description: 'A responsive CSS framework for rapid UI development. I use Bootstrap\'s grid system and prebuilt components to prototype layouts quickly while keeping designs consistent across devices.'
  },
  {
    logo: '🟢',
    name: 'Node.js + Express.js',
    description: 'My backend stack of choice. I use Node.js for server-side JavaScript and Express.js to build fast, lightweight REST APIs with clean routing, middleware, and data flow.'
  },
  {
    logo: '🐘',
    name: 'PHP',
    description: 'A reliable server-side language for dynamic web applications. I use PHP to handle form submissions, session management, and database-driven content on full stack projects.'
  },
  {
    logo: '🐍',
    name: 'Python',
    description: 'A versatile and powerful language. I use Python for scripting, data analysis, and automation, leveraging its clean syntax and rich ecosystem of libraries.'
  },
  {
    logo: '🐬',
    name: 'MySQL',
    description: 'A powerful relational database system. I use MySQL to design schemas, write efficient queries, and persist data reliably for full stack applications.'
  }
]
</script>

<template>
  <section class="skills-section">
    <div class="container">
      <div class="skills-header">
        <h1>My <span class="highlight">Skills</span></h1>
        <p>Core technologies and languages I use to build modern, responsive web applications</p>
      </div>
      <div class="skills-grid">
        <div v-for="skill in skills" :key="skill.name" class="skill-card">
          <div class="skill-logo">{{ skill.logo }}</div>
          <h2 class="skill-name">{{ skill.name }}</h2>
          <p class="skill-description">{{ skill.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.skills-section {
  padding: 80px 0;
  background: linear-gradient(135deg, #1a1f2e 0%, #0f1419 100%);
  min-height: 100vh;
}
.skills-header {
  text-align: center;
  margin-bottom: 60px;
}
.skills-header h1 {
  font-size: 48px;
  font-weight: 700;
  color: #fff;
  margin-bottom: 15px;
}
.skills-header p {
  font-size: 16px;
  color: #a0a0a0;
  max-width: 600px;
  margin: 0 auto;
}
.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
}
.skill-card {
  background-color: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 40px 30px;
  text-align: center;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}
.skill-card:hover {
  background-color: rgba(0, 123, 255, 0.1);
  border-color: #007bff;
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0, 123, 255, 0.2);
}
.skill-logo {
  font-size: 80px;
  width: 120px;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, rgba(0, 123, 255, 0.2) 0%, rgba(0, 86, 204, 0.1) 100%);
  border-radius: 12px;
  border: 2px solid rgba(0, 123, 255, 0.3);
}
.skill-name {
  font-size: 28px;
  font-weight: 700;
  color: #fff;
  margin: 0;
}
.skill-description {
  font-size: 14px;
  color: #a0a0a0;
  line-height: 1.8;
  margin: 0;
}
</style>
