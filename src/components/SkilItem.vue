<template>
  <div class="column is-4">
    <div class="card">
      <header class="card-header">
        <div class="card-header-title">
          <slot name="skill_title"></slot>
        </div>
      </header>
      <div class="card-content">
        <div class="content">
          <slot name="skill_content"></slot>
          <br><slot name="skill_history"></slot>
        </div>
      </div>
      <footer class="card-footer">
        <div class="card-footer-item">
          <rate :length="5" :value="rateValue" :readonly="true" :ratedesc="['自信なし', '勉強中', '基本はわかる', '自信あり', '完璧']" />
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    rateValue: Number
  }
}
</script>


