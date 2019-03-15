<template>
  <div id="nav">
    <nav class="navbar is-info" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <div class="navbar-item">
          <h1 class="has-text-white">
            <font-awesome-icon :icon="['fas', 'user-alt']" size="lg"/>&nbsp;Daichi Yoshida's PortForio
          </h1>
        </div>
        <div
          class="navbar-burger burger"
          v-bind:class="{ 'is-active': menuActive }"
          v-on:click="menuToggle()"
          data-target="navbar_menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div
        id="navbar_menu"
        class="navbar-menu has-background-info"
        v-bind:class="{ 'is-active': menuActive }"
      >
        <div class="navbar-start">
          <router-link class="navbar-item has-text-white" to="/">Home</router-link>
          <router-link class="navbar-item has-text-white" to="/profile">Profile</router-link>
          <router-link class="navbar-item has-text-white" to="/skill">Skill</router-link>
          <router-link class="navbar-item has-text-white" to="/repositories">Repositories</router-link>
        </div>
        <div class="navbar-end"></div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuActive: false
    };
  },
  methods: {
    // メニューバーのトグルコントロール
    menuToggle() {
      this.menuActive = !this.menuActive;
    }
  }
};
</script>

<style scoped>
#title {
  font-size: 150%;
}
</style>
