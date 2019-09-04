<template>
	<section>
	<div>
		<h1>Order now</h1>
		<hr>
	</div>
		<div class="container">
			<div class="row">
				<div class="col col-sm-8">
					<div class="form-group">
				        <label>Name</label>
				        <input type="text" 
				        	   class="form-control"
				        	   v-model="name"
				        	   >
				    </div>
				    <div class="form-group">
				        <label>Phone</label>
				        <input type="tel" 
				        	   class="form-control"
				        	   v-model="phone"
				        	   >
				    </div>
					<button class="btn btn-primary"
							:disabled="btnDisabled"
							@click="onOrder"
					>
						Order now
					</button>
					<div class="alert alert-success" 
						 v-if="show"
						 >
						Your order is done!
						{{res}}
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
	import {mapGetters} from 'vuex';

	export default {
		data(){
			return {
				name: '',
				phone: '',
				cart_id: [],
				show: false,
				res: [],
				dis: true
			};
		},
		computed: {
			...mapGetters('cart', {
				inCart: 'products'
			}),
			btnDisabled(){
				if(this.name != '' && this.phone != ''){
					this.dis =  false;
				}	
				return this.dis;
			}
		},
		mounted(){
			this.cart_id = this.inCart;
			
		},
		methods: {
			onOrder(){
				this.dis =  true;
				this.res = {
						name: this.name,
						phone: this.phone,
						cart_id: this.cart_id
					};
				
				setTimeout(() => {
					this.name = '';
					this.phone = '';
					this.cart_id = [];
					this.show = true; 
				}, 1000);
			}
		},
	}
</script>
<style scoped>
	.alert{
		margin: 10px 0;
	}
</style>