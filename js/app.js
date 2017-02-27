new Vue({
	el:'#app',
	data:{
		name:"Vue-Kite",
		img:"img/logo.png",
		img2:"img/ahmed.png",
		jobTitle:"vue js liberary for UI componenets",
		counter:3,
		watchedCounter:"",
		true:true,
		bgColor:"#000",
		demintion:22,
		showView:true

		
	},
	computed:{
		multiblied:function(){
			return this.counter *2
		},
		classes:function(){
			return{
				green : this.true,
				blue : !this.true,
			}
		},
		style:function(){
			return{
				background:this.bgColor,
				width:'calc(' + this.demintion + '% - 1.5em - 10px)',
				height:'calc(' + this.demintion/2 + '% - 1.5em - 10px)',
				lineHeight:this.demintion*1.8 +"px"
			}
		}
	},
	methods:{
		count:function(){
			this.counter++
		},
		discount:function(){
			if(this.counter > 1)
				this.counter--
		},

	},
	watch:{
		counter:function(){
			if(this.counter < 2){
				this.watchedCounter = "yayy its over 5";
			}else if(this.counter == 5){
				this.watchedCounter = ' its ten';
			}else{
				this.watchedCounter = 'I dunno';

			}
		}
	}
})