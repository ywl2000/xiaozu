<template>
  <div>
    <!-- 顶部导航栏开始 -->
    <mt-header title="学前端">
      <div slot="right" class="zhu">
        <router-link to="/Field">注册</router-link>
        <router-link to="/Login">登录</router-link>
      </div>
    </mt-header>
    <!-- 顶部导航栏结束 -->
    <!-- 顶部选项卡开始 -->
    <mt-navbar v-model="active">
      <mt-tab-item :id="item.id" v-for="(item,index) of category" :key="index">{{item.category_name}}</mt-tab-item>
      
    </mt-navbar>
    <!-- 顶部选项卡结束 -->
    <!-- 面板区域开始 -->
    <div class="mian">
      <mt-tab-container v-model="active">
        <mt-tab-container-item :id="item.id" v-for="(item,index) of category" :key="index">
        <!-- 单一文章开始 -->
          <div class="InfoItem" v-for="(article,indes) of articles" :key="indes">
            <!-- 标题信息开始 -->
              <div class="InfoItemHead">数据库打飞机快捷酒店</div>
            <!-- 标题信息结束 -->
            <!-- 简介与缩列图区域开始 -->
            <div class="InfoItemContent">
              <div class="InfoItemDes">收款方诶；垃圾啊v怎么v看看设计费 大于机会和街道口爱上对方过后就哭了立刻就会股份第三</div>
              <div>
                <img class="InfoItemImg-s" src="../assets/articles/v2-3a21001de016a2d5f98d7622b092f66c_224x148.jpg" alt="">
              </div>
            </div>
            <!-- 简介与缩列图区域结束 -->
          </div>
          <!-- 单一文章结束 -->
          <!-- <p v-for="(v,k) of 50" :key="k">11--{{v}}</p> -->
        </mt-tab-container-item>
        <mt-tab-container-item id="2">
          <p>22</p>
        </mt-tab-container-item>
        <mt-tab-container-item id="3">
          <p>33</p>
        </mt-tab-container-item>
        <mt-tab-container-item id="4">
          <p>44</p>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>  
    <!-- 面板区域结束 -->
    <!-- 底部选项卡开始 -->
    <div class="di">
        <mt-tabbar v-model="xuanzhong" fixed>
            <mt-tab-item id="d1">首页
                <img src="../assets/oa-t-housef.png" alt="" slot="icon" v-if="xuanzhong=='d1'">
                <img src="../assets/oa-t-house.png" alt="" slot="icon" v-else>
            </mt-tab-item>
            <mt-tab-item id="d2">购物车
                <img src="../assets/gouwuche.png" alt="" slot="icon" v-if="xuanzhong=='d2'">
                <img src="../assets/gouwuchef.png" alt="" slot="icon" v-else>
                </mt-tab-item>
            <mt-tab-item id="d3">个人中心
                <img src="../assets/oa-person.png" alt="" slot="icon" v-if="xuanzhong=='d3'">
                <img src="../assets/oa-personf.png" alt="" slot="icon" v-else>
            </mt-tab-item>
        </mt-tabbar>     
    </div>
    <!-- 底部选项卡结束 -->
  </div>
</template>
<script>
export default {
  data(){
    return{
      active:1,
      xuanzhong:"d1",
      //存错文章分类信息
      category:[],
      //存错文章数据
      articles:[]
    } 
  },
  watch:{
    xuanzhong(){
          switch(this.xuanzhong){
              case 'd1':
                  this.$router.push('/');
                  break;
              case 'd2':
                  this.$router.push('/List');
                  break;
              case 'd3':
                  this.$router.push('/tabbar')
          }
      }
  },
  mounted(){
    this.axios.get('/category').then(res=>{
      // console.log(res.data)
      this.category=res.data.results
    });
    //获取默认顶部选项卡包括的文章列表
    //之所以传递参数，是因为现在客户端、
    //只获取的顶分类下包含的文章数据，所以通过参数来告知服务器
    this.axios.get('/articles?cid=' + this.active).then(res=>{
      //将服务器返回值的文章数据存储到articles变量中
      this.articles=res.data.articles

      
    })
    
  },
}
</script>

<style scoped>
/* 顶部导航栏右侧的连接 */
  .zhu a{
    color:#fff;
    text-decoration: none;
    display: inline-block;
    margin-left: 10px;
  }
  
  .mian{
    margin-top: 10px;
  }
  /* 面板容器 */
  .di{
    margin-top: 55px;
  }
  .InfoItem{
    padding: 15px 0 14px;
    margin: 0 15px;
    border-bottom: .5px solid #d3d3d3;
  }
  .InfoItemHead{
    font-weight:600;
    font-size:17px;
    color:#1a1a1a;
    line-height:22px
  }
  /* 文本缩略图 */
  .InfoItemContent{
    /* 兼容ie浏览器 */
    display:-ms-flexbox;
    display:flex;
    padding-top:11px;
    -ms-flex-align:center;
    align-items:center;
    width:100%
  }
  /* 简介 */
.InfoItemDes {
    flex: 1;
    position: relative;
    -webkit-line-clamp: 3;
    height: 63px;
    padding-right: 15px;
    font-size: 15px;
    overflow: hidden;
    font-weight: 400;
    text-overflow: ellipsis;
    display: -webkit-box;
    line-height: 21px;
    letter-spacing: normal;
    color: #444;
    margin-right: 4px 15px;
    -webkit-box-orient: vertical;
}
/* 缩列图 */
.InfoItemImg-s{
  width:112px;
  height:74px;
  border-radius:5px;
  background:#ccc
}
</style>