<template>
    <div>
        <div id="font">手机号登录</div>
        <div id="font_1">
            <router-link to="/">国家/地区</router-link>
            <router-link to="/"> 中国大陆 (+86)</router-link>
        </div>
        <div id="d1">
            <mt-field 
            type="text"
            label="手机号"
            state="success"
            placeholder="请输入11位手机号"
            @blur.native.capture="checkUsername">
            </mt-field> 
            <mt-field
            type="password"
            label="密码"
            state="success"
            placeholder="请输入密码"
            ></mt-field>
        </div>
    </div>
</template>
