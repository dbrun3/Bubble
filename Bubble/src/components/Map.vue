<template>
    <GMapMap
        :center="center"
        :zoom="7"
        :options="options"
        style="width: 400px; height: 400px">
    </GMapMap>
</template>
<script>
    export default {
        name: "Map",
        data() {
            return {
                center: { lat: 51.093048, lng: 6.84212 },
                options : {
                    mapId: "370b58f4df099767"
                }
            };
        },
    };
</script>