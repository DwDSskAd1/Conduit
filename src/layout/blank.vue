<template>
  <div class="blank">
    <v-header/>
    <router-view />
  </div>
</template>
<script>
import VHeader from "./components/Header.vue"
export default {
  components: {VHeader}
}
</script>