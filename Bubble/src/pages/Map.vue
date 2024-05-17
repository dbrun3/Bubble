<template>
  <div>
    <h1>Test Table</h1>
    <table>
      <thead>
        <tr>
          <th>Message</th>
          <th>Location (Latitude, Longitude)</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in data" :key="msg_id">
          <td>{{ item.msg }}</td>
          <td>{{ item.loc.lat }}, {{ item.loc.lon }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      data: []
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      try {
        const response = await axios.get("http://localhost:3000");
        if (Array.isArray(response.data)) {
          this.data = response.data;
        } else {
          console.error('Unexpected data format:', response.data);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    
  }
}
</script>