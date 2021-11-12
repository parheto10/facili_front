<template>
    <div class="accueil">
      <div class="hero is-medium" style="background-color: #7030A0">
        <div class="hero-body has-text-centered">
          <img class="logo" src="@/assets/img/logo.png" alt="logo">
        </div>
      </div>
      <section class="section" style="background-color: #FFCCFF; margin-top: -90px">
        <div class="container">
          <div class="columns is-multiline" style="margin-top: 50px; height: 155px">
            <div class="column is-12 has-text-centered">
              <a href="/transporteurs/connexion" class="button is-medium mt-1">
                Se Conneter
              </a>
              <p style="margin-top: 15px; font-weight: bold">Mot de Passe Oublié ?</p>
            </div>
          </div>
        </div>
      </section>
      <section class="section" style="background-color: #9F9FEF">
        <div class="container">
          <div class="columns is-multiline" style="height: 170px">
            <div class="column is-12 has-text-centered">
              <router-link to="/transporteurs/inscription" class="button is-medium mt-6">
                Devenir Partenaire
              </router-link>
            </div>
          </div>
        </div>
      </section>
    </div>
</template>

<script>
export default {
  name: "AccueilTransporteur"
}
</script>

<style scoped>
.logo {
  width: 250px;
  margin-top: 10px;
}
</style>