<template>
    <div>
       <!-- 顶部选项卡开始 -->
       <div>
           <mt-navbar v-model="active">
               <mt-tab-item id="d1">HTML5</mt-tab-item>
               <mt-tab-item id="d2">CSS3</mt-tab-item>
               <mt-tab-item id="d3">javaServer</mt-tab-item>
               <mt-tab-item id="d4">jQuery</mt-tab-item>
           </mt-navbar>
       </div>
       <!-- 底部选项卡底部 -->
       <!-- 面板区域开始 -->
       <div style="margin-top:30px">
           <mt-tab-container v-model="active">
                <mt-tab-container-item id="d1">
                    <p>123</p>
                </mt-tab-container-item>
                <mt-tab-container-item id="d2">
                    <p>456</p>
                </mt-tab-container-item>
                <mt-tab-container-item id="d3">
                    <p>789</p>
                </mt-tab-container-item>
                <mt-tab-container-item id="d4">
                    <p>111</p>
                </mt-tab-container-item>
           </mt-tab-container>
       </div>
       <!-- 面板区域结束 -->
    </div>
</template>
<script>
    export default{
        data(){
            return {
                active:'1'
            }
        },
        methods:{

        }
    }
</script>
