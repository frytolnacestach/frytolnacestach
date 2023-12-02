<template>
    <div class="o-language-phrases">
        <div class="o-language-phrases__outer">
            <div class="o-language-phrases__inner">
                <h2 class="o-language-phrases__headline">Základní jazykové fráze</h2>
                <div class="o-language-phrases__items">
                    <div class="o-language-phrases__item" v-for="item in data" v-bind:key="item.czech">
                        <span class="o-language-phrases__value -czech" v-if="item.czech">{{ item.czech }}</span>
                        <span class="o-language-phrases__value -foreign" v-if="item.foreign">{{ item.foreign }}</span>
                        <span class="o-language-phrases__value -foreign-language" v-if="item.foreign_language">{{ item.foreign_language }}</span>
                        <span class="o-language-phrases__value -phonetic-transcription" v-if="item.phonetic_transcription">{{ item.phonetic_transcription }}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'OrganismsoLanguagePhrasesComponent',

        props: {
            data: {
                type: Object,
                required: true
            }
        }
    }
</script>