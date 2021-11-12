<template>
  <div class="login">
    <div class="hero is-info">
      <div class="hero-body has-text-centered">
        <h1 class="title">Connexion</h1>
        <h2 class="subtitle">Formulaire de Connexion Partenaire</h2>
      </div>
    </div>
    <section class="section">
      <div class="container">
        <div class="columns">
          <div class="column is-4 is-offset-4">
            <form v-on:submit.prevent="submitForm">
              <div class="field">
                <label>Email</label>
                <div class="control">
                  <input type="email" class="input" v-model="username" placeholder="Email">
                </div>
              </div>

              <div class="field">
                <label>Mot de Passe</label>
                <div class="control">
                  <input type="password" class="input" v-model="password" placeholder="Mot de Passe">
                </div>
              </div>

              <div class="notification is-danger" v-if="errors.length">
                <p
                    v-for="error in errors"
                    v-bind:key="error"
                >
                  {{ error }}
                </p>
              </div>

              <hr />
              <div class="field">
                <div class="control">
                  <button class="button is-success is-rounded mb-2">Connexion</button>
                </div>
              </div>
            </form>
            <hr>
            Avez-vous Déjà un Compte ? <router-link to="/transporteurs/inscription">Inscription</router-link></div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";
import {toast} from 'bulma-toast'
export default {
  name: "Login",
  data() {
    return {
      username: '',
      password: '',
      errors: []
    }
  },
  methods: {
    async submitForm() {
      // this.$store.commit('setIsLoading', true)

      axios.defaults.headers.common['Authorization'] = ""
      localStorage.removeItem('token')

      const formData = {
        username: this.username,
        password: this.password
      }

      await axios
          .post('/api/v1/token/login/', formData)
          .then(response =>{
            const token = response.data.auth_token
            this.$store.commit('setToken', token)

            axios.defaults.headers.common['Authorization'] = 'Token ' + token
            localStorage.setItem('token', token)
            toast({
              message: 'Bienvenue ' + this.username,
              type: 'is-success',
              dismissible: true,
              pauseOnHover: true,
              duration: 2000,
              position : 'top-right',
            })
            this.$router.push('/transporteurs/societe')
          })
          .catch(error => {
            if (error.response) {
              for (const property in error.response.data) {
                this.errors.push(`${property}: ${error.response.data[property]}`)
              }
            } else if (error.message) {
              this.errors.push('une erreur est survenue, Réessayer SVP !!!!')
            }
          })
      // this.$store.commit('setIsLoading', false)
    }
  }
}
</script>

<style scoped>

</style>