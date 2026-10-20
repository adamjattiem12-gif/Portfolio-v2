<script setup>
import { onMounted, onUnmounted, ref } from 'vue'

const mobileMenu = ref(null)
const menuOpen = ref(false)
const activeSection = ref('')
let sectionObserver
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

function dismissMenu(event) {
  if (!mobileMenu.value?.contains(event.target)) closeMenu()
}

function escapeMenu() {
  closeMenu()
  mobileMenu.value?.querySelector('summary').focus()
}

function observeSections() {
  sectionObserver?.disconnect()
  if (!('IntersectionObserver' in window)) return
  const focusLine = Math.max(120, Math.min(210, window.innerHeight * .3))
  sectionObserver = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) activeSection.value = entry.target.id
      else if (activeSection.value === entry.target.id) activeSection.value = ''
    }
  }, { rootMargin: `-${focusLine}px 0px -${Math.max(0, window.innerHeight - focusLine - 1)}px 0px`, threshold: 0 })
  document.querySelectorAll('main section[id]').forEach((section) => sectionObserver.observe(section))
}

onMounted(() => {
  observeSections()
  window.addEventListener('resize', observeSections)
  document.addEventListener('click', dismissMenu)
})
onUnmounted(() => {
  sectionObserver?.disconnect()
  window.removeEventListener('resize', observeSections)
  document.removeEventListener('click', dismissMenu)
})
</script>

<template>
  <header class="header">
    <div class="container header-content">
      <a class="logo" href="#top" aria-label="Adam Jattiem, back to top" @click="closeMenu">ADAM <strong>JATTIEM</strong></a>
      <nav class="nav" aria-label="Main navigation">
        <a v-for="link in links" :key="link.id" :href="`#${link.id}`" :class="{ 'nav-cta': link.id === 'contact' }" :aria-current="activeSection === link.id ? 'location' : undefined">{{ link.label }}</a>
      </nav>
      <details ref="mobileMenu" class="mobile-nav" @keydown.esc="escapeMenu" @toggle="menuOpen = $event.target.open">
        <summary :aria-label="menuOpen ? 'Close navigation menu' : 'Open navigation menu'" :aria-expanded="menuOpen" aria-controls="mobile-menu">&#9776;</summary>
        <nav id="mobile-menu" class="mobile-menu" aria-label="Mobile navigation">
          <a v-for="link in links" :key="link.id" :href="`#${link.id}`" :aria-current="activeSection === link.id ? 'location' : undefined" @click="closeMenu">{{ link.label }}</a>
        </nav>
      </details>
    </div>
  </header>
</template>

<style scoped>
.header { height: 77px; border-bottom: 1px solid rgba(143,176,216,.16); background: rgba(16,24,39,.95); backdrop-filter: blur(12px); position: sticky; top: 0; z-index: 1000; }
.header-content { display: flex; align-items: center; justify-content: space-between; height: 100%; }
.logo { font-size: 18px; font-weight: 800; letter-spacing: -.65px; color: #f6f8ff; white-space: nowrap; }
.logo strong { color: #86b8f6; font-weight: 800; }
.nav { display: flex; align-items: center; gap: 32px; }
.nav a { position: relative; font-size: 12px; font-weight: 600; color: #e7f0fa; transition: color .2s; }
.nav a:hover, .nav a:focus-visible { color: #8eb9f4; }
.nav a:not(.nav-cta)::after { content: ''; position: absolute; left: 0; right: 0; bottom: -10px; height: 2px; background: #83b7fa; border-radius: 3px; transform: scaleX(0); transition: transform .24s var(--motion-ease); }
.nav a:hover::after, .nav a:focus-visible::after, .nav a[aria-current]::after { transform: scaleX(1); }
.nav a[aria-current], .mobile-menu a[aria-current] { color: #a5cdff; }
.nav .nav-cta { color: #101827; background: var(--accent); border-radius: 6px; padding: 11px 19px; box-shadow: 0 5px 24px rgba(37, 99, 235, .2); }
.nav .nav-cta[aria-current] { box-shadow: 0 0 0 2px rgba(147,194,255,.7); }
.nav .nav-cta:hover { background: #4786db; color: #fff; }
.mobile-nav { display: none; }
@media (max-width: 950px) { .nav { gap: 18px; } }
@media (max-width: 740px) {
  .header { height: 68px; }
  .nav { display: none; }
  .mobile-nav { display: block; position: relative; }
  .mobile-nav summary { display: flex; align-items: center; justify-content: center; width: 42px; height: 40px; cursor: pointer; list-style: none; border: 1px solid #293754; border-radius: 7px; font-size: 21px; color: #f8faff; }
  .mobile-nav summary::-webkit-details-marker { display: none; }
  .mobile-menu { position: absolute; right: 0; top: calc(100% + 12px); width: 230px; background: var(--section-background); border: 1px solid #334d68; padding: 13px; border-radius: 10px; box-shadow: 0 14px 50px rgba(0, 0, 0, .3); display: flex; flex-direction: column; gap: 4px; }
  .mobile-menu a { color: #edf3ff; font-size: 14px; font-weight: 650; padding: 11px 13px; border-radius: 5px; }
  .mobile-menu a:hover { background: var(--panel); }
}
@media (max-width: 390px) { .logo { font-size: 16px; } }
</style>
