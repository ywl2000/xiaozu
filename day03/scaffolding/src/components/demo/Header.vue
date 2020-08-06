<template>
    <div>
        <mt-header title="学前端" fixed>
            <router-link to="/" slot="left">
                <mt-button icon="back">返回</mt-button>
            </router-link>
            <router-link to="/" slot="right">更多
                <mt-button icon="more"></mt-button>
            </router-link>
        </mt-header>
        <div style="border:2px solid red;margin-top:40px">
            <p>
                <mt-button type="primary">主要的</mt-button>
            </p>
            <p>
                <mt-button type="danger">危险的</mt-button>
                <mt-button type="primary" size="small">小的</mt-button>
            </p>
            <p>
                <mt-button type="primary" size="large">大的</mt-button>
            </p>
            <p>
                <mt-button type="primary" plain>镂空按钮</mt-button>
            </p>
            <p>
                <img src="../../assets/更多.png" alt="">
            </p>
            <p v-for="(v ,k) of 40" :key="k">{{v}}</p>
        </div>
    </div> 
</template>      