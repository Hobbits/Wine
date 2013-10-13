var localStorageServ = {
    convert : function(value,dir){
        var finalValue = null;
        if(value){
            if(typeof(value) != "object"){
                finalValue = value;
                if(dir=="output"){
                    try{finalValue = JSON.parse(value);}catch(e){
                        finalValue = value;
                    }
                }
            } else if(typeof(value) == 'object'){
                finalValue = JSON.stringify(value);
            }
        }
        return finalValue;
    },

    add : function(key, value){
        localStorage.setItem(key, this.convert(value,'input'));
    },
    get : function(key){
        var getString = localStorage.getItem(key);
        return this.convert(getString,'output');
    },
    delete : function(key){
        try{
            localStorage.removeItem(key)
        } catch(e){
            return false;
        };
        return true;
    }
}




//jsonp
var jsonp=function(o){
    if(o && o.url){
        var prams= o.p || null;
        $.getJSON(o.url+"?callback=?", prams )
            .done(function( data ) {
                    dfd.resolve(data);
            })
            .fail(function( jqxhr, textStatus, error ) {
                dfd.reject(error);
            });
    }

}

//安静的登出
var clearLS=function(){
    try{
    localStorage.removeItem("userInfo");
    }catch(e){}
}
var silentLogout=function(){
    uexWindow.close();
    try{
        clearLS()
        // localStorage.removeItem("userInfo");
        uexWindow.alert('','账号状态已过期！','确定');
        window.uexWindow.open('account','0','account.html',1,'','','4');
    }catch(e){}
}



//打开注册
function open_login(){
    window.uexWindow.open('register','0','register.html',2,'','','0');
}

//加参数
function addURL(o) {
    return "#"+encodeURIComponent(JSON.stringify(o));
}

//取参数
function GetQueryString(name){
//     var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
//     var r = window.location.hash.substr(1).match(reg);
//     if(r!=null) return  decodeURIComponent(r[2]);
//     return null;
    var r=(function(){
        var dec=decodeURIComponent(window.location.hash);
        dec=dec.substring(1,dec.length);
        try{
            var o=JSON.parse(dec);

            return o[name];
        }catch(e){
            return dec;
        }
    })();
    return r;
}

//将一维对象转化成search字符串,对应zy_parse
var toSearchStr=function(o){
    var str="?";
    var arr=[];
    var itemtoString=function(key,val){
        return key+"="+val;
    }
    for(i in o){
        arr.push(itemtoString(i,o[i]))
    }
    str=str+arr.join("&");
    return encodeURI(str);
}


function open_commodity(id,name){
    var url = "commodity.html";
    var o={
        "shop_id":id,
        "shop_name":name
    }
    //console.log(url);  //ommodity.html?shop_id=52&shop_name=%E5%BA%97%E9%93%BA2
    uexWindow.open('commodity',0,url+toSearchStr(o),2,"","","4");
}

function open_commodity_detail(id){
    var plus=toSearchStr({'id':id});
    uexWindow.open('commodity_detail',0,"commodity_detail.html"+plus,2,"","","4");
    //$$("title").innerText="AppCan-Msg View";
}

function go2Article(id){
    var plus=toSearchStr({'id':id});
    uexWindow.open("Article",0,"Article.html"+plus,2,"","","4");
}
function go2find_news(id){  //发现
    var plus=toSearchStr({'id':id});
    uexWindow.open('server_news',0,"server_news.html"+plus,2,"","","4");
}
function go2welife_news(id){
    var plus=toSearchStr({'id':id});
    uexWindow.open('welife_news',0,"welife_news.html"+plus,2,"","","4");
}

//获取内容分类
function get_category() {
	$.ajax({
        type: "get",
        async: false,
        url: APP_ACTION['GET_ARTICLE_CATEGORY'],
        dataType: "json",
        jsonp: "callbackparam",
        jsonpCallback: "callback",
        success: function(result){
			for (var i = 0; i < result.length; i++) {
				$("#type").append("<option value=" + result[i]['id'] + ">" + result[i]['name'] + "</option>");
			}
        },
        error: function(){
            alert('应用获取失败,请检查连接');
        }
	});
}
//获得商铺列表
function get_shop() {
    $.ajax({
        type: "get",
        async: false,
        url: APP_ACTION['GET_SHOP_CATEGORY'],
        dataType: "json",
        jsonp: "callbackparam",
        jsonpCallback: "callback",
        success: function(result){
            for (var i = 0; i < result.length; i++) {
                $("#shop").append("<option value=" + result[i]['id'] + ">" + result[i]['shop_name'] + "</option>");
            }
        },
        error: function(){
            alert('应用获取失败,请检查连接');
        }
    });
}

