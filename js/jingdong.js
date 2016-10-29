window.onload=function(){
  var headleft=$(".headleft");
  var hlehe=$(".hlehe");
   for(i=0;i<headleft.length;i++){
    headleft[i].index=i;
    headleft[i].onmouseover=function(){
      hlehe[this.index].style.display="block";
    }
    headleft[i].onmouseout=function(){
      hlehe[this.index].style.display="none";
    }
   }
   
   var rightdiv=$(".rightdiv");
   var hrhe=$(".hrhe");
   for(i=0;i<rightdiv.length;i++){
    rightdiv[i].index=i;
    rightdiv[i].onmouseover=function(){
      hrhe[this.index].style.display="block";
    }
    rightdiv[i].onmouseout=function(){
      hrhe[this.index].style.display="none";
    }
   }
   
   var rightdiv2=$(".rightdiv2");
   var hrhe2=$(".hrhe2");
   for(i=0;i<rightdiv2.length;i++){
    rightdiv2[i].index=i;
    rightdiv2[i].onmouseover=function(){
      hrhe2[this.index].style.display="block";
    }
    rightdiv2[i].onmouseout=function(){
      hrhe2[this.index].style.display="none";
    }
   }

   var rightdiv3=$(".rightdiv3");
   var hrhe3=$(".hrhe3");
   for(i=0;i<rightdiv3.length;i++){
    rightdiv3[i].index=i;
    rightdiv3[i].onmouseover=function(){
      hrhe3[this.index].style.display="block";
    }
    rightdiv3[i].onmouseout=function(){
      hrhe3[this.index].style.display="none";
    }
   }

   var rightdiv4=$(".rightdiv4");
   var hrhe4=$(".hrhe4");
   for(i=0;i<rightdiv4.length;i++){
    rightdiv4[i].index=i;
    rightdiv4[i].onmouseover=function(){
      hrhe4[this.index].style.display="block";
    }
    rightdiv4[i].onmouseout=function(){
      hrhe4[this.index].style.display="none";
    }
   }

   var rightdiv5=$(".rightdiv5");
   var hrhe5=$(".hrhe5");
   for(i=0;i<rightdiv5.length;i++){
    rightdiv5[i].index=i;
    rightdiv5[i].onmouseover=function(){
      hrhe5[this.index].style.display="block";
    }
    rightdiv5[i].onmouseout=function(){
      hrhe5[this.index].style.display="none";
    }
   }

   var one=$(".one");
   var banxk=$(".banxk");
   for(i=0;i<one.length;i++){
    one[i].index=i;
    one[i].onmouseover=function(){
      banxk[this.index].style.display="block";
    }
    one[i].onmouseout=function(){
      banxk[this.index].style.display="none";
    }
   }
// 普通轮播图
function dhlunbo(banner,ul,banL,banr){
  var center=$(banner)[0];
  var imgs=$("a",$(banner)[0]);
  var xys=$("li",$(ul)[0]);
  // imgs[0].style.zIndex=10;
  animate(imgs[0],{opacity:1});
  xys[0].style.background="red";
  //当前窗口中的图片下标
  var now=0;
  var t=setInterval(move,3000);
  var banl=$(banL)[0];
  var banr=$(banr)[0];

  //鼠标放上停止离开走
 
  center.onmouseover=function(){
    clearInterval(t);
  }
  center.onmouseout=function(){
    t=setInterval(move,3000);
  }


  //选项卡
  for(var i=0;i<xys.length;i++){
   xys[i].index=i;
   xys[i].onclick=function(){
      for (var i=0;i<imgs.length;i++) {
      // imgs[i].style.zIndex=5;
      animate(imgs[i],{opacity:0});
      xys[i].style.background="#ccc";
   }  
      xys[this.index].style.background="red";
      // imgs[this.index].style.zIndex=10;
      animate(imgs[this.index],{opacity:1});
      now=this.index;
   }
  }


  // 左右爪
  

  banl.onclick=function(){
     movel()
  }
  banr.onclick=function(){
     move()
  }

  function movel(){
   now--;
   if(now<0){
      now=imgs.length-1;
   }
   for (var i=0;i<imgs.length;i++) {
      // imgs[i].style.zIndex=5;
      animate(imgs[i],{opacity:0});
      xys[i].style.background="#ccc";
   }   
      xys[now].style.background="red";
      // imgs[now].style.zIndex=10;
      animate(imgs[now],{opacity:1});
   
  }
  
 //自动轮播
  function move(){
   now++;
   if(now==imgs.length){
      now=0;
   }
   for (var i=0;i<imgs.length;i++) {
      // imgs[i].style.zIndex=5;
      animate(imgs[i],{opacity:0});
      xys[i].style.background="#ccc";
   }   
      xys[now].style.background="red";
      // imgs[now].style.zIndex=10;
      animate(imgs[now],{opacity:1});
   
  }
}
dhlunbo(".cencer",".circle",".left",".right")

// 双下标轮播
// var banner=$(".cencer")[0];
// var imgs=$(".tu");
// var lis=$(".lis");
// var left=$(".left")[0];
// var right=$(".right")[0];
// var now=0;
// var next=0;
// var t=setInterval(moveimg,2000)
// var w=parseInt(getStyle(banner,"width"));
// function moveimg(){
//   next=now+1;
//   if(next>=imgs.length){
//         next=0;
//       }
//   imgs[next].style.left=w+"px";
//   animate(imgs[now],{left:-w},600);
//   animate(imgs[next],{left:0},600,function(){flag=true;});
//    for(var i=0;i<lis.length;i++){
//           lis[now].style.background="#fff";
//       }
//           lis[next].style.background="red";
//     now=next;
// }

//    banner.onmouseover=function(){
//     clearInterval(t);
//    }
//    banner.onmouseout=function(){
//     t=setInterval(moveimg,2000)
//    }

//    // 左右按钮
//    var flag=true;
//    right.onclick=function(){
//     if(flag==false){
//       return }
//       moveimg();
//       flag=false;
    
//    }
//    left.onclick=function(){
//      if(flag==false){
//       return }
//       moveimgL();
//       flag=false;
    
//    }

//    function moveimgL(){
//       next=now-1;
//       if(next<0){
//         next=imgs.length-1;
//       }
//       imgs[next].style.left=-w+"px";
//       animate(imgs[now],{left:w},600);
//       animate(imgs[next],{left:0},600,function(){flag=true});
//       for(var i=0;i<lis.length;i++){
//           lis[now].style.background="#fff";
//       }
//           lis[next].style.background="red";

//             now=next;
//    }

//   // 移图 要点击的比当前的下标大，往左走，在右边等
//   //      要点击的比当前的下标大，往左走，在右边等
//   for(var i=0;i<imgs.length;i++){
//       lis[i].index=i;
//       lis[i].onclick=function(){
//         if(flag==false){
//          return }
//          flag=false;
//         if(this.index>now){
//            imgs[this.index].style.left=w+"px";
//            animate(imgs[now],{left:-w},600);
//            animate(imgs[this.index],{left:0},600,function(){flag=true});
//            for(var i=0;i<lis.length;i++){
//            lis[now].style.background="#fff";
//            }
//           lis[this.index].style.background="red";
//         }else if(this.index<now){
//            imgs[this.index].style.left=-w+"px";
//            animate(imgs[now],{left:w},600);
//            animate(imgs[this.index],{left:0},600,function(){flag=true});
//             for(var i=0;i<lis.length;i++){
//             lis[now].style.background="#fff";
//             }
//             lis[this.index].style.background="red";
//         }
//         now=this.index;
//         next=this.index;

//       }
//   }
 
// 节点轮播
function nodelunbo(obj,left,right,imgbox,j){
   var lunbo=$(obj)[0];
   var left=$(left)[0];
   var right=$(right)[0];
   var imgbox=$(imgbox)[0];
   var imgs=$("img",imgbox)
   var width=parseInt(getStyle(imgs[0],"width"));
   var t=setInterval(move,3500);
   var n=j;
   var flag=true;
   function move(){
        animate(imgbox,{left:-width*n},2000,
         function(){
          for (var i=1;i<=n;i++) {
            var first=firstChild(imgbox);
              imgbox.appendChild(first);
              
          }
          imgbox.style.left="0px";
         });
      
   }

   // 放停
    lunbo.onmouseover=function(){
     clearInterval(t);
     left.style.display="block";
     right.style.display="block";
    }
    lunbo.onmouseout=function(){
     t=setInterval(move,3500);
     left.style.display="none";
     right.style.display="none";
    }



     // 左右手
     right.onclick=function(){ 
      
     move();
    }
    left.onclick=function(){
   
       moveL();
    }

    function moveL(){
      if(!flag){
       return;
       }
       flag=false;
      for (var i=1;i<=n;i++) {
        var last=lastChild(imgbox);
          var first=firstChild(imgbox);
          imgbox.insertBefore(last,first);
      }
      
       imgbox.style.left=-width*n+"px";
         animate(imgbox,{left:0},1000,function(){flag=true;})
    }
}
   nodelunbo(".botright",".jleft",".jright",".botrighta",4);

//调用
  var trades=$(".trade");
  for(var j=0;j<trades.length-1;j++){
    selt(trades[j]);
  }   
//封装商品区轮播图
    function tab(obj){
      var divs=$("div",obj);
      var lis=$("li",obj);
      var left=$(".bntL",obj)[0];
      var right=$(".bntR",obj)[0];
      var wm=parseInt(getStyle(obj,"width"));
      var now=0;
      var next=0;
      var flag=true;
      //初始化
      for(var i=0;i<divs.length;i++){
            if(i==0){
              continue;
            }
            divs[i].style.left=wm+"px";
          }
      lis[0].className="lli";
      function move(){
          next++;
          if(next==divs.length){
              next=0;
          }
          divs[next].style.left=wm+"px";
          animate(divs[now],{left:-wm});
          animate(divs[next],{left:0},function(){
              flag=true;
          });
          lis[now].className="";
          lis[next].className="lli";
          now=next;
      }
      function moveL(){
          next--;       
          if(next<0){
              next=divs.length-1;
          }
          divs[next].style.left=-wm+"px";
          animate(divs[now],{left:wm});
          animate(divs[next],{left:0});
          lis[now].className="";
          lis[next].className="lli";
          now=next;
      }
      //停止和轮播
      var t=setInterval(move,2500);
      obj.onmouseout=function(){
        t=setInterval(move,2500);
        left.style.zIndex=-1;
        right.style.zIndex=-1;
      }
      obj.onmouseover=function(){
        clearInterval(t);
        left.style.zIndex=5;
        right.style.zIndex=5;
      }
      //选项卡
      for(var i=0;i<lis.length;i++){
          lis[i].index=i;
          lis[i].onclick=function(){
            if(parseInt(getStyle(divs[next],"left"))==0){
              next=this.index;
              lis[now].className="";
              lis[next].className="lli";
              if(now>this.index){
                divs[next].style.left=-wm+"px";
                animate(divs[now],{left:wm});
                animate(divs[next],{left:0});
              }else if(now<this.index){
                divs[next].style.left=wm+"px";
                animate(divs[now],{left:-wm});
                animate(divs[next],{left:0});
              }
              now=next;
            }
          }
      }
      //左右选项卡
      //上页
      left.onclick=function(){
        if(parseInt(getStyle(divs[next],"left"))==0){
            moveL();
        }
      }
        //下页
        right.onclick=function(){
        if(flag){   
          move();
          flag=false;
        }
      }
    }
    var ctwo=$(".ctwo");
    for(var j=0;j<ctwo.length;j++){
        tab(ctwo[j]);
    }
// 线条效果
 var Gues=$(".cnxh")[0];
 var II=$("i",$(".cnxhdx")[0])[0];
    
    hover(Gues,Guesover,Guesout)
    function Guesover(){
      II.style.right=835+"px";
      animate(II,{right:-1},600)
    }
    function Guesout(){
      return;  
    }
    
  // 楼层选项卡

 function dxk(obj,xt){
  var lei= $("a",$(obj)[0]);
  var fcbot=$(xt);
  fcbot[0].style.display="block";
  for(var i=0;i<lei.length;i++){
    lei[i].index=i;
    lei[i].onmouseover=function(){
      for(var j=0;j<lei.length;j++){
        fcbot[j].style.display="none";
      }
      fcbot[this.index].style.display="block";
    }
  }

 }

dxk(".fztopright",".f1xxk")
dxk(".ghtopright",".f2xxk")
dxk(".sjtxtopright",".f3xxk")
dxk(".jydqtopright",".f4xxk")
dxk(".dnsmtopright",".f5xxk")
dxk(".ydjstopright",".f6xxk")
dxk(".jjshtopright",".f7xxk")
dxk(".mywjtopright",".f8xxk")
dxk(".spbjtopright",".f9xxk")
dxk(".tsyxtopright",".f10xxk")
dxk(".zcyptopright",".f11xxk")
  //左侧导航
  var louceng=$(".floor-nav")[0];
  var num=$(".floor-lis");
  var num1=$(".num4");
  var num2=$(".num2");
  var floor=$(".floor");
  var lnow;
  var sflag=true;
  for(var i=0;i<floor.length;i++)
  {
    floor[i].h=floor[i].offsetTop;
  }
  window.onscroll=function(){ 
    if(sflag)
        {var obj=document.body.scrollTop?document.body:document.documentElement;
        // 出现楼层

        if(floor[0].h<=obj.scrollTop+800)
        {
            louceng.style.display="block";
        }
        else 
        {
          louceng.style.display="none";

        }
        // 楼层显示

        for(var i=0;i<floor.length;i++)
        {    
          if(floor[i].h<=obj.scrollTop+200)
          {  
             for(var j=0;j<floor.length;j++)
            {
             num2[j].style.display="block";
             num1[j].style.display="none";
             num1[j].className="num4 num1"
              }
             num2[i].style.display="none";
             num1[i].style.display="block";
             num1[i].className="num4 num3";
             lnow=i;
          }       
        }
    }
}

 for(var i=0;i<num.length;i++)
    {   
      num[i].index=i;
      if(i<=num.length)
      {   
        if(this.index==lnow)
        {
          num[i].onmouseover=function(){
            num4[i].className="num4 num1"
          }
        }
        num[i].onmouseover=function(){
          num1[this.index].style.display="block";
          num2[this.index].style.display="none";
        }
        num[i].onmouseout=function(){
          num1[this.index].style.display="none";
          num2[this.index].style.display="block";
        }
        num[i].onclick=function(){
        animate(document.body,{scrollTop:floor[this.index].h-200},function(){sflag=true})
        animate(document.documentElement,{scrollTop:floor[this.index].h-200},function(){sflag=true})
        sflag=false;
      } 
          
        }
    }
 
    //右侧导航
    var sidelis=$("li",$(".sideRB")[0]);
    for(var i=0;i<sidelis.length;i++){
        sidelis[i].index=i;
        /*hover(sidelis[i],function(){
            this.style.backgroundColor="#c81623";
            animate($("span",this)[0],{left:-60});
        },function(){
            animate($("span",this)[0],{left:0});
            this.style.backgroundColor="#7a6e6e";
        })*/
        sidelis[i].onmouseover=function(){
            this.style.backgroundColor="#c81623";
            animate($("span",this)[0],{left:-60},200);
        }
        sidelis[i].onmouseout=function(){
            var that=this.index;
            animate($("span",this)[0],{left:0},200,function(){
               sidelis[that].style.backgroundColor="#7a6e6e";
            })
        }
    }
  

}
