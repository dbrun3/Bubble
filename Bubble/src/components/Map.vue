<template>
    <div>
        <GMapMap class = "map"
            ref="mapRef"
            :center="center"
            :zoom="13"
            :options="options"
            style="width: 100%; height: 89vh">

            <GMapMarker
                :key="index"
                v-for="(b, index) in bubbles"
                :position="b.loc"
                :clickable="true"
                :icon="this.addBubble(b.msg)"
                />
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
                options : { mapId: "370b58f4df099767", mapTypeControl: false,
                            fullscreenControl:false,streetViewControl:false},
                bubbles: [],
            };
        },
        methods: {

            formatMsg(msg) {
                const tokens = msg.split(' ');
                var line = ""
                var lineNum = 0;
                var arr = [];

                tokens.forEach(function(token) {
                    if((line + token).length < 11) {
                        line += " " + token;
                    } else {
                        arr.push(line);
                        line = token;
                        lineNum++;
                    }
                });
                arr.push(line);
                for(let i = lineNum + 1; i < 4; i++) {
                    arr.push(" ");
                }
                return arr;
            },
            // Generate new bubble icon from string
            addBubble(msg) {     
                const text = this.formatMsg(msg);
                const svg = '<svg id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1342.45 1057.81">  <defs>    <style>      .cls-1, .cls-2 {        fill: #000;      }      .cls-1, .cls-3, .cls-4 {        stroke-width: 0px;      }      .cls-2 {        font-family: ComicSansMS, "Comic Sans MS";        font-size: 135px;      }      .cls-3 {        fill: #fff;      }      .cls-4 {        fill: #292627;      }    </style>  </defs>  <g id="eie2" data-name="eie2">    <g>      <path class="cls-3" d="M640.88,707.68c78.22-2.05,135.53-.49,182.44-.49,128.66,0,333.43-9.32,435.42-95.3,60.1-50.67,67.19-152.11,67.19-266.21,0-96.17-14.53-201.04-76.96-254.71C1170.82,23.76,975.43,11.02,806.96,11.02s-333.7.15-437.18,79.94c-90.19,69.54-98.02,235.82-98.02,310.89,0,69.88,5.05,215.35,90.91,263.77,33.59,18.94,77.96,28.3,126.76,32.1l-49.98,200.3,201.42-190.34Z"/>      <path class="cls-1" d="M439.45,909.03c-1.91,0-3.83-.49-5.56-1.51-4.22-2.47-6.31-7.43-5.13-12.18l46.86-187.8c-49.88-4.99-88.69-15.61-118.36-32.34-39.97-22.54-67.88-66.59-82.97-130.92-12.14-51.79-13.55-106.1-13.55-142.44,0-109.82,17.75-254.41,102.31-319.61,48.05-37.05,113.3-60.63,199.5-72.08C638.86,0,724.32,0,806.96,0c237.61,0,391.89,27.02,456.53,82.6,54.37,46.74,78.96,132.79,78.96,263.07,0,108.63-14.67,219.32-80.29,274.63-78.14,65.88-219.21,105.24-438.85,105.24-13.14,0-27.17-.12-42.02-.25-38.35-.33-89.03-2.55-143.26-1.2l-191.01,181.93c-2.1,1.98-4.82,3.01-7.57,3.01ZM806.96,18.36c-81.93,0-166.64-3.67-241.51,6.28-82.24,10.93-151.64,32.82-199.96,75.04-35.16,30.71-56.14,77.98-71.46,147.03-9.9,44.65-11.25,96.84-11.25,155.13,0,35.25,1.34,87.85,12.97,137.41,13.62,58.09,37.96,97.37,72.34,116.76,29.33,16.54,69.3,26.59,122.2,30.72,3.23.25,6.19,1.91,8.08,4.54,1.9,2.63,2.54,5.96,1.75,9.11l-40.86,163.76,174.05-164.47c1.97-1.86,4.57-2.93,7.28-3.01,56.59-1.48,101.38-1.1,140.9-.75,14.8.13,28.79.25,41.83.25,214.22,0,354.32-30.33,428.32-92.71,58.39-49.23,63.27-154.34,63.27-257.79,0-121.76-24.6-204.64-73.12-246.36-33.65-28.93-94.72-49.99-181.54-62.62-67.82-9.86-150.68-18.33-253.29-18.33Z"/>    </g>    <text id="text" text-anchor="middle" letter-spacing="12" class="cls-2" transform="translate(420.6 222.57) scale(.95 1)"><tspan x="400" y="0">line1</tspan><tspan x="400" y="130">line2</tspan><tspan x="400" y="260">line3</tspan><tspan x="400" y="390">line4</tspan></text>  </g></svg>';
                return { url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(svg).replace("line1", text[0]).replace("line2", text[1]).replace("line3", text[2]).replace("line4", text[3]), scaledSize: new google.maps.Size(120,120), anchor: new google.maps.Point(30,100)}
            },

            // Get array of bubbles
            inputBubbles(data) {
                this.bubbles = data;
            }
        }
    };
</script>