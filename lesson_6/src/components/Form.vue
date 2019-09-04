<template>
	<div>
            <form @submit.prevent="onSubmit" v-if="!formSubmited">
        		<div class="progress">
					<div class="progress-bar" :style="progressWidth"></div>
				</div>
				<div>
					<app-input v-for="(item, index) in info"
							   :name="item.name"
							   :value="item.value"
							   :pattern="item.pattern"
							   :key="index"
							   @update:value="onChangeValue(index, $event)"
							   @changeStatus="onChangeStatus(index, $event)">
                              
					
	                </app-input>
				</div>
				<button class="btn" :class="btnClass" :disabled="validCnt < info.length">
					{{ btnText}}
				</button>
			</form>
			<div v-else>
				<table class="table table-bordered">
					<tbody>
					<tr v-for="(item, index) in  info">
						<td>{{ item.name }}</td>
						<td>{{ item.value }}</td>
					</tr>
					</tbody>
				</table>
			</div>
    </div>
</template>

<script>
	import AppInput from './Input';
	import { mapGetters } from 'vuex';

	export default {
		methods: {
			onChangeValue(index, value){
				this.$store.commit('setInfoValue', {
                    i: index,
                    val: value
                });
            },
            onChangeStatus(index, isValid) {
                this.$store.commit('setInfoStatus', {
                    i: index,
                    status: isValid
                });
            },
            onSubmit(){
                this.$store.dispatch('submit');
            }
		},
		computed: {
			...mapGetters([
                'info',
                'validCnt',
                'formSubmited',
                'formProccess'
			]),
			progressWidth(){
				return {
					width: (this.validCnt / this.info.length * 100) + '%'
				}
            },
            btnClass() {
                return this.formProccess ? 'btn-default' : 'btn-primary';
            },
            btnText() {
                return this.formProccess ? 'Loading...' : 'Send Data';
            }
		},
		components: {
			AppInput
		}
	}
</script>

<style lang="scss">
	.wrapper{
		max-width: 600px;
		margin: 20px auto;
	}
</style>
