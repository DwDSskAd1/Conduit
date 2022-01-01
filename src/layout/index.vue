<template>
  <div class="layout">
    <v-header />
    <router-view />
    <v-footer />
  </div>
</template>

<script>
import VHeader from "./components/Header.vue";
import VFooter from "./components/Footer.vue";
export default {
  components: { VHeader, VFooter },
};
</script>

<style>
</style>
