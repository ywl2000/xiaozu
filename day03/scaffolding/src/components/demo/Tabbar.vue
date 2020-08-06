<template>
    <div>
        <mt-tab-container v-model="xuanzhong" >
            <mt-tab-container-item id="d1">
                <p v-for="(v,k) of 40" :key="k">这是首页{{v}}</p>
            </mt-tab-container-item>
             <mt-tab-container-item id="d2">
                <p>这是购物</p>
            </mt-tab-container-item>
             <mt-tab-container-item id="d3">
                <p>这是中心</p>
            </mt-tab-container-item >
        </mt-tab-container>
        <div style="margin-top:55px">
        <mt-tabbar v-model="xuanzhong" fixed>
            <mt-tab-item id="d1">首页
                <img src="../../assets/oa-t-housef.png" alt="" slot="icon" v-if="xuanzhong=='d1'">
                <img src="../../assets/oa-t-house.png" alt="" slot="icon" v-else>
            </mt-tab-item>
            <mt-tab-item id="d2">购物车
                <img src="../../assets/gouwuche.png" alt="" slot="icon" v-if="xuanzhong=='d2'">
                <img src="../../assets/gouwuchef.png" alt="" slot="icon" v-else>
                </mt-tab-item>
            <mt-tab-item id="d3">个人中心
                <img src="../../assets/oa-person.png" alt="" slot="icon" v-if="xuanzhong=='d3'">
                <img src="../../assets/oa-personf.png" alt="" slot="icon" v-else>
            </mt-tab-item>
        </mt-tabbar>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            xuanzhong:"d1"
        }
    }
}
</script>>