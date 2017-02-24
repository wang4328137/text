var app = getApp()
Page({
data: {
    title: '你好小程序'+app.getTitle(),
    data1:123,
    data2:456,
    data3:'789',
    flag:true,
    data5:75,
    list1:['111','222','33333','4444'],

        list2:[

        {"name":"老吕11","age":5},
        {"name":"老吕22","age":55},
        {"name":"老吕33","age":555}
        ],


        
        list3:[
         {"type":"好学生",
        "stus":[
        {"name":"老吕11","age":5},
        {"name":"老吕22","age":55},
        {"name":"老吕33","age":555}]},

         {"type":"坏学生",
        "stus":[
        {"name":"小吕11","age":5},
        {"name":"小吕22","age":55},
        {"name":"小吕33","age":555}]},

         {"type":"中学生",
        "stus":[
        {"name":"中吕11","age":5},
        {"name":"中吕22","age":55},
        {"name":"中吕33","age":555}]},
        ]
  },
    
dwdw1:function(){
   console.log('点到了page3.js中的的dwdw1' );
   app.appfun();
},
dwdw2:function(){
    this.setData({

        title:'你不好你不好'

    });
},

dwdw3:function(){

    this.setData({
        flag:!this.data.flag
       
    });

   
    
   
}
})