import Vue from 'vue'
import Vuex from 'vuex'
import ajax from './common/ajax'; 
import md5 from 'js-md5';
Vue.use(Vuex);
const state = {
  ums1:"0",
  names:'',
  money:0,
  count10:{},
  moneyCommission:{},
  moneyLog:[],
  jsMapa:{},
  // 金额
  value3:'',
  golds:'',
  // 提现记录
  wdLogs:[],
   fishresult:'' ,  
   fishblue:0, 
   fishnum :0, 
   fishred :0,
}
const mutations = {
  getcode(state){
    var url = "http://www.jtarget.cn:8080/Game/wx/getcode";
    var _this = this;
    var obj = {};
    obj.code = window.location.href.toString().slice(34,66)
    obj.state1 =  window.sessionStorage.getItem('ums1');
    ajax.inAjaxpost(url,obj,(data)=>{
      window.sessionStorage.setItem('ids',data.id);
    })
  },
  getnum(state){
    var _this = this;
    var obj = {}
    var url = "http://www.jtarget.cn:8080/Game/wx/getnum";
    ajax.inAjaxpost(url,obj,(data)=>{
        window.sessionStorage.setItem('ums1',data.num);
    })
  },
  bet(state){
    var _this = this;
    var obj = {}
    var url = "http://www.jtarget.cn:8080/Game/user/bet";
    obj.uid =  window.sessionStorage.getItem('ums1');
    obj.addtime =Number((new Date()).getTime());
    obj.gameId = 1;
    obj.type =  state.names;
    obj.money = state.money
    ajax.inAjaxpost(url,obj,(data)=>{
        state.fishresult = ''
        state.fishblue= 0
        state.fishnum = 0
        state.fishred = 0
      if(data.code == 200){
        window.sessionStorage.setItem('noMoney',1);
        // 胜与负
        state.fishresult = data.result
        state.fishblue= data.blue
        state.fishnum = data.num
        state.fishred = data.red
      }else{
        window.sessionStorage.setItem('noMoney',0);
      }
    })
  },
getNum(state){
    var _this = this;
    var obj = {}
    var url = "http://www.jtarget.cn:8080/Game/user/getNum";
    ajax.inAjaxpost(url,obj,(data)=>{
        state.fishresult = '';
        state.fishblue= 0;
        state.fishnum = 0;
        state.fishred = 0;
      if(data.code == 200){
        window.sessionStorage.setItem('noMoney',1);
        // 胜与负
        state.fishresult = data.result;
        state.fishblue= data.blue;
        state.fishnum = data.num;
        state.fishred = data.red;
      }else{
        window.sessionStorage.setItem('noMoney',0);
      }
    })
  },

//  个人金币数量
  getGold(state){
    var _this = this;
    var obj = {}
    var url = "http://www.jtarget.cn:8080/Game/user/getGold";
    obj.uid = window.sessionStorage.getItem('ums1');
    ajax.inAjaxpost(url,obj,(data)=>{
      state.golds = data.gold
    })
  },
  // 金币提现记录
  selectAll(state){
    var _this = this;
    var obj = {}
    var url = "http://www.jtarget.cn:8080/Game/with/selectAll";
    obj.uid =  window.sessionStorage.getItem('ids');
    ajax.inAjaxpost(url,obj,(data)=>{
      state.wdLogs = data.wdLog
    })
  },
  tixian(state){
    var _this = this;
    var obj = {}
    var url = " http://www.jtarget.cn:8080/Game/with/tixian";
    obj.uid = window.sessionStorage.getItem('ids');
    obj.addtime =Number((new Date()).getTime());
    obj.price =  Number(state.value3) 
    ajax.inAjaxpost(url,obj,(data)=>{
    })
  },
 
  selectboss(state){
    var _this = this;
    var obj = {}
    var url = "http://www.jtarget.cn:8080/Game/user/selectboss";
    obj.id = window.sessionStorage.getItem('ids');
    ajax.inAjaxpost(url,obj,(data)=>{
      state.count10 =  data
    })
  },
  selectCommission(state){
    var _this = this;
    var obj = {}
    var url = "http://www.jtarget.cn:8080/Game/commission/selectCommission";
    obj.uid = window.sessionStorage.getItem('ids');
    ajax.inAjaxpost(url,obj,(data)=>{
      state.moneyCommission = data
    })
  },
  playlog(state){
    var _this = this;
    var obj = {}
    var url = "http://www.jtarget.cn:8080/Game/user/playlog";
    obj.uid =  window.sessionStorage.getItem('ums1');
    ajax.inAjaxpost(url,obj,(data)=>{
      console.log(data);
      for(var i = 0 ; i < data.log.length ; i++){
        data.log[i].addtime  =  new Date(parseInt(data.log[i].addtime)).toLocaleString().replace(/年|月/g, "-").replace(/上午|下午|晚上|早上/g, " ").slice(0,10);
      }
      state.moneyLog = data.log
    })
  },
  orde(state){
    var _this = this;
    var obj = {}
    var url = "http://www.jtarget.cn:8080/Game/pay/order";
    obj.id = window.sessionStorage.getItem('ids');
    ajax.inAjaxpost(url,obj,(data)=>{
      state.jsMapa = data.jsMap
    })
  },
  
  
}
const actions ={

}
export default new Vuex.Store({
    state,
    mutations,
    actions
  })