<template>
	<main class="t-main -bg-person -pt-menu">
		<div class="t-main__content">
			
			<!-- SECTION - Hero -->
			<section class="t-section -p0 mb-1 mt-2">
				<div class="t-section__inner">
					<OrganismsError404 :headline="headline" :perex="perex" />
				</div>
			</section>
			<!-- SECTION - Hero END -->
			
		</div>
	</main>
</template>

<script>
	export default defineComponent({
		name: 'ErrorLayout',
		
		layout: 'empty',

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
	})
</script>

<style scoped>
</style>
