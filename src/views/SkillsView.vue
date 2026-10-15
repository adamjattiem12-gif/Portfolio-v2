<script setup>
const skills = ['JavaScript', 'Vue.js', 'Node.js', 'Express', 'Python', 'Flask', 'MySQL', 'HTML & CSS', 'Git & GitHub']
</script>

<template>
  <section id="skills" class="section">
    <div class="container">
      <span class="kicker">My toolkit</span>
      <h2>Skills &amp; technologies.</h2>
      <p>Tools and technologies I've been learning and using to build modern applications.</p>
      <div class="skills">
        <span v-for="skill in skills" :key="skill" class="skill-chip">{{ skill }}</span>
      </div>
    </div>
  </section>
</template>

<style scoped>
.skills { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 26px; }
.skill-chip { border: 1px solid rgba(89, 121, 185, .27); border-radius: 7px; padding: 10px 15px; background: #161f32; font-size: 13px; font-weight: 600; color: #d7e2f5; }
</style>
