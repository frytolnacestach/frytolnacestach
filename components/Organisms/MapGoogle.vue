<template>
    <div class="o-map-google">
        <div class="o-map-google__outer">
            <div class="o-map-google__inner loading-image -green">
                <div class="o-map-google__container">
                    <div class="o-map-google__map" ref="map" style="width: 100%; height: 400px;"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default defineComponent({
        name: 'OrganismsoMapGoogleComponent',

        props: {
            place: {
                type: Array,
                required: true
            }
        },

        data() {
            const { place } = this
            
            return {
                isHydrated: false,
                center: { 
                    lat: 0,
                    lng: 0
                },
                zoom: place[0].zoom[0].google,
                zoomControl: true,
                mapTypeControl: false,
                scaleControl: false,
                streetViewControl: false,
                rotateControl: false,
                fullscreenControl: true,
                disableDefaultUi: false,
                styles: [
                    {
                        "featureType": "poi.attraction",
                        "elementType": "all",
                        "stylers": [
                            {
                                "visibility": "on"
                            },
                            {
                                "color": "#20547e"
                            },
                            {
                                "saturation": "0"
                            },
                            {
                                "lightness": "13"
                            },
                            {
                                "weight": "2.00"
                            }
                        ]
                    },
                    {
                        "featureType": "poi.attraction",
                        "elementType": "labels.icon",
                        "stylers": [
                            {
                                "weight": "0.01"
                            },
                            {
                                "invert_lightness": true
                            }
                        ]
                    },
                    {
                        "featureType": "poi.business",
                        "elementType": "all",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "poi.business",
                        "elementType": "labels.icon",
                        "stylers": [
                            {
                                "visibility": "on"
                            }
                        ]
                    },
                    {
                        "featureType": "poi.park",
                        "elementType": "all",
                        "stylers": [
                            {
                                "visibility": "on"
                            },
                            {
                                "color": "#207b7e"
                            },
                            {
                                "lightness": "13"
                            },
                            {
                                "weight": "2.00"
                            }
                        ]
                    },
                    {
                        "featureType": "poi.park",
                        "elementType": "labels.icon",
                        "stylers": [
                            {
                                "invert_lightness": true
                            }
                        ]
                    },
                    {
                        "featureType": "poi.school",
                        "elementType": "all",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "water",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "visibility": "on"
                            }
                        ]
                    }
                ]
            }
        },

        mounted() {
            this.fetchPlaceData()
            this.initMap()
            this.$nextTick(() => {
                this.isHydrated = true
            })
        },

        methods: {
            initMap() {
                this.map = new google.maps.Map(this.$refs.map, {
                    center: this.center,
                    zoom: this.zoom,
                    zoomControl: this.zoomControl,
                    mapTypeControl: this.mapTypeControl,
                    scaleControl: this.scaleControl,
                    streetViewControl: this.streetViewControl,
                    rotateControl: this.rotateControl,
                    fullscreenControl: this.fullscreenControl,
                    disableDefaultUI: this.disableDefaultUi,
                    styles: this.styles
                })
            },

            fetchPlaceData() {
                if (this.place && this.place.length > 0 && this.place[0].coordinates && this.place[0].coordinates.length > 0) {
                    
                    const latitude = this.place[0].coordinates[0].latitude
                    const longitude = this.place[0].coordinates[0].longitude

                    // Kontrola, zda hodnoty jsou ve formě čísla
                    if (!isNaN(parseFloat(latitude)) && !isNaN(parseFloat(longitude))) {
                        this.center.lat = parseFloat(latitude)
                        this.center.lng = parseFloat(longitude)
                    } else {
                        this.center.lat = latitude
                        this.center.lng = longitude
                    }
                }
            }
        }
    })
</script>