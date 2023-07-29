<template>
    <nav class="m-nav-user" :class="{'-open': statusOpen}" role="navigation">
        <div class="m-nav-user__outer">
            <div class="m-nav-user__inner">
                <ul class="m-nav-user__items">                    
                    <li class="m-nav-user__item">
                        <NuxtLink class="js_m-nav-user__link m-nav-user__link -setting" :to='"/cestovatel/" + $route.params.slug' exact-active-class="-active" :class="{'-active': $route.path === '/ucet/profil'}">Základní informace</NuxtLink>
                    </li>
                    <li class="m-nav-user__item">
                        <NuxtLink class="js_m-nav-user__link m-nav-user__link -review" :to='"/cestovatel/" + $route.params.slug + "/recenze"' exact-active-class="-active" :class="{'-active': $route.path === '/ucet/profil/recenze'}">Recenzoval jsem</NuxtLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
    export default {
        name: 'MoleculesmNavUserComponent',

        props: {
            statusOpen: {
                type: Boolean,
                required: true
            }
        },
    }
</script>