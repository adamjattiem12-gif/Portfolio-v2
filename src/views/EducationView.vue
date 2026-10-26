<script setup>
import { ref } from 'vue'

const isFormalExpanded = ref(true)
const isCiscoExpanded = ref(false)
</script>

<template>
  <section id="certifications" class="section education-section" aria-labelledby="education-heading">
    <div class="container">
      <span class="kicker">Learning journey</span>
      <h2 id="education-heading">Education &amp; Training</h2>

      <section class="education-category" aria-labelledby="formal-heading">
        <h3 class="category-title">
          <button
            id="formal-toggle"
            class="category-toggle"
            type="button"
            aria-controls="formal-content"
            :aria-expanded="isFormalExpanded"
            @click="isFormalExpanded = !isFormalExpanded"
          >
            <span class="category-icon formal-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none"><path d="m3 9 9-5 9 5-9 5-9-5Z"/><path d="M7 11.3v4.2c2.8 2.3 7.2 2.3 10 0v-4.2M21 9v6"/></svg>
            </span>
            <span class="category-copy">
              <span class="category-name" id="formal-heading">Formal Education &amp; Training</span>
              <span class="category-subtitle">Academic foundations and practical development.</span>
            </span>
            <svg class="chevron" :class="{ expanded: isFormalExpanded }" viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="m5 7.5 5 5 5-5"/></svg>
          </button>
        </h3>

        <div id="formal-content" v-show="isFormalExpanded" class="category-content">
          <div class="education-timeline">
            <article class="education-card timeline-card">
              <p class="institution">Life Choices Academy</p>
              <h4>Full Stack Development</h4>
              <p class="description">Completed an intensive practical software development programme covering full-stack development, databases, teamwork and real-world projects.</p>
              <dl class="education-meta">
                <div><dt>Timeline</dt><dd>April 2026 – September 2026</dd></div>
                <div><dt>Duration</dt><dd>6 months</dd></div>
                <div><dt>NQF level</dt><dd>Not applicable</dd></div>
              </dl>
              <ul class="skill-tags" aria-label="Skills covered">
                <li>HTML</li><li>CSS</li><li>JavaScript</li><li>Vue.js</li><li>Node.js</li><li>Express.js</li><li>MySQL</li><li>Python</li><li>Git &amp; GitHub</li>
              </ul>
            </article>

            <article class="education-card timeline-card">
              <p class="institution">Academic qualification</p>
              <h4>Higher Certificate in Islamic Studies</h4>
              <dl class="education-meta">
                <div><dt>Timeline</dt><dd>January 2025 – December 2025</dd></div>
                <div><dt>Duration</dt><dd>1 year</dd></div>
                <div><dt>NQF level</dt><dd>5</dd></div>
              </dl>
            </article>

            <article class="education-card timeline-card">
              <p class="institution">High School</p>
              <h4>NSC Diploma (High School)</h4>
              <dl class="education-meta">
                <div><dt>Timeline</dt><dd>January 2022 – December 2024</dd></div>
                <div><dt>Duration</dt><dd>3 years</dd></div>
                <div><dt>NQF level</dt><dd>4</dd></div>
              </dl>
            </article>
          </div>
        </div>
      </section>

      <section class="education-category cisco-category" aria-labelledby="cisco-heading">
        <h3 class="category-title">
          <button
            id="cisco-toggle"
            class="category-toggle"
            type="button"
            aria-controls="cisco-content"
            :aria-expanded="isCiscoExpanded"
            @click="isCiscoExpanded = !isCiscoExpanded"
          >
            <span class="category-icon cisco-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none"><path d="M12 3 19 6v5c0 4.6-2.9 7.8-7 10-4.1-2.2-7-5.4-7-10V6l7-3Z"/><path d="m9 12 2 2 4-4"/></svg>
            </span>
            <span class="category-copy">
              <span class="category-name" id="cisco-heading">Cisco Networking Academy</span>
              <span class="category-subtitle">Completed courses and digital credentials.</span>
            </span>
            <svg class="chevron" :class="{ expanded: isCiscoExpanded }" viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="m5 7.5 5 5 5-5"/></svg>
          </button>
        </h3>

        <div id="cisco-content" v-show="isCiscoExpanded" class="category-content">
          <div class="cisco-grid">
            <article class="education-card cisco-card">
              <div class="course-heading">
                <div>
                  <p class="institution">Cisco Networking Academy</p>
                  <h4>Introduction to Data Science</h4>
                </div>
                <span class="completed"><span aria-hidden="true"></span>Completed</span>
              </div>
              <p class="description">Introductory knowledge of data science concepts and applications.</p>
              <p class="course-timeline"><span>Timeline</span>April 2026 – September 2026</p>
              <a class="credential-link" href="https://www.credly.com/badges/cd2bc1b9-5359-41f2-bf49-7bd1b87c09fb/public_url" target="_blank" rel="noopener noreferrer">
                View Credential <span aria-hidden="true">↗</span>
              </a>
            </article>

            <article class="education-card cisco-card">
              <div class="course-heading">
                <div>
                  <p class="institution">Cisco Networking Academy</p>
                  <h4>Introduction to Cybersecurity</h4>
                </div>
                <span class="completed"><span aria-hidden="true"></span>Completed</span>
              </div>
              <p class="description">Introductory understanding of cybersecurity principles, threats and digital security.</p>
              <p class="course-timeline"><span>Timeline</span>April 2026 – September 2026</p>
              <a class="credential-link" href="https://www.credly.com/badges/b436120d-233d-4057-8e5e-eb0761f9d53a/public_url" target="_blank" rel="noopener noreferrer">
                View Credential <span aria-hidden="true">↗</span>
              </a>
            </article>
          </div>
        </div>
      </section>
    </div>
  </section>
