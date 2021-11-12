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
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">Formulaire Agence</p>
          <button class="delete" aria-label="close" @click="cancelModal"></button>
        </header>
        <section class="modal-card-body">
          <form v-on:submit.prevent="submitForm">
            <div class="field">
              <label>Pays</label>
              <div class="control">
                <country-select class="phone" v-model="pays" :country="pays" topCountry="FR" />
                <!--                      <input type="text" class="input" v-model="pays" placeholder="Pays">-->
              </div>
            </div>

            <div class="field">
              <label>Ville</label>
              <div class="control">
                <region-select class="phone" v-model="ville" :country="pays" :region="ville" />
              </div>
            </div>

            <div class="field">
              <label>Nom Agence</label>
              <div class="control">
                <input type="text" class="input" v-model="nom" placeholder="Nom Agence">
              </div>
            </div>
            <div class="field">
              <label>Type Agence</label>
              <div class="control">
                <div class="select">
                  <select name="" id="" v-model="fonction">
                    <option value="DEPOT">DEPOT</option>
                    <option value="RETRAIT">RETRAIT</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="field">
              <label>Heure d'ouverture</label>
              <div class="control">
                <vue-timepicker format="HH:mm" v-model="ouverture"></vue-timepicker>
                <!--                <input type="text" class="input" v-model="ouverture" placeholder="Heure d'ouverture">-->
              </div>
            </div>

            <div class="field">
              <label>Heure de Fermeture</label>
              <div class="control">
                <vue-timepicker format="HH:mm" v-model="fermeture"></vue-timepicker>
                <!--                <input type="text" class="input" v-model="fermeture" placeholder="Heure de Fermeture">-->
              </div>
            </div>

            <div class="field">
              <label>Email</label>
              <div class="control">
                <input type="email" class="input" v-model="email" placeholder="Email Agence">
              </div>
            </div>

            <div class="field">
              <label>Téléphone</label>
              <div class="control">
                <vue-phone-number-input v-model="telephone" />
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
        </section>
        <footer class="modal-card-foot">
          <!--          <button class="button is-success" @click="okModal">Ok</button>-->
          <button align="right" class="button is-danger" @click="cancelModal">Fermer</button>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MesOffres"
}
</script>

<style scoped>

</style>