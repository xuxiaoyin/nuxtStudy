<template>
  <div>
    <div class="text">hello</div>
    <AppAlert>
      <div class="app-alert">
        This is an auto-imported component.
      </div>
    </AppAlert>
  </div>
</template>

<script setup lang="ts">
const appConfig = useAppConfig();

const color = ref("red");

useHead({
  title: '首页'
})
</script>

<style lang="scss" scoped>
.text {
  color: v-bind(color);
}
.app-alert {
  color: $primary;
}
</style>
