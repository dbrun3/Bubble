<template>
    <div class="form-container">
        <input type="text" v-model="newMsg" placeholder="Message">
        <input type="number" v-model="newLat" placeholder="Latitude">
        <input type="number" v-model="newLon" placeholder="Longitude">
        <button @click="postBubble">Post</button>
    </div>
</template>

<script>
export default {

    name: 'PostBubble',
    
    data() {
        return {
            newItem: {},
            newMsg: '',
            newLat: '',
            newLon: ''
        };
    },
    methods: {

        postBubble() {
            if (this.newMsg && this.newLat && this.newLon) {
                this.newItem = {
                msg_id: new Date().getTime(),
                msg: this.newMsg,
                loc: { lat: parseFloat(this.newLat), lon: parseFloat(this.newLon) }
            };

            //Post here
            this.$emit('new-item', this.newItem);
            // Clear the input fields after posting the data
            this.newMsg = '';
            this.newLat = '';
            this.newLon = '';
            } else {
                alert('Please fill in all fields');
            }
        } 
    }
}
</script>