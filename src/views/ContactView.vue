<template>
  <section id="contact" class="section contact-section">
    <div class="container">
      <span class="kicker">Let's connect</span>
      <h2>Get in touch</h2>
      <p>I'm always interested in learning, collaborating and exploring opportunities to build meaningful software. Drop me a message below.</p>
      <div class="form-panel">
        <form class="contact-form" action="https://formspree.io/f/mgoqgngy" method="POST">
          <div class="name-row">
            <div class="form-group">
              <label for="name">Name <span aria-hidden="true">*</span></label>
              <input id="name" name="name" type="text" required autocomplete="given-name">
            </div>
            <div class="form-group">
              <label for="surname">Surname <span aria-hidden="true">*</span></label>
              <input id="surname" name="surname" type="text" required autocomplete="family-name">
            </div>
          </div>
          <div class="form-group">
            <label for="email">Email <span aria-hidden="true">*</span></label>
            <input id="email" name="email" type="email" required autocomplete="email">
          </div>
          <div class="form-group">
            <label for="message">Message</label>
            <textarea id="message" name="message" rows="5"></textarea>
          </div>
          <button type="submit" class="submit-btn">Submit</button>
        </form>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact-section { background: linear-gradient(180deg, #111725, #111a2b); }
.contact-section .container { max-width: 660px; }
.contact-section .kicker { font-size: 12px; color: #5aa0ff; }
.contact-section h2 { font-size: clamp(30px, 4vw, 48px); }
.contact-section p { margin: 0 0 30px; color: #a9b6cb; font-size: 16px; line-height: 1.7; }
.form-panel { width: 100%; border: 1px solid rgba(115, 146, 200, .22); border-radius: 10px; padding: 24px; background: #151e2f; }
.contact-form { width: 100%; margin: 0; }
.name-row { display: grid; grid-template-columns: minmax(0, 1fr) minmax(0, 1fr); gap: 14px; }
.form-group { min-width: 0; margin: 0 0 17px; }
.form-group label { display: block; margin: 0 0 8px; color: #f1f5fd; font-size: 14px; font-weight: 700; line-height: 1.4; }
.form-group label span { color: #22d3ee; }
.form-group input, .form-group textarea { display: block; width: 100%; max-width: 100%; background: #0f1626; color: #f8faff; border: 1px solid #3a4f78; border-radius: 6px; font-size: 14px; line-height: 1.5; padding: 12px 14px; box-shadow: none; }
.form-group textarea { min-height: 140px; resize: vertical; }
.form-group input { height: 40px; }
.form-group input:focus, .form-group textarea:focus { border-color: #3b82f6; outline: 2px solid rgba(37, 99, 235, .25); }
.submit-btn { background: #2563eb; color: #fff; border: 0; border-radius: 6px; font-size: 14px; font-weight: 800; line-height: 1; min-height: 46px; padding: 0 25px; }
.submit-btn:hover { background: #3b82f6; }
@media (max-width: 740px) { .name-row { grid-template-columns: minmax(0, 1fr); } }
</style>
