<template>
    <div class="form-container">
        <input type="text" v-model="newMsg" placeholder="Message">
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
        };
    },

    props: {
        user_lat: Number,
        user_lng: Number
    },
    methods: {

        postBubble() {
            if (this.newMsg) {
                this.newItem = {
                msg_id: new Date().getTime(),
                msg: this.newMsg,
                loc: { lat: this.user_lat, lon: this.user_lng }
            }
            //Post here
            this.$emit('new-item', this.newItem);
            // Clear the input fields after posting the data
            this.newMsg = '';
            } else {
                console.log("Won't post empty message");
            }
        } 
    }
}
</script>