</template>

<style scoped>
.education-section { color-scheme: dark; }
.education-section h2 { margin-bottom: 28px; }
.education-category { max-width: 960px; margin: 0 auto; }
.category-title { margin: 0; }
.category-toggle { -webkit-appearance: none; appearance: none; display: flex; width: 100%; min-height: 76px; align-items: center; gap: 14px; padding: 12px 16px; border: 0; border-radius: 6px; background: transparent; box-shadow: none; color: var(--text); text-align: left; cursor: pointer; transition: background .2s; }
.category-toggle:hover { background: rgba(86, 148, 232, .06); }
.category-icon { display: grid; flex: 0 0 36px; width: 36px; height: 36px; place-items: center; border: 1px solid rgba(86, 148, 232, .3); border-radius: 9px; background: rgba(86, 148, 232, .08); color: #9dc7fb; }
.category-icon svg { width: 20px; height: 20px; stroke: currentColor; stroke-width: 1.7; stroke-linecap: round; stroke-linejoin: round; }
.cisco-icon { border-color: rgba(76, 190, 166, .25); background: rgba(76, 190, 166, .06); color: #73cbb9; }
.category-copy { display: flex; min-width: 0; flex: 1; flex-direction: column; gap: 2px; }
.category-name { color: #f5f8ff; font-size: clamp(16px, 1.8vw, 19px); font-weight: 700; line-height: 1.4; letter-spacing: -.02em; }
.category-subtitle { color: var(--muted); font-size: 12px; font-weight: 500; line-height: 1.5; }
.chevron { flex: 0 0 18px; width: 18px; height: 18px; stroke: #a9bfd8; stroke-width: 1.8; stroke-linecap: round; stroke-linejoin: round; transform: rotate(0); transition: transform .18s var(--motion-ease); }
.chevron.expanded { transform: rotate(180deg); }
.category-content { padding-top: 15px; }
.education-timeline { position: relative; display: grid; gap: 13px; margin-left: 8px; padding-left: 23px; }
.education-timeline::before { position: absolute; top: 10px; bottom: 10px; left: 4px; width: 1px; content: ''; background: #45617f; }
.education-card { min-width: 0; border: 1px solid #385573; border-radius: 12px; background: var(--panel); transition: border-color .2s, box-shadow .2s; }
.education-card:hover { border-color: #52769d; box-shadow: 0 8px 20px rgba(3, 10, 24, .14); }
.timeline-card { position: relative; padding: 16px 18px; }
.timeline-card::before { position: absolute; top: 22px; left: -24px; width: 9px; height: 9px; content: ''; border: 2px solid var(--background); border-radius: 50%; background: var(--accent); box-shadow: 0 0 0 1px #648bb8; }
.institution { margin: 0 0 3px; color: #94c5ff; font-size: 11px; font-weight: 700; line-height: 1.45; }
.education-card h4 { margin: 0; color: #f7faff; font-size: clamp(15px, 1.5vw, 18px); font-weight: 650; line-height: 1.4; letter-spacing: -.025em; overflow-wrap: anywhere; }
.description { max-width: none !important; margin: 10px 0 13px !important; color: #c2d0e0 !important; font-size: 12px !important; line-height: 1.65 !important; }
.education-meta { display: grid; grid-template-columns: minmax(190px, 1.4fr) repeat(2, minmax(95px, .6fr)); gap: 10px 20px; margin: 0; }
.education-meta div { min-width: 0; }
.education-meta dt, .course-timeline span { margin: 0 0 2px; color: #94a9c1; font-size: 9px; font-weight: 750; line-height: 1.4; letter-spacing: .06em; text-transform: uppercase; }
.education-meta dd { margin: 0; color: #e0e9f5; font-size: 11px; font-weight: 600; line-height: 1.5; overflow-wrap: anywhere; }
.skill-tags { display: flex; flex-wrap: wrap; gap: 6px; margin: 13px 0 0; padding: 0; list-style: none; }
.skill-tags li { padding: 4px 8px; border: 1px solid #37536f; border-radius: 6px; background: rgba(16, 24, 39, .42); color: #c8d9ed; font-size: 10px; font-weight: 600; line-height: 1.35; }
.cisco-category { margin-top: 26px; }
.cisco-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 14px; }
.cisco-card { display: flex; flex-direction: column; padding: 16px 18px; }
.course-heading { display: flex; min-width: 0; align-items: flex-start; justify-content: space-between; gap: 12px; }
.course-heading > div { min-width: 0; }
.course-heading h4 { max-width: 300px; }
.completed { display: inline-flex; flex: 0 0 auto; align-items: center; gap: 6px; padding: 4px 8px; border: 1px solid rgba(103, 212, 191, .24); border-radius: 99px; background: rgba(76, 190, 166, .07); color: #92d8ca; font-size: 10px; font-weight: 700; line-height: 1.3; }
.completed span { width: 6px; height: 6px; border-radius: 50%; background: #67c9b5; }
.cisco-card .description { margin-bottom: 10px !important; }
.course-timeline { display: flex; flex-direction: column; gap: 2px; margin: 0 0 14px !important; color: #e0e9f5 !important; font-size: 11px !important; font-weight: 600; line-height: 1.5 !important; }
.credential-link { display: inline-flex; min-height: 40px; align-items: center; align-self: flex-start; justify-content: center; gap: 9px; margin-top: auto; padding: 7px 12px; border: 1px solid #5084cb; border-radius: 6px; background: #2c5d9d; color: #fff; font-size: 11px; font-weight: 800; line-height: 1.4; transition: background .22s, transform .22s var(--motion-ease), box-shadow .22s; }
.credential-link:hover { transform: translateY(-1px); background: var(--button); box-shadow: 0 7px 15px rgba(6, 13, 28, .2); }
.credential-link span { font-size: 14px; }
@media (max-width: 740px) {
  .education-section h2 { margin-bottom: 23px; }
  .category-toggle { min-height: 72px; padding: 11px 13px; gap: 11px; }
  .education-timeline { gap: 11px; }
  .timeline-card, .cisco-card { padding: 14px; }
  .cisco-grid { grid-template-columns: minmax(0, 1fr); gap: 11px; }
  .cisco-category { margin-top: 21px; }
}
@media (max-width: 600px) {
  .education-meta { grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 9px 14px; }
  .education-meta div:first-child { grid-column: 1 / -1; }
}
@media (max-width: 360px) {
  .category-toggle { gap: 9px; padding: 10px; }
  .category-icon { flex-basis: 32px; width: 32px; height: 32px; }
  .category-icon svg { width: 18px; height: 18px; }
  .category-subtitle { font-size: 11px; }
  .chevron { flex-basis: 16px; width: 16px; }
  .education-timeline { margin-left: 4px; padding-left: 20px; }
  .timeline-card::before { left: -21px; }
  .course-heading { flex-wrap: wrap; }
}
@media (prefers-reduced-motion: reduce) {
  .category-toggle, .chevron, .education-card, .credential-link { transition: none; }
  .education-card:hover, .credential-link:hover { transform: none; }
}
</style>
