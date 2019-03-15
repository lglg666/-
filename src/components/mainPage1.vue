<template>
    <div>
        <!-- 竞猜的结束界面    胜负  和 数量 -->
        <div  v-show="goldNums" v-cloak style="position:absolute;height:100vh;width:100vw;z-index:10;background: rgba(0,0,0,0.2);box-sizing:border-box;">
                <mu-flex justify-content="center" v-if='$store.state.fishresult == "胜"' v-cloak>
                    <mu-flex  justify-content="center" style="position:absolute;top:10vh;" ><img :src="win" alt="胜"  style="height:10rem;width:10rem;"></mu-flex>
                </mu-flex>
                <mu-flex justify-content="center" v-else v-cloak>
                    <mu-flex  justify-content="center" style="position:absolute;top:10vh;" ><img :src="lose" alt="负"  style="height:10rem;width:10rem;"></mu-flex>
                </mu-flex>
                <mu-flex justify-content="center">
                    <mu-flex  justify-content="center" style="position:absolute;top:10vh;" ><span style="position:absolute;display:flex;justify-content:center;align-items:center;height:3vh;width:100vw;top:32vh;line-height:3vh;color:#fff;font-size:3rem;"><img :src="fish" alt="鱼"  style="height:7vh;width:25vw;">&nbsp;x&nbsp;{{$store.state.fishnum}}</span> </mu-flex>
                </mu-flex>
        </div>
        <!-- 下面的点击按钮 遮盖层   用户下注完之后 不能再次下注   要等第二次开始下注 -->
        <div v-show='maskingS' v-cloak style="position:absolute;height:18vh;width:100vw;bottom:0;background:red;z-index:10;background: rgba(255,255,255,0)">
        </div>
        <!-- 开始游戏了   展示开始界面  vs -->
        <div  v-show="startVS" v-cloak style="position:absolute;height:100vh;width:100vw;z-index:10;background: rgba(0,0,0,0.2);box-sizing:border-box;">
                <mu-flex justify-content="center">
                    <mu-flex  justify-content="center" style="position:absolute;top:10vh;" ><img :src="start"  alt="开始" ></mu-flex>
                </mu-flex>
                <mu-flex justify-content="center">
                    <mu-flex  justify-content="center"  style="position:absolute;top:30vh;" ><img :src="vs"   alt="vs" ></mu-flex>
                </mu-flex>
        </div>


        <!-- 玩家下注时   结束界面谁出现   串联电路形式    两个同时为true   才会展示-->
        <div v-show="clickBlueOrRed" v-cloak>
            <div  v-show="clickBlueOrRed2"  v-cloak style="position:absolute;height:100vh;width:100vw;z-index:10;background: rgba(0,0,0,0.2);box-sizing:border-box;">
                <mu-flex justify-content="center">
                    <mu-flex  justify-content="center" style="position:absolute;" ><img :src="end"  alt="结束" ></mu-flex>
                </mu-flex>
                <mu-flex justify-content="center">
                    <mu-flex  justify-content="center"  style="position:absolute;top:30vh;" ><img :src="vs"    alt="vs" ></mu-flex>
                </mu-flex>
                <mu-flex justify-content="center">
                    <mu-flex  justify-content="center"  style="position:absolute;top: 37vh; left: 16vw;" ><img :src="win"  alt="胜" ></mu-flex>
                </mu-flex>
                <mu-flex justify-content="center">
                    <mu-flex  justify-content="center"  style="position:absolute;   top: 45vh; left: 64vw;" ><img src="lose"   alt="负" ></mu-flex>
                </mu-flex>
                <mu-flex justify-content="center">
                    <mu-flex  justify-content="center" style="position:absolute;top:48vh;left:17vw;font-size:1rem;color:#fff;" ><img :src="fish" alt="鱼"  style="height:4vh;width:16vw;">&nbsp;x&nbsp;{{$store.state.fishblue}} </mu-flex>
                </mu-flex>
                 <mu-flex justify-content="center" >
                    <mu-flex  justify-content="center" style="transform:rotate('180deg');position:absolute;top:42vh;left:62vw;font-size:1rem;color:#fff;" >{{$store.state.fishred}}&nbsp;x&nbsp;<img :src="fish" alt="鱼"  style="height:4vh;width:16vw;transform:rotateY(180deg);"> </mu-flex>
                </mu-flex>
            </div>
            <div  v-show="clickBlueOrRed1" v-cloak  style="position:absolute;height:100vh;width:100vw;z-index:10;background: rgba(0,0,0,0.2);box-sizing:border-box;">
                <mu-flex justify-content="center">
                    <mu-flex  justify-content="center" style="position:absolute;" ><img :src="end" alt="结束" ></mu-flex>
                </mu-flex>
                <mu-flex justify-content="center">
                    <mu-flex  justify-content="center"  style="position:absolute;top:30vh;" ><img :src="vs"   alt="vs" ></mu-flex>
                </mu-flex>
                <mu-flex justify-content="center">
                    <mu-flex  justify-content="center" style="position:absolute;top: 45vh; left: 16vw;" ><img :src="lose"  alt="负" ></mu-flex>
                </mu-flex>
                <mu-flex justify-content="center">
                    <mu-flex  justify-content="center"  style="position:absolute; top: 37vh; left: 64vw;" ><img :src="win"   alt="胜" ></mu-flex>
                </mu-flex>
                <mu-flex justify-content="center">
                    <mu-flex  justify-content="center" style="position:absolute;top:42vh;left:17vw;font-size:1rem;color:#fff;" ><img :src="fish" alt="鱼"  style="height:4vh;width:16vw;">&nbsp;x&nbsp;{{$store.state.fishblue}} </mu-flex>
                </mu-flex>
                 <mu-flex justify-content="center" >
                    <mu-flex  justify-content="center" style="transform:rotate('180deg');position:absolute;top:48vh;left:62vw;font-size:1rem;color:#fff;" >{{$store.state.fishred}}&nbsp;x&nbsp;<img :src="fish" alt="鱼"  style="height:4vh;width:16vw;transform:rotateY(180deg);"> </mu-flex>
                </mu-flex>
            </div>
             <div  v-show='clickBlueOrRed3' v-cloak style="position:absolute;height:100vh;width:100vw;z-index:10;background: rgba(0,0,0,0.2);box-sizing:border-box;">
                <mu-flex justify-content="center">
                    <mu-flex  justify-content="center" style="position:absolute;" ><img :src="end"  alt="结束" ></mu-flex>
                </mu-flex>
                <mu-flex justify-content="center">
                    <mu-flex  justify-content="center"  style="position:absolute;top:30vh;" ><img :src="vs"   alt="vs" ></mu-flex>
                </mu-flex>
                <mu-flex justify-content="center">
                    <mu-flex  justify-content="center" style="position:absolute;top: 31vh; " ><img :src="ping"  alt="平" ></mu-flex>
                </mu-flex>
                <mu-flex justify-content="center">
                    <mu-flex  justify-content="center" style="position:absolute;top:34vh;left:17vw;font-size:1rem;color:#fff;" ><img :src="fish" alt="鱼"  style="height:4vh;width:16vw;">&nbsp;x&nbsp;{{ $store.state.fishblue }} </mu-flex>
                </mu-flex>
                 <mu-flex justify-content="center" >
                    <mu-flex  justify-content="center" style="transform:rotate('180deg');position:absolute;top:34vh;left:62vw;font-size:1rem;color:#fff;" >{{ $store.state.fishred }}&nbsp;x&nbsp;<img :src="fish" alt="鱼"  style="height:4vh;width:16vw;transform:rotateY(180deg);"> </mu-flex>
                </mu-flex>
            </div>
        </div>
        <div v-show="clickBlueOrRed111" v-cloak>
            <div  v-show="clickBlueOrRed21" v-cloak style="position:absolute;height:100vh;width:100vw;z-index:10;background: rgba(0,0,0,0.2);box-sizing:border-box;">
                <mu-flex justify-content="center">
                    <mu-flex  justify-content="center" style="position:absolute;" ><img :src="end"  alt="结束" ></mu-flex>
                </mu-flex>
                <mu-flex justify-content="center">
                    <mu-flex  justify-content="center"  style="position:absolute;top:30vh;" ><img :src="vs"    alt="vs" ></mu-flex>
                </mu-flex>
                <mu-flex justify-content="center">
                    <mu-flex  justify-content="center" style="position:absolute;top:48vh;left:17vw;font-size:1rem;color:#fff;" ><img :src="fish" alt="鱼"  style="height:4vh;width:16vw;">&nbsp;x&nbsp;{{$store.state.fishblue}} </mu-flex>
                </mu-flex>
                 <mu-flex justify-content="center" >
                    <mu-flex  justify-content="center" style="transform:rotate('180deg');position:absolute;top:48vh;left:59vw;font-size:1rem;color:#fff;">{{$store.state.fishred}}&nbsp;x&nbsp;<img :src="fish" alt="鱼"  style="height:4vh;width:16vw;transform:rotateY(180deg);"> </mu-flex>
                </mu-flex>
            </div>
        </div>


        <mu-flex justify-content="center">
            <mu-flex  justify-content="center" ><img :src="mainPage" alt="背景" class="mainPage" ></mu-flex>
        </mu-flex>

        <mu-flex justify-content="center" v-cloak  v-show="  time60 <= 0 ? false : true"  >
            <mu-flex  justify-content="center" style="position:absolute;top:1rem;width:100vw">
                <mu-flex  justify-content="center"  ><img :src="clock"  v-cloak alt="始终" class="clock" ><span style="position:absolute;top:4.88rem;z-index:1;font-size:1rem">{{time60}}s</span></mu-flex>
            </mu-flex>
        </mu-flex>

        <!-- 金币个数   个人有的金币 -->

        <mu-flex justify-content="center" style="position:absolute;top:0rem;width:100vw;height:2rem;line-height:2rem;">
            <mu-flex  justify-content="center" style="position:relative;background:#ffe7c5;border-radius:20px;margin-top:0.5rem;">
                <mu-flex  justify-content="center" ><img :src="num8" alt="始终"   style="height:2.5rem;width:2.5rem;position:absolute;left:-0.5rem;top:-0.2rem;"><span style="font-size:1rem;margin-left:2.2rem;margin-right:0.5rem;color:#fc783a">{{$store.state.golds}}</span></mu-flex>
            </mu-flex>
        </mu-flex>



        <!--   加人  -->
        <mu-flex justify-content="center" >
            <mu-flex class="flex-wrapper" align-items="center" style="position:absolute;top:36vh;z-index:9; overflow:hidden;">
                <mu-flex  justify-content="center" style='width:33.3333vw;position: relative;right: 1rem;transform:rotateY(180deg)' ><img :src="boat" alt="船" class="boat" ></mu-flex>
                <mu-flex  justify-content="center" style='width:33.3333vw;' ></mu-flex>
                <mu-flex    justify-content="center" style='width:33.3333vw;position: relative;right: -1rem;'><img :src="boat" alt="船" class="boat" ></mu-flex>
            </mu-flex>
            <mu-flex class="flex-wrapper" align-items="center" style="position:absolute;top:36vh;z-index:8;overflow:hidden;">
                <mu-flex  justify-content="center" style='width:33.3333vw;position: relative;right: 1rem;'> <img :src="cat1" alt="猫" class="cat1" ></mu-flex>
                <mu-flex justify-content="center" style='width:33.3333vw;' ></mu-flex>
                <mu-flex  justify-content="center" style='width:33.3333vw;position: relative;right: -1rem;'><img :src="cat2" alt="猫" class="cat2" ></mu-flex>
            </mu-flex>
             <mu-flex class="flex-wrapper" align-items="center" style="position:absolute;top:36vh;z-index:8;">
                <canvas width='300' height='300' id="fishing1" style="width:50vw;position: relative;transform:rotateY(180deg)"></canvas>
                <canvas width='300' height='300' id="fishing2" style="width:50vw;position: relative;"></canvas>
            </mu-flex>
        </mu-flex>
        <!-- 机器人用户 -->
        <mu-flex justify-content="center" >
            <mu-flex class="flex-wrapper" align-items="center" style="position:absolute;top:49vh;z-index:7; overflow:hidden;">
                <mu-flex  justify-content="center" style='width:33.3333vw;position: relative;height:24vh;' >
                    <div style="position:relative;top:0rem;background:#71d3ff;" id="boxs1" v-cloak  v-show="nihaoya">
                            <div style="width:33.3333vw;height:1.2rem;background:#ccc;border:1px solid #ccc;border-radius:5px;" v-for="(item,index) in numsef1 " :key="index" >
                                <span style="width:50%;height:1rem;">
                                     {{item.names}}
                                </span>
                                <span style="width:50%;height:1rem;">
                                    金额：{{(item.money)*10}}
                                </span>
                            </div>
                    </div>
                </mu-flex>
                <mu-flex  justify-content="center" style='width:33.3333vw;' ></mu-flex>
                <mu-flex  justify-content="center" style='width:33.3333vw;position: relative;height:24vh;' >
                    <div style="position:relative;top:0rem;background:#71d3ff;" id="boxs2" v-cloak  v-show="nihaoya">
                            <div style="width:33.3333vw;height:1.2rem;background:#ccc;border:1px solid #ccc;border-radius:5px;" v-for="(item,index) in numsef " :key="index" >
                                <span style="width:50%;height:1rem;">
                                    {{item.names}}
                                </span>
                                <span style="width:50%;height:1rem;">
                                    金额：{{(item.money)*10}}
                                </span>
                            </div>
                    </div>
                </mu-flex>
            </mu-flex>
        </mu-flex>

        <!-- 鱼 -->
         <div style="display:flex;justify-content:center;align-items:center;position:absolute;bottom:12vh;height:40vh;width:100vw;z-index:1">
                <mu-flex  justify-content="center" >
                    <div style="position:relative;width:100vw;height:15rem;" id="fishing3Canvas">
                        <!-- style="transform:rotateY(180deg)" -->
                        <span  v-for="(item,index) in fishNum" :key="index"  ><img :src="fish" alt="鱼" class="fishBox" style="position:absolute;height:3vh;z-index:2;width:12vw;"></span>  
                    </div>
                </mu-flex>
        </div>
        <mu-flex  justify-content="center">
          
        </mu-flex>
        <!-- 设置 -->
        <mu-flex  justify-content="end">
            <mu-flex  justify-content="center" style="position:absolute;top:1rem;right:1rem">
                <mu-button fab  color="rgba(255,255,255,0)" style="height:1.8rem;width:1.8rem;" @click="shows">
                    <img :src="seter" alt="" class='seter'>
                </mu-button>
            </mu-flex>
        </mu-flex>
        <!-- 录入 -->
        <mu-flex  justify-content="end">
            <mu-flex  justify-content="center" style="position:absolute;top:1rem;right:3.5rem">
                <mu-button fab  color="rgba(255,255,255,0)" style="height:1.8rem;width:1.8rem;" @click="shows1">
                    <img :src="num10" alt="" class='seter'>
                </mu-button>
            </mu-flex>
        </mu-flex>
        <div style="display:flex;justify-content:center;align-items:center;position:absolute;bottom:12vh;height:4vh;width:100vw;z-index:8">
                <div style="height:4rem;width:20vw;background:rgb(252, 120, 58);border:2px solid #fff;border-bottom-style:none;border-radius:10px 10px 0 0;font-size:1.6rem;color:#fff;" @click="guessing">
                    竞猜
                </div>
        </div>
  
        <div style="position:absolute;bottom:0;height:13vh;width:100vw;background:#fff;border-radius:10px 10px 0 0;z-index:9">
            <mu-flex class="flex-wrapper" justify-content="center" style='height:8vh;line-height:8vh;'>
                <!-- 上面的 -->
                <mu-flex class="flex-demo" justify-content="center" >
                    <div style="border-box:box-sizing;">
                        <mu-row >
                            <mu-col >
                                <div style="display:flex;justify-content:around;align-items:center;height:6vh;background:#939393;border-radius:5px;margin:0.5rem 0.5rem 0 0;padding:0.2rem" @click="$store.state.names = '蓝猫胜'">
                                    <img :src="cat1" alt="" style="height:2.5rem;width:2.5rem;background:#fff;border-radius:50%;margin-left: 0.5rem;">
                                    <div style="height:6vh;width:20vw">
                                        <mu-row>
                                            <mu-col span="12" style="height:3vh;width:20vw;line-height:3vh;font-size:1rem;color:#fff;"><div class="grid-cell" >蓝猫胜</div></mu-col>
                                        </mu-row>
                                            <mu-row>
                                                <mu-col span="12" style="height:3vh;width:20vw;line-height:3vh;font-size:1rem;color:#fff;"><div class="grid-cell">{{blueNums}}</div></mu-col>
                                            </mu-row>
                                    </div>
                                </div>
                            </mu-col>
                           <mu-col ><Button type="error" style="padding:0.3rem ;border-radius:50%;font-size:1.5rem;" @click="$store.state.names = '平局'">平局</Button></mu-col>
                            <mu-col  >
                                <div style="display:flex;justify-content:end;align-items:center;height:6vh;background:#fc783a;border-radius:5px;margin:0.5rem  0 0 0.5rem;padding:0.2rem" @click="$store.state.names = '红猫胜'">
                                    <div style="height:6vh;width:20vw">
                                        <mu-row>
                                            <mu-col span="12" style="height:3vh;width:20vw;line-height:3vh;font-size:1rem;color:#fff;"><div class="grid-cell">红猫胜</div></mu-col>
                                        </mu-row>
                                            <mu-row>
                                            <mu-col span="12" style="height:3vh;width:20vw;line-height:3vh;font-size:1rem;color:#fff;"><div class="grid-cell">{{redNums}}</div></mu-col>
                                        </mu-row>
                                    </div>
                                    <img :src="cat2" alt="" style="height:2.5rem;width:2.5rem;background:#fff;border-radius:50%;margin-right:0.5rem;">
                                </div>
                           </mu-col>
                        </mu-row>
                    </div>
                </mu-flex>
            </mu-flex>
            <!-- 下面的 -->
            <mu-flex class="flex-wrapper" justify-content="start" style='height:4vh;line-height:4vh;margin:0 10px '>
                <mu-flex class="flex-demo" justify-content="start" style="width:15vw">数量：</mu-flex>
                <mu-row >
                    <mu-col span="3" v-for="(item,index) in nums" :key="index" @click="subNum(item,index)" class="NUm" sm="4" md="4" lg="4" xl="4">  <Button type="text" style="width:10vw;color:#000;margin:0 0.5rem;" ghost >{{item}}</Button></mu-col>
                </mu-row>
                <mu-col  @click="custom" ><div style="width:15vw;text-align:center;">自定义</div></mu-col>

                <mu-flex class="flex-demo" justify-content="center"  align-items='center' @click="confirm" style="height:4vh;line-height:4vh;"><Button type="error" style="padding:0.2rem 0.5rem;" >确定</Button></mu-flex>
            </mu-flex>
       </div>
            <div v-show='modal1' style="display:flex;justify-content:center;align-items:center;position:absolute;top:0;z-index:10;width:100vw;height:100vh;background:rgba(0,0,0,0.2);">
                <div style="background:url(./../../static/9.png) repeat fixed center;width:66vw;height:16rem;border-radius:10px;padding:3rem 0;">
                        <div style="width:100%;height:100%;background:#fff;">
                            <mu-row >
                                <mu-col span="12" ><div class="grid-cell" style="margin:1rem ;font-size:1rem;color:#c96d1e;text-align:left;">自定义个数:</div></mu-col>
                            </mu-row>
                            <mu-row style="line-height:2rem;color:#c96d1e">
                                <mu-col span="8" ><div class="grid-cell" style="margin:0 2rem 0rem 2rem;font-size:1rem;color:#c96d1e;text-align:left;"><Input v-model="value2"  placeholder="请输入 10 的倍数" /></div></mu-col>个 
                            </mu-row>
                            <mu-row style="color:#c96d1e;height:1rem;">
                                <mu-col span="12" style="text-align:left;margin-left:2rem;">{{tips}}</mu-col>
                            </mu-row>
                             <mu-row >
                                 <mu-col span="12" ><div class="grid-cell" style="margin:0 1rem ;font-size:1rem;color:#c96d1e;text-align:left;float:right;">（注：应为10的倍数）</div></mu-col>
                            </mu-row>
                        </div>
                        <div style="height:3rem;width:100%;">
                            <mu-row >
                                <mu-col span="6"><div class="grid-cell"> <mu-button color="error" style="margin-top:0.4rem;" @click="cancel1">取消</mu-button></div></mu-col>
                                <mu-col span="6"><div class="grid-cell"> <mu-button color="error" style="margin-top:0.4rem;" @click="confirm1">确定</mu-button></div></mu-col>
                            </mu-row>
                        </div>
                </div>
            </div>
            <!-- 竞猜 -->
            <div v-show='modal2' style="display:flex;justify-content:center;align-items:center;position:absolute;top:0;z-index:10;width:100vw;height:100vh;background:rgba(0,0,0,0.2);">
                <div style="background:url(./../../static/9.png) repeat fixed center;width:66vw;height:17rem;border-radius:10px;padding:0 0 3rem 0;">
                        <div style="width:66vw;height:13rem;padding:0.5rem;">
                            <mu-row gutter>
                                <mu-col  v-for="(item ,index) in numbs" :key="index" span="3" style="display: flex;justify-content: center;" @click="confirm3(item,index)" class="setBack" ><div class="grid-cell" style="margin-bottom:0.5rem;width:3rem;height:2rem;background:#fff;position:relative;line-height:2rem">{{item}} <div style="position:absolute;bottom:0.8rem;right:0.7rem;height:0.5rem;width:0.5rem;font-size:0.1rem;">x{{numItem}}</div></div></mu-col>
                            </mu-row>
                        </div>
                           <div style="height:3rem;width:100%;border-top:2px solid #fff;">
                                <mu-row >
                                    <mu-col span="12"><div class="grid-cell"> <mu-button color="error" style="margin-top:0.5rem;" @click="cancel4">返回</mu-button></div></mu-col>
                                </mu-row>
                            </div>
                </div>
                
            </div>
            <div v-show='nextPage' style="display:flex;justify-content:center;align-items:center;position:absolute;top:0;z-index:10;width:100vw;height:100vh;background:rgba(0,0,0,0.2);">
                <div style="background:url(./../../static/9.png) repeat fixed center;width:66vw;height:19rem;border-radius:10px;padding:0 0 3rem 0;">
                    <div style="display:flex;justify-content:center;align-items:center;width:66vw;height:15rem;">
                        <div style="width:56vw;height:13rem;padding:0.5rem;font-size:1rem;background:#fff;border-radius:10px;">
                                    <Row type="flex" justify="start" class="code-row-bg" style="margin: 1rem 0 ;"> 
                                        <Col span="8">条数：</Col>
                                        <Col span="15">{{$store.state.names}}</Col>
                                    </Row>
                                    <Row type="flex" justify="start" class="code-row-bg" style="margin: 1rem 0;">
                                        <Col span="8">倍数：</Col>
                                        <Col span="15">{{numItem}}</Col>
                                    </Row>
                                    <Row type="flex" justify="start" class="code-row-bg" style="margin: 0 ;">
                                        <Col span="8">数量：</Col>
                                        <Col span="15"><Input v-model="value6"   placeholder="请输入数量" /></Col>
                                    </Row>
                                    <Row type="flex" justify="start" class="code-row-bg" style="height:1rem ;font-size:0.5rem;color:red;"> 
                                        <Col span="8"></Col>
                                        <Col span="15" style="text-align:left">{{tips215s}}</Col>
                                    </Row>
                                    <Row type="flex" justify="start" class="code-row-bg" style="margin-top:1rem;">
                                        <Col span="24" >注：(应为10的倍数)</Col>
                                    </Row>
                            </div>
                    </div>
                      <div style="height:3rem;width:100%;">
                            <mu-row >
                                <mu-col span="6"><div class="grid-cell"> <mu-button color="error" style="margin-top:0.4rem;" @click="cancel8722">取消</mu-button></div></mu-col>
                                <mu-col span="6"><div class="grid-cell"> <mu-button color="error" style="margin-top:0.4rem;" @click="cancel22">确定</mu-button></div></mu-col>
                            </mu-row>
                        </div>
                </div>
            </div>
            <div v-show='modal3' style="display:flex;justify-content:center;align-items:center;position:absolute;top:0;z-index:10;width:100vw;height:100vh;background:rgba(0,0,0,0.2);">
                <div style="background:url(./../../static/9.png) repeat fixed center;width:66vw;height:21rem;border-radius:10px;padding:0 0 3rem 0;background-size:100% 28rem;" >
                        <div style="width:66vw;height:18rem;padding:0.5rem;">
                            <mu-row gutter>
                                <mu-col  v-for="(item ,index) in items" :key="index" span="6" style="display:flex;justify-content:center;align-items:center;" @click="confirm33(index)" >
                                    <div style="background:#fff;margin-bottom:1rem;height:4.8rem;width:5rem;border-radius:10px;color:#c96d1e;">
                                         <img :src="item.img" :alt="item.text1" style="height:3rem;width:3rem;margin: 0.1rem 1rem ;">
                                         <span >
                                            {{item.text1}}
                                         </span>
                                    </div>
                                </mu-col>
                            </mu-row>
                        </div>
                        <div style="height:3rem;width:100%;border-top:2px solid #fff;">
                            <mu-row >
                                <mu-col span="12"><div class="grid-cell"> <mu-button color="error" style="margin-top:0.4rem;" @click="cancel3">关闭</mu-button></div></mu-col>
                            </mu-row>
                        </div>
                </div>
            </div>
            <div v-show='allsNum == 0 ? true : false' style="display:flex;justify-content:center;align-items:center;position:absolute;top:0;z-index:10;width:100vw;height:100vh;background:rgba(0,0,0,0.2);">
                <div style="background:url(./../../static/9.png) repeat fixed center;width:66vw;height:21rem;border-radius:10px;background-size:99vw 28rem;" >
                        <div style="height:3rem;width:100%;border-bottom:2px solid #fff;">
                            <mu-row >
                                <mu-col span="5" style="display:flex;justify-content:start;align-items:center;height:2rem;color:rgb(245, 216, 79);background:#fff;margin:0.5rem 0 0 0.5rem;border-radius:4px;" >
                                    <img src="./../../static/7.png" alt="" style="height:1.5rem;width:1.5rem;margin:0 0.8rem;">充值</mu-col>
                            </mu-row>
                        </div>
                        <div style="width:66vw;height:15rem;padding:1rem;">
                            <mu-row gutter>
                                <mu-col  v-for="(item ,index) in items2" :key="index" span="6" style="display:flex;justify-content:center;align-items:center;" @click="confirm333(index)" >
                                    <div style="background:#fff;margin-bottom:1rem;height:3.8rem;width:5rem;color:#c96d1e;position:relative;">
                                        <img src="./../../static/8.png" alt="" style="height:2rem;width:2rem;position:absolute;left:-1rem;top:-1rem">
                                        <mu-col span="12"><div class="grid-cell" style="background:#f5d84f;margin-bottom:0.2rem;border-radius:8px;margin-top:0.4rem;">{{item.nums1}}</div></mu-col>
                                        <mu-col span="12"><div class="grid-cell"  style="background:#f5d84f;margin-bottom:0.2rem;border-radius:8px;">{{item.mons1}}</div></mu-col>
                                    </div>
                                </mu-col>
                            </mu-row>
                        </div>
                        <div style="height:3rem;width:100%;border-top:2px solid #fff;">
                            <mu-row >
                                <mu-col span="12"><div class="grid-cell"> <mu-button color="error" style="margin-top:0.4rem;" @click="cancel33">关闭</mu-button></div></mu-col>
                            </mu-row>
                        </div>
                </div>
            </div>
            <div v-show='allsNum ==1 ? true : false' style="display:flex;justify-content:center;align-items:center;position:absolute;top:0;z-index:10;width:100vw;height:100vh;background:rgba(0,0,0,0.2);">
                <div style="background:url(./../../static/9.png) repeat fixed center;width:66vw;height:21rem;border-radius:10px;background-size:99vw 28rem;" >
                        <div style="height:3rem;width:100%;border-bottom:2px solid #fff;">
                            <mu-row >
                                <mu-col span="5" style="display:flex;justify-content:start;align-items:center;height:2rem;color:#ff9933;background:#fff;margin:0.5rem 0 0 0.5rem;border-radius:4px;" >
                                    <img src="./../../static/6.png" alt="" style="height:1.5rem;width:1.5rem;margin:0 0.8rem;">提现</mu-col>
                            </mu-row>
                        </div>
                        <div style="box-sizing:border-box; width:100%;height:15rem;background:#fff;">
                            <mu-row gutter style="padding:1rem;">
                                <mu-col span="12" style="color:#ff9933;text-align:left;font-size:1rem;margin-bottom:1rem;">
                                    <!-- 当前金币：{{}} -->
                                    当前金币：100
                                    
                                </mu-col>
                                <mu-col span="12" style="text-align:left;color:#996633">(提现比例：100金币/1元)
                                </mu-col>
                                <mu-row gutter style="margin-top:1rem;">
                                    <span  style="color:#ff9933;font-size:1rem;margin-left:1rem;">
                                            提现金额：
                                    </span>
                                    <mu-col span="7" style="color:rgb(245, 216, 79);text-align:left;font-size:1rem;">
                                            <Input v-model="$store.state.value3" @on-blur='tips21' placeholder="请输入金币（100的倍数）" />
                                    </mu-col>
                                    <mu-row style="color:#c96d1e;height:1rem;">
                                        <mu-col span="12" style="text-align:left;margin-left:1rem;">{{tips2}}</mu-col>
                                    </mu-row>
                                 </mu-row>
                                <mu-col span="12" style="margin-top:0.3rem;">
                                     <mu-button full-width style="background:#ff9999" @click="tijiao">确认提交</mu-button>
                                </mu-col>
                             
                            </mu-row>
                        </div>
                        <div style="height:3rem;width:100%;border-top:2px solid #fff;">
                            <mu-row >
                                <mu-col span="12"><div class="grid-cell"> <mu-button color="error" style="margin-top:0.4rem;" @click="cancel33">返回</mu-button></div></mu-col>
                            </mu-row>
                        </div>
                </div>
            </div>
            <div v-show='allsNum ==2 ? true : false' style="display:flex;justify-content:center;align-items:center;position:absolute;top:0;z-index:10;width:100vw;height:100vh;background:rgba(0,0,0,0.2);">
                <div style="background:url(./../../static/9.png) repeat fixed center;width:66vw;height:21rem;border-radius:10px;background-size:99vw 28rem;" >
                        <div style="height:3rem;width:100%;border-bottom:2px solid #fff;">
                            <mu-row >
                                <mu-col span="4" style="display:flex;justify-content:start;align-items:center;height:2rem;color:#ff9933;background:#fff;margin:0.5rem 0 0 0.5rem;border-radius:4px;" >
                                    <img src="./../../static/4.png" alt="" style="height:1.5rem;width:1.5rem;margin:0 0.8rem;">推广</mu-col>
                            </mu-row>
                        </div>
                        <div style="box-sizing:border-box; width:100%;height:15rem;background:#fff;">
                            <mu-row gutter style="padding:1rem 0 0 0;">
                                <div style="margin:0 3rem 0rem 3rem;height:2.4rem;width:100%;font-size:1rem;position:relative;background:#ff9933;border-radius:20px;display:flex;justify-content:center;align-items:center;color:#fff;">
                                        <img src="./../../static/1.png" alt="" style="height:2.6rem;width:2.6rem;position:absolute;left:-1rem;top:-1rem;transform:rotate(-20deg)">
                                        新用户送 6 金币
                                    </div>
                            </mu-row>
                            <mu-row gutter style="display:flex;justify-content:center;align-items:center;height:8rem;">
                                  <canvas id='canvas' style="width:30vw!important;margin:auto;"></canvas>
                            </mu-row>
                            <mu-row gutter >
                                <div style="margin:0.5rem 3rem 1rem 3rem;height:2.4rem;width:100%;font-size:1rem;display:flex;justify-content:center;align-items:center;">
                                    <mu-button color="error" style="margin-top:0.4rem;" >生成新二维码</mu-button>
                                </div>
                            </mu-row>
                        </div>
                        <div style="height:3rem;width:100%;border-top:2px solid #fff;">
                            <mu-row >
                                <mu-col span="12"><div class="grid-cell"> <mu-button color="error" style="margin-top:0.4rem;" @click="cancel333">返回</mu-button></div></mu-col>
                            </mu-row>
                        </div>
                </div>
            </div>
            <div v-show='allsNum ==3 ? true : false' style="display:flex;justify-content:center;align-items:center;position:absolute;top:0;z-index:10;width:100vw;height:100vh;background:rgba(0,0,0,0.2);">
                <div style="background:url(./../../static/9.png) repeat fixed center;width:66vw;height:21rem;border-radius:10px;background-size:99vw 28rem;" >
                        <div style="height:3rem;width:100%;border-bottom:2px solid #fff;">
                            <mu-row >
                                <mu-col span="4" style="display:flex;justify-content:start;align-items:center;height:2rem;color:#ff9933;background:#fff;margin:0.5rem 0 0 0.5rem;border-radius:4px;" >
                                    <img src="./../../static/7.png" alt="" style="height:1.5rem;width:1.5rem;margin:0 0.8rem;">佣金</mu-col>
                            </mu-row>
                        </div>

                        <div style="box-sizing:border-box; width:100%;height:15rem;background:#fff;color:#ff9933;">
                            <mu-row  style="border-bottom:1px solid rgb(148, 145, 145)">
                                <mu-col span="4"><div class="grid-cell">昨日佣金</mu-button></div></mu-col>
                                <mu-col span="4"><div class="grid-cell">今日佣金</mu-button></div></mu-col>
                                <mu-col span="4"><div class="grid-cell">总佣金</mu-button></div></mu-col>
                            </mu-row>
                            <mu-row  >
                                <mu-col span="4"><div class="grid-cell">{{$store.state.moneyCommission.commission}}</mu-button></div></mu-col>
                                <mu-col span="4"><div class="grid-cell">{{$store.state.moneyCommission.lastcommission}}</mu-button></div></mu-col>
                                <mu-col span="4"><div class="grid-cell">{{$store.state.moneyCommission.num}}</mu-button></div></mu-col>
                            </mu-row>
                        </div>

                        <div style="height:3rem;width:100%;border-top:2px solid #fff;">
                            <mu-row >
                                <mu-col span="12"><div class="grid-cell"> <mu-button color="error" style="margin-top:0.4rem;" @click="cancel333">返回</mu-button></div></mu-col>
                            </mu-row>
                        </div>
                </div>
            </div>
            <div v-show='allsNum ==4 ? true : false' style="display:flex;justify-content:center;align-items:center;position:absolute;top:0;z-index:10;width:100vw;height:100vh;background:rgba(0,0,0,0.2);">
                <div style="background:url(./../../static/9.png) repeat fixed center;width:66vw;height:21rem;border-radius:10px;background-size:99vw 28rem;" >
                        <div style="height:3rem;width:100%;border-bottom:2px solid #fff;">
                            <mu-row >
                                <mu-col span="6" style="display:flex;justify-content:start;align-items:center;height:2rem;color:#ff9933;background:#fff;margin:0.5rem 0 0 0.5rem;border-radius:4px;" >
                                    <img src="./../../static/3.png" alt="" style="height:1.5rem;width:1.5rem;margin:0 0.8rem;">战队信息</mu-col>
                            </mu-row>
                        </div>
                        <div style="box-sizing:border-box; width:100%;height:15rem;background:#fff;">
                            <mu-row gutter style="padding:0 1rem;color:#ff9933;border-bottom:1px solid #ccc;">
                                推荐人ID：
                            </mu-row>
                            <div style="height:14rem;overflow-x:hidden;" class="nihaoa" >
                                <mu-row gutter style="padding:0.2rem 0rem 0.2rem 5rem;color:#ff9933;border-bottom:1px solid #ccc;" >
                                    一级战队:{{$store.state.count10.count1}}人
                                </mu-row>
                                <mu-row gutter style="padding:0.2rem 0rem 0.2rem 5rem;color:#ff9933;border-bottom:1px solid #ccc;" >
                                    二级战队:{{$store.state.count10.count2}} 人
                                </mu-row>
                                <mu-row gutter style="padding:0.2rem 0rem 0.2rem 5rem;color:#ff9933;border-bottom:1px solid #ccc;" >
                                    三级战队:{{$store.state.count10.count3}} 人
                                </mu-row>
                                <mu-row gutter style="padding:0.2rem 0rem 0.2rem 5rem;color:#ff9933;border-bottom:1px solid #ccc;" >
                                    四级战队:{{$store.state.count10.count4}} 人
                                </mu-row>
                                <mu-row gutter style="padding:0.2rem 0rem 0.2rem 5rem;color:#ff9933;border-bottom:1px solid #ccc;" >
                                    五级战队:{{$store.state.count10.count5}} 人
                                </mu-row>
                                    <mu-row gutter style="padding:0.2rem 0rem 0.2rem 5rem;color:#ff9933;border-bottom:1px solid #ccc;" >
                                    六级战队:{{$store.state.count10.count6}} 人
                                </mu-row>
                                   <mu-row gutter style="padding:0.2rem 0rem 0.2rem 5rem;color:#ff9933;border-bottom:1px solid #ccc;" >
                                   七级战队:{{$store.state.count10.count7}} 人
                                </mu-row>
                                <mu-row gutter style="padding:0.2rem 0rem 0.2rem 5rem;color:#ff9933;border-bottom:1px solid #ccc;" >
                                    八级战队:{{$store.state.count10.count8}} 人
                                </mu-row>
                                   <mu-row gutter style="padding:0.2rem 0rem 0.2rem 5rem;color:#ff9933;border-bottom:1px solid #ccc;" >
                                    九级战队:{{$store.state.count10.count9}} 人
                                </mu-row>
                                <mu-row gutter style="padding:0.2rem 0rem 0.2rem 5rem;color:#ff9933;border-bottom:1px solid #ccc;" >
                                    十级战队:{{$store.state.count10.count10}} 人
                                </mu-row>
                            </div>
                        </div>
                        <div style="height:3rem;width:100%;border-top:2px solid #fff;">
                            <mu-row >
                                <mu-col span="12"><div class="grid-cell"><mu-button color="error" style="margin-top:0.4rem;" @click="cancel333">返回</mu-button></div></mu-col>
                            </mu-row>
                        </div>
                </div>

            </div>
            <div v-show='allsNum ==5 ? true : false' style="display:flex;justify-content:center;align-items:center;position:absolute;top:0;z-index:10;width:100vw;height:100vh;background:rgba(0,0,0,0.2);">
                <div style="background:url(./../../static/9.png) repeat fixed center;width:66vw;height:21rem;border-radius:10px;background-size:99vw 28rem;" >
                        <div style="height:3rem;width:100%;border-bottom:2px solid #fff;">
                            <mu-row >
                                <mu-col span="5" style="display:flex;justify-content:start;align-items:center;height:2rem;color:#ff9933;background:#fff;margin:0.5rem 0 0 0.5rem;border-radius:4px;" >
                                    <img src="./../../static/2.png" alt="" style="height:1.5rem;width:1.5rem;margin:0 0.8rem;">怎么玩</mu-col>
                            </mu-row>
                        </div>
                        <div style="box-sizing:border-box; width:100%;height:15rem;background:#fff;">
                            <mu-row gutter style="padding:1rem;color:#ff9933;">
                                游戏玩法：
                            </mu-row>
                             <mu-row gutter style="padding:1rem 1rem 1rem 1rem;color:#ff9933;">
                                玩法一：下注蓝猫、红猫其中一方赢
                            </mu-row>
                             <mu-row gutter style="padding:1rem 1rem 1rem 1rem;color:#ff9933;">
                                玩法二：下注蓝猫与红猫钓鱼总数量
                            </mu-row>
                        </div>
                        <div style="height:3rem;width:100%;border-top:2px solid #fff;">
                            <mu-row >
                                <mu-col span="12"><div class="grid-cell"> <mu-button color="error" style="margin-top:0.4rem;" @click="cancel333">返回</mu-button></div></mu-col>
                            </mu-row>
                        </div>
                </div>
            </div>
            <div v-show =' shows1s == true ' style="display:flex;justify-content:center;align-items:center;position:absolute;top:0;z-index:10;width:100vw;height:100vh;background:rgba(0,0,0,0.2);">
                <div style="background:url(./../../static/9.png) repeat fixed center;width:66vw;height:21rem;border-radius:10px;background-size:99vw 28rem;" >
                        <div style="box-sizing:border-box; width:66vw;height:18rem;background:#fff;">
                            <Tabs type="card" stretch='true' @on-click='chooseI'>
                                <TabPane label="充值记录" style="display:flex;justify-content:center;align-items:center;" name='yesterdays'>
                                     <div style="box-sizing:border-box; width:100vw;height:15rem;background:#fff;color:#ff9933;">
                                            <!-- <mu-row  style="border-bottom:1px solid rgb(148, 145, 145)">
                                                <mu-col span="4"><div class="grid-cell">昨日佣金</mu-button></div></mu-col>
                                                <mu-col span="4"><div class="grid-cell">今日佣金</mu-button></div></mu-col>
                                                <mu-col span="4"><div class="grid-cell">总佣金</mu-button></div></mu-col>
                                            </mu-row>
                                            <mu-row  v-for="(item , index) in $store.state.moneyLog "  :key='index'>
                                                <mu-col span="4"><div class="grid-cell">{{item.addtime }}</mu-button></div></mu-col>
                                                <mu-col span="4"><div class="grid-cell">{{item.betmoney }}</mu-button></div></mu-col>
                                                <mu-col span="4"><div class="grid-cell">{{item.profitLoss }}</mu-button></div></mu-col>
                                            </mu-row> -->
                                    </div>
                                </TabPane>
                                <TabPane label="下注记录" style="display:flex;justify-content:center;align-items:center;" name='bookmaking'>
                                    <div style="box-sizing:border-box; width:100vw;height:16rem;background:#fff;color:#ff9933;">
                                             <mu-row  style="border-bottom:1px solid rgb(148, 145, 145)">
                                                <mu-col span="3"><div class="grid-cell">时间</mu-button></div></mu-col>
                                                <mu-col span="3"><div class="grid-cell">下注信息</mu-button></div></mu-col>
                                                <mu-col span="3"><div class="grid-cell">下注金额</mu-button></div></mu-col>
                                                <mu-col span="3"><div class="grid-cell">下注收益</mu-button></div></mu-col>
                                            </mu-row>
                                            <div style="overflow-y:auto;height:15rem;">
                                                    <mu-row  v-for="(item , index) in $store.state.moneyLog "  :key='index'>
                                                        <mu-col span="3"><div class="grid-cell">{{item.addtime }}</mu-button></div></mu-col>
                                                        <mu-col span="3"><div class="grid-cell">{{item.message }}</mu-button></div></mu-col>
                                                        <mu-col span="3"><div class="grid-cell">{{item.betmoney }}</mu-button></div></mu-col>
                                                        <mu-col span="3"><div class="grid-cell">{{item.profitLoss }}</mu-button></div></mu-col>
                                                    </mu-row>
                                            </div>
                                    </div></TabPane>
                                <TabPane label="提现记录" name='withdraws' style="display:flex;justify-content:center;align-items:center;">
                                    <div style="box-sizing:border-box; width:100vw;height:16rem;background:#fff;color:#ff9933;">
                                        <mu-row  style="border-bottom:1px solid rgb(148, 145, 145)">
                                            <mu-col span="4"><div class="grid-cell">提现时间</mu-button></div></mu-col>
                                            <mu-col span="4"><div class="grid-cell">提现金额</mu-button></div></mu-col>
                                            <mu-col span="4"><div class="grid-cell">剩余金币</mu-button></div></mu-col>
                                        </mu-row>
                                        <div style="overflow-y:auto;height:15rem;">
                                            <mu-row  v-for="(item , index) in $store.state.wdLogs "  :key='index'>
                                                <mu-col span="4"><div class="grid-cell">{{item.addtime }}</mu-button></div></mu-col>
                                                <mu-col span="4"><div class="grid-cell">{{item.price }}</mu-button></div></mu-col>
                                                <mu-col span="4"><div class="grid-cell">{{item.balance}}</mu-button></div></mu-col>
                                            </mu-row>
                                        </div>
                                    </div>
                                </TabPane>
                            </Tabs>
                        </div>
                        <div style="height:3rem;width:100%;border-top:2px solid #fff;">
                            <mu-row >
                                <mu-col span="12"><div class="grid-cell"> <mu-button color="error" style="margin-top:0.4rem;" @click="cancel3333">返回</mu-button></div></mu-col>
                            </mu-row>
                        </div>
                </div>
            </div>
             <!-- 金币 下注动画 -->
        <!-- bottom:46vh   就行 -->
        <!-- <div  v-show='true'  style="position:absolute;bottom:6vh;left:46vw;border-radius:10px 10px 0 0">
            <mu-row >
                <mu-col :span='24' ><img v-for="n in 10 " :key="n" class='golds' src="./../../static/8.png" alt="" style="position:absolute;bottom:0vh;left:0vw;height:6vh;width:8vw"></mu-col>
            </mu-row>
        </div> -->

    </div>
