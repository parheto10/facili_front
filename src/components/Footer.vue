<template>
  <footer class="footer" style="background-color: #e9e9e9;">
    <hr>
    <div class="column is-12 has-text-centered" style="margin-top: -35px;">
      <router-link to="/transporteurs" class="button is-medium" style="background-color: #e9e9e9; font-weight: bold">
        Espace Partenaires
      </router-link>
    </div>
    <p class="has-text-centered mb-6" style="font-size: 13px">
      <a href="/">Mentions Légales</a> |
      <a href="/">Qui Sommes Nous ?</a> |
      <a href="/">CGU / CGV</a> |
      <a href="/">Nous Contacter</a>
    </p>
  </footer>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style scoped>
.footer {
  margin-top: -150px;
  height: 200px;
}
</style>