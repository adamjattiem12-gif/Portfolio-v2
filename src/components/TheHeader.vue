<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <header class="header">
    <div class="container header-content">
      <div class="logo">
        <span class="code-bracket">&lt;/&gt;</span>
        <span class="logo-text">Adam Jattiem</span>
      </div>
      <nav class="nav">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/skills">Skills</RouterLink>
        <RouterLink to="/education">Education</RouterLink>
        <RouterLink to="/projects">Projects</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/contact">Contact</RouterLink>
      </nav>
      <button class="menu-toggle">☰</button>
    </div>
  </header>
</template>