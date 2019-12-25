
    var now = new Date( );//创建日期对象
    var now_year = now.getFullYear();
    var now_month=now.getMonth()+1;
    var now_date= now.getDate();
    // var blog_imgbox = document.getElementById("blog_imgbox");
    var blog_imgs = document.getElementsByClassName(" blog_img");
    var blog_mass= document.getElementsByTagName("mass");
    var blog_introduce = document.getElementsByClassName("blog_introduce");
    var blog_introduces = document.getElementsByClassName("blog_introduces");
    var blog_massage = document.getElementsByClassName("blog_massage");
    var blog_traveldata = document.getElementsByClassName("blog_traveldata");
    var blog_name = document.getElementsByClassName("blog_name");
    var blog_pp = document.getElementById("blog_p");
    var blog_win = document.getElementById("blog_win").children[1];
    var blog_read = document.getElementById("blog_read").children[1];
    var blog_comment = document.getElementById("blog_comment").children[1];
    var blog_passage = document.getElementById("blog_passage");

   console.log(blog_passage);
    var blog_win_interval;
    var blog_read_interval;
    var blog_comment_interval;
    blog_passage.onmouseout=function(){
        clearInterval(blog_win_interval);
        clearInterval(blog_read_interval);
        clearInterval(blog_comment_interval);

        blog_win.innerHTML=24;
        blog_read.innerHTML=224;
        blog_comment.innerHTML=48;
    }
    blog_passage.onmouseover=function(){
        blog_win.innerHTML=1;
        blog_read.innerHTML=1;
        blog_comment.innerHTML=1;
        blog_win_interval=setInterval(function(){
            blog_win.innerHTML++;
            if(parseInt(blog_win.innerHTML)==24){
                clearInterval(blog_win_interval);
            }
        },200);
        blog_read_interval=setInterval(function(){
            blog_read.innerHTML=parseInt(blog_read.innerHTML)+5;
            if(parseInt(blog_read.innerHTML)>224){
                blog_read.innerHTML=224;
                clearInterval(blog_read_interval);
                return;
            }
        },100);
        blog_comment_interval=setInterval(function(){
            blog_comment.innerHTML++;
            if(parseInt(blog_comment.innerHTML)>48){
                blog_comment.innerHTML=48;
                clearInterval(blog_comment_interval);
            }
        },100);
    }

//   setInterval(blog_motion,100);
    for(var i=0;i<blog_name.length;++i){
        // console.log(blog_name[i].children[0]);
        blog_name[i].children[0].onmouseover =function(){
            this.style.color="rgb(254,147,31)";
            this.style.border="2px solid rgb(254,147,31)";
        }
        blog_name[i].children[0].onmouseout=function(){
            this.style.color="#000";
            this.style.border="1px solid #ccc";
        }
    }
