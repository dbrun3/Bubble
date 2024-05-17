<template>
    <div class="bubble-container">
      <img src="@/assets/speech-bubble.png" alt="Missing Image" class="bubble-image" />
      <div class="message-text">{{ message }}</div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Bubble',
    props: {
      message: {
        type: String
      }
    }
  }
  </script>
  
  <style scoped>
  .speech-bubble-container {
    position: relative;
    display: inline-block;
  }
  
  .speech-bubble-image {
    display: block;
    width: 100%;
    height: auto;
  }
  
  .message-text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 10px;
    font-size: 1.2em;
    text-align: center;
    color: black; /* Adjust the color based on your speech bubble image */
    white-space: pre-wrap; /* This helps to preserve spaces and new lines in the message */
  }
  </style>