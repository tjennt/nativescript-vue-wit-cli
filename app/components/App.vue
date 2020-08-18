<template lang="html">
  <Frame>
      <slot name="mainContent"/>     
  </Frame>
</template>

<script>
  import Home from "./Home";
  import {mapState, mapActions} from 'vuex';

  export default {
    components: {
    },
    data() {
      return {
      }
    },
    computed: {
      ...mapState('auth', ['checkLogin'])
    }
  }
</script>

<style scoped lang="scss">
    // Start custom common variables
    @import '~@nativescript/theme/scss/variables/blue';
    // End custom common variables

    // Custom styles
</style>
