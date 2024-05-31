<template>
    <footer class="t-footer hidden-print" role="contentinfo">
        <div class="o-footer">

            <!-- ANIMATION Flight -->
            <div class="o-footer__animation">
                <OrganismsAnimationFlight />
            </div>
            <!-- ANIMATION Flight END-->

            <!-- NAV Footer -->
            <div class="o-footer__nav">
                <MoleculesNavFooter />
            </div>
            <!-- NAV Footer END -->

            <!-- Social icons-->
            <div class="o-footer__nav">
                <MoleculesSocialIcons />
            </div>
            <!-- Social icons END -->

            <!-- COPYRIGHT -->
            <div class="o-footer__copyright">
                <OrganismsCopyright />
            </div>
            <!-- COPYRIGHT END -->

        </div>
    </footer>
</template>

<script>
    export default defineComponent({
        name: 'ComponentFooterComponent'
    })
</script>