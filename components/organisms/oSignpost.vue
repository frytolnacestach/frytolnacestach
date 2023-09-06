<template>
    <div class="o-signpost">
        <div class="o-signpost__outer">
            <div class="o-signpost__inner">
                <div class="o-signpost__items">
                    <div class="o-signpost__item">
                        <NuxtLink class="o-signpost__link" to="/ucet/prihlaseni">Přihlášení</NuxtLink>
                    </div>
                    <div class="o-signpost__item">
                        <NuxtLink class="o-signpost__link" to="/ucet/registrace">Registrace</NuxtLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'OrganismsoSignpostComponent'
    }
</script>