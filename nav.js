

// nav
document.getElementById("menu-btn").onclick=function (e){    
  document.getElementById("nav").classList.add("nav-show");
}
document.getElementById("close-nav").onclick=function (e){
  document.getElementById("nav").classList.remove("nav-show");
}

// search
document.getElementById("search-btn").onclick=function (e){    
  if(document.body.offsetWidth>768){
      return false;
  }
  document.getElementById("header-search").children[0].style="display:block;"
  document.getElementById("logo").style="display:none;";
}



// cart
document.getElementById("cart-btn").onclick=function (e){    
  document.getElementById("cart").classList.add("cart-show");
}
document.getElementsById("add-cart").onclick=function (e){    
  document.getElementById("cart").classList.add("cart-show");
}
// this line does not work so I use HTML to redirect user to previous page
document.getElementById("close-cart").onclick=function (e){
  document.getElementById("cart").classList.remove("cart-show");
}




//empty cart: not working
document.getElementsByClassName("remove-goods")[0].onclick=function (){
  document.getElementById("cart-info").style="display:none;";
  document.getElementsByClassName("cart-empty")[0].style="display:grid;";
}






//cart calculation: not working
function getNum(){
    return document.getElementById("quantity-num").value;
}
function setNum(num,act){
    if(act=='add'){
        num=Number(num)+1;
    }
    
    else if(act=="reduce"){
        if(num>1){
            num=Number(num)-1;
        }else{
           num=1;
        }
    }
    document.getElementById("quantity-num").value=num;
    setMoney(num);
}
document.getElementById("add").onclick=function (){
    var num=getNum();
    setNum(num,'add');
}
document.getElementById("reduce").onclick=function (){
    var num=getNum();
    setNum(num,'reduce');
}
function setMoney(quantity){
    if(quantity==""){
        quantity=Number(document.getElementById("quantity-num").value);
    }
    if(quantity<1){
        setNum(1,'');
        return false;
    }
    var price=document.getElementById("price").textContent;
    var total=Number(price)*Number(quantity);
    total=total.toFixed(2);
    document.getElementById("total-price").textContent="$"+total;
}
function changeInput(obj){
    var num=Number(obj.value);
    if(num){
        setMoney(num);
    }else{
        setNum(1,'');
    }
    
}
setMoney("");



// filter function not working
document.getElementsByClassName("filter-btn").onclick=function (e){    
    document.getElementByClassName("filter-wrap-color").classList.remove("filter-show");
  }

document.getElementsByClassName("filter-btn")[0].onclick=function (){
    document.getElementById("filter-wrap-color").style="display:block;";
    document.getElementsByClassName("filter-show")[0].style="display:block;";
  }