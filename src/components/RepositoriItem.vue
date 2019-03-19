<template>
  <div class="column is-4">
    <div class="card">
      <header class="card-header">
        <div class="card-header-title">
          <slot name="repo_title"></slot>
        </div>
        <b-tooltip label="リポジトリを開く" class="is-info">
          <a
            v-bind:href="repoUrl"
            class="card-header-icon has-text-info"
            target="_blank"
          >
            <span class="icon">
              <font-awesome-icon :icon="['fas', 'external-link-alt']" />
            </span>
          </a>
        </b-tooltip>
      </header>
      <div class="card-content">
        <div class="content">
          <div v-if="repoDescription === null">
            説明なし
          </div>
          <div v-else>
            {{ repoDescription }}
          </div>
          <br />
          <div>
            <slot name="repo_language"></slot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    repoUrl: String,
    repoDescription: String
  }
};
</script>
