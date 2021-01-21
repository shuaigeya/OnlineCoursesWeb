getSession=function (_this) {
    $.ajax({
        type : "get",
        url : "http://localhost:10000/util/session/getUser",
        dataType : "json",
        xhrFields:{
            withCredentials:true
        },
        contentType : "application/json",
        success:function (result) {
            console.log(result);
            _this.user = result.data;
        }
    })
}
