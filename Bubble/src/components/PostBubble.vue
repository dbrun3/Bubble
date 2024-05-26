<template>
    <div class="form-container">
        <form @submit.prevent="postBubble">
            <input type="text" v-model="newMsg" placeholder="Message">
        </form>
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
                style: 0,
                loc: { lat: this.user_lat, lng: this.user_lng }
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