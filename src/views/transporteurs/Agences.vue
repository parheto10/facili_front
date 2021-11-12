<template>
  <div class="agences">
    <div class="hero is-large">
      <div style="margin-top: 10px">
        <div class="has-text-centered" style="margin-bottom: -15px">
          <a href="/" style="color: #000; font-weight: bold; background-color: #7EC8E3; font-size: 20px">Créer une offre</a>
        </div>
        <hr />
        <div class="tabs is-toggle is-fullwidth is-medium" style="margin-top: -15px">
          <ul>
            <li class="is-active">
              <a>
                <span class="icon"><i class="fas fa-home fa-1x fa-angle-left" aria-hidden="true"></i></span>
              </a>
            </li>
            <li>
              <a>
                <span class="icon"><i class="fas fa-box fa-1x" aria-hidden="true"></i></span>
              </a>
            </li>
            <li>
              <a>
                <span class="icon"><i class="fas fa-envelope fa-1x" aria-hidden="true"></i></span>
              </a>
            </li>
            <li>
              <a>
                <span class="icon"><i class="fas fa-bars fa-x" aria-hidden="true"></i></span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <section class="is-large">
      <div class="has-text-centered" style="margin-top: 10px;">
        <h1 class="is-underlined" style="font-size: 20px; color: #7030A0">Vos Agences</h1>
        <div class="tabs is-fullwidth is-small" style="margin-top: 10px">
          <ul>
            <li><a>point de Dépôt</a></li>
            <li><a>point de Livraison</a></li>
            <li><a>point de relais</a></li>
          </ul>
        </div>
        <button class="button is-medium modal-button" style="background-color: #9F9FEF" aria-haspopup="true" @click="showModal">Ajouter une agence</button>
        <!--        <router-link to="/transporteurs/add_agence" class="button" style="background-color: #9F9FEF">Ajouter une agence</router-link>-->
      </div>
    </section>
    <div class="modal" :class="{'is-active': showModalFlag}">
      <div class="modal-background"></div>
      <div class="modal-card is-fullwidth is-link">
        <header class="modal-card-head">
          <p class="modal-card-title">Formulaire Agence</p>
          <button class="delete" aria-label="close" @click="cancelModal"></button>
        </header>
        <section class="modal-card-body">
          <form v-on:submit.prevent="submitForm">
            <div class="field is-fullwidth">
              <label>Pays</label>
              <div class="control is-fullwidth">
                <country-select class="pays" v-model="pays" :country="pays" topCountry="FR" />
                <!--                      <input type="text" class="input" v-model="pays" placeholder="Pays">-->
              </div>
            </div>

            <div class="field is-fullwidth">
              <label>Ville</label>
              <div class="control">
                <region-select class="ville" v-model="ville" :country="pays" :region="ville" />
              </div>
            </div>

            <div class="field is-fullwidth">
              <label>Nom Agence</label>
              <div class="control">
                <input type="text" class="input" v-model="nom" placeholder="Nom Agence">
              </div>
            </div>
            <div class="field is-fullwidth">
              <label>Type Agence</label>
              <div class="control is-fullwidth">
                <div class="select is-fullwidth">
                  <select name="" id="" v-model="fonction">
                    <option value="DEPOT">DEPOT</option>
                    <option value="RETRAIT">RETRAIT</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="field is-fullwidth">
              <label>Heure d'ouverture</label>
              <div class="control is-fullwidth">
                <timeselector v-model="heure" :required="true" :disabled="false"></timeselector>
<!--                <vue-timepicker class="heure" format="HH:mm" v-model="ouverture" style="border-radius: 5px"></vue-timepicker>-->
                <!--                <input type="text" class="input" v-model="ouverture" placeholder="Heure d'ouverture">-->
              </div>
            </div>

            <div class="field is-fullwidth">
              <label>Heure de Fermeture</label>
              <div class="control is-fullwidth">
                <timeselector v-model="heure" :required="true" :disabled="false"></timeselector>
