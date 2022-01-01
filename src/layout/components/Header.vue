<template>
  <nav class="navbar navbar-light">
    <div class="container">
      <router-link class="navbar-brand" to="/Home">conduit</router-link>
      <ul class="nav navbar-nav pull-xs-right">
        <!-- Add "active" class when you're on that page" -->
        <!-- <li class="nav-item">
          <a class="nav-link active" href="">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="">
            <i class="ion-compose"></i>&nbsp;New Article
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="">
            <i class="ion-gear-a"></i>&nbsp;Settings
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="">Sign in</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="">Sign up</a>
        </li> -->
        <li class="nav-item" v-for="item in navArr" :key="item.id">
          <router-link
            class="nav-link"
            :to="{ name: item.name }"
            active-class="active"
          >
            <i :class="item.icon"></i>&nbsp;{{ item.name }}
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      navArr: [
        { id: 1, name: "Home", path: "/Home" },
        {
          id: 2,
          name: "NewArticle",
          icon: "ion-compose",
          path: "/NewArticle",
        },
        { id: 3, name: "Settings", icon: "ion-gear-a", path: "/Settings" },
        { id: 4, name: "SignIn", path: "/SignIn" },
        { id: 5, name: "SignUp", path: "/SignUp" },
      ],
    };
  },
};
</script>

<style>
</style>
