<template>
<transition enter-active-class="animatedmy fadeInLeft"
			leave-active-class="animatedmy fadeOutRight"
			mode="out-in">
	<div :key="i">
		<form @submit.prevent="$emit('forms')">
			<div class="form-group">
			<h3> {{ title }}</h3>

			<label v-for="(item, index) in answers" style="display: block">   
				<input :type="type"
						:value="item"
						:name="type"
						@input="$emit('onInput', index, $event)"
						
				>
				{{ item }}</label>
			<br>
			<button class="btn btn-primary" :disabled="!ress">
						Далее
					</button>
			
		
			</div>
		</form>
	 </div>
</transition>
	
</template>

<script>
	export default {
		props: ['title', 'type', 'answers', 'ress', 'i'],
		data(){
			return {
				
			}
		}
		
	}
</script>

<style>
.animatedmy {
  animation-duration: .3s;
  animation-fill-mode: both;
}
</style>
