<template>
  <form>
    <fieldset class="form-group">
      <input
        class="form-control form-control-lg"
        type="text"
        placeholder="Your Name"
        v-model="form.username"
        v-if="!isLogin"
      />
    </fieldset>
    <fieldset class="form-group">
      <input
        class="form-control form-control-lg"
        type="text"
        placeholder="Email"
        v-model="form.email"
      />
    </fieldset>
    <fieldset class="form-group">
      <input
        class="form-control form-control-lg"
        type="password"
        placeholder="Password"
        v-model="form.password"
      />
    </fieldset>
    <button
      class="btn btn-lg btn-primary pull-xs-right"
      @click.prevent="submit"
    >
      {{ btnName }}
    </button>
  </form>
</template>

<script>
export default {
  props: {
    isLogin: Boolean,
  },
  computed: {
    btnName() {
      return this.isLogin ? "登陆" : "注册";
    },
  },
  data() {
    return {
      form: {
        username: "",
        email: "qwerdfb45@163.com",
        password: "qwer",
      },
    };
  },
  methods: {
    submit() {
      this.$emit("submit", this.form);
    },
  },
};
</script>

<style>
</style>
