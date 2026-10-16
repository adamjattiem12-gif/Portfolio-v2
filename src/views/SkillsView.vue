<script setup>
const skills = [
  { name: 'Python', icons: ['python'] },
  { name: 'HTML & CSS', icons: ['html5', 'css3'] },
  { name: 'JavaScript', icons: ['javascript'] },
  { name: 'Git & GitHub', icons: ['git', 'github'] },
  { name: 'Vue.js', icons: ['vuejs'] },
  { name: 'MySQL', icons: ['mysql'] },
  { name: 'Node.js', icons: ['nodejs'] },
  { name: 'Express', icons: ['express'] },
  { name: 'Flask', icons: ['flask'] },
  { name: 'PHP', icons: ['php'] },
  { name: 'Bootstrap', icons: ['bootstrap'] },
]
const monochrome = new Set(['github', 'express', 'flask'])
</script>

<template>
  <section id="skills" class="section">
    <div class="container">
      <span class="kicker">My toolkit</span>
      <h2>Skills &amp; technologies.</h2>
      <p>Tools and technologies I've been learning and using to build modern applications.</p>
      <div class="skills">
        <span v-for="(skill, index) in skills" :key="skill.name" class="skill-chip" :style="{ '--reveal-delay': `${(index % 5) * 55}ms` }">
          <img v-for="icon in skill.icons" :key="icon" :src="`/wordpress/skills/${icon}-original.svg`" class="skill-icon" :class="{ monochrome: monochrome.has(icon) }" alt="" aria-hidden="true" width="23" height="23" loading="lazy" decoding="async">
          <span class="skill-name">{{ skill.name }}</span>
        </span>
      </div>
    </div>
  </section>
</template>

<style scoped>
.skills { display: flex; flex-wrap: wrap; gap: 12px; margin-top: 26px; }
.skill-chip { display: inline-flex; align-items: center; gap: 10px; min-height: 47px; border: 1px solid #37536f; border-radius: 9px; padding: 11px 15px; background: var(--panel); font-size: 13px; font-weight: 600; line-height: 1.3; color: #ebf3fc; transition: transform .25s var(--motion-ease), border-color .25s, background .25s, box-shadow .25s; }
.skill-chip.reveal { transition: opacity 640ms var(--motion-ease), translate 640ms var(--motion-ease), transform .25s var(--motion-ease), border-color .25s, background .25s, box-shadow .25s; }
.skill-icon { display: inline-block; width: 23px; height: 23px; flex-shrink: 0; object-fit: contain; transition: transform .25s var(--motion-ease); }
.monochrome { filter: brightness(0) invert(1); opacity: .94; }
.skill-name { white-space: nowrap; }
@media (hover: hover) and (pointer: fine) {
  .skill-chip:hover { transform: translateY(-3px); border-color: var(--accent); background: #27415e; box-shadow: 0 8px 18px rgba(3,10,24,.22); }
  .skill-chip:hover .skill-icon { transform: scale(1.12); }
}
@media (max-width: 740px) {
  .skills { gap: 9px; }
  .skill-chip { padding: 10px 12px; gap: 8px; min-height: 43px; }
  .skill-icon { width: 21px; height: 21px; }
}
@media (prefers-reduced-motion: reduce) { .skill-chip:hover, .skill-chip:hover .skill-icon { transform: none; } }
</style>
