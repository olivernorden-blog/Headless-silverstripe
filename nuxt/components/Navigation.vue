<template>
  <nav class="nav">
    <ul>
      <li v-for="Link in navigation" :key="Link.ID">
        <NuxtLink :to='Link.Link'>{{Link.MenuTitle}}</NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: mapGetters(['navigation']),
}
</script>

<style scoped>
  .nav {
    height: 50px;
    padding: 10px;
    background: #000;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  .nav ul {
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
  }

  .nav ul li a {
    margin: 5px 15px;
  }
</style>