<template>
	<div class="wrapper">
		
        <div class="sample">
			
				<div v-if="i<items.length">
					<app-answer :title="current.title"
								:type="current.type"
								:answers="current.answers"
								:result="result"
								:ress="ress"
								:i="i"
								@forms="formNext"
								@onInput="inputCheck"
						>
					</app-answer>	
					
				</div>
		
				<div v-show="i==items.length">
						
					<app-total :items="items"
								:result="result"  
								>
					</app-total>
						
				</div>
		</div>
    </div>
		
</template>

<script>
	import AppAnswer from './components/Answer';
	import AppTotal from './components/Total';

	export default {
		data(){
			return {
				items : getQuests(),
				result: [{
					ind: 0,
					ev: '',
					check: [false, false, false, false],
					exit: true
				}],
				ress: false,
				formSubmited: false,
				i: 0,
				shows: false
			}
		},
		components: {
			AppAnswer,
			AppTotal
		},
		computed: {
			current() {
				return this.items[this.i]
			}
		},
		methods: {
			formNext() {
				this.i++;
				this.ress = false;	
				this.result.push({
						ind: 0,
						ev: '',
						check: [false, false, false, false],
						exit: true
					});		
			},
			inputCheck(ind, event){
				if (event.target.name == "radio") {
					 this.ress = true;
					 this.result[this.i].ind = ind;
					 this.result[this.i].ev = event.target.value;
				}	
				if (event.target.name == "checkbox") {
					let c = this.result[this.i].check;
					this.result[this.i].exit = false;
					c[ind] = event.target.checked;
					// this.$set(c, ind, event.target.checked);
					this.ress = false;
					for (let j = 0; j < c.length; j++) {	
						if (c[j]) {
							this.ress = true;
						}	
					}
				}

					 
			}
        }
	}
	
		function getQuests() {
			return [
				{
					type: 'radio',
					title: 'Какой тег задает ссылку?',
					answers: [
						'a',
						'div',
						'span',
						'img'
					]
				},
				{
					type: 'checkbox',
					title: 'Какой из этих тегов строчные?',
					answers: [
						'a',
						'div',
						'span',
						'img'
					]
				},
				{
					type: 'radio',
					title: 'Какой тег задает изображение?',
					answers: [
						'a',
						'div',
						'span',
						'img'
					]
				},
				{
					type: 'checkbox',
					title: 'Какой из этих тегов блочные?',
					answers: [
						'a',
						'div',
						'span',
						'img'
					]
				}
			];
		}
</script>


<style scoped>
	
	.wrapper{
		max-width: 600px;
		margin: 20px auto;
	}
	.boom-enter{
		
	}

	.boom-enter-active{
		animation: slideIn 0.5s;
	}

	.boom-enter-to{
		
	}

	.boom-leave{
		
	}

	.boom-leave-active{
		animation: slideOut 0.5s;
	}

	.boom-leave-to{
		
	}

	@keyframes slideIn{
		from{transform: translateX(-100vw);}
		to{transform: translateX(0px);}
	}

	@keyframes slideOut{
		from{transform: translateX(0px);}
		to{transform: translateX(-100vw);}
	}


</style>