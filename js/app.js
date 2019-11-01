new Vue({
  el: '#app',
  data: {
    playerHealth: 100,
    monsterHealth: 100,
    startGame: false,
    eventsLog: [],
    maxHealth: 100,
    minHealth: 0,
    maxBasicAttackDamage: 20,
    maxSpecialAttackDamage: 50,
    maxHealAmount: 20,
    monsterAttackDamage: 20
  },
  watch: {
    monsterHealth: function(){
      if(this.monsterHealth <= this.minHealth){
        alert("You've won the game!!!")
        this.startGame = false;
      }
    },
    playerHealth: function(){
      if(this.playerHealth <= this.minHealth){
        alert("You've lost the game!!!")
        this.startGame = false;
      }
    },
    startGame: function(){
      if(this.startGame == false){
        this.resetData();
      }
    }
  },
  computed: {
    
  },
  methods: {
    /**
     * Player Methods
     */
    basicPlayerAttack: function(){
      let playerAttackDamage = Math.floor(Math.random() * this.maxBasicAttackDamage) + 1;
      this.monsterHealth -= playerAttackDamage;
    },
    specialPlayerAttack: function(){
      let playerAttackDamage = Math.floor(Math.random() * this.maxSpecialAttackDamage) + 1;
      this.monsterHealth -= playerAttackDamage;
    },
    healPlayer: function(){
      let healPlayerLimit = this.maxHealth - this.playerHealth

      if(healPlayerLimit < 20){
        this.playerHealth += Math.floor(Math.random() * healPlayerLimit);
      }else{
        this.playerHealth += Math.floor(Math.random() * this.maxHealAmount);
      }
    },

    /**
     *  Monster Method
     */
    monsterAttack: function(){

    },
    resetData: function(){
      this.playerHealth = this.maxHealth;
      this.monsterHealth = this.maxHealth;
    },
  }
})

  
  