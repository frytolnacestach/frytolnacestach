<template>
    <div class="o-affilate-booking">
        <ins class="bookingaff"
            data-aid="2328995"
            data-target_aid="2328995"
            data-prod="map"
            data-width="100%"
            data-height="590"
            data-lang="ualng"
            data-dest_id="0"
            data-dest_type="landmark"
            :data-latitude=latitude
            :data-longitude=longitude
            :data-landmark_name="landmarkName"
            data-mwhsb="0"
            :data-address="address"
            :data-zoom=zoom>
            <!-- Anything inside will go away once widget is loaded. -->
            <a href="//www.booking.com?aid=2328995">Booking.com</a>
        </ins>
    </div>
</template>

<script>
    export default {
        name: 'OrganismsoAffilateBookingComponent',

        props: {
            latitude: {
                type: Number,
                required: true
            },
            longitude: {
                type: Number,
                required: true
            },
            landmarkName: {
                type: String,
                required: true
            },
            address: {
                type: String,
                required: true
            },
            dateStart: {
                type: String,
                required: false
            },
            dateEnd: {
                type: String,
                required: false
            },
            zoom: {
                type: Number,
                required: true
            }
        },

        methods:{
            iframeTitle() {
                let elementIframe = document.querySelector('.o-affilate-booking iframe')
                if (elementIframe) {
                    elementIframe.setAttribute('title', 'Booking')
                } else {
                    setTimeout(this.iframeTitle, 100)
                }
            }
        },

        mounted() {
            const script = document.createElement('script')
            script.type = 'text/javascript'
            script.async = true
            script.src = '//cf.bstatic.com/static/affiliate_base/js/flexiproduct.js'
            document.body.appendChild(script)
            this.iframeTitle()
        }
    }
</script>