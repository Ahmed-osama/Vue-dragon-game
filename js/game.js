
Vue.component('modal',{
	template:"#modalTemplate",
	props:{
		modalActive:{
			default:true
		}
	},
	data:function(){
		return{
			
		}
	}
})

var game = new Vue({
	el:"#game",
	componenets:['modal'],
	data:{
		userInput     : "",
		playerName    : "",
		monsterName   : "Drogon",
		monsterHealth : 0,
		playerHealth  : 0,
		gameActive    : false,
		loginModal    : true,
		sound         : true,
		bgmusic       : document.querySelectorAll('#bg_music'),
		turns         : [],
		winner        : false,
		loser         : false,
		loading       : true
	},
	computed:{
		soundText:function(){
			sundtx = this.sound?"ON" : "OFF"
			return sundtx
		},

        nameLength:function(){
            check = this.userInput.length >= 5 ? false : true
            console.log(check)
            return check
        }

	},
	watch:{

		gameActive:function(){
			that = this
			if(this.gameActive){

				setTimeout(function(){
					that.loginModal    = false
					that.playerName    = that.userInput
					that.monsterHealth = 100
					that.playerHealth  = 100
					that.winner        = false
					that.loser         = false
					that.bgmusic[0].play(); 
				},500)
			}
		},
		sound:function(){
			if(this.sound){
				this.bgmusic[0].volume = 1
			}else{
				
				this.bgmusic[0].volume = 0
			}
		}
	},
	methods:{
		startgame :function(){
			active = this.userInput.length >= 5? true : false
			this.gameActive = active
			this.stopThis('#winner')
			this.stopThis('#lose')
		
		},
		playThis:function(el){
			el = document.querySelectorAll(el)
			el[0].play()
		},
		stopThis:function(el){
			el = document.querySelectorAll(el)
			el[0].pause()
		},
		soundToggle:function(){
			this.sound = !this.sound
		},
		calculateDamage: function(min, max) {
            return Math.max(Math.floor(Math.random() * max) + 1, min);
        },
		monsterHit:function(){
			hit = this.calculateDamage(5,15)
			this.checkwin()
			this.playerHealth -= hit
			this.log("You recived damage :", hit, false)
		},
		heal:function(){
			that = this
			heal = 10
			this.playerHealth += heal
			this.log("You healed :", heal, true)
			this.playThis('#heal')
			setTimeout(function(){
				that.monsterHit()
			},250)			
		},
		normalHit:function(){
			hit = this.calculateDamage(6,9)
			this.monsterHealth -= hit
			this.log("You dealed normal Hit :", hit, true)
			this.playThis('#arrow')
			this.monsterHit()
		},
		speciallHit:function(){
			hit = this.calculateDamage(8,11)
			this.monsterHealth -= hit
			this.log("You dealed special Hit :", hit, true)
			this.playThis('#sword')
			this.monsterHit()
		},
		log:function(msg, hit, player){
			this.turns.unshift({
				isPlayer:player, 
				message:msg + hit
			})
		},
		checkwin:function(){
			if(this.monsterHealth <= 0){
				this.winner = true
				this.gameActive = false
				this.playThis('#winner')
			}else if(this.playerHealth <= 0){
				this.loser      = true
				this.gameActive = false
				this.playThis('#lose')
			}
		},
		newplayer:function(){
			this.stopThis('#winner')
			this.stopThis('#lose')
			this.winner     = false
			this.loser      = false
			this.loginModal = true
			this.userInput  = ''
			this.turns      = []
		}
	}
})


setTimeout(function(){
	game.loading =false
},1000)