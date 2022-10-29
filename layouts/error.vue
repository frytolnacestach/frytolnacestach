<template>
  <main class="t-main">
      <section class="t-section">
          <SectionHero 
              :headline="headline"
              :perex="perex"
          />
      </section>

      <section class="t-section">
          <div class="o-build">
              <div class="o-build__outer">
                  <div class="o-build__inner">
                      <div class="o-build__text">
                          SEKCE SE PŘIPRAVUJE
                      </div>
                  </div>
              </div>
          </div>
      </section>
  </main>
</template>

<script>
import SectionHero from '../components/SectionHero.vue'

export default {

  name: 'PageNotfound',
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  components: {
      SectionHero
  },
  data() {
      return {
          headline: "Error 404",
          perex: "Je mi to líto ale tato stránka neexistuje"
      }
  },
  head () {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title
    }
  }
}
</script>

<style scoped>
</style>