//获取URL参数
function getParam(paramName)
{
    paramValue = "";
    isFound = false;
    if (this.location.search.indexOf("?") == 0 && this.location.search.indexOf("=")>1)
    {
        arrSource = unescape(this.location.search).substring(1,this.location.search.length).split("&");
        i = 0;
        while (i < arrSource.length && !isFound)
        {
            if (arrSource[i].indexOf("=") > 0)
            {
                 if (arrSource[i].split("=")[0].toLowerCase()==paramName.toLowerCase())
                 {
                    paramValue = arrSource[i].split("=")[1];
                    isFound = true;
                 }
            }
            i++;
        }   
    }
   return paramValue;
}

function zy_selectmenu(id){
    var sl = document.getElementById(id);
    if (sl) {
        var sp = sl.parentElement; //<span>
        if (sp) {
            var ch = sp.getElementsByTagName("div")[0];
            var t = sl.options[sl.selectedIndex].text;
            if (ch) {
                ch.innerHTML = t;
            }
        }
    }
}

function zy_for(e, cb){
	var ch;
	if(e.currentTarget)
    	ch = e.currentTarget.previousElementSibling;
	else
		ch = e.previousElementSibling;
    if (ch.nodeName == "INPUT") {
        if (ch.type == "checkbox") 
            ch.checked = !ch.checked;
        if (ch.type == "radio" && !ch.checked) 
            ch.checked = "checked";
        
    }
    if (cb) 
        cb(e, ch.checked);
}


function zy_fold(e, col){
    var tar=e.currentTarget;
        try{
            var tarTitle=tar.getElementsByClassName('folderText')[0];
            if(tarTitle){
                var oriTitle=tarTitle.innerText;
                tarTitle.innerText=tarTitle.dataset['toggletext'];
                tarTitle.dataset['toggletext']=oriTitle;
            }
        }catch(e){}

    var a = tar.nextElementSibling;
    if (a.nodeName == "DIV") {
        if (col){
            a.className = a.className.replace("col-c", "");
        }else{
            a.className += ' col-c';
        }

    }
}

function zy_touch(c, f){
    var t = event.currentTarget;
	if(!t.zTouch) {
        t.zTouch = new zyClick(t, f, c);
		t.zTouch._touchStart(event);
    }
}

function zy_parse(){
    var params = {};
    var loc = String(document.location);
    if (loc.indexOf("?") > 0) 
        loc = loc.substr(loc.indexOf('?') + 1);
    else 
        loc = uexWindow.getUrlQuery();
    var pieces = loc.split('&');
    params.keys = [];
    for (var i = 0; i < pieces.length; i += 1) {
        var keyVal = pieces[i].split('=');
        params[keyVal[0]] = decodeURIComponent(keyVal[1]);
        params.keys.push(keyVal[0]);
    }
    return params;
}

function $$(id)
{
	return document.getElementById(id);
}
function int(s)
{
	return parseInt(s);
}

function zy_con(id,url,x,y)
{
	var s=window.getComputedStyle($$(id),null);
	uexWindow.openPopover(id,"0",url,"",int(x),int(y),int(s.width),int(s.height),int(s.fontSize),"0");
}
function zy_resize(id,x,y)
{
	var s=window.getComputedStyle($$(id),null);
	uexWindow.setPopoverFrame(id,int(x),int(y),int(s.width),int(s.height));	
}

function zy_init()
{
	if(window.navigator.platform=="Win32")
		document.body.style.fontSize=window.localStorage["defaultfontsize"];
    try{
        var head=document.querySelector('.headerbg header .c-blu3');
        if(head){
            head.style.backgroundPosition=(Math.floor(Math.random()*100)+1)+"% 0";
        }
    }catch(e){}
}
function zy_cc(t){
    if (!t.cancelClick) {
        t.cancelClick = true;
        t.addEventListener("click", function(){
            event.stopPropagation();
        }, true);
    }
}


//验证是否登录
var notlogin = function(){
    var user_id = "";
    try{
        user_id = localStorageServ.get("userInfo")["id"];
    } catch(e){return true;}
    if(user_id){
        return false;
    } else{
        return true;
    }
}
