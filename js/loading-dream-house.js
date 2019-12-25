/*
用户名和密码文本域在获得焦点时会分别在下方显示对应的提示文字，
失去焦点时提示文字消失。
    请输入6-12位密码
    请输入4-10位用户名
*/
    var inp=document.getElementsByClassName("inp");
    var inpCode=document.getElementsByClassName("inp code");
    var notice=document.getElementsByClassName("notice");

    //获得焦点时在下方显示对应的提示文字
    inp[0].onfocus=function(){
        notice[0].innerHTML="Please enter a 4-10-digit username.";
    }
    inp[1].onfocus=function(){
        notice[1].innerHTML="Please enter a 6-12-digit password.";
    }
    inp[2].onfocus=function(){
        notice[2].innerHTML="Please enter the correct verification code.";
    }

    //失去焦点时提示文字消失
    inp[0].onblur=function(){
        notice[0].innerHTML=" ";
    }
    inp[1].onblur=function(){
        notice[1].innerHTML=" ";
    }
    inpCode[0].onblur=function(){
        notice[2].innerHTML=" ";
    }

/*
点击“获取验证码”按钮，验证码图片出现，
再次点击按钮图片会刷新（验证码图片库中共有10张图片，随机选择出现）
*/
    //得到获取验证码的结点
    var putCode=document.getElementsByClassName("getCode")[0];
    //得到添加验证码图片的结点
    var codeImg=document.getElementsByClassName("codeImg")[0];
    
    //创建新结点
    var imgNode=document.createElement("img");
    codeImg.appendChild(imgNode);

    var judgeCode=0;
    var rigthCode;
    //点击验证码获取验证码图片的函数
    putCode.onclick=function(){
        //得到图片的src的数组
        var myPic=new Array("images/image/zAZfB.jpg","images/image/ZEhUN.jpg","images/image/zFC9H.jpg","images/image/zhWY9.jpg","images/image/Zin4c.jpg","images/image/ZITGj.jpg","images/image/zJ6iV.jpg","images/image/zjsKP.jpg","images/image/ZKc9S.jpg","images/image/zKDXU.jpg");
        //0-9的取随机数
        var randomNum=parseInt(Math.random()*(myPic.length));
        //取随机图片
        imgNode.src=myPic[randomNum];
        rigthCode=(imgNode.src).slice(-9,-4);
    }		

/*
验证码填写不正确或没有填写、
用户名不符合要求或没有填写、
密码不符合要求或没有填写，
都不能成功登录，并会在对应地方出现指定提示文字。
*/
    var btn=document.getElementById("btn");

    var getName=document.getElementById("name");
    var getPsw=document.getElementById("psw");
    var getCode=document.getElementById("code");
    
    btn.onclick=function(){
        var name=getName.value;
        var psw=getPsw.value;
        var code=getCode.value;
/*
用户名和密码填写符合要求，验证码填写正确后，方可登录成功，登陆成功会通过弹窗提示。 
*/
        var flag=1;
        if(name.length<4||name.length>10){
            notice[0].innerHTML="The number of usernames is not correct!";
            flag=0;
        }
        if(psw.length<6||psw.length>12){
            notice[1].innerHTML="The password number is not correct!";
            flag=0;
        }
        if(rigthCode!=code){
            notice[2].innerHTML="Verification code error!";
            flag=0;
        }
        if(flag==1){
            alert("登陆成功");
        }
    }