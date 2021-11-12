<template>
  <div class="societe">
    <div class="hero is-light">
      <div class="hero-body has-text-centered">
        <h1 class="title" style="font-size: 24px">Informations Entreprise</h1>
      </div>
    </div>
    <div class="hero is-info">
      <div class="hero-body">
        <div class="is-fullwidth">
          <div class="column is-4 is-offset-4">
<!--            <form-wizard v-on:submit.prevent="submitForm">-->
<!--              <tab-content title="Situation Géographique" :selected="true">-->
<!--                <div class="field">-->
<!--                  <label>Pays</label>-->
<!--                  <div class="control">-->
<!--                    <country-select class="phone" v-model="pays" :country="pays" topCountry="FR" />-->
<!--                  </div>-->
<!--                </div>-->
<!--                <div class="field">-->
<!--                  <label>Ville</label>-->
<!--                  <div class="control">-->
<!--                    <region-select class="phone" v-model="ville" :country="pays" :region="ville" />-->
<!--                  </div>-->
<!--                </div>-->
<!--              </tab-content>-->
<!--              <tab-content title="Identification">-->
<!--                <div class="field">-->
<!--                  <label>Nom Société</label>-->
<!--                  <div class="control">-->
<!--                    <input type="text" class="input" v-model="societe" placeholder="Nom Société">-->
<!--                  </div>-->
<!--                </div>-->

<!--                <div class="field">-->
<!--                  <label>Contact 1</label>-->
<!--                  <div class="control">-->
<!--                    <vue-phone-number-input v-model="contact1" />-->
<!--                  </div>-->
<!--                </div>-->

<!--                <div class="field">-->
<!--                  <label>Contact 2</label>-->
<!--                  <div class="control">-->
<!--                    <vue-phone-number-input v-model="contact2" />-->
<!--                  </div>-->
<!--                </div>-->
<!--                <div class="field">-->
<!--                  <label>Adresse</label>-->
<!--                  <div class="control">-->
<!--                    <input type="text" class="input" v-model="adresse" placeholder="Adresse">-->
<!--                  </div>-->
<!--                </div>-->
<!--                <div class="field">-->
<!--                  <label>Code Postal</label>-->
<!--                  <div class="control">-->
<!--                    <input type="text" class="input" v-model="code_postal" placeholder="Code Postal">-->
<!--                  </div>-->
<!--                </div>-->
<!--              </tab-content>-->
<!--              <tab-content title="Informations Sociales ">-->
<!--                <div class="field">-->
<!--                  <label>KBIS</label>-->
<!--                  <div class="control">-->
<!--                    <input type="text" class="input" v-model="kbis" placeholder="KABIS">-->
<!--                  </div>-->
<!--                </div>-->

<!--                <div class="field">-->
<!--                  <label>IBAN</label>-->
<!--                  <div class="control">-->
<!--                    <input type="text" class="input" v-model="iban" placeholder="IBAN">-->
<!--                  </div>-->
<!--                </div>-->

