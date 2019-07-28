<template>

<div class="tw-bg-white tw-mx-auto tw-min-h-full tw-font-sans">
  Layout
  <div class="tw-absolute tw-pin-t tw-pin-r tw-w-full tw-h-full tw-bg-grey-lighter tw-opacity-75 tw-flex tw-items-center tw-justify-around"
  style="z-index: 9999">

    <div class="lds-hourglass"></div>
    
  </div>


  <div class="container tw-pt-6">
    <router-view></router-view>
  </div>

</div>
</template>

<script>
  
  import { mapState } from 'vuex';

  
  export default {

    components:{
    },
    data() {
      return {
  
      }
    },
    mounted() {
      
    },
    
  }
</script>

<style lang="scss">
  @import "../../../node_modules/ag-grid-community/dist/styles/ag-grid.css";
  @import "../../../node_modules/ag-grid-community/dist/styles/ag-theme-balham.css";
</style>