import { onMounted, onUnmounted } from 'vue'

// Observe the page content once; leaving the viewport resets every reveal.
// Individual translate keeps reveal motion independent of hover and carousel transforms.
export function useScrollReveal(root) {
  let observer
  let motionQuery
  let elements = []

  function updateMotion() {
    observer?.disconnect()
    root.value?.classList.remove('motion-enabled')
    if (motionQuery.matches || !('IntersectionObserver' in window)) return

    observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        entry.target.classList.toggle('is-visible', entry.isIntersecting)
      }
    }, { threshold: .08, rootMargin: '0px 0px -30px 0px' })

    elements.forEach((element) => {
      element.classList.remove('is-visible')
      observer.observe(element)
    })
    root.value?.classList.add('motion-enabled')
  }

  onMounted(() => {
    elements = Array.from(root.value.querySelectorAll(
      '.section .kicker, .section h2, .section .container > p, .skill-chip, .carousel-viewport, .education-category, .contact-copy > p, .form-panel',
    ))
    elements.forEach((element) => element.classList.add('reveal'))
    motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    motionQuery.addEventListener('change', updateMotion)
    updateMotion()
  })

  onUnmounted(() => {
    observer?.disconnect()
    motionQuery?.removeEventListener('change', updateMotion)
  })
}
