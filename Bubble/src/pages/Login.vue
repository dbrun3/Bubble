<template>
    <div id="app">
      <div class="login-container">
        <h2>Login</h2>
        <form @submit.prevent="login">
          <div class="form-group">
            <label for="phone">Phone Number</label>
            <input type="tel" v-model="phone" id="phone" required>
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  </template>

<script>
export default {
  methods: {
    login() {
      // Handle login logic here
      // For now, just log the phone number to the console
      console.log("Phone number submitted: ", this.phone);
    }
  }
};
</script>