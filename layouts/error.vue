<template>
	<main class="t-main -pt-menu">
		
		<section class="t-section">
			<SectionHero 
			:headline="headline"
			:perex="perex"
			/>
		</section>

		<section class="t-section">
			<oBuild />
		</section>
	</main>
</template>

<script>
import oBuild from '../components/organisms/oBuild.vue'
import SectionHero from '../components/SectionHero.vue'

export default {
	name: 'PageNotfound',
	layout: 'empty',

	components: {
		oBuild,
		SectionHero
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
