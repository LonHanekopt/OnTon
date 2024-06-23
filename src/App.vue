<template>
  <nav>
    <navView />
  </nav>
  
  <router-view></router-view>

  <footer class="container">
    <footerView />
  </footer>
</template>

<script>
import navView from './components/navView.vue';
import footerView from './components/footerView.vue';


export default {
  name: "App",
  components:{
    navView,
    footerView,

  }
};
</script>

<style lang="css">

</style>
