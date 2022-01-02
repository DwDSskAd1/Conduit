<template>
  <div class="auth-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-6 offset-md-3 col-xs-12">
          <h1 class="text-xs-center">{{ $route.name }}</h1>
          <p class="text-xs-center">
            <router-link to="/SignIn">Have an account?</router-link>
          </p>
          <ul class="error-messages">
            <!-- 将错误对象全部输出，对象也可以使用 v-for, 具体可查看文档 -->
            <template v-for="(messages, field) in errors">
              <li v-for="(message, index) in messages" :key="index">
                {{ field }} {{ message }}
              </li>
            </template>
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
  data() {
    return {
      errors: {},
    };
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
          console.log("@@", res);
          // return res
        })
        .catch((e) => {
          // errors 是一个对象，{email: ['该邮箱已注册'], username: ['xxx']}
          this.errors = e.response.data.errors;
          // 通过 dir 可以查看错误对象的信息
          console.dir(e);
        });
    },
  },
};
</script>

<style scoped>
</style>
