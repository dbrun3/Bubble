<template>
    <GMapMap
        :center="center"
        :zoom="13"
        :options="options"
        style="width: 400px; height: 400px">
    </GMapMap>
</template>
<script>

    export default {
        name: "Map",

        props: {
            screen_width: Number,
            user_lat: Number,
            user_lng: Number,
        },
        data() {
            return {
                center: { lat: this.user_lat, lng: this.user_lng },
                options : { mapId: "370b58f4df099767" },
            };
        },
    };
</script>