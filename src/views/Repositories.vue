<template>
  <div class="repositories">
    <div class="box is-shadowless">
      <section class="hero">
        <div class="hero-body">
          <h1 class="title">
            <font-awesome-icon :icon="['fas', 'code-branch']" />&nbsp;&nbsp;Git
            Hubリポジトリ一覧
          </h1>
          <div class="container">
            <div v-if="repoItems.length === 0">
              <b-loading
                :is-full-page="true"
                :active.sync="isLoading"
                :can-cancel="true"
              ></b-loading>
            </div>
            <div v-else class="columns is-multiline">
              <repositori-item
                v-for="(item, index) in repoItems"
                :key="index"
                :repoUrl="item.html_url"
                :repoDescription="item.description"
              >
                <p slot="repo_title">{{ item.name }}</p>
                <button slot="repo_language" class="button is-info is-rounded">
                  {{ item.language }}
                </button>
              </repositori-item>
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
    //axiosを使ってGitHubAPIを叩く
    axios
      .get(
        "https://api.github.com/users/dy0110/repos?per_page=100&sort=created&direction=desc"
      )
      .then(response => {
        // 成功
        this.repoItems = response.data;
        this.$toast.open({
          message: `データを取得しました`
        });
      })
      .catch(error => {
        // 失敗
        console.log("GitHubAPI Error !:" + error);
        this.$toast.open({
          message: `データの取得に失敗しました`,
          type: "is-danger"
        });
      })
      .then(() => {
        // 必ず実行
        this.isLoading = false;
      });
  }
};
</script>
