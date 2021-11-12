<template>
  <div class="inscription">
    <div class="hero is-info">
      <div class="hero-body has-text-centered">
        <h1 class="title">Inscription</h1>
        <h2 class="subtitle">Formulaire d'Inscription Partenaire</h2>
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

              <div class="field">
                <label>Confirmer Mot de Passe</label>
                <div class="control">
                  <input type="password" class="input" v-model="password2" placeholder="Saisir Mot de Passe A nouveau">
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
                  <button class="button is-success is-rounded mb-2">Inscription</button>
                </div>
              </div>
            </form>
            <hr>
            Avez-vous Déjà un Compte ? <router-link to="/transporteurs/connexion">Connexion</router-link>

          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";
import {toast} from "bulma-toast";
export default {
  name: "InscriptionTransporteurs",
  data() {
    return {
      username: '',
      password: '',
      password2: '',
      errors: [],
    }
  },
  methods: {
    submitForm() {
      console.log('submitForm')

      this.errors = []

      if (this.username === '') {
        this.errors.push('Veuillez Saisir votre Adresse Email SVP... !!!')
      }

      if (this.password === '') {
        this.errors.push('Veuillez Saisir votre Mot de Passe SVP... !!!')
      }

      if (this.password !== this.password2) {
        this.errors.push('Les Mots de Passe ne Concordent pas Vérifiez SVP !!!')
      }

      if (!this.errors.length){
        const formData = {
          username: this.username,
          password: this.password,
        }
        axios
            .post('/api/v1/users/', formData)
            .then(response => {
              console.log(response.data)
              toast({
                message: 'Compte Transporteur créé avec Succès !',
                type: 'is-success',
                dismissible: true,
                pauseOnHover: true,
                duration: 2000,
                position : 'top-center',
              })
              this.$router.push('/transporteurs/connexion')
            })
            .catch(error => {
              if (error.response) {
                for (const property in error.response.data) {
                  this.errors.push(`${property}: ${error.response.data[property]}`)
                }
                console.log(JSON.stringify(error.response.data))
              } else if (error.message) {
                this.errors.push('Une Erreur est Survenue, Réessayer à Nouveau !!')
                console.log(JSON.stringify(error))
              }
            })
      }
    }
  }
}
</script>

<style scoped>

</style>