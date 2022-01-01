<template>
  <div>
    <div class="auth-page">
      <div class="container page">
        <div class="row">
          <div class="col-md-6 offset-md-3 col-xs-12">
            <h1 class="text-xs-center">{{ $route.name }}</h1>
            <p v-if="$route.name === 'SignUp'" class="text-xs-center">
              <router-link to="/SignIn">Have an account?</router-link>
            </p>
            <p v-if="$route.name === 'SignIn'" class="text-xs-center">
              <router-link to="/SignUp">Need an account?</router-link>
            </p>

            <ul v-if="userEmailUsed" class="error-messages">
              <li>That email is already taken</li>
            </ul>

            <form>
              <fieldset v-if="$route.name === 'SignUp'" class="form-group">
                <input
                  class="form-control form-control-lg"
                  type="text"
                  placeholder="Your Name"
                  v-model="userName"
                />
              </fieldset>
              <fieldset class="form-group">
                <input
                  class="form-control form-control-lg"
                  type="text"
                  placeholder="Email"
                  v-model="userEmail"
                />
              </fieldset>
              <fieldset class="form-group">
                <input
                  class="form-control form-control-lg"
                  type="password"
                  placeholder="Password"
                  v-model="userPwd"
                />
              </fieldset>
              <button
                v-if="$route.name === 'SignUp'"
                class="btn btn-lg btn-primary pull-xs-right"
                @click="SignUp"
              >
                {{ $route.name }}
              </button>
              <button
                v-if="$route.name === 'SignIn'"
                class="btn btn-lg btn-primary pull-xs-right"
                @click="SignIn"
              >
                {{ $route.name }}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SignUp",
  data() {
    return {
      userName: "",
      userEmail: JSON.parse(localStorage.getItem("userEmail")),
      userPwd: "",
      userEmailUsed: false,
    };
  },
  methods: {
    SignUp() {
      console.log(123);
      
    },
    SignIn() {
      console.log(456);
    },
  },
  watch: {
    SignUp() {
      
    },
  },
};
</script>

<style scoped>
</style>