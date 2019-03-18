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
          <slot name="rate_skill"></slot>
        </div>
      </footer>
    </div>
  </div>
</template>

<style>
.card{
  display: flex;
  flex-direction: column;
}
.card-footer{
  margin-top: auto;
}
</style>

