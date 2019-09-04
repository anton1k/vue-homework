<template>
	<div>
		<app-header></app-header>
		<div class="container">
			<div class="row">
				<div class="col col-sm-3"></div>
				<div class="col col-sm-6">
					<app-form></app-form>
				</div>
				<div class="col col-sm-3"></div>
			</div>
		</div>
	</div>
</template>

<script>
	import AppHeader from './components/Header';
	import AppForm from './components/Form';

	export default {
		data() {
			return {
				name: ''
			}
		},
		components: {
			AppForm,
			AppHeader
		}
	}
</script>