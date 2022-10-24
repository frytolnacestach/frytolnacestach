<template>
  <MenuMain />
  <LogotypeHeader />
  <ControlHamburger />

  <router-view />

  <ComponentFooter />
  <PopupCookies />
</template>

<script>
  import MenuMain from './components/MenuMain.vue'
  import LogotypeHeader from './components/LogotypeHeader.vue'
  import ControlHamburger from './components/ControlHamburger.vue'
  import ComponentFooter from './components/ComponentFooter.vue'
  import PopupCookies from './components/PopupCookies.vue'

  export default {
    name: 'App',
    components: {
      MenuMain,
      LogotypeHeader,
      ControlHamburger,
      ComponentFooter,
      PopupCookies
    }
  }
</script>

<style>

</style>
