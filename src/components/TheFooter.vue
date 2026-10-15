<template>
  <footer class="footer">
    <div class="container">
      <span>&copy; 2026 Adam Jattiem</span>
      <a href="#top">Back to top &uarr;</a>
    </div>
  </footer>
</template>

<style scoped>
.footer { border-top: 1px solid var(--line); padding: 27px 0; font-size: 12px; color: #7f8da3; }
.footer .container { display: flex; justify-content: space-between; gap: 20px; }
.footer a { color: #b4c9ef; }
@media (max-width: 390px) { .footer .container { flex-direction: column; } }
</style>
