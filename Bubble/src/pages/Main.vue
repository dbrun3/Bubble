<template>
	<div>
		<Map></Map>
		<h1>Test Table</h1>
		<BubbleTable ref = "btable"></BubbleTable>
        <PostBubble @new-item="handleNewBubble"></PostBubble>

	</div>
</template>

<script>
import axios from 'axios';
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
			bubbles: []
		};
	},
	computed: {
		mapConfig () {
			return {
				center: { lat: 0, lng: 0 }
			}
    	},
  	},
	mounted() {
        this.fetchData();
    },
	methods: {
		async fetchData() {
			try {
				const response = await axios.get(import.meta.env.VITE_SERVER_URL);
				if (Array.isArray(response.data)) {
					this.bubbles = response.data;
					this.$refs.btable.setTable(this.bubbles);
                    console.log(this.bubbles);
				} else {
					console.error('Unexpected data format:', response.data);
				}
			} catch (error) {
				console.error('Error fetching data:', error);
			}
		},
		async handleNewBubble(newBubble) {
            await axios.post(import.meta.env.VITE_SERVER_URL + "/post", newBubble).then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
            this.fetchData();
        }
    }
}
</script>