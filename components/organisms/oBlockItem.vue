<template>
    <div :class="'o-block-item'">
        <div class="o-block-item__outer">
            <div class="o-block-item__inner">
                <h2 class="o-block-item__title" :class="{ '-m0': subtitle }" v-if="title">{{ title }}</h2>
                <span class="o-block-item__title-info" v-if="subtitle">{{ subtitle}}</span>
                <span class="o-block-item__value" v-html="perexWysiwyg" v-if="perexWysiwyg"></span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'OrganismsoBlockItemComponent',

        props: {
            title: {
                type: String,
                required: false
            },
            subtitle: {
                type: String,
                required: false
            },
            perexWysiwyg: {
                type: String,
                required: false
            },
        }
    }
</script>