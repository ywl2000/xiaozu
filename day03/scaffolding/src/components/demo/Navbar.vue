<template>
<div>
    <mt-navbar v-model="active">
        <mt-tab-item id="d1">html</mt-tab-item>
        <mt-tab-item id="d2">css</mt-tab-item>
        <mt-tab-item id="d3">javascript</mt-tab-item>
        <mt-tab-item id="d4">jquery</mt-tab-item>
    </mt-navbar>
    <mt-tab-container v-model="active">
        <mt-tab-container-item id="d1">
            <p>11111111</p>
        </mt-tab-container-item>
        <mt-tab-container-item id="d2">
            <p>22222</p>
        </mt-tab-container-item>
         <mt-tab-container-item id="d3">
            <p>33333</p>
        </mt-tab-container-item>
         <mt-tab-container-item id="d4">
            <p>44444</p>
        </mt-tab-container-item>
    </mt-tab-container>
</div >
    
</template>
<script>
export default {
    data(){
        return {
            active:"1"
        }
    },
    // watch:{
    //     active(){
    //         console.log(this.active)
    //     }
    // }
}
</script>>
