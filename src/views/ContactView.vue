<template>
  <section id="contact" class="section contact-section">
    <div class="container">
      <div class="contact-copy">
      <span class="kicker">Let's connect</span>
      <h2>Get in touch</h2>
      <p>I'm always interested in learning, collaborating and exploring opportunities to build meaningful software. Drop me a message below.</p>
      </div>
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
.contact-section { background: linear-gradient(180deg, #17243a 0%, #142137 55%, #101827 100%); padding: 82px 0; }
.contact-section .container { display: grid; grid-template-columns: minmax(0, .95fr) minmax(0, 1.05fr); gap: 72px; align-items: start; }
.contact-section .kicker { font-size: 12px; letter-spacing: .12em; margin-bottom: 18.2px; }
.contact-section h2 { font-size: clamp(35px, 3.8vw, 49px); line-height: 1.17; margin-bottom: 26.2px; }
.contact-section p { margin: 0; color: var(--muted); font-size: 16px; line-height: 1.75; }
.form-panel { width: 100%; border: 1px solid #3b5876; border-radius: 16px; padding: 24px; background: var(--panel); box-shadow: 0 18px 38px rgba(4,11,22,.15); transition: border-color .24s, box-shadow .24s; }
.form-panel.reveal { transition: opacity 640ms var(--motion-ease), translate 640ms var(--motion-ease), border-color .24s, box-shadow .24s; }
.form-panel:focus-within { border-color: var(--accent); box-shadow: 0 18px 40px rgba(4,11,22,.2), 0 0 0 2px rgba(86,148,232,.15); }
.contact-form { width: 100%; margin: 0; }
.name-row { display: grid; grid-template-columns: minmax(0, 1fr) minmax(0, 1fr); gap: 14px; }
.form-group { min-width: 0; margin: 0 0 17px; }
.form-group label { display: block; margin: 0 0 8px; color: #f1f5fd; font-size: 14px; font-weight: 700; line-height: 1.4; }
.form-group label span { color: #22d3ee; }
.form-group input, .form-group textarea { display: block; width: 100%; max-width: 100%; background: var(--background); color: var(--text); border: 1px solid #45617f; border-radius: 7px; font-size: 14px; line-height: 1.5; padding: 12px 14px; box-shadow: none; transition: border-color .2s, box-shadow .2s, background .2s; }
.form-group textarea { min-height: 140px; resize: vertical; }
.form-group input { height: 40px; }
.form-group input:focus, .form-group textarea:focus { border-color: var(--accent); outline: none; box-shadow: 0 0 0 3px rgba(86,148,232,.18); }
.submit-btn { background: var(--button); color: #fff; border: 0; border-radius: 9px; font-size: 14px; font-weight: 800; line-height: 1; min-height: 46px; padding: 0 25px; transition: transform .22s var(--motion-ease), background .22s, box-shadow .22s; }
.submit-btn:hover { background: #4786db; transform: translateY(-2px); box-shadow: 0 10px 22px rgba(6,13,28,.27); }
@media (min-width: 741px) and (max-width: 1050px) {
  .contact-section .container { gap: 35px; }
  .contact-section h2 { margin-bottom: 34.4px; }
}
@media (max-width: 740px) {
  .contact-section { padding: 62px 0; background: linear-gradient(180deg, #17243a, #101827); }
  .contact-section .container { grid-template-columns: minmax(0, 1fr); gap: 27px; }
  .contact-section .kicker { margin-bottom: 13px; }
  .contact-section h2 { margin-bottom: 8px; }
  .contact-section p { font-size: 15px; }
  .name-row { grid-template-columns: minmax(0, 1fr); }
}
@media (prefers-reduced-motion: reduce) { .submit-btn:hover { transform: none; } }
</style>
