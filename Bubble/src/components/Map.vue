<template>
    <div>
        <GMapMap
            ref="mapRef"
            :center="center"
            :zoom="13"
            :options="options"
            style="width: 100%; height: 300px">

            <GMapMarker
                :key="index"
                v-for="(b, index) in bubbles"
                :position="b.loc"
                :clickable="true"/>
        </GMapMap>
    </div>
</template>
<script>

    export default {
        name: "Map",

        props: {
            user_lat: Number,
            user_lng: Number,
        },

        mounted() {
            this.$emit('map-loaded');
        },

        data() {
            return {
                center : { lat: this.user_lat, lng: this.user_lng },
                options : { mapId: "370b58f4df099767" },
                bubbles: [],
            };
        },
        methods: {
            // Generate new bubble
            addBubble(text) {
                const svg = '../assets/SVG/default_bubble.svg';
                return 'data:image/svg+xml,' + svg.replace('text', text);
            },

            // Get array of bubbles
            inputBubbles(data) {
                this.bubbles = data
            }
        }
    };
</script>