<script setup>
import { onMounted, onUnmounted, ref } from 'vue'

const showBackToTop = ref(false)
function updateBackToTop() {
  showBackToTop.value = window.scrollY > 300
}
onMounted(() => {
  updateBackToTop()
  window.addEventListener('scroll', updateBackToTop, { passive: true })
})
onUnmounted(() => window.removeEventListener('scroll', updateBackToTop))
</script>

<template>
  <footer class="footer">
    <div class="container">
      <span>&copy; 2026 Adam Jattiem</span>
      <nav class="social-links" aria-label="Social profiles">
        <a class="social-link" href="https://github.com/adamjattiem12-gif" target="_blank" rel="noopener noreferrer" aria-label="GitHub profile (opens in a new tab)">
          <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" focusable="false"><path fill="currentColor" d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.76-.24.76-.53v-2.08c-3.1.67-3.76-1.32-3.76-1.32-.5-1.29-1.24-1.63-1.24-1.63-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15 1 .1.48 2.27 3.15 1.6.1-.72.39-1.21.7-1.49-2.48-.28-5.09-1.24-5.09-5.52 0-1.22.44-2.21 1.15-2.99-.12-.28-.5-1.42.11-2.95 0 0 .94-.3 3.05 1.14a10.6 10.6 0 0 1 5.56 0c2.11-1.44 3.05-1.14 3.05-1.14.61 1.53.23 2.67.11 2.95.72.78 1.15 1.77 1.15 2.99 0 4.29-2.61 5.23-5.1 5.51.4.35.75 1.03.75 2.08V22c0 .29.2.64.76.53A11.1 11.1 0 0 0 12 .9Z"/></svg>
          <span>GitHub</span>
        </a>
        <a class="social-link" href="https://www.linkedin.com/in/adam-jattiem" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile (opens in a new tab)">
          <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" focusable="false"><path fill="currentColor" d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM7.93 18.73H4.95V9.15h2.98v9.58ZM6.44 7.84a1.73 1.73 0 1 1 0-3.46 1.73 1.73 0 0 1 0 3.46Zm12.29 10.89h-2.98v-4.66c0-1.11-.02-2.54-1.55-2.54-1.55 0-1.79 1.21-1.79 2.46v4.74H9.43V9.15h2.86v1.31h.04c.4-.75 1.37-1.55 2.82-1.55 3.02 0 3.58 1.99 3.58 4.58v5.24Z"/></svg>
          <span>LinkedIn</span>
        </a>
      </nav>
      <a href="#top">Back to top &uarr;</a>
    </div>
  </footer>
  <a v-if="showBackToTop" class="back-to-top" href="#top" aria-label="Back to top">
    <svg viewBox="0 0 24 24" width="15" height="15" aria-hidden="true"><path d="m5 15 7-7 7 7" fill="none" stroke="currentColor" stroke-width="3" /></svg>
  </a>
</template>

<style scoped>
.footer { background: var(--background); border-top: 1px solid rgba(143,176,216,.12); padding: 27px 0; font-size: 12px; color: #7f8da3; }
.footer .container { display: flex; align-items: center; justify-content: space-between; gap: 16px; flex-wrap: wrap; }
.footer a { color: #c1d8f4; }
.social-links { display: flex; flex-wrap: wrap; align-items: center; gap: 9px; }
.footer .social-link { display: inline-flex; align-items: center; justify-content: center; gap: 7px; min-height: 34px; padding: 0 12px; border: 1px solid rgba(143,176,216,.28); border-radius: 6px; background: rgba(255,255,255,.03); color: #c1d8f4; font-size: 12px; font-weight: 600; text-decoration: none; transition: color .2s, border-color .2s, background .2s, transform .2s; }
.footer .social-link:hover { color: #fff; border-color: #5084cb; background: rgba(54,117,204,.18); transform: translateY(-1px); }
.footer .social-link:focus-visible { outline: 2px solid #9dc7fb; outline-offset: 3px; }
.back-to-top { position: fixed; right: 30px; bottom: 30px; z-index: 99; width: 31.5px; height: 31.5px; display: flex; align-items: center; justify-content: center; border-radius: 2px; background: #046bd2; color: #fff; }
@media (max-width: 520px) { .footer .container { justify-content: center; text-align: center; } .social-links { justify-content: center; } }
</style>
