<template>
  <div class="dashboard">
    <div class="hero is-info">
      <div class="hero-body has-text-centered">
        <h1 class="title">Dashboard</h1>
      </div>
    </div>
    <div class="hero is-link">
      <div class="hero-body has-text-centered">
        <div class="container">
          <div class="columns is-multiline">
            <div class="column is-3">
              <div class="box has-text-centered">
              <span class="icon is-size-2 has-text-info">
                <i class="fas fa-home"></i>
              </span>
                <h2 class="is-size-4 mt-4 mb-4">
                  <router-link to="/transporteurs/add_offre" class="button is-info mt-2">Agences & Offres</router-link>
                </h2>
              </div>
            </div>
            <div class="column is-3">
              <div class="box has-text-centered">
              <span class="icon is-size-2 has-text-info">
                <i class="fas fa-store"></i>
              </span>
                <h2 class="is-size-4 mt-4 mb-4">
                  Gestion Clients
                </h2>
              </div>
            </div>
            <div class="column is-3">
              <div class="box has-text-centered">
              <span class="icon is-size-2 has-text-info">
                <i class="fas fa-shield-alt"></i>
              </span>
                <h2 class="is-size-4 mt-4 mb-4">
                  Parrainer un confrère
                </h2>
              </div>
            </div>
            <div class="column is-3">
              <div class="box has-text-centered">
              <span class="icon is-size-2 has-text-info">
                <i class="fas fa-shield-alt"></i>
              </span>
                <h2 class="is-size-4 mt-4 mb-4">
                  Suivi Commandes
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="column is-12">
        <div class="buttons">
          <!--          <router-link :to="{ name: 'EditMembre', params: { id: $store.state.user.id }}" class="button is-success mb-6">Modifier</router-link>-->
          <button @click="logout()" class="button is-danger">Déconnexion</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import {toast} from "bulma-toast";
export default {
  name: "DashboardTransporteurs",
  methods: {
    async logout() {
      await axios
          .post('/api/v1/token/logout/')
          .then(response => {
            console.log(response.data)
            console.log("Déconnexion")
          })
          .catch(error => {
            console.log(JSON.stringify(error))
          })

      axios.defaults.headers.common['Authorization'] = ""
      localStorage.removeItem('token')
      localStorage.removeItem('userid')
      localStorage.removeItem('username')
      this.$store.commit('removeToken')

      toast({
        message: 'Vous êtes déconnecter, Merci de votre Visite',
        type: 'is-link',
        dismissible: true,
        pauseOnHover: true,
        duration: 2000,
        position : 'top-right',
      })
      this.$router.push('/transporteurs')
    }
  }
}
</script>

<style scoped>

</style>