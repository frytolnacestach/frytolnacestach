<template>
    <div class="o-world-type">
        <div class="o-world-type__outer">
            <div class="o-world-type__inner">
                <div class="o-world-type__items">
                    <div class="o-world-type__item" v-for="item in items" :key="item.id">
                        <div class="o-world-type__container">
                            <div class="o-world-type__image">
                                <div :class="'o-world-type__image-file' + item.styleThemaItem">
                                    <NuxtLink class="o-world-type__image-link" :to="item.url" :alt="item.name"></NuxtLink>
                                </div>
                            </div>
                            <h2 class="o-world-type__text">
                                <NuxtLink class="o-world-type__link" :to="item.url">{{ item.name }}<span class="o-world-type__link-length"> ({{ item.length }} položek) </span></NuxtLink>
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'OrganismsoWorldTypeComponent',
    
        props: {
            items: {
                type: Array,
                required: true
            }
        }
    }
</script>