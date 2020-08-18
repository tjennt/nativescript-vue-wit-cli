// Import vue, vuex, localstorage
import Vue from "nativescript-vue";
import Vuex from "vuex";
import * as AppSetting from "application-settings";

// Import components: app, home
import App from "./components/App";
import Home from "./components/Home";


// Import data vuex
import store from "./store";
import {mapState, mapActions} from 'vuex';

// Import locale
import vi from './assets/lang/vi.json';
import en from './assets/lang/en.json';


Vue.config.silent = (TNS_ENV === 'production');

Vue.use(Vuex);

Vue.mixin({
  computed: {

  },
  mounted() {

  },
  methods: {

  },
  data() {
    return {
      goFrame: Home
    }
  }
});

new Vue({
    render (h) {
        return h(
          App,
          [
            // h(this.drawerContent, { slot: 'drawerContent' }),
            h(this.goFrame, { slot: 'mainContent' })
          ]
        )
    },
    store
}).$start();