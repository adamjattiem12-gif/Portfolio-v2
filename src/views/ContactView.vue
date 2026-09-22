<template>
  <section class="contact-section">
    <div class="container">
      <div class="contact-header">
        <h1>Get in <span class="highlight">Touch</span></h1>
        <p>Feel free to reach out with any questions or opportunities</p>
      </div>
      <div class="contact-content">
        <form class="contact-form" action="https://formspree.io/f/mgoqgngy" method="POST">
          <div class="form-group">
            <label for="name">Name</label>
            <input type="text" id="name" name="name" placeholder="Your Name" required>
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" id="email" name="email" placeholder="your.email@example.com" required>
          </div>
          <div class="form-group">
            <label for="subject">Subject</label>
            <input type="text" id="subject" name="subject" placeholder="Subject of your message" required>
          </div>
          <div class="form-group">
            <label for="message">Message</label>
            <textarea id="message" name="message" placeholder="Your message here..." required></textarea>
          </div>
          <button type="submit" class="submit-btn">Send Message</button>
        </form>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact-section {
  padding: 80px 0;
  background: linear-gradient(135deg, #1a1f2e 0%, #0f1419 100%);
  min-height: 100vh;
}
.contact-header {
  text-align: center;
  margin-bottom: 60px;
}
.contact-header h1 {
  font-size: 48px;
  font-weight: 700;
  color: #fff;
  margin-bottom: 15px;
}
.contact-header p {
  font-size: 16px;
  color: #a0a0a0;
  max-width: 600px;
  margin: 0 auto;
}
.contact-content {
  max-width: 700px;
  margin: 0 auto;
}
.contact-form {
  background-color: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 40px;
}
.form-group {
  margin-bottom: 25px;
  display: flex;
  flex-direction: column;
}
.form-group label {
  font-size: 14px;
  font-weight: 600;
  color: #fff;
  margin-bottom: 8px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}
.form-group input,
.form-group textarea {
  background-color: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 6px;
  padding: 12px 15px;
  font-size: 14px;
  color: #fff;
  font-family: inherit;
  transition: all 0.3s ease;
}
.form-group input::placeholder,
.form-group textarea::placeholder {
  color: #666;
}
.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  background-color: rgba(0, 123, 255, 0.1);
  border-color: #007bff;
  box-shadow: 0 0 10px rgba(0, 123, 255, 0.2);
}
.form-group textarea {
  min-height: 150px;
  resize: vertical;
}
.submit-btn {
  width: 100%;
  padding: 14px;
  background: linear-gradient(135deg, #007bff 0%, #0056cc 100%);
  border: none;
  border-radius: 6px;
  color: #fff;
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  cursor: pointer;
  transition: all 0.3s ease;
}
.submit-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(0, 123, 255, 0.3);
}
.submit-btn:active {
  transform: translateY(0);
}
</style>
