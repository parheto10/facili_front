<template>
  <div class="offres">
    <div class="hero is-large">
      <div style="margin-top: 10px">
        <div class="has-text-centered" style="margin-bottom: -15px">
          <a href="/" style="color: #000; font-weight: bold; background-color: #7EC8E3; font-size: 20px">Créer une offre</a>
        </div>
        <hr />
        <div class="tabs is-toggle is-fullwidth is-medium" style="margin-top: -15px">
          <ul>
            <li>
              <a>
                <span class="icon"><i class="fas fa-home fa-1x fa-angle-left" aria-hidden="true"></i></span>
              </a>
            </li>
            <li class="is-active">
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
        <h1 class="is-underlined" style="font-size: 20px; color: #7030A0">Vos services de FRET</h1>
        <div class="tabs is-fullwidth is-small" style="margin-top: 10px">
          <ul>
            <li><a>Avion</a></li>
            <li><a>Bateau</a></li>
            <li><a>Car</a></li>
            <li><a>Camion</a></li>
          </ul>
        </div>
        <button class="button is-medium modal-button" style="background-color: #9F9FEF" aria-haspopup="true" @click="showModal">Ajouter une Offre</button>
        <!--        <router-link to="/transporteurs/add_agence" class="button" style="background-color: #9F9FEF">Ajouter une agence</router-link>-->
      </div>
    </section>
    <div class="modal" :class="{'is-active': showModalFlag}">
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">Formulaire Agence</p>
          <button class="delete" aria-label="close" @click="cancelModal"></button>
        </header>
        <section class="modal-card-body">
          <form v-on:submit.prevent="submitForm">
            <div class="field is-horizontal">
              <div class="field-label is-normal">
                <label class="label">Nom de Votre Offre</label>
              </div>
              <div class="field-body">
                <div class="field">
                  <p class="control">
                    <input class="input" type="email" placeholder="Recipient email">
                  </p>
                </div>
              </div>
            </div>
            <div class="field is-horizontal">
              <div class="field-label is-normal">
              <label class="label">Agence De Départ</label>
              </div>
              <div class="field-body">
                <div class="field">
                  <p class="control">
                    <input class="input" type="email" placeholder="Recipient email">
                  </p>
                </div>
              </div>
            </div>
            <div class="field is-horizontal">
              <div class="field-label is-normal">
              <label class="label">Agence De Livraison</label>
              </div>
              <div class="field-body">
                <div class="field">
                  <p class="control">
                    <input class="input" type="email" placeholder="Recipient email">
                  </p>
                </div>
              </div>
            </div>
            <div class="container has-text-centered">
              <div class="columns is-multiline">
                <div class="column is-4">
                  <div class="field is-fullwidth">
                    <label>Prix/Kilo</label>
                    <div class="control">
                      <input type="number" class="input" placeholder="Prix/kilo">
                    </div>
                  </div>
                </div>
                <div class="column is-4">
                  <div class="field is-fullwidth">
                    <label>Devise</label>
                    <div class="control">
                      <input type="text" class="input" placeholder="Devise">
                    </div>
                  </div>
                </div>
                <div class="column is-4">
                  <div class="field is-fullwidth">
                    <label>Disponibilité(kg)</label>
                    <div class="control">
                      <input type="number" class="input" placeholder="Disponibilité(kg)">
                    </div>
                  </div>
                </div>
              </div>
              <div class="columns is-multiline">
                <div class="column is-12">
                  <div class="card">
                    <div class="card-content">
                      <div class="field is-horizontal">
                        <div class="field-label">
                          <label class="label">Switch</label>
                        </div>
                        <div class="field-body">
                          <div class="field"><!---->
                            <label class="switch is-rounded">
                              <input type="checkbox" true-value="true" value="false">
                              <span class="check"></span>
                              <span class="control-label"> Default </span>
                            </label><!---->
                          </div>
                        </div><!---->
                      </div>
<!--                      <div class="field">-->
<!--                        <label>Service d’enlèvement à domicile</label>-->
<!--                        <input type="checkbox" name="switchRoundedOutlinedDefault" class="switch is-rounded is-outlined" checked="checked">-->
<!--                      </div>-->
                      <div class="field">
                        <label>Service de livraison à domicile</label>
                        <input type="checkbox" name="switchRoundedOutlinedDefault" class="switch is-rounded is-outlined" checked="checked">
                      </div>
