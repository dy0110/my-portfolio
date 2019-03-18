<template>
  <div class="home">
    <div class="box is-shadowless">
      <section class="hero">
        <div class="hero-body">
          <div class="container">
            <h1 class="title">
              <font-awesome-icon :icon="['fas', 'laptop']"/>&nbsp;Daichi Yoshida's PortForio
            </h1>
            <h2 class="subtitle">このサイトは Yoshida Daichi のポートフォリオです。
              <br>Vue.js + VueRouter + Buefy + axios で構築されています。
            </h2>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "home",
  components: {}
};
</script>
