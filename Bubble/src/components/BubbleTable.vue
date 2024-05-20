<template>
    <div>
		<table>
			<thead>
				<tr>
					<th>Message</th>
					<th>Location</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="item in bubbles" :key="item.msg_id">
					<td>{{ item.msg }}</td>
					<td>{{ item.loc.lat }}, {{ item.loc.lon }}</td>
				</tr>
			</tbody>
		</table>
    </div>
</template>

<script>
export default {

	name: "Table",

	data() {
		return {
			bubbles: []
		};
	},
	methods: {
		setTable(data) {
			this.bubbles = data
		},
    }
}
</script>