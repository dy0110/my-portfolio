<template>
  <div id="app">
    <nav-bar></nav-bar>
    <router-view />
    <app-footer></app-footer>
  </div>
</template>

<script>
import NavBar from "./components/NavBar";
import AppFooter from "./components/AppFooter";

export default {
  components: {
    NavBar,
    AppFooter
  }
};
</script>
