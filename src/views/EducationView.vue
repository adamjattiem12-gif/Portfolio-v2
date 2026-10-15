<template>
  <section id="certifications" class="section">
    <div class="container">
      <span class="kicker">Learning journey</span>
      <h2>Training &amp; development.</h2>
      <div class="education-content" role="region" aria-label="Qualifications and training" tabindex="0">
        <table class="education-table">
          <thead>
            <tr>
              <th scope="col">Qualification</th>
              <th scope="col">NQF Level</th>
              <th scope="col">Timeline</th>
              <th scope="col">Years Studied</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="institution-cell">Full Stack Development at Life Choices Academy</td>
              <td>None</td>
              <td>April 2026 – September 2026</td>
              <td>6 months</td>
            </tr>
            <tr>
              <td class="institution-cell"><a href="https://www.credly.com/badges/cd2bc1b9-5359-41f2-bf49-7bd1b87c09fb/public_url" target="_blank" rel="noopener noreferrer">Introduction to Data Science</a></td>
              <td>None</td>
              <td>April 2026 – September 2026</td>
              <td>6 months</td>
            </tr>
            <tr>
              <td class="institution-cell"><a href="https://www.credly.com/badges/b436120d-233d-4057-8e5e-eb0761f9d53a/public_url" target="_blank" rel="noopener noreferrer">Introduction to Cybersecurity</a></td>
              <td>None</td>
              <td>April 2026 – September 2026</td>
              <td>6 months</td>
            </tr>
            <tr>
              <td class="institution-cell">Higher Certificate in Islamic Studies</td>
              <td>5</td>
              <td>January 2025 – December 2025</td>
              <td>1 year</td>
            </tr>
            <tr>
              <td class="institution-cell">NSC Diploma (High School)</td>
              <td>4</td>
              <td>January 2022 – December 2024</td>
              <td>3 years</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
</template>

<style scoped>
.education-content { width: 100%; overflow-x: auto; margin-top: 30px; border: 1px solid rgba(132, 159, 204, .18); border-radius: 11px; background: #1b2331; }
.education-table { border-collapse: collapse; width: 100%; min-width: 740px; text-align: left; margin: 0 0 1.5em; }
.education-table thead { background: #1a3150; }
.education-table th { padding: 21px 22px; color: #f7faff; font-size: 13px; font-weight: 800; letter-spacing: .06em; text-transform: uppercase; white-space: nowrap; border-bottom: 2px solid #2872f0; }
.education-table td { padding: 20px 22px; color: #b5c3d5; font-size: 13px; line-height: 1.5; }
.education-table .institution-cell { color: #3485ff; font-weight: 700; }
.institution-cell a { color: inherit; }
.institution-cell a:hover { text-decoration: underline; }
.education-table tbody tr:hover { background: rgba(54, 112, 198, .07); }
@media (max-width: 800px) {
  .education-table th, .education-table td { padding: 15px 17px; font-size: 12px; }
  .education-content { margin-top: 23px; }
}
</style>
