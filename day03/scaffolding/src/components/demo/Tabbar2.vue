<template>
    <div>

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
</template>
<script>
export default {
    data(){
        return {
            xuanzhong:"d1"
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
    }
}
</script>>