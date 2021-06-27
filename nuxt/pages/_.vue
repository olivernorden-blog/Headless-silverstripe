<template>
  <component :is="pageData.ClassName" />
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  components: {
    Page: () => import(/* webpackChunkName: "Page" *//* webpackPrefetch: true */ '../pagetypes/Page'),
    HomePage: () => import(/* webpackChunkName: "HomePage" *//* webpackPreload: true */ '../pagetypes/HomePage'),
  },
  async asyncData ({ params, query, error, $axios }) {
    let url = params.pathMatch
      ? params.pathMatch
      : ''
    if (query.stage) {
      const queryString = `?stage=${query.stage}`
      url += queryString
    }
    try {
      const { data, headers } = await $axios.get(`api/url/${url}`)
      if (headers['content-type'] === 'application/json') {
        return {
          pageData: data
        }
      }
      error({ statusCode: 403, message: 'Permission denied' })
    } catch (err) {
      error({ statusCode: 404, message: 'Page not found' })
    }
  },
  created () {
    this.setCurrentPage(this.pageData)
  },
  methods: mapMutations(['setCurrentPage']),
  head () {
    return {
      title: this.pageData.Title || '',
    }
  }
}
</script>

<style>
</style>