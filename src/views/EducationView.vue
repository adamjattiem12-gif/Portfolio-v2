<template>
  <section class="education-section">
    <div class="container">
      <div class="education-header">
        <h1>My <span class="highlight">Education</span></h1>
        <p>Building expertise in modern web development and full stack technologies</p>
      </div>
      <div class="education-content">
        <table class="education-table">
          <thead>
            <tr>
              <th>Qualification</th>
              <th>NQF Level</th>
              <th>Timeline</th>
              <th>Years Studied</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="institution-cell">Full Stack Development at Life Choices Academy</td>
              <td>None</td>
              <td>April 2026 - September 2026</td>
              <td>6 months</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
</template>

<style scoped>
.education-section {
  padding: 80px 0;
  background: linear-gradient(135deg, #1a1f2e 0%, #0f1419 100%);
  min-height: 100vh;
}
.education-header {
  text-align: center;
  margin-bottom: 60px;
}
.education-header h1 {
  font-size: 48px;
  font-weight: 700;
  color: #fff;
  margin-bottom: 15px;
}
.education-header p {
  font-size: 16px;
  color: #a0a0a0;
  max-width: 600px;
  margin: 0 auto;
}
.education-content {
  max-width: 1000px;
  margin: 0 auto;
  overflow-x: auto;
}
.education-table {
  width: 100%;
  border-collapse: collapse;
  background-color: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  overflow: hidden;
}
.education-table thead {
  background-color: rgba(0, 123, 255, 0.15);
  border-bottom: 2px solid #007bff;
}
.education-table th {
  padding: 20px;
  text-align: left;
  font-size: 14px;
  font-weight: 700;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 1px;
}
.education-table tbody tr {
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
}
.education-table tbody tr:hover {
  background-color: rgba(0, 123, 255, 0.1);
}
.education-table tbody tr:last-child {
  border-bottom: none;
}
.education-table td {
  padding: 20px;
  font-size: 14px;
  color: #a0a0a0;
}
.education-table .institution-cell {
  color: #007bff;
  font-weight: 600;
}
@media (max-width: 768px) {
  .education-table th,
  .education-table td {
    padding: 12px;
    font-size: 12px;
  }
}
</style>