</template>
<script src="https://res.wx.qq.com/open/js/jweixin-1.3.2.js"></script>
<script>
import mainPage from './../../static/mainPage.jpg'
import seter from './../../static/seter.png'
import clock from './../../static/clock.png'
import boat from './../../static/boat.png'
import cat1 from './../../static/cat1.png'
import cat2 from './../../static/cat2.png'
import fish from './../../static/f3.png'


import win from './../../static/win.png'
import lose from './../../static/lose.png'
import start from './../../static/start.png'

import vs from './../../static/vs.png'
import end from './../../static/end.png'
import ping from './../../static/ping.png'
import num8 from './../../static/8.png'
import num10 from './../../static/10.png'


import QRCode from 'qrcode' 
export default {
    name:'mainPage1',
    data(){
        return{
            win,
            lose,
            start,
              vs,
                end,
                  ping,
                    num10,
                      num8,
            // 图片
            mainPage,
            seter,
            clock,
            boat,
            cat1,
            cat2,
            fish,
            time60:20,
            num1:20,
            num2:0,
            nums:[50,100,200,500],
            // 鱼游动速度
            playSpeed:0,

            // 鱼游动方向
            fishOrientationX:0,
            fishOrientationY:0,
            // 鱼的个数
            fishNum:20,
            // 自定义
            modal1: false,
            modal2: false,
            modal3: false,
                value2:'',
           
                value4:'',
                value5:'',
                value6:'',
            nextPage:false,

            //  提示
            tips:'',
            tips2:'',
            numbs:[
                1,2,3,4,
                 5,6,7,8,
                  9,10,11,12,
                   13,14,15,16,
                    17,18,19,20,
            ],
            numItem:10,
            // 设置
            items:[
                {
                    img:'./../../static/5.png',
                    text1:'充值'
                },
                {
                    img:'./../../static/6.png',
                    text1:'提现'
                },
                {
                    img:'./../../static/4.png',
                    text1:'推广'
                },
                {
                    img:'./../../static/7.png',
                    text1:'佣金'
                },
                {
                    img:'./../../static/3.png',
                    text1:'战队信息'
                },
                {
                    img:'./../../static/2.png',
                    text1:'怎么玩'
                },
            ],
            goldNums:false,
            clickBlueOrRed:false,
            clickBlueOrRed1:false,
            clickBlueOrRed2:false,
            clickBlueOrRed3:false,
            clickBlueOrRed111:false,
            clickBlueOrRed21:false,
            items2:[
                {
                    nums1:423,
                    mons1:432,
                },
                 {
                    nums1:54,
                    mons1:546,
                },
                 {
                    nums1:76,
                    mons1:5,
                },
                 {
                    nums1:76,
                    mons1:5,
                },
                 {
                    nums1:8658,
                    mons1:5,
                },
                 {
                    nums1:856,
                    mons1:5,
                },
            ],

            allsNum:10,
            shows1s:false,
            tips213s:'',
            tips214s:'',
            tips215s:'',
            fishNum:20,
            // start
            startVS:false,
            maskingS:false,
            loseVS:false,
            blueNums:0,
            redNums:0,
            speed1 : [],
            speed2 : [],
            oLeft : [],
            oLeft1 : [],
            oTop : [],
            oTop1 : [],
           fishNum :  20,
           speed1s:[],
           speed2s:[],
           counts1 : 0,
        counts2 : 0,    
        numsef:[],
        numsef1:[],
        nihao:0,
        nihao1:0,
        nihaoya:true,
        }
    },
    methods:{
        // 二维码
        useqrcode(){ 
    　　　　 this.QueryDetail="https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx936df05d27e56cff&redirect_uri=http://www.jtarget.cn/games&response_type=code&scope=snsapi_userinfo&state="+this.$store.state.ums1+"#wechat_redirect"
            var canvas = document.getElementById('canvas')
            QRCode.toCanvas(canvas, this.QueryDetail, function (error) {
            if (error) console.error(error)
            })
        },
        cancel3333(){
            this.shows1s = false;
        },
        getNumMoney2(){
// confirm1
        },
        shows1(){
            this.shows1s = true;
        },
        cancel333(){
            this.allsNum = 10;
        },
        confirm33(index){
            this.allsNum = index
            if(index == 1){
               
            }else if(index == 2){

            }else if(index == 3){
                this.$store.commit('selectCommission');
            }else if(index == 4){
                this.$store.commit('selectboss');
            }else if(index == 5){
                
            }else{
                
            }
            
        },
        confirm333(index){
            this.modal3 = false;
            this.allsNum = 10
            this.$store.commit('orde');
            this.jsSdk();
        },
        onBridgeReady(){
            WeixinJSBridge.invoke(
                'getBrandWCPayRequest', {
                    "appId":this.$store.state.jsMapa.appId,        
                    "timeStamp":this.$store.state.state.jsMapa.timestamp,        
                    "nonceStr":this.$store.state.state.jsMapa.nonceStr,   
                    "package":this.$store.state.state.jsMapa.package,  
                    "signType":this.$store.state.state.jsMapa.signType,     
                    "paySign":this.$store.state.state.jsMapa.paySign,  
                },
           
                function(res){
                    if(res.err_msg == "get_brand_wcpay_request:ok") {
                        // $('.reward').hide();
                        // $('#J_prismPlayer').show();
                        // $(document).off('touchmove');
                    }
                    if(res.err_msg == "get_brand_wcpay_request:fail") {
                        // $('#J_prismPlayer').show();
                        // $(document).off('touchmove');
                    }
            }); 
            
        },
        jsSdk(){
                // 判断微信的WeixinJSBridge
            if (typeof WeixinJSBridge == "undefined"){
                if( document.addEventListener ){
                    document.addEventListener('WeixinJSBridgeReady', this.onBridgeReady(), false);
                }else if (document.attachEvent){
                    document.attachEvent('WeixinJSBridgeReady', this.onBridgeReady()); 
                    document.attachEvent('onWeixinJSBridgeReady', this.onBridgeReady());
                }
            }else{
                this.onBridgeReady();
            }
        },
        shows(){
            this.modal3 = true;
        },
        cancel33(){
             this.allsNum = 10;
        },
        cancel3(){
             this.modal3 = false;
        },
        confirm3(item,index){
            // 数据
            this.nextPage = true;
            this.value6 = '';
            this.$store.state.names = item;
            var setBack = document.getElementsByClassName('setBack');
            for(var i = 0 ; i < 20 ; i++){
                 setBack[i].children[0].style.background = '#fff'
                if(i == index){
                    setBack[i].children[0].style.background = '#fdc8b4'
                }
            }
        },
        guessing(){
            this.modal2 = true;
             var setBack = document.getElementsByClassName('setBack');
            for(var i = 0 ; i < 20 ; i++){
                 setBack[i].children[0].style.background = '#fff'
            }
        },
        // 竞猜取消了
        cancel8722(){
            this.nextPage = false;
            this.modal2 = false;
        },
        // 竞猜 
        cancel22(){
            var self = this;
            if(isNaN(self.value6) || '' ){
                self.tips215s = '请输入数字'
            }else if(self.value6 <= 0 ||  self.value6%1 != 0 || self.value6%10 != 0){
                self.tips215s = '请输入大于0的10倍数整数'
            }else{
                self.tips215s = ''
                self.nextPage = false;
                self.modal2 = false;
                self.$store.state.money = Number(self.value6) ;
                self.$store.commit('bet');
                window.sessionStorage.setItem('clicks2',1);
                
                if(window.sessionStorage.getItem('noMoney') == 1){
                    this.maskingS = true;
                }else{
                    alert('您的金币不足，请及时充值');
                    window.sessionStorage.setItem('clicks2',2);
                }
            }
        },
        // 提现
        tijiao(){
            this.$store.commit('tixian');
        },
        // 红猫蓝猫输赢
        confirm(){
            var self = this;
            if(self.$store.state.names != '' && self.$store.state.money != ''  ){
                    self.$store.commit('bet');
                    // console.log(this.$store.state.fishresult ,this.$store.state.fishblue , this.$store.state.fishnum,this.$store.state.fishred)
                    if(window.sessionStorage.getItem('noMoney') == 1){
                        window.sessionStorage.setItem('clicks2',0);
                        if(self.$store.state.names == '红猫胜'){
                            var s = 0
                            clearInterval(moneyred);
                            var moneyred = setInterval(() => {
                                s++
                                self.redNums +=  1
                                if( Number(self.$store.state.money) == s ){
                                    clearInterval(moneyred);
                                }
                            }, 1000/60);
                        }else if(self.$store.state.names == '蓝猫胜'){
                            var s = 0
                            clearInterval(moneyred);
                            var moneyred = setInterval(() => {
                                    s++
                                    self.blueNums += 1
                                    if( Number(self.$store.state.money) == s ){
                                        clearInterval(moneyred);
                                    }
                            }, 1000/60);
                        }
                        else if(self.$store.state.names == '平局'){
                        }else{
                            window.sessionStorage.setItem('clicks2',2);
                        }
                    }else{
                        alert('您的金币不足，请及时充值');
                        window.sessionStorage.setItem('clicks2',2);
                        self.maskingS = false;
                    }
                    self.maskingS = true;
                    self.$store.state.names == '' ;
                    self.$store.state.money == '' ;
            }else{
                alert('请您选择下注信息');
            }
        },
        cancel1(){
            this.modal1 = false;
        },
        // 自定义输入金额
        confirm1(){
                if(isNaN(this.value2) || '' ){
                    this.tips = '请输入数字'
                    return;
                }else if(this.value2 <= 0 || this.value2%10 != 0){
                    this.tips = '请输入大于0的10倍数的整数'
                    return;
                }else{
                    this.tips = '';
                    this.$store.state.money =  this.value2
                    this.modal1 = false;
                }
        },
        tips21(){
            if(isNaN(this.$store.state.value3) || '' ){
                this.tips2 = '请输入数字'
                return;
            }else if(this.$store.state.value3 <= 0 || this.$store.state.value3%1 != 0 || this.$store.state.value3%100 != 0){
                this.tips2 = '请输入大于0的100倍数整数'
                return;
            }else{
                this.tips2 = ''
            }
        },
        // 获取点击提现记录时的接口
        chooseI(value){
            if('bookmaking' == value){
                this.$store.commit('playlog');
            }else if('yesterdays' == value){
                
            }else if('withdraws' == value){
                this.$store.commit('selectAll');
            }else {
            }
        },
        // 获取蓝猫红帽金额
            subNum(item){
                this.$store.state.money = item
            },
            // 自定义
            custom(){
                if(this.$store.state.names == ''){
                    alert('请先选择下注对象哦');
                }else{
                    this.value6 = '';
                    var setBack = document.getElementsByClassName('setBack');
                    for(var i = 0 ; i < 20 ; i++){
                        setBack[i].children[0].style.background = '#fff'
                    }
                    this.modal1 = true;
                }
            },
            //    竞猜返回
            cancel4(){
                this.modal2 = false;
            },
            closeSimpleDialog () {
                this.modal1 = false;
            },
         
            // ui设计图片中猫的位置不一致导致没法统一   必须分开两个方法
            fishings1(fishing,num1,num2){
                var fishings = document.getElementById(fishing);
                var draw = fishings.getContext('2d');
                draw.clearRect(0,0,fishings.width,fishings.height);  
                // draw.fillRect(0,0,300,300);
                // 鱼竿
                draw.lineWidth=3;
                draw.clearRect(130-num1,num1-20,300,300);
                draw.beginPath();
                draw.moveTo(130-num1,num1-20);
                draw.lineTo(190,125-num1/2);
                draw.closePath();
                draw.strokeStyle="#dfddd4";
                draw.stroke();
                // 鱼线
                draw.lineWidth=1;
                draw.beginPath();
                draw.moveTo(130-num1,num1-20);
                draw.lineTo(130-num1,120+num2);
                draw.closePath();
                draw.strokeStyle = 'white';
                draw.stroke();
                // 鱼饵
                draw.fillStyle = 'red'
                draw.fillRect(128-num1,118+num2,4,4);
            },
            fishings2(fishing,num1,num2){
                var fishings = document.getElementById(fishing);
                var draw = fishings.getContext('2d');
                draw.clearRect(0,0,fishings.width,fishings.height);
                    // draw.fillRect(0,0,300,300);
                // 鱼竿
                draw.lineWidth=3;
                draw.beginPath();
                draw.moveTo(130-num1,num1-20);
                draw.lineTo(200,125-num1/2);
                draw.closePath();
                draw.strokeStyle="#dfddd4";
                draw.stroke();
                // 鱼线
                draw.lineWidth=1;
                draw.beginPath();
                draw.moveTo(130-num1,num1-20);
                draw.lineTo(130-num1,120+num2);
                draw.closePath();
                draw.strokeStyle = 'white';
                draw.stroke();
                // 鱼饵
                draw.fillStyle = 'red'
                draw.fillRect(128-num1,118+num2,4,4);
            },
                  // 开始时
            times0(){
                var self = this;
                self.num1 = 20
                self.fishings1('fishing1',self.num1,0);
                self.fishings2('fishing2',self.num1,0);
            },
            times1(){
                var self = this;
                self.num1 = 20;
                clearInterval(time1);
                var time1 =  setInterval(()=>{
                    if( self.num1 <= 60){
                        self.num1 +=10;
                        self.fishings1('fishing1',self.num1,0);
                        self.fishings2('fishing2',self.num1,0);
                    }
                 },60)
            },
            times2(){
                var self = this;
                self.num2 = 0
                clearInterval(time2);
                var time2 = setInterval(()=>{
                    if( self.num2<= 150){
                        self.num2 +=10;
                        self.fishings1('fishing1',60,self.num2);
                        self.fishings2('fishing2',60,self.num2);
                    }
                },100)
            },
            // 时钟
            time20(){
                var self = this;
                self.time60 = 20
                clearInterval(time2054);
                var time2054 =  setInterval(()=> {
                    self.time60 -= 1
                    if(self.time60 <= 0){
                        clearInterval(time2054);
                    }
                },1000)
            },
            fishF1(){
                // 所有鱼的速度
                var self = this;
                self.counts1 = 0;
                self.counts2 = 0;
                self.oLeft = [];
                self.oTop = [];
                self.oLeft1 = [];
                self.oTop1 = [];
                var fishing3Canvas = document.getElementById('fishing3Canvas');
                // 所有鱼
                var fishBox = document.getElementsByClassName('fishBox');
                // 所有鱼的相对位置
                var oL = fishing3Canvas.clientWidth - fishBox[0].clientWidth;
                var oH = fishing3Canvas.clientHeight - fishBox[0].clientHeight;
                for(let i = 0 ; i < self.fishNum ; i++){
                    self.oLeft.push(Math.random()*oL);
                    self.oTop.push(Math.random()*oH);
                    self.oLeft1.push(0);
                    self.oTop1.push(0);
                };
                    self.speed1s = self.speed1;
                    self.speed2s = self.speed2;
                for(let j= 0 ; j < self.fishNum ; j++){
                    clearInterval(tiemsfe);
                    let tiemsfe =   setInterval(()=>{
                        self.oLeft1[j] += self.speed1s[j];
                        self.oTop1[j] += self.speed2s[j];
                        fishBox[j].style['top']= (self.oTop[j] + self.oTop1[j]) +"px";
                        fishBox[j].style['left']= self.oLeft[j] + self.oLeft1[j] +"px";
                        if(self.oLeft1[j] >= oL-self.oLeft[j]){
                            fishBox[j].style['transform'] = 'rotateY(180deg)';
                            fishBox[j].style['transition'] = 'transform 0.2s';
                            self.speed1s[j] = -self.speed1s[j];
                        }
                        if(self.oLeft1[j]  <= -self.oLeft[j]){ 
                            fishBox[j].style['transform'] = 'rotateY(360deg)';
                            fishBox[j].style['transition'] = 'transform 0.2s';
                            self.speed1s[j] = -self.speed1s[j];
                        }
                        if(self.oTop1[j] >= oH-self.oTop[j]){
                            fishBox[j].style['transition'] = 'transform 0.2s';
                            self.speed2s[j] = -self.speed2s[j];
                        }
                        if(self.oTop1[j]  <= -self.oTop[j]){ 
                            fishBox[j].style['transition'] = 'transform 0.2s';
                            self.speed2s[j] = -self.speed2s[j];
                        }
                             //     state.fishblue= 0
        // state.fishnum = 0
        // state.fishred = 0
                        // if(window.sessionStorage.getItem('clicks2') == 1 || window.sessionStorage.getItem('clicks2') == 0){
                        //      self.speed1s  = self.speed1 ;
                        //      self.speed2s = self.speed2 ; 
                        //         clearTimeout(timaef);
                        //         let timaef =   setTimeout(()=>{
                        //                 if( fishBox[j].style['left'] >= (window.innerWidth*0.32 + 'px') && fishBox[j].style['left'] <= (window.innerWidth*0.34 + 'px') && fishBox[j].style['top'] >= (window.innerHeight*0.5+ 'px') && fishBox[j].style['top'] <= (window.innerHeight*0.7+ 'px')){
                        //                         self.speed1s[j] = 0;
                        //                         self.speed2s[j] = 0;
                        //                     }
                        //                 if( fishBox[j].style['left'] >= (window.innerWidth*0.55 + 'px') && fishBox[j].style['left'] <= (window.innerWidth*0.57+ 'px') && fishBox[j].style['top'] >= (window.innerHeight*0.5+ 'px') && fishBox[j].style['top'] <= (window.innerHeight*0.7+ 'px')){
                        //                         self.speed1s[j] = 0;
                        //                         self.speed2s[j] = 0;
                        //                 }
                        //         },1000/60);
                        // }
                    },1000/60);
                }
           },
           //    定时器  
        //    用户
   
           zhanshijieshujiemian(){
               var self = this;
               if(window.sessionStorage.getItem('clicks2') == 1 && !isNaN(self.$store.state.names) ){
                        self.goldNums = true;
                        self.clickBlueOrRed = false;
                        self.clickBlueOrRed1= false;
                        self.clickBlueOrRed2= false;
                        self.clickBlueOrRed3= false;
                    }else if(window.sessionStorage.getItem('clicks2') == 0 && self.$store.state.names == '蓝猫胜' ){
                        self.goldNums = false;
                        self.clickBlueOrRed = true;
                        self.clickBlueOrRed1= true;
                        self.clickBlueOrRed2= false;
                        self.clickBlueOrRed3= false;
                    }else if(window.sessionStorage.getItem('clicks2') == 0 && self.$store.state.names == '红猫胜' ){
                        self.goldNums = false;
                        self.clickBlueOrRed1= false;
                        self.clickBlueOrRed = true;
                        self.clickBlueOrRed2= true;
                        self.clickBlueOrRed3= false;
                    }else  if(window.sessionStorage.getItem('clicks2') == 0 && self.$store.state.names == '平局'){
                        self.goldNums = false;
                        self.clickBlueOrRed2= false;
                        self.clickBlueOrRed1= false;
                        self.clickBlueOrRed = true;
                        self.clickBlueOrRed3= true;
                    } else{
                        self.goldNums = false;
                        self.clickBlueOrRed = false;
                        self.clickBlueOrRed1= false;
                        self.clickBlueOrRed2= false;
                        self.clickBlueOrRed3= false;
                    }
           },
           zhanshijieshujiemian1(){
                var self = this;
                self.goldNums = false;
                self.clickBlueOrRed111 = true;
                self.clickBlueOrRed21= true;
           },
       
           gengxinjiemian(){
                var self = this;
                this.$store.commit('getGold');
                self.clickBlueOrRed = false;
                self.clickBlueOrRed1= false;
                self.clickBlueOrRed2= false;
                self.clickBlueOrRed3= false;
                self.goldNums = false;
           },
           kaishiyouxi(){
                var self = this;
                self.modal2 = false;
                self.modal1 = false;
                self.nextPage = false;
                self.times0();
                // 鱼竿运动
                self.times1()
                self.times2()
           },
           zhanshiwanbi(){
                var self = this;
                self.times0();
                // 鱼竿运动
                self.times1()
                self.times2()
                self.time20()
                self.startVS = false;
           },
           zhanshijiemian(){
                var self = this;    
                self.modal2 = false;
                self.modal1 = false;
                self.nextPage = false;
                self.maskingS = true;
                self.startVS = true;
                
           },
   chushihua(){
                var self = this; 
                self.times0();
                // 鱼竿运动
                self.times1()
                self.times2()
                self.time20()
                self.fishF1();
                self.suijishu()
                self.redNums = self.nihao
                self.blueNums = self.nihao1
   },
        timeAlla(){
                var self = this;
                // 初始化
                self.chushihua();
                clearTimeout(timeAll20s1);
                var timeAll20s1 = setTimeout(() => {
                        // alert('此刻展示界面');
                        self.zhanshijiemian();
                        self.nihaoya  =  false;
                        clearTimeout(timeAll20s11);
                        var timeAll20s11 = setTimeout(() => {
                            // alert('展示完毕');
                           self.zhanshiwanbi()
                        }, 3000);
                }, 20000);
                clearTimeout(timeAll20s2);
                var timeAll20s2 = setTimeout(() => {
                        // alert('开始游戏');
                        self.kaishiyouxi();
                        clearTimeout(timeAll20s12);
                        var timeAll20s12 = setTimeout(() => {
                            // alert('展示结束界面');
                            if( window.sessionStorage.getItem('clicks2') == 2){
                                self.$store.commit('getNum');
                                self.zhanshijieshujiemian1();
                            }else{
                                self.zhanshijieshujiemian();
                            }
                        }, 20000);
                }, 23000);
                clearTimeout(timeAll20s3);
                var timeAll20s3 = setTimeout(() => {
                    // alert('展示结束，');
                    self.gengxinjiemian()

                    self.suijishu()
                    self.redNums = self.nihao
                    self.blueNums = self.nihao1
                    self.clickBlueOrRed111 = false;
                    self.clickBlueOrRed21= false;
                }, 46000);
                self.maskingS = false;
                clearInterval(timeAlla1)
                var timeAlla1 = setInterval(() => {
                     // 开始游戏 
                    self.kaishiyouxi()
                    self.time20()
                    clearTimeout(timeAll20s1);
                    var timeAll20s1 = setTimeout(() => {
                        // alert('此刻展示界面');
                        self.maskingS = true;
                        self.startVS = true;
                        self.nihaoya  =  false;
                        clearTimeout(timeAll20s11);
                        var timeAll20s11 = setTimeout(() => {
                            // alert('展示完毕');
                            self.zhanshiwanbi()
                        }, 3000);
                    }, 20000);
                    clearTimeout(timeAll20s2);
                    var timeAll20s2 = setTimeout(() => {
                        // alert('开始游戏');
                        self.modal2 = false;
                        self.modal1 = false;
                        self.nextPage = false;
                        self.times0();
                        // 鱼竿运动
                        self.times1()
                        self.times2()
                        clearTimeout(timeAll20s12);
                        var timeAll20s12 = setTimeout(() => {
                            // alert('展示结束界面');
                            if( window.sessionStorage.getItem('clicks2') == 2){
                                self.$store.commit('getNum');
                                self.zhanshijieshujiemian1();
                            }else{
                                self.zhanshijieshujiemian();
                            }
                        }, 20000);
                    }, 23000);
                    clearTimeout(timeAll20s3);
                    var timeAll20s3 = setTimeout(() => {
                        // alert('界面展示结束，');
                        self.gengxinjiemian()
                        self.suijishu()
                        self.blueNums = self.nihao
                        self.redNums = self.nihao1
                        self.clickBlueOrRed111 = false;
                        self.clickBlueOrRed21= false;
                    }, 46000);
                    self.maskingS = false;
                    // 用于鉴定玩家是否下注
                    window.sessionStorage.setItem('clicks2',2) 
                }, 46000);
                // 滚动
        },
        scrollsw(){
                var boxs1 = document.getElementById('boxs1');
                var boxs2 = document.getElementById('boxs2');
                
                var sspdsf = 0
                clearInterval(timesfsf)
                var timesfsf = setInterval(() => {
                    sspdsf += -0.02
                    boxs1.style.top  = sspdsf + 'rem'
                    boxs2.style.top  = sspdsf + 'rem'
                    if(sspdsf <= -12){
                            sspdsf = 0
                            boxs1.style.top = '0rem'
                            boxs2.style.top = '0rem'
                    }
                }, 1000/60);
        },
        suijishu(){
            var self = this;
            self.nihaoya  = true;
            for(var i =0 ; i < 20 ; i++){
                self.numsef.push({
                    names:Math.ceil(Math.random()*10000),
                    money:Math.ceil(Math.random()*1000),
                })
                 self.numsef1.push({
                        names:Math.ceil(Math.random()*10000),
                        money:Math.ceil(Math.random()*1000),
                    }
                 )
            }
            self.nihao = 0 ; 
            self.nihao1 = 0 ; 
            for(var j =0 ; j < 20 ; j++){
                self.nihao  +=  self.numsef[j].money 
                self.nihao1 +=  self.numsef1[j].money 
            }
            console.log(self.nihao,self.nihao1);
        }
    },
    mounted() {
        var self = this;
        self.scrollsw();
        window.sessionStorage.setItem('clicks2',2);
        // 获取金币
        self.$store.commit('getGold');
        // 鱼竿
       for(let i = 0 ; i < self.fishNum ; i++){
            self.speed1.push(Math.random()*2);
            self.speed2.push(Math.random()*1.5);
        };
        // 二维码
        self.useqrcode();
        // 进入游戏后   开始下注  在开始游戏
        self.timeAlla();
        // this.$store.commit('getnum');
       
      
    },
}
</script>
<style >
.mainPage{
    height:100vh;
    width:100vw;

}
#canvas {
    width:30vw!important;
     height:30vw!important;
}
.seter{
    height:2rem;
    width:2rem;
}
.clock{
    width:66%;
}
.boat{
    width:100%;
}
.cat1{
    width:60%;
}
.cat2{
    width:60%;
}
.class_name{
    background:red;
}
.nihaoa::-webkit-scrollbar {
        width: 1px;     /*高宽分别对应横竖滚动条的尺寸*/
}
[v-cloak] {
   display:none;
}
</style>



