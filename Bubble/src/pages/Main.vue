<template>
	<div id = "parent">

		<div id = "map">
			<Map ref="bmap" @map-loaded="onMapLoaded" v-if="userPosFound" :user_lat=this.lat :user_lng=this.lng></Map>
		</div>        
		
		<div id = "post">
			<PostBubble @new-item="handleNewBubble" :user_lat=this.lat :user_lng=this.lng></PostBubble>
		</div>
	</div>
</template>

<script>
import axios from 'axios';
import {Geolocation} from '@capacitor/geolocation';
import PostBubble from '@/components/PostBubble.vue';
import BubbleTable from '@/components/BubbleTable.vue';
import Map from '@/components/Map.vue';


export default {

	name: "Main",
	components: {
		"PostBubble": PostBubble,
		"BubbleTable": BubbleTable,
		"Map": Map
	},
	data() {
		return {
			userPosFound: false,
			lat: Number,
			lng: Number,
			bubbles: []
		};
	},
	async mounted() {
		await this.getCurrentLocation();
        await this.fetchData();
    },
	methods: {

		async getCurrentLocation() {
			const coordinates = await Geolocation.getCurrentPosition();
  			this.lat = coordinates.coords.latitude
			this.lng = coordinates.coords.longitude
			this.userPosFound = true
			console.log('Current position:', coordinates);
		},

		async fetchData() {
			try {
				const response = await axios.get(import.meta.env.VITE_SERVER_URL);
				if (Array.isArray(response.data)) {
					this.bubbles = response.data;
					if(this.$refs.bmap){
						this.$refs.bmap.inputBubbles(this.bubbles);
					}
                    console.log(this.bubbles);
				} else {
					console.error('Unexpected data format:', response.data);
				}
			} catch (error) {
				console.error('Error fetching data:', error);
			}
		},
		async handleNewBubble(newBubble) {
			await this.getCurrentLocation();
            await axios.post(import.meta.env.VITE_SERVER_URL + "/post", newBubble).then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
            this.fetchData();
        },

		onMapLoaded () {
			this.$refs.bmap.inputBubbles(this.bubbles);
		}
    }
}
</script>