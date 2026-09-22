<script setup>
const projects = [
  {
    title: 'Python Mini Toolkit',
    description: 'A comprehensive Python application featuring three practical tools: a Grade Calculator for computing student averages, a Number Guessing Game for interactive fun, and a Budget Tracker for personal finance management. Demonstrates proficiency in Python programming, user input handling, and data processing.',
    tech: 'Python • Data Processing • User Interface',
    link: 'https://github.com/adamjattiem12-gif/Python-mini-toolkit.git'
  }
]
</script>

<template>
  <section class="projects-section">
    <div class="container">
      <div class="projects-header">
        <h1>My <span class="highlight">Projects</span></h1>
        <p>Python applications demonstrating problem-solving and programming expertise</p>
      </div>
      <div class="projects-grid">
        <div v-for="project in projects" :key="project.title" class="project-card">
          <h2 class="project-title">{{ project.title }}</h2>
          <p class="project-description">{{ project.description }}</p>
          <span class="project-tech">{{ project.tech }}</span>
          <a :href="project.link" class="project-link" target="_blank">
            View on GitHub →
          </a>
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
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
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
.project-link {
  font-size: 12px;
  color: #fff;
  text-decoration: none;
  font-weight: 600;
  display: inline-block;
  margin-top: 15px;
  padding: 8px 16px;
  background-color: rgba(0, 123, 255, 0.2);
  border: 1px solid #007bff;
  border-radius: 6px;
  transition: all 0.3s ease;
  width: fit-content;
}
.project-link:hover {
  background-color: #007bff;
  color: #fff;
  transform: translateX(5px);
}
</style>
