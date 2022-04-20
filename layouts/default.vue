<template>
  <div class="main">
    <main-nav />

    <main>
      <Nuxt />
    </main>

    <!-- <main-footer /> -->
  </div>
</template>

<script>
// import MainFooter from '~/components/MainFooter.vue'
import MainNav from '~/components/MainNav.vue'

export default {
  components: { MainNav },
  name: 'DefaultLayout'
}
</script>