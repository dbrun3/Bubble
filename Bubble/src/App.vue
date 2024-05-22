<template>
	<div>
		<router-view></router-view>
	</div>
</template>

<script>
export default {
	name: 'App',
	components: {},
};
</script>

<style>
body {
	font-family: Arial, sans-serif;
	overflow: hidden;
	height: 100vh;
}

#app {
	color: black;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0px;
	position: fixed;
	background-color: #f5f5f5;
	bottom:0;
}

#map {
	position: relative;
}

#post {
	position:sticky;
	bottom:0
}


.login-container {
	background: white;
	padding: 20px;
	border-radius: 5px;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
	width: 300px;
	text-align: center;
}

.form-group {
	margin-bottom: 15px;
}

label {
	display: block;
	margin-bottom: 5px;
}

input {
	font-size: 16px;
	width: 100%;
	padding: 10px;
	box-sizing: border-box;
	border: 1px solid #ccc;
	border-radius: 3px;

}

button {
	width: 100%;
	padding: 10px;
	background-color: #6aadff;
	color: white;
	border: none;
	border-radius: 3px;
	cursor: pointer;
}

button:hover {
	background-color: #549ef8;
}


</style>
