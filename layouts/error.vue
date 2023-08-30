<template>
	<main class="t-main -bg-person -pt-menu">
		
		<!-- SECTION - Hero -->
		<section class="t-section -p0 mb-1 mt-2">
            <div class="t-section__inner">
                <oError404 :headline="headline" :perex="perex" />
            </div>
        </section>
        <!-- SECTION - Hero END -->
		
	</main>
</template>

<script>
	import oError404 from '../components/organisms/oError404.vue'

	export default {
		name: 'ErrorLayout',
		layout: 'empty',

		components: {
			oError404
		},

		props: {
			error: {
				type: Object,
				default: null
			}
		},

		data() {
			return {
				headline: "Error 404",
				perex: "Je mi to líto ale tato stránka neexistuje"
			}
		},

		head () {
			const title = this.error.statusCode === 404 ? this.pageNotFound : this.otherError
			return {
				title
			}
		}
	}
</script>

<style scoped>
</style>
