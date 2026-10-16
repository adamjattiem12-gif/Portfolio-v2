<script setup>
import { ref } from 'vue'
import { useScrollReveal } from '@/composables/useScrollReveal'
import AboutView from './AboutView.vue'
import SkillsView from './SkillsView.vue'
import ProjectsView from './ProjectsView.vue'
import EducationView from './EducationView.vue'
import ContactView from './ContactView.vue'
const page = ref(null)
useScrollReveal(page)
</script>

<template>
  <div ref="page">
  <section id="top" class="container hero" aria-label="Introduction">
    <div class="hero-copy">
      <span class="eyebrow">FULL-STACK DEVELOPER</span>
      <h1>Crafting<br><span class="highlight">Scalable<br>Digital</span><br>Experiences.</h1>
      <p class="hero-description">I build robust web applications with modern technologies. Bridging the gap between beautiful design and technical excellence.</p>
      <div class="hero-actions">
        <a class="btn btn-primary" href="#projects">View My Work <span aria-hidden="true">&rarr;</span></a>
        <a class="btn btn-outline" href="#contact">Contact Me</a>
      </div>
    </div>
    <div class="portrait-wrap">
      <img class="profile-img" src="/wordpress/profile.jpeg" alt="Portrait of Adam Jattiem" loading="eager" width="768" height="1024">
    </div>
  </section>
  <AboutView />
  <SkillsView />
  <ProjectsView />
  <EducationView />
  <ContactView />
  </div>
</template>

<style scoped>
.hero { position: relative; isolation: isolate; width: 100%; max-width: none; min-height: calc(100svh - 77px); display: grid; grid-template-columns: 1.12fr .88fr; align-items: center; gap: 80px; padding: 70px max(28px, calc((100% - 1064px) / 2)) 74px; scroll-margin-top: 77px; background-color: var(--background); background-image: linear-gradient(90deg, rgba(9,16,30,.62) 0%, rgba(9,16,30,.40) 43%, rgba(9,16,30,.08) 82%), linear-gradient(to bottom, rgba(16,24,39,.04) 0%, rgba(16,24,39,.01) 48%, rgba(16,24,39,.32) 72%, rgba(16,24,39,.83) 92%, #101827 100%), url('/wordpress/mountain-sunset.jpg'); background-position: center; background-size: cover; background-repeat: no-repeat; }
.hero-copy { min-width: 0; position: relative; z-index: 2; }
.hero-copy, .portrait-wrap { animation: hero-enter 750ms var(--motion-ease) both; }
.portrait-wrap { animation-delay: 110ms; }
@keyframes hero-enter { from { opacity: 0; transform: translateY(16px); } to { opacity: 1; transform: translateY(0); } }
.eyebrow { display: inline-flex; align-items: center; gap: 8px; border: 1px solid rgba(232,214,207,.35); background: rgba(18,33,52,.74); color: var(--sunset); padding: 7px 11px; border-radius: 100px; font-size: 10px; font-weight: 700; letter-spacing: .11em; line-height: 1; }
.eyebrow::before { content: ''; height: 7px; width: 7px; border-radius: 50%; background: #2f78ed; }
.hero h1 { margin: 28px 0 27px; font-size: clamp(51px, 5.35vw, 78px); line-height: 1.115; font-weight: 800; letter-spacing: -.052em; color: var(--text); text-shadow: 0 3px 22px rgba(5,12,25,.64); }
.highlight { color: #83b7fa; }
.hero-description { max-width: 490px; color: #f0f5fc; text-shadow: 0 2px 13px rgba(4,9,20,.64); font-size: 16px; line-height: 1.72; font-weight: 400; margin: 0 0 28px; }
.hero-actions { display: flex; align-items: center; gap: 13px; flex-wrap: wrap; }
.btn { display: inline-flex; align-items: center; justify-content: center; gap: 10px; border-radius: 6px; font-size: 13px; font-weight: 800; min-height: 48px; padding: 0 23px; transition: transform .22s var(--motion-ease), background .22s, border-color .22s, box-shadow .22s; }
.btn:hover { transform: translateY(-2px); box-shadow: 0 10px 22px rgba(6,13,28,.27); }
.btn span { display: inline-block; transition: transform .22s var(--motion-ease); }
.btn:hover span { transform: translateX(3px); }
.btn-primary { background: var(--button); color: #fff; box-shadow: 0 10px 24px rgba(37, 99, 235, .13); }
.btn-primary:hover { background: #4786db; }
.btn-outline { border: 1px solid var(--sunset); color: var(--sunset); background: rgba(16,24,39,.25); }
.btn-outline:hover { background: rgba(232,214,207,.1); }
.portrait-wrap { width: 100%; max-width: 385px; justify-self: end; position: relative; }
.portrait-wrap::before, .portrait-wrap::after { content: ''; position: absolute; width: 29px; height: 29px; pointer-events: none; z-index: 2; }
.portrait-wrap::before { right: -8px; top: -8px; border-right: 4px solid #00cfe1; border-top: 4px solid #00cfe1; }
.portrait-wrap::after { left: -8px; bottom: -8px; border-left: 4px solid #326dfb; border-bottom: 4px solid #326dfb; }
.profile-img { display: block; width: 100%; height: auto; aspect-ratio: 1; object-fit: cover; object-position: center 30%; background: #151a23; }
@media (max-width: 950px) {
  .hero { gap: 44px; grid-template-columns: 1fr .88fr; }
  .hero h1 { font-size: clamp(42px, 6.4vw, 65px); }
}
@media (min-width: 741px) and (max-width: 1050px) { .hero { padding-left: 34px; padding-right: 34px; } }
@media (max-width: 740px) {
  .hero { display: flex; flex-direction: column; align-items: stretch; gap: 40px; min-height: 0; padding: 72px 22px 80px; scroll-margin-top: 68px; background-position: 57% center; background-image: linear-gradient(90deg, rgba(9,16,30,.62) 0%, rgba(9,16,30,.35) 62%, rgba(9,16,30,.17) 100%), linear-gradient(to bottom, rgba(16,24,39,.03) 0%, rgba(16,24,39,.08) 51%, rgba(16,24,39,.62) 87%, #101827 100%), url('/wordpress/mountain-sunset.jpg'); }
  .hero h1 { font-size: clamp(43px, 9vw, 64px); line-height: 1.12; margin: 25px 0 23px; }
  .hero-description { font-size: 15px; max-width: 550px; }
  .portrait-wrap { width: min(84%, 360px); align-self: center; margin-top: 15px; max-width: none; }
}
@media (prefers-reduced-motion: reduce) { .btn:hover { transform: none; } }
@media (max-width: 390px) {
  .hero h1 { font-size: 40px; }
  .btn { min-height: 44px; font-size: 12px; padding: 0 16px; }
  .portrait-wrap { width: 92%; }
}
</style>
