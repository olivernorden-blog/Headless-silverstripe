<template>
  <div>
    <p>This is using the HomePage template</p>
    <h1>{{ currentPage.Title }}</h1>
    <div class="content" v-html="currentPage.Content"></div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['currentPage'])
  }
}
</script>

<style>
</style>