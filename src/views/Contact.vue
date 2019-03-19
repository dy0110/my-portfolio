<template>
  <div id="contact">
    <div class="box is-shadowless">
      <section class="hero">
        <div class="hero-body">
          <h1 class="title">
            <font-awesome-icon :icon="['fas', 'at']"/>&nbsp;連絡先
          </h1>
          <div class="container">
            <div class="columns is-multiline is-centered">
              <div class="column is-half">
                <div class="card">
                  <div class="card-content">
                    <p class="subtitle">メールアドレスはこちら</p>
                    <p>
                      <font-awesome-icon :icon="['fas', 'envelope']"/>&nbsp;&nbsp;メアド書く
                      <font-awesome-icon :icon="['fas', 'at']"/>gmail.com
                    </p>
                  </div>
                  <footer class="card-footer">
                    <p class="card-footer-item">
                      <b-tooltip label="GitHubはこちら" class="is-info">
                        <a href="https://github.com/dy0110" target="_blank" class="has-text-info">
                          <font-awesome-icon :icon="['fab', 'github']" size="lg"/>
                        </a>
                      </b-tooltip>
                    </p>
                    <p class="card-footer-item">
                      <b-tooltip label="Instagram(趣味アカ)はこちら" class="is-info">
                        <a href target="_blank" class="has-text-info">
                          <font-awesome-icon :icon="['fab', 'instagram']" size="lg"/>
                        </a>
                      </b-tooltip>
                    </p>
                  </footer>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: "contact"
};
</script>

<style scoped>
.has-text-dark {
  font-size: 20px;
}
</style>
