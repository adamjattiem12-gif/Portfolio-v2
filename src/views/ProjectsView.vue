<script setup>
import { computed, onMounted, onUnmounted, reactive, ref } from 'vue'
import { projects } from '@/data/projects'

const expanded = reactive({})
const teamExpanded = reactive({})
const currentIndex = ref(0)
const isMobile = ref(false)
const viewport = ref(null)
const viewportWidth = ref(0)
const visibleCount = computed(() => isMobile.value ? 1 : 2)
const maxIndex = computed(() => projects.length - visibleCount.value)
const offset = computed(() => currentIndex.value * (viewportWidth.value + (isMobile.value ? 14 : 22)) / visibleCount.value)
const counter = computed(() => {
  const first = currentIndex.value + 1
  return `${first}${isMobile.value ? '' : `–${first + 1}`} of ${projects.length}`
})
let mediaQuery
let resizeObserver

function updateLayout() {
  isMobile.value = mediaQuery.matches
  currentIndex.value = Math.min(currentIndex.value, maxIndex.value)
  viewportWidth.value = viewport.value.clientWidth
}

function move(direction) {
  currentIndex.value = Math.min(maxIndex.value, Math.max(0, currentIndex.value + direction))
}

onMounted(() => {
  mediaQuery = window.matchMedia('(max-width: 740px)')
  mediaQuery.addEventListener('change', updateLayout)
  resizeObserver = new ResizeObserver(updateLayout)
  resizeObserver.observe(viewport.value)
  updateLayout()
})

onUnmounted(() => {
  mediaQuery?.removeEventListener('change', updateLayout)
  resizeObserver?.disconnect()
})
</script>

<template>
  <section id="projects" class="section">
    <div class="container">
      <div class="projects-header">
        <div>
          <span class="kicker">Selected work</span>
          <h2>Projects I've worked on.</h2>
        </div>
        <div class="carousel-controls" role="group" aria-label="Project carousel controls">
          <button type="button" class="carousel-arrow" aria-label="Previous projects" :disabled="currentIndex === 0" @click="move(-1)">&larr;</button>
          <span class="carousel-count" aria-live="polite">{{ counter }}</span>
          <button type="button" class="carousel-arrow" aria-label="Next projects" :disabled="currentIndex === maxIndex" @click="move(1)">&rarr;</button>
        </div>
      </div>
      <div ref="viewport" class="carousel-viewport" role="region" aria-label="Projects carousel" aria-roledescription="carousel">
        <div class="projects-list" :style="{ transform: `translateX(-${offset}px)` }">
          <article v-for="(project, index) in projects" :key="project.id" class="project-card"
            :inert="index < currentIndex || index >= currentIndex + visibleCount"
            :aria-hidden="index < currentIndex || index >= currentIndex + visibleCount"
            :aria-label="project.title">
            <img :src="project.image" :alt="project.alt" class="project-image" loading="lazy">
            <span class="project-type">{{ project.type }}</span>
            <h3 class="project-title">{{ project.title }}</h3>
            <p class="project-intro">{{ project.intro }}</p>
            <div class="project-details">
              <button type="button" class="read-more-btn" :aria-expanded="!!expanded[project.id]" :aria-controls="`${project.id}-description`" @click="expanded[project.id] = !expanded[project.id]">
                {{ expanded[project.id] ? 'Show Less \u2191' : 'Read More \u2193' }}
              </button>
              <div v-show="expanded[project.id]" :id="`${project.id}-description`" class="project-description">
                <p v-for="paragraph in project.description" :key="paragraph">{{ paragraph }}</p>
              </div>
            </div>
            <div class="project-tech" aria-label="Technologies">
              <span v-for="tech in project.tech" :key="tech">{{ tech }}</span>
            </div>
            <div v-if="project.team" class="project-team" :class="{ 'team-expanded': teamExpanded[project.id] }">
              <div class="team-heading">
                <strong>Team</strong>
                <button type="button" class="team-toggle" :aria-expanded="!!teamExpanded[project.id]" :aria-controls="`${project.id}-team`"
                  :aria-label="teamExpanded[project.id] ? 'Show less about the project team' : 'Read more about the project team'"
                  @click="teamExpanded[project.id] = !teamExpanded[project.id]">
                  {{ teamExpanded[project.id] ? 'Show Less \u2191' : 'Read More \u2193' }}
                </button>
              </div>
              <div :id="`${project.id}-team`" class="team-members"><em>{{ project.team }}</em></div>
            </div>
            <div class="project-links">
              <a v-for="link in project.links" :key="link.url" :href="link.url" class="project-link" target="_blank" rel="noopener noreferrer">
                {{ link.label }} <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.projects-header { display: flex; justify-content: space-between; align-items: end; gap: 24px; margin-bottom: 27px; }
