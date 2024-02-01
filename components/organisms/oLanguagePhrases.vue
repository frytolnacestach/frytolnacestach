<template>
    <div class="o-language-phrases">
        <div class="o-language-phrases__outer">
            <div class="o-language-phrases__inner">
                <h2 class="o-language-phrases__headline">Základní jazykové fráze</h2>
                <div class="o-language-phrases__items">
                    <div class="o-language-phrases__item-headline">
                        <div class="o-language-phrases__box -bold">Česky</div>
                        <div class="o-language-phrases__box -bold">Překlad</div>
                        <div class="o-language-phrases__box -bold">Fonetický překlad</div>
                    </div>
                    <div class="o-language-phrases__item" v-for="item in data" v-bind:key="item.czech">
                        <div class="o-language-phrases__box">
                            <span class="o-language-phrases__value -czech" v-if="item.czech">{{ item.czech }}</span>
                        </div>
                        <div class="o-language-phrases__box">
                            <span class="o-language-phrases__value -foreign-original" v-if="item.foreign_original">{{ item.foreign_original }}</span>
                            <br v-if="item.foreign_latin && item.foreign_original && item.foreign_latin !== item.foreign_original" />
                            <span class="o-language-phrases__value -foreign-latin" v-if="item.foreign_latin && item.foreign_original && item.foreign_latin !== item.foreign_original">({{ item.foreign_latin }})</span>
                        </div>
                        <div class="o-language-phrases__box">
                            <span class="o-language-phrases__value -phonetic-transcription" v-if="item.phonetic_transcription">{{ item.phonetic_transcription }}</span>
                        </div>
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
        },

        head() {
            // Empty Array
            if (!this.data && this.data.length === 0) {
                return { script: [] };
            }
            // Return
            const jsonldData = {
                type: 'application/ld+json',
                json: {
                    "@context": "https://schema.org",
                    "@type": "ItemList",
                    "name": "Základní jazykové fráze",
                    "itemListElement": this.data.map((itemData, index) => {
                        return {
                            "@type": "ListItem",
                            "position": index + 1,
                            "item": {
                                "name": itemData.czech,
                                "perex": (itemData.foreign_original + (itemData.foreign_latin ? ( "(" + itemData.foreign_latin + ")") : "" ))
                            }
                        }
                    })
                }
            }

            return { script: [jsonldData] }
        }
    }
</script>