<!--                      <div class="field is-horizontal">-->
<!--                        <div class="field-label is-normal">-->
<!--                          <label class="label">Service d’enlèvement à domicile</label>-->
<!--                        </div>-->
<!--                        <div class="field-body">-->
<!--                          <div class="field">-->
<!--                            <p class="control">-->
<!--                              <input class="input" type="email" placeholder="Recipient email">-->
<!--                            </p>-->
<!--                          </div>-->
<!--                        </div>-->
<!--                      </div>-->
<!--                      <div class="field is-horizontal">-->
<!--                        <div class="field-label is-normal">-->
<!--                          <label class="label">Service d’enlèvement à domicile</label>-->
<!--                        </div>-->
<!--                        <div class="field-body">-->
<!--                          <div class="field">-->
<!--                            <p class="control">-->
<!--                              <input class="input" type="email" placeholder="Recipient email">-->
<!--                            </p>-->
<!--                          </div>-->
<!--                        </div>-->
<!--                      </div>-->
                    </div>
                  </div>
                </div>
              </div>
            </div>

<!--            <div class="notification is-danger" v-if="errors.length">-->
<!--              <p-->
<!--                  v-for="error in errors"-->
<!--                  v-bind:key="error"-->
<!--              >-->
<!--                {{ error }}-->
<!--              </p>-->
<!--            </div>-->

            <hr />
            <div class="field">
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

<script src="https://cdn.jsdelivr.net/npm/bulma-switch"></script>
<script>
import axios from "axios";
import {toast} from "bulma-toast";
// import lodash from 'https://cdn.skypack.dev/bulma-switch';
// import bulmaCalendar from '../node_modules/bulma-extensions/bulma-calendar/dist/bulma-calendar.min.js';

export default {
  name: "Offres",
  data(){
    return {
      // errors: [],
      showModalFlag: false,
      okPressed: false,
    }
  },
  methods: {
    // submitForm() {
    //   console.log('submitForm')
    //   this.errors = []
    //
    //   if (this.pays === '') {
    //     this.errors.push('Veuillez Choisir le Pays SVP... !!!')
    //   }
    //
    //   if (this.ville === '') {
    //     this.errors.push('Veuillez Choisir la Ville SVP... !!!')
    //   }
    //
    //   if (this.nom === '') {
    //     this.errors.push("Veuillez Entrer le Nom de l'Agence SVP... !!!")
    //   }
    //
    //   if (this.email === '') {
    //     this.errors.push("Veuillez Entrer l'Email de l'Agence SVP... !!!")
    //   }
    //
    //   if (this.ouverture === '') {
    //     this.errors.push("Veuillez Entrer l'Heure D'ouverture de l'Agence SVP... !!!")
    //   }
    //
    //   if (this.fermeture === '') {
    //     this.errors.push("Veuillez Entrer l'Heure De Fermeture de l'Agence SVP... !!!")
    //   }
    //
    //   if (!this.errors.length) {
    //     const agence = {
    //       // partenaire: this.partenaire,
    //       pays: this.pays,
    //       ville: this.ville,
    //       nom: this.nom,
    //       telephone: this.telephone,
    //       email: this.email,
    //       adresse: this.adresse,
    //       code_postal: this.code_postal,
    //       ouverture: this.ouverture,
    //       fermeture: this.fermeture,
    //       fonction: this.fonction,
    //     }
    //
    //     axios
    //         .post('api/v1/agences/', agence)
    //         .then(response => {
    //           console.log(response.data)
    //           toast({
    //             message: 'Agence créée avec Succès !',
    //             type: 'is-success',
    //             dismissible: true,
    //             pauseOnHover: true,
    //             duration: 2000,
    //             position : 'top-center',
    //           })
    //           this.$router.push('/transporteurs/agences')
    //         })
    //         .catch(error => {
    //           if (error.response) {
    //             for (const property in error.response.data) {
    //               this.errors.push(`${property}: ${error.response.data[property]}`)
    //             }
    //             console.log(JSON.stringify(error.response.data))
    //           } else if (error.message) {
    //             this.errors.push('Une Erreur est Srvenue, Réessayer à Nouveau !!')
    //             console.log(JSON.stringify(error))
    //           }
    //         })
    //   }
    // },
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

<style scoped src="bulma/css/bulma.min.css">

</style>