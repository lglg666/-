import $ from 'jquery'
//用户发送的ajax请求(这种请求是需要等待并禁止用户的其他操作)
export default{
inAjax(url,reqData,callback){
    $.ajax({
            method: "get",
            dataType:"json", 
            url:url,
            data:reqData,
            beforeSend:function(XMLHttpRequest){
            },
            complete:function(XMLHttpRequest, textStatus){
            },
            success:function(data){
            callback(data);
            },
            error:function(XMLHttpRequest, textStatus, errorThrown) {
            console.log(textStatus);
            }
    });
},
inAjaxpost2(url,reqData,callback){
$.ajax({
method: "post",
dataType:"json", 
url:url,
//ajax2.0可以不用设置请求头，但是jq帮我们自动设置了，这样的话需要我们自己取消掉
//取消帮我们格式化数据，是什么就是什么
processData:false,
contentType:false,
data:reqData,
beforeSend:function(XMLHttpRequest){
},
complete:function(XMLHttpRequest, textStatus){
},
success:function(data){
callback(data);
},
error:function(XMLHttpRequest, textStatus, errorThrown) {
console.log(textStatus);
}
});
},
inAjaxpost(url,reqData,callback){
$.ajax({
type:"post",
async:false,
url:url,
dataType:"json",
data:reqData,
jsonp: 'jsonpCallback',
success: function (data) {
    callback(data);
// callback是一个方法，调用后把请求的数据传过去
},
error:function(XMLHttpRequest, textStatus, errorThrown) {
console.log(textStatus);
}
})
},
}