.projects-header h2 { margin-bottom: 0; }
.carousel-controls { display: flex; align-items: center; gap: 12px; flex-shrink: 0; }
.carousel-count { min-width: 66px; text-align: center; font-size: 12px; color: #9ba8bc; font-weight: 700; }
.carousel-arrow { appearance: none; background: #152744; border: 1px solid #2c5aa8; color: #f8faff; border-radius: 8px; width: 44px; height: 44px; display: inline-flex; justify-content: center; align-items: center; font-size: 23px; font-weight: 500; line-height: 1; padding: 15px 30px; transition: background .2s; }
.carousel-arrow:hover:not(:disabled), .carousel-arrow:focus-visible { background: #2563eb; }
.carousel-arrow:disabled { opacity: .35; cursor: not-allowed; }
.carousel-viewport { width: 100%; overflow: hidden; }
.projects-list { display: flex; gap: 22px; align-items: stretch; margin-top: 29px; transition: transform .4s ease; }
.project-card { flex: 0 0 calc((100% - 22px) / 2); min-width: 0; border: 1px solid rgba(57, 108, 215, .27); border-radius: 10px; padding: 15px 18px; background: linear-gradient(135deg, #182337, #141d2d); display: flex; flex-direction: column; }
.project-image { display: block; width: 100%; height: clamp(115px, 15vw, 185px); object-fit: cover; object-position: center; border: 1px solid rgba(125, 160, 220, .25); margin: 0 0 13px; border-radius: 8px; }
.project-type { font-size: 9px; color: #4190ff; font-weight: 800; letter-spacing: .08em; }
.project-title { font-size: clamp(17px, 1.6vw, 22px); line-height: 1.2; font-weight: 600; letter-spacing: -.035em; margin: 7px 0 9px; color: #f7faff; }
.project-card .project-intro { font-size: 12px; line-height: 1.48; margin: 0 0 7px; color: #aab9d1; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
.read-more-btn { display: inline-flex; align-items: center; color: #54a2ff; font-size: 12px; font-weight: 800; background: none; border: 0; padding: 0; margin: 1px 0 8px; line-height: inherit; }
.project-description p { font-size: 12px; line-height: 1.55; margin: 0 0 10px; }
.project-tech { display: flex; flex-wrap: wrap; align-items: center; gap: 6px; margin: 7px 0 9px; }
.project-tech span { color: #4994ff; font-size: 10px; font-weight: 750; }
.project-tech span:not(:last-child)::after { content: '\2022'; padding-left: 6px; color: #5287da; }
.project-team { margin: 0 0 10px; color: #aab9d1; font-size: 11px; line-height: 1.45; }
.team-heading { display: inline; }
.team-heading strong { color: #e9f1ff; }
.team-heading strong::after { content: ':'; }
.team-members { display: inline; }
.team-toggle { display: none; }
.project-links { display: flex; gap: 8px; flex-wrap: wrap; margin-top: auto; }
.project-link { display: inline-flex; align-items: center; gap: 12px; border-radius: 6px; border: 1px solid #2563eb; background: #10376b; color: #fff; font-weight: 800; font-size: 11px; padding: 8px 12px; transition: background .2s, transform .2s; }
.project-link:hover { background: #2563eb; transform: translateY(-2px); }
@media (max-width: 921px) { .carousel-arrow { padding: 14px 28px; } }
@media (max-width: 740px) {
  .projects-list { gap: 14px; }
  .project-card { flex-basis: 100%; }
  .project-team { margin-bottom: 12px; }
  .team-heading { display: flex; align-items: center; gap: 12px; }
  .team-toggle { display: inline-flex; align-items: center; border: 0; background: none; padding: 3px 0; font: inherit; font-weight: 800; font-size: 11px; color: #54a2ff; }
  .team-members { display: none; line-height: 1.6; padding-top: 7px; }
  .team-expanded .team-members { display: block; }
}
@media (max-width: 640px) {
  .projects-header { align-items: center; gap: 10px; flex-wrap: wrap; }
  .carousel-controls { margin-left: auto; }
  .carousel-arrow { width: 37px; height: 37px; }
  .project-card { padding: 10px; }
  .project-image { height: 100px; }
  .project-title { font-size: 14px; overflow-wrap: anywhere; }
  .project-tech span { font-size: 9px; }
  .project-link { padding: 7px 9px; font-size: 10px; }
}
@media (max-width: 544px) { .carousel-arrow { padding: 12px 24px; } }
</style>
