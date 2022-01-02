<template>
  <div class="auth-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-6 offset-md-3 col-xs-12">
          <h1 class="text-xs-center">{{ $route.name }}</h1>
          <p class="text-xs-center">
            <router-link to="/SignUp">Need an account?</router-link>
          </p>
          <login-form @submit="onSubmit" :is-login="true" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LoginForm from "@/components/LoginForm.vue";
import axios from "@/api/axios";

export default {
  name: "SignIn",
  components: { LoginForm },
  methods: {
    onSubmit(form) {
      const { email, password } = form;
      axios({
        method: "post",
        url: "/users/login",
        data: {
          user: {
            email,
            password,
          },
        },
      }).then((res) => {
        console.log("@", res);
        this.$store.commit("setUser", res.user);
        this.$router.push("/home");
      });
    },
  },
};
</script>

<style scoped>
</style>
