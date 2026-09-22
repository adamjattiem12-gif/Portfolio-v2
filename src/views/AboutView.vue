<script setup>
</script>

<template>
  <section class="about-section">
    <div class="container">
      <div class="about-header">
        <h1>About <span class="highlight">Me</span></h1>
      </div>
      <div class="about-content">
        <div class="about-image">
          <img src="/profile.jpg" alt="Adam Profile" class="about-profile-img">
        </div>
        <div class="about-text">
          <p class="about-paragraph">
            Hi, I'm Adam Jattiem, an aspiring software developer and a student
            in the YouthCode programme at Life Choices Academy.
          </p>
          <p class="about-paragraph">
            I am passionate about technology, problem-solving, and creating
            digital solutions that make a difference. My journey into programming
            has introduced me to HTML, CSS, JavaScript, Python, databases, and
            full-stack web development. Every project I build helps me strengthen
            my skills and deepen my understanding of how software works.
          </p>
          <p class="about-paragraph">
            I enjoy learning new technologies, tackling coding challenges, and
            turning ideas into functional applications. When I'm not coding,
            I enjoy music and sports, which help me stay creative and motivated.
          </p>
          <p class="about-paragraph">
            My goal is to grow into a professional software developer,
            continuously improve my skills, and contribute to meaningful
            projects that have a positive impact. This portfolio showcases my
            learning journey, projects, and progress as I continue building my
            future in tech.
          </p>
          <p class="about-paragraph">
            Thank you for visiting my portfolio, and I hope you enjoy exploring
            my work.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-section {
  padding: 80px 0;
  background: linear-gradient(135deg, #1a1f2e 0%, #0f1419 100%);
  min-height: 100vh;
}
.about-header {
  text-align: center;
  margin-bottom: 60px;
}
.about-header h1 {
  font-size: 48px;
  font-weight: 700;
  color: #fff;
  margin-bottom: 15px;
}
.about-content {
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 40px;
}
.about-text {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.about-paragraph {
  font-size: 16px;
  color: #a0a0a0;
  line-height: 1.8;
  margin: 0;
}
.about-image {
  background-color: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 20px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  margin: 0 auto;
}
.about-image img {
  width: 300px;
  height: 300px;
  border-radius: 8px;
  object-fit: cover;
}
@media (max-width: 768px) {
  .about-image img {
    width: 250px;
    height: 250px;
  }
}
</style>
