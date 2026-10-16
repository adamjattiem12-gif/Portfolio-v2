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
      <a href="#top">Back to top &uarr;</a>
    </div>
  </footer>
  <a v-if="showBackToTop" class="back-to-top" href="#top" aria-label="Back to top">
    <svg viewBox="0 0 24 24" width="15" height="15" aria-hidden="true"><path d="m5 15 7-7 7 7" fill="none" stroke="currentColor" stroke-width="3" /></svg>
  </a>
</template>

<style scoped>
.footer { background: var(--background); border-top: 1px solid rgba(143,176,216,.12); padding: 27px 0; font-size: 12px; color: #7f8da3; }
.footer .container { display: flex; justify-content: space-between; gap: 20px; }
.footer a { color: #c1d8f4; }
.back-to-top { position: fixed; right: 30px; bottom: 30px; z-index: 99; width: 31.5px; height: 31.5px; display: flex; align-items: center; justify-content: center; border-radius: 2px; background: #046bd2; color: #fff; }
@media (max-width: 390px) { .footer .container { flex-direction: column; } }
</style>
