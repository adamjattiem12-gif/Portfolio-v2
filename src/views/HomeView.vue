<script setup>
import AboutView from './AboutView.vue'
import SkillsView from './SkillsView.vue'
import ProjectsView from './ProjectsView.vue'
import EducationView from './EducationView.vue'
import ContactView from './ContactView.vue'
</script>

<template>
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
</template>

<style scoped>
.hero { min-height: calc(100svh - 77px); display: grid; grid-template-columns: 1.12fr .88fr; align-items: center; gap: 80px; padding-top: 70px; padding-bottom: 74px; scroll-margin-top: 77px; }
.hero-copy { min-width: 0; }
.eyebrow { display: inline-flex; align-items: center; gap: 8px; border: 1px solid rgba(46, 103, 224, .25); background: #142650; color: #4486f8; padding: 7px 11px; border-radius: 100px; font-size: 10px; font-weight: 700; letter-spacing: .11em; line-height: 1; }
.eyebrow::before { content: ''; height: 7px; width: 7px; border-radius: 50%; background: #2f78ed; }
.hero h1 { margin: 28px 0 27px; font-size: clamp(51px, 5.35vw, 78px); line-height: 1.115; font-weight: 800; letter-spacing: -.052em; color: #f9fbff; }
.highlight { color: #3178f3; }
.hero-description { max-width: 490px; color: #9ba8bc; font-size: 16px; line-height: 1.72; font-weight: 400; margin: 0 0 28px; }
.hero-actions { display: flex; align-items: center; gap: 13px; flex-wrap: wrap; }
.btn { display: inline-flex; align-items: center; justify-content: center; gap: 10px; border-radius: 6px; font-size: 13px; font-weight: 800; min-height: 48px; padding: 0 23px; transition: transform .2s, background .2s, border .2s; }
.btn:hover { transform: translateY(-2px); }
.btn-primary { background: #2563eb; color: #fff; box-shadow: 0 10px 24px rgba(37, 99, 235, .13); }
.btn-primary:hover { background: #377afa; }
.btn-outline { border: 1px solid #05c9e1; color: #06cce5; background: transparent; }
.btn-outline:hover { background: rgba(6, 182, 212, .08); }
.portrait-wrap { width: 100%; max-width: 385px; justify-self: end; position: relative; }
.portrait-wrap::before, .portrait-wrap::after { content: ''; position: absolute; width: 29px; height: 29px; pointer-events: none; z-index: 2; }
.portrait-wrap::before { right: -8px; top: -8px; border-right: 4px solid #00cfe1; border-top: 4px solid #00cfe1; }
.portrait-wrap::after { left: -8px; bottom: -8px; border-left: 4px solid #326dfb; border-bottom: 4px solid #326dfb; }
.profile-img { display: block; width: 100%; height: auto; aspect-ratio: 1; object-fit: cover; object-position: center 30%; border-radius: 4px; border: 1px solid rgba(255, 255, 255, .12); background: #151a23; }
@media (max-width: 950px) {
  .hero { gap: 44px; grid-template-columns: 1fr .88fr; }
  .hero h1 { font-size: clamp(42px, 6.4vw, 65px); }
}
@media (max-width: 740px) {
  .hero { display: flex; flex-direction: column; align-items: stretch; gap: 40px; min-height: 0; padding-top: 72px; padding-bottom: 87px; scroll-margin-top: 68px; }
  .hero h1 { font-size: clamp(43px, 9vw, 64px); line-height: 1.12; margin: 25px 0 23px; }
  .hero-description { font-size: 15px; max-width: 550px; }
  .portrait-wrap { width: min(84%, 360px); align-self: center; margin-top: 15px; max-width: none; }
}
@media (max-width: 390px) {
  .hero h1 { font-size: 40px; }
  .btn { min-height: 44px; font-size: 12px; padding: 0 16px; }
  .portrait-wrap { width: 92%; }
}
</style>
