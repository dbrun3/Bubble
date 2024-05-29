<template>

    <div style="display: flex">
        <button @click="changeStyle(-1)"><</button>
        <p v-text="this.styles[this.style]" style="background-color: aliceblue; text-align: center; width: 90vw"></p>
        <button @click="changeStyle(1)">></button>
    </div>

    <div class="form-container">
        <form @submit.prevent="postBubble">
            <input type="text" v-model="newMsg" placeholder="Message">
        </form>
    </div>
</template>

<script>

    const styles = ["default", "round", "thought", "loud"];


    export default {

        name: 'PostBubble',
        
        data() {
            return {
                newItem: {},
                newMsg: '',
                isTyping: false,
                style: 0,
                styles: ["default", "round", "thought", "loud"],
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
                    style: this.style,
                    loc: { lat: this.user_lat, lng: this.user_lng }
                }
                //Post here
                this.$emit('new-item', this.newItem);
                // Clear the input fields after posting the data
                this.newMsg = '';
                } else {
                    console.log("Won't post empty message");
                }
            },

            changeStyle(value) {
                this.isTyping = true;
                this.style += value;
                if(this.style < 0) {this.style = 3}
                if(this.style > 3) {this.style = 0}
            },
        }
    }
</script>