<template>
  <div class="home">
    <div class="hero is-medium" style="background-color: #c8d2ff">
      <div class="has-text-centered">
        <img class="logo" src="@/assets/img/logo.png" alt="logo">
      </div>
    </div>

    <section class="section" style="background-color: #e4e8ff; margin-top: -40px; height: 180px">
      <div class="container">
        <div class="has-text-centered" style="margin-top: 30px">
          <span class="icon is-size-2 has-text-info">
              <router-link to="/">
                  <i class="fas fa-search"></i>
              </router-link>
          </span>
          <p class="mt-3">Consulter les offres</p>
        </div>
      </div>
    </section>
    <section class="section" style="background-color: #e9e9e9; margin-bottom: 100px">
        <div class="column is-12 has-text-centered">
          <router-link to="/" class="button" style="background-color: #e9e9e9; font-weight: bold">
            Se connecter
          </router-link>
        </div>
        <div class="column is-12 has-text-centered mt-2">
          <router-link to="/clients" class="button" style="background-color: #e9e9e9; font-weight: bold">
            Pas encore client ?
          </router-link>
        </div>
    </section>
    <Footer />
  </div>
</template>

<script>
import Footer from "../components/Footer";
export default {
  name: 'Home',
  components: {
    Footer,
  }
}
</script>

<style scoped>
.logo {
  width: 250px;
  margin-top: 30px;
  margin-top: 30px;
}
</style>
