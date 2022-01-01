<template>
  <div class="auth-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-6 offset-md-3 col-xs-12">
          <h1 class="text-xs-center">{{ $route.name }}</h1>
          <p class="text-xs-center">
            <router-link to="/SignIn">Have an account?</router-link>
          </p>
          <ul v-if="0" class="error-messages">
            <li>That email is already taken</li>
          </ul>

          <sign-up-form @submit="signUp" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SignUpForm from "@/components/LoginForm.vue";
import axios from "@/api/axios";

export default {
  name: "SignUp",
  components: {
    SignUpForm,
  },
  methods: {
    signUp(form) {
      const { username, email, password } = form;
      axios({
        method: "post",
        url: "/users",
        data: {
          user: {
            username,
            email,
            password,
          },
        },
      })
      .then((res) => {
        console.log(res);
      });
    },
  },
};
</script>

<style scoped>
</style>
