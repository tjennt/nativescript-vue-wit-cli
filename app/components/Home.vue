<template>
    <Page class="page">
        <ActionBar class="action-bar">
            <Label class="action-bar-title" :text="home"/>
        </ActionBar>
        <Label class="title-center" :text="content"></Label>
    </Page>
</template>

<script>

  export default {
    data(){
      return {
        home: 'HOME APP DEMO',
        content: 'HOME APP DEMO TITLE'
      }
    }
  };
</script>

<style scoped lang="scss">
    // Start custom common variables
    @import '~@nativescript/theme/scss/variables/blue';
    // End custom common variables

    // Custom styles
    .title-center {
      margin-top: 200;
      text-align: center;
    }
</style>
