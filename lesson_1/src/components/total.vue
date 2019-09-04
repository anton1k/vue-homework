<template>
<div>
<h2>Итого</h2>
	<table class="table table-bordered">
		<tbody>
			<tr v-for="(res, index) in result">
			<td>{{items[index].title}}</td>
			<td> {{ res.exit ? res.ind+1 + ' - '+ res.ev : res.check }}</td>
		</tr>
		</tbody>
		
	</table>

</div>



</template>

<script>
	export default {
		props: ['items', 'result']

	}
</script>