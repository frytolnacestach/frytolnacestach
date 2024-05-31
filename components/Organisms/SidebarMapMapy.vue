<template>
    <div class="o-sidebar-map-mapy">
        <div class="o-sidebar-map-mapy__outer">
            <div class="o-sidebar-map-mapy__inner">
                <div class="o-sidebar-map-mapy__map">
                    <div class="o-sidebar-map-mapy__image loading-image -gray">
                        <div v-if="images && images.find(image => image.id === idImageMap)" class="o-sidebar-map-mapy__image-lazyload">
                            <AtomsImage 
                                :alt="title ? title : 'Úvodní obrázek'" 
                                :author="images.find(image => image.id === idImageMap).author"
                                :lazy=true
                                :imageSource="images.find(image => image.id === idImageMap).source"
                                :imageName="images.find(image => image.id === idImageMap).name"
                                :sizes=imageSizes
                                :srcSet=imageSizesMedia
                                cssClassComponent="o-sidebar-map-mapy"
                            />
                        </div>
                        <div v-else class="o-sidebar-map-mapy__image-lazyload">
                            <AtomsImage 
                                :alt="title ? title : 'Úvodní obrázek'" 
                                :lazy=true
                                imageSource="/_default/"
                                imageName="no-image"
                                :sizes=imageSizes
                                :srcSet=imageSizesMedia
                                cssClassComponent="o-sidebar-map-mapy"
                            />
                        </div>
                        <a class="o-sidebar-map-mapy__image-link" :href="url" target="_blank" rel="noopener"></a>
                    </div>
                </div>
                <a class="o-sidebar-map-mapy__link" :href="url" target="_blank" rel="noopener">zobrazit mapu na mapy.cz</a>
            </div>
        </div>
    </div>
</template>

<script>
    export default defineComponent({
        name: 'OrganismsoSidebarMapMapyComponent',

        props: {
            idImageMap: {
                type: Number,
                required: true
            }, 
            url: {
                type: String,
                required: true
            },
            title: {
                type: String,
                required: true
            },
            images: {
                type: Array,
                required: true
            }
        },

        data() {
            return {
                imageSizesMedia: [
                    {
                        "mediaQueriesWidth": null,
                        "elementWidth": 320
                    }
                ],
                imageSizes: [
                    {
                        "elementWidth": 320,
                        "imageWidth": 320,
                        "orientation": "h-"
                    }
                ]
            }
        }
    })
</script>