<!--                <div class="field">-->
<!--                  <label>Police Assurance</label>-->
<!--                  <div class="control">-->
<!--                    <input type="text" class="input" v-model="police_assurance" placeholder="Police Assurance">-->
<!--                  </div>-->
<!--                </div>-->
<!--              </tab-content>-->
<!--              <div class="notification is-danger" v-if="errors.length">-->
<!--                <p-->
<!--                    v-for="error in errors"-->
<!--                    v-bind:key="error"-->
<!--                >-->
<!--                  {{ error }}-->
<!--                </p>-->
<!--              </div>-->
<!--            </form-wizard>-->
            <form v-on:submit.prevent="submitForm">
              <div class="field">
                <label>Pays</label>
                <div class="control">
                  <!--                  <vueCountriesCities @country='pays = $event' />-->
                  <country-select class="phone" v-model="pays" :country="pays" topCountry="FR" />
                  <!--                      <input type="text" class="input" v-model="pays" placeholder="Pays">-->
                </div>
              </div>

              <div class="field">
                <label>Ville</label>
                <div class="control">
                  <!--                    <input type="text" class="input" v-model="ville" placeholder="Ville">-->
                  <region-select class="phone" v-model="ville" :country="pays" :region="ville" />
                </div>
              </div>

              <div class="field">
                <label>Nom Société</label>
                <div class="control">
                  <input type="text" class="input" v-model="societe" placeholder="Nom Société">
                </div>
              </div>

              <div class="field">
                <label>Contact 1</label>
                <div class="control">
                  <vue-phone-number-input v-model="contact1" />
                </div>
              </div>

              <div class="field">
                <label>Contact 2</label>
                <div class="control">
                  <vue-phone-number-input v-model="contact2" />
                </div>
              </div>

              <div class="field">
                <label>KBIS</label>
                <div class="control">
                  <input type="text" class="input" v-model="kbis" placeholder="KABIS">
                </div>
              </div>

              <div class="field">
                <label>IBAN</label>
                <div class="control">
                  <input type="text" class="input" v-model="iban" placeholder="IBAN">
                </div>
              </div>

              <div class="field">
                <label>Police Assurance</label>
                <div class="control">
                  <input type="text" class="input" v-model="police_assurance" placeholder="Police Assurance">
                </div>
              </div>

              <div class="field">
                <label>Adresse</label>
                <div class="control">
                  <input type="text" class="input" v-model="adresse" placeholder="Adresse">
                </div>
              </div>

              <div class="field">
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
              <div class="field">
                <div class="control">
                  <button class="button is-success is-rounded mb-2">Enregistrer</button>
                </div>
              </div>
            </form>
            <hr>
            Avez-vous Déjà un Compte ? <router-link to="/partenaires/connexion">Connexion</router-link>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import {toast} from "bulma-toast";
import Vue from "vue";
import VuePhoneNumberInput from 'vue-phone-number-input';
import 'vue-phone-number-input/dist/vue-phone-number-input.css';
Vue.component('vue-phone-number-input', VuePhoneNumberInput);
// import vueCountriesCities from "vue-countries-cities";
import vueCountryRegionSelect from 'vue-country-region-select';
Vue.use(vueCountryRegionSelect);
import {FormWizard, TabContent} from 'vue-step-wizard'
import 'vue-step-wizard/dist/vue-step-wizard.css'
export default {
  name: "AddSociete",
  // components: {
  //   FormWizard,
  //   TabContent
  // },
  data() {
    return {
      pays: '',
      ville: '',
      societe: '',
      contact1: '',
      contact2: '',
      kbis: '',
      iban: '',
      police_assurance: '',
      adresse: '',
      code_postal: '',
      errors: [],
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

      if (this.societe === '') {
        this.errors.push('Veuillez Saisir le Nom de Votre Société SVP... !!!')
      }
      if (this.contact1 === '') {
        this.errors.push('Veuillez Saisir Un Numeros de Téléphone Valide SVP... !!!')
      }
      if (this.kbis === '') {
        this.errors.push('Veuillez Saisir le KABIS SVP... !!!')
      }
      if (this.iban === '') {
        this.errors.push("Veuillez Saisir l'IBAN SVP... !!!")
      }
      if (this.police_assurance === '') {
        this.errors.push("Veuillez Saisir la Police Assurance SVP... !!!")
      }
      if (this.adresse === '') {
        this.errors.push("Veuillez Saisir l'Adresse SVP... !!!")
      }
      if (this.code_postal === '') {
        this.errors.push("Veuillez Saisir le Code Postal SVP... !!!")
      }

      if (!this.errors.length){
        const formData = {
          pays: this.pays,
          ville: this.ville,
          societe: this.societe,
          contact1: this.contact1,
          contact2: this.contact2,
          kbis: this.kbis,
          iban: this.iban,
          police_assurance: this.police_assurance,
          adresse: this.adresse,
          code_postal: this.code_postal,
        }
        axios
            .post('/api/v1/transporteurs/', formData)
            .then(response => {
              console.log(response.data)
              toast({
                message: 'Société créé avec Succès !',
                type: 'is-success',
                dismissible: true,
                pauseOnHover: true,
                duration: 2000,
                position : 'top-center',
              })
              this.$router.push('/transporteurs/dashboard')
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
    }
  }
}
</script>

<style scoped>
.phone {
  width: 230px;
  height: 35px;
  border-radius: 5px;
}
</style>