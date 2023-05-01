<template>
	<main class="t-main -bg-person -pt-menu">
		
		<!-- SECTION - Hero -->
		<section class="t-section -p0 mb-1 mt-2">
            <div class="t-section__inner">
                <oHero :headline="headline" :perex="perex" />
            </div>
        </section>
        <!-- SECTION - Hero END -->

		<!-- SECTION - Build -->
		<section class="t-section">
			<div class="t-section__inner">
				<oBuild />
			</div>
		</section>
		<!-- SECTION - Build END -->
		
	</main>
</template>

<script>
	import oBuild from '../components/organisms/oBuild.vue'
	import oHero from '../components/organisms/oHero.vue'

	export default {
		name: 'PageNotfound',
		layout: 'empty',

		components: {
			oBuild,
			oHero
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
