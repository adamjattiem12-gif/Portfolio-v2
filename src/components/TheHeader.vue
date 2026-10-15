<script setup>
import { ref } from 'vue'

const mobileMenu = ref(null)
const links = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'contact', label: 'Contact' },
]

function closeMenu() {
  if (mobileMenu.value) mobileMenu.value.open = false
}
</script>

<template>
  <header class="header">
    <div class="container header-content">
      <a class="logo" href="#top" aria-label="Adam Jattiem, back to top" @click="closeMenu">ADAM <strong>JATTIEM</strong></a>
      <nav class="nav" aria-label="Main navigation">
        <a v-for="link in links" :key="link.id" :href="`#${link.id}`" :class="{ 'nav-cta': link.id === 'contact' }">{{ link.label }}</a>
      </nav>
      <details ref="mobileMenu" class="mobile-nav" @keydown.esc="closeMenu">
        <summary aria-label="Open navigation menu" aria-controls="mobile-menu">&#9776;</summary>
        <nav id="mobile-menu" class="mobile-menu" aria-label="Mobile navigation">
          <a v-for="link in links" :key="link.id" :href="`#${link.id}`" @click="closeMenu">{{ link.label }}</a>
        </nav>
      </details>
    </div>
  </header>
</template>

<style scoped>
.header { height: 77px; border-bottom: 1px solid var(--line); background: var(--background); position: sticky; top: 0; z-index: 1000; }
.header-content { display: flex; align-items: center; justify-content: space-between; height: 100%; }
.logo { font-size: 18px; font-weight: 800; letter-spacing: -.65px; color: #f6f8ff; white-space: nowrap; }
.logo strong { color: #3478fc; font-weight: 800; }
.nav { display: flex; align-items: center; gap: 32px; }
.nav a { font-size: 12px; font-weight: 600; color: #ebeff9; transition: color .2s; }
.nav a:hover, .nav a:focus-visible { color: #60a5fa; }
.nav .nav-cta { color: #fff; background: #2766eb; border-radius: 6px; padding: 11px 19px; box-shadow: 0 5px 24px rgba(37, 99, 235, .2); }
.nav .nav-cta:hover { background: #377afa; color: #fff; }
.mobile-nav { display: none; }
@media (max-width: 950px) { .nav { gap: 18px; } }
@media (max-width: 740px) {
  .header { height: 68px; }
  .nav { display: none; }
  .mobile-nav { display: block; position: relative; }
  .mobile-nav summary { display: flex; align-items: center; justify-content: center; width: 42px; height: 40px; cursor: pointer; list-style: none; border: 1px solid #293754; border-radius: 7px; font-size: 21px; color: #f8faff; }
  .mobile-nav summary::-webkit-details-marker { display: none; }
  .mobile-menu { position: absolute; right: 0; top: calc(100% + 12px); width: 230px; background: #172137; border: 1px solid #314361; padding: 13px; border-radius: 10px; box-shadow: 0 14px 50px rgba(0, 0, 0, .3); display: flex; flex-direction: column; gap: 4px; }
  .mobile-menu a { color: #edf3ff; font-size: 14px; font-weight: 650; padding: 11px 13px; border-radius: 5px; }
  .mobile-menu a:hover { background: #243553; }
}
@media (max-width: 390px) { .logo { font-size: 16px; } }
</style>
