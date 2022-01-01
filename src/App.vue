<template>
  <div id="app">
    <v-header></v-header>
    <router-view />
    <v-footer></v-footer>
  </div>
</template>
<script>
import VHeader from '@/layout/components/Header.vue';
import VFooter from '@/layout/components/Footer.vue';
export default {
  name:'App',
  components: { VHeader ,VFooter},
}
</script>