<template>
  <div class="firstPageBody">
    <mu-flex  justify-content="center" loading="true">
      <mu-flex  justify-content="center" ><img :src="fish" alt="鱼" class="fish"></mu-flex>
    </mu-flex>

    <mu-flex  justify-content="center">
      <mu-flex  justify-content="center" class="fontSize">{{num}}%<span v-for="(item , index) in nums" :key="index">.</span></mu-flex>
    </mu-flex>
  </div>
</template>


<script>
import fish from './../../static/fish.png'

// mainPage
// mainPage.jpg
export default {
  name: 'firstPage',
  data () {
    return {
      fish,
      num : 1,
      nums : 1,
    }
  },
  methods:{
  },
  mounted() {
     this.$store.commit('getnum');
        var timer = setInterval(()=>{
          this.num += 1;
          if(this.num == 100){
            clearInterval(timer)
            this.$router.push({
              name:'mainPage1'
            });
          }
        }, 30)
        var timer1 = setInterval(()=>{
          if(this.nums < 4 ){
            this.nums += 1
          }else{
            this.nums = 1
          }
          if(this.num == 100){
            clearInterval(timer1)
          }
        }, 500)   
        this.$store.commit('getcode');
        
        
  },
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.firstPageBody{
  background: #84cef5 ; 
  height:100vh;
  width:100vw;
}
.fish{
  margin-top:6rem;
  height:16%;
  width:68%;
}
.fontSize{
  font-size:1.6rem;
  margin-left:2rem;
}
</style>
