 new Vue({
    el:"#app",
    data:{
        name:"",
        pass:""

    },
    methods:{
        login:function(){
            
            this.$http.post("php/user.json").then((res)=>{
                console.log(res)
                var name=this.name
                var pass=this.pass
                console.log(res.body[name])
                var re=res.body[name]
                if(re){
                    if(this.name==re.username&&this.pass==re.password){
                      location.href="homepage.html"
                    }else{
                    alert("密码错误")
                    }
                }else{
                    alert("用户不存在")
                }
            })
        }
    }
})