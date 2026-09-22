<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const cardsRef = ref(null)

function scrollToCards() {
  cardsRef.value?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <section class="hero">
    <div class="container hero-content">
      <div class="hero-left">
        <h1 class="hero-title">
          I'm <span class="highlight">Adam</span>, an<br>
          Aspiring Full Stack Developer
        </h1>
        <p class="hero-description">
          Passionate about building efficient and user-friendly web applications.
          Currently honing my skills in full stack development and eager to
          contribute to innovative projects.
        </p>
        <button class="scroll-btn" @click="scrollToCards">
          <span class="arrow">↓</span>
        </button>
      </div>

      <div class="hero-right">
        <div class="profile-section">
          <img src="/profile.jpg" alt="Adam Profile" class="profile-img">
        </div>
      </div>

      <div class="cards-container" ref="cardsRef">
        <div class="info-card">
          <h3 class="card-title">SKILLS</h3>
          <p class="card-text">
            Proficient in HTML, CSS, JavaScript, and responsive web design.
            Strong foundation in front-end development with growing expertise
            in full stack technologies.
          </p>
          <RouterLink to="/skills" class="card-link">VIEW SKILLS →</RouterLink>
        </div>

        <div class="info-card">
          <h3 class="card-title">EDUCATION</h3>
          <p class="card-text">
            Pursuing comprehensive training in Full Stack Development.
            Building expertise in modern web technologies and industry best practices.
          </p>
          <RouterLink to="/education" class="card-link">LEARN MORE →</RouterLink>
        </div>

        <div class="info-card">
          <h3 class="card-title">PROJECTS</h3>
          <p class="card-text">
            Showcase of completed projects demonstrating proficiency in web
            development, design, and problem-solving across various domains.
          </p>
          <RouterLink to="/projects" class="card-link">BROWSE PROJECTS →</RouterLink>
        </div>

        <div class="info-card">
          <h3 class="card-title">ABOUT</h3>
          <p class="card-text">
            Passionate aspiring full stack developer committed to creating
            efficient, user-friendly web applications and continuous learning.
          </p>
          <RouterLink to="/about" class="card-link">LEARN MORE →</RouterLink>
        </div>
      </div>
    </div>
  </section>
</template>