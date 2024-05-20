<template>
    <div>
        <GMapMap
            :center="center"
            :zoom="13"
            :options="options"
            style="width: 100%; height: 400px">
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
        data() {
            return {
                center : { lat: this.user_lat, lng: this.user_lng },
                options : { mapId: "370b58f4df099767" },
            };
        },
    };
</script>