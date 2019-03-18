<template>
  <div class="repositories">
    <div class="box is-shadowless">
      <section class="hero">
        <div class="hero-body">
          <h1 class="title">
            <font-awesome-icon :icon="['fas', 'code-branch']"/>&nbsp;Git Hubリポジトリ一覧
          </h1>
          <div class="container">
            <div v-if="repoItems.length === 0">
              <b-loading :is-full-page="true" :active.sync="isLoading" :can-cancel="true"></b-loading>
            </div>
            <div v-else class="columns is-multiline">
              <repositori-item></repositori-item>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import RepositoriItem from "../components/RepositoriItem";
import axios from "axios";
import { error } from "util";

export default {
  components: {
    RepositoriItem
  },
  data() {
    return {
      isLoading: true,
      repoItems: []
    };
  },
  created() {
    // TODO axiosを使ってGitHubAPIを叩く
    axios
      .get("https://api.github.com/users/dy0110/repos?per_page=100")
      .then(response => {
        console.log(response);
        this.repoItems = response;
      })
      .catch(error => {
        console.log("GitHubAPI Error !");
      })
      .then(() => {
        this.isLoading = false;
      });
  }
};
</script>