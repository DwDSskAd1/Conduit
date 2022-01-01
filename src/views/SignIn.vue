<template>
  <div class="auth-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-6 offset-md-3 col-xs-12">
          <h1 class="text-xs-center">{{ $route.name }}</h1>
          <p class="text-xs-center">
            <router-link to="/SignUp">Need an account?</router-link>
          </p>

          <ul v-if="userEmailUsed" class="error-messages">
            <li>That email is already taken</li>
          </ul>

          <login-form @submit="onSubmit" :is-login="true" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LoginForm from "@/components/LoginForm.vue";
export default {
  name: "SignUp",
  components: { LoginForm },
  data() {
    return {
      userName: "",
      userEmail: JSON.parse(localStorage.getItem("userEmail")),
      userPwd: "",
      userEmailUsed: false,
    };
  },
  methods: {
    onSubmit() {
      // TODO: 登陆接口
      console.log(456);
    },
  },
  watch: {
    SignUp() {},
  },
};
</script>

<style scoped>
</style>
