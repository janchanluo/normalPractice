!(function(){
    var shop={};
    shop.install=function(vue){
        vue.namea="a"

        vue.shopcar={
            shop:"shopcar",
            getshop:function(){
                return JSON.parse( localStorage.getItem(this.shop))
            },
            setshop:function(product){
                localStorage.setItem(this.shop,JSON.stringify(product))
            },
            addshop:function(product){
                var data=this.getshop();
                if(!data){
                    var objlist={
                        totalmoney:product.num * parseFloat(product.price).toFixed(2),
                       
                        prolist:[product]
                    }
                    this.setshop(objlist)
                }
                else{
                  
                    var prolist=data.prolist;
                    var f=false;
                    for(let i=0;i<prolist.length;i++){
                        if(prolist[i].id==product.id){
                            if(prolist[i].title==product.title){
                               
                                prolist[i].num+=parseInt(product.num)
                                console.log(i,prolist[i].num)
                                f=true;
                                break;
                            }
                        }
                    }

                    if(f==false){
                       
                        prolist.push(product);

                    }

                    data.totalmoney = parseFloat(data.totalmoney) + product.num * parseFloat(product.price)
                    console.log(data)
                    
                    this.setshop(data)


                }
            }
        }

        vue.directive("shop",{
            bind:function(el,binding){
                el.onclick=function(){
                    if(binding.arg=="set"){
                        if(binding.value){
                            vue.shopcar.addshop(binding.value)
                        }else{
                            var math=parseInt(Math.random()*productlist.length)
                            var math2=parseInt(Math.random()*productlist[math].prolist.length)
                            console.log(math,math2)
                            vue.shopcar.addshop(productlist[math].prolist[math2])
                            alert("加入购物车成功")
                         
                            //console.log(productlist[math].title,productlist[math].prolist[math2])
                        }

                    }else if(binding.arg=="tiao"){
                        if(binding.value){
                            vue.shopcar.addshop(binding.value)
                        }else{
                            var math=parseInt(Math.random()*productlist.length)
                            var math2=parseInt(Math.random()*productlist[math].prolist.length)
                            // console.log(math,math2)
                            vue.shopcar.addshop(productlist[math].prolist[math2])
                            location.href="shop_cart.html"
                        }
                    }
                }
            }
        })

    }


    if(typeof window!==undefined&&window.Vue){
        window.Vue.use(shop)
    }
})()