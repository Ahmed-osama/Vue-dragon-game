new Vue({
	el:'#app',
	data:{
		name:"Vue-Kite",
		img:"img/logo.png",
		jobTitle:"Front-end developer",
		skills:["jquery","vue.js","pug","sass","grunt","git","oocss","mvc","ui design","BEM","photoshop","ajax","wireframing","performance","webpack","usability","responsive","bootstrap", "scrum"],
		skillSearchWord:"",
		summary:'<p>Experienced and professional Front-end developer &amp; user-interface designer has various background in web field has no limit and ambitious also talented with leadership skills. I love my work and I learn new things every day I feel happy when I have things done  </p>',
		counter:"",
	},
	computed:{

	},
	methods:{
		toggle:function(e){

			e.target.classList = "toggle"
	
		},
		count:function(){
			this.counter++
		},
		discount:function(){
			this.counter--
		}


	}
})