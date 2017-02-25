new Vue({
	el:'#app',
	data:{
		name:"Vue-Kite",
		img:"img/logo.png",
		jobTitle:"vue js liberary for UI componenets",
		counter:3,
		watchedCounter:"",
		true:true,
		bgColor:"#000",
		demintion:4,

		
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
				width:this.demintion + '%',
				height:this.demintion/2 + "%"
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