<!--                <vue-timepicker class="heure" format="HH:mm" v-model="fermeture"></vue-timepicker>-->
                <!--                <input type="text" class="input" v-model="fermeture" placeholder="Heure de Fermeture">-->
              </div>
            </div>

            <div class="field is-fullwidth">
              <label>Email</label>
              <div class="control">
                <input type="email" class="input" v-model="email" placeholder="Email Agence">
              </div>
            </div>

            <div class="field is-fullwidth">
              <label>Téléphone</label>
              <div class="control">
                <vue-phone-number-input v-model="telephone" />
              </div>
            </div>

            <div class="field is-fullwidth">
              <label>Adresse</label>
              <div class="control">
                <input type="text" class="input" v-model="adresse" placeholder="Adresse">
              </div>
            </div>
            <div class="field is-fullwidth">
              <label>Code Postal</label>
              <div class="control">
                <input type="text" class="input" v-model="code_postal" placeholder="Code Postal">
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
            <div class="field is-fullwidth">
              <div class="control">
                <button class="button is-success is-rounded mb-2">Enregistrer</button>
              </div>
            </div>
          </form>
        </section>
<!--        <footer class="modal-card-foot">-->
<!--          &lt;!&ndash;          <button class="button is-success" @click="okModal">Ok</button>&ndash;&gt;-->
<!--          <button align="right" class="button is-danger" @click="cancelModal">Fermer</button>-->
<!--        </footer>-->
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import axios from "axios";
import {toast} from "bulma-toast";
import VueTimepicker from 'vue2-timepicker/src'
import Timeselector from 'vue-timeselector';
export default {
  name: "Agences",
  components: {
    VueTimepicker,
    Timeselector,
  },
  data(){
    return {
      // partenaire : 'request.user',
      pays: '',
      ville: '',
      nom: '',
      email:'',
      fonction: 'DEPOT',
      telephone: '',
      adresse: '',
      ouverture: '',
      fermeture: '',
      code_postal: '',
      errors: [],
      showModalFlag: false,
      okPressed: false,
    }
  },
  methods: {
    submitForm() {
      console.log('submitForm')
      this.errors = []

      if (this.pays === '') {
        this.errors.push('Veuillez Choisir le Pays SVP... !!!')
      }

      if (this.ville === '') {
        this.errors.push('Veuillez Choisir la Ville SVP... !!!')
      }

      if (this.nom === '') {
        this.errors.push("Veuillez Entrer le Nom de l'Agence SVP... !!!")
      }

      if (this.email === '') {
        this.errors.push("Veuillez Entrer l'Email de l'Agence SVP... !!!")
      }

      if (this.ouverture === '') {
        this.errors.push("Veuillez Entrer l'Heure D'ouverture de l'Agence SVP... !!!")
      }

      if (this.fermeture === '') {
        this.errors.push("Veuillez Entrer l'Heure De Fermeture de l'Agence SVP... !!!")
      }

      if (!this.errors.length) {
        const agence = {
          // partenaire: this.partenaire,
          pays: this.pays,
          ville: this.ville,
          nom: this.nom,
          telephone: this.telephone,
          email: this.email,
          adresse: this.adresse,
          code_postal: this.code_postal,
          ouverture: this.ouverture,
          fermeture: this.fermeture,
          fonction: this.fonction,
        }

        axios
            .post('api/v1/agences/', agence)
            .then(response => {
              console.log(response.data)
              toast({
                message: 'Agence créée avec Succès !',
                type: 'is-success',
                dismissible: true,
                pauseOnHover: true,
                duration: 2000,
                position : 'top-center',
              })
              this.$router.push('/transporteurs/agences')
            })
            .catch(error => {
              if (error.response) {
                for (const property in error.response.data) {
                  this.errors.push(`${property}: ${error.response.data[property]}`)
                }
                console.log(JSON.stringify(error.response.data))
              } else if (error.message) {
                this.errors.push('Une Erreur est Srvenue, Réessayer à Nouveau !!')
                console.log(JSON.stringify(error))
              }
            })
      }
    },
    showModal() {
      this.okPressed = false;
      this.showModalFlag = true;
    },
    cancelModal() {
      this.okPressed = false;
      this.showModalFlag = false;
    }
  },
}
</script>

<style scoped>
.pays {
  /*width: 230px;*/
  height: 35px;
  border-radius: 5px;
}

.ville {
  /*width: 230px;*/
  height: 35px;
  border-radius: 5px;
}
.heure {
  width: 230px;
  height: 35px;
  border-radius: 5px;
}

.vue__time-picker input.display-time {
  border: 1px solid #d2d2d2;
  border-radius: 5px;
  width: 230px;
  height: 35px;
  /*width: 10em;*/
  /*height: 2.2em;*/
  padding: 0.3em 0.5em;
  font-size: 1em;
}
</style>