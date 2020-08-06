//引入Express模块
const express=require('express')

//引入CORS模块
const cors=require('cors')

//引入mysql模块
const mysql=require('mysql')

//创建mysql连接池、
const pool=mysql.createPool({
    //数据库服务器地址
    host:'127.0.0.1',
    //数据库用户名
    user:'root',
    //数据库用户密码
    password:'',
    //数据库端口号
    port:3306,
    //数据库名称
    database:'xzqa',
    //编码方式
    charset:'utf8',
    //连接限制
    connectTimeout:15
});

//创建Express实例
const server=express()

//将CORS作为server的中间使用
server.use(cors({
    origin:['http://127.0.0.1:8080','http://localhost:8080',]
}))

//获取所有文章分类信息的API
server.get('/category',(req,res)=>{
    //SQL查询语句
    let sql = 'SELECT id,category_name FROM xzqa_category';
    //执行SQL查询语句
    pool.query(sql,(err,results)=>{
        if(err) throw err;
        //响应到客户端的信息
        res.send({message:'查询成功',code:1,results:results});
    });
});

//获取特定分类下的文章数据
server.get('/articles',(req,res)=>{
    //获取客户端URL地址的参数
    let cid=req.query.cid;
    console.log(cid)
    //以获取到的参数为条件在文章数据表中进行查询操作
    let sql='select id,subject,description,image from xzqa_article where category_id=?';
    pool.query(sql,[cid],(err,results)=>{
        if(err) throw err;
        res.send({message:'查询成功',code:1,articles:results})
    })
})

//指定服务器的监听端口号
server.listen(3000)
