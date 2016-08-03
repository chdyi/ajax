/**
 * Created by Administrator on 2016/7/12.
 */
$(document).ready(function(){
    $(".btn").click(function(){
    $.ajax({
        type:"get",
        dataType:"json",
        url:"json.json",
        success:function(msg){
            var str ="";
            for (i in msg) {
                str +="<tr><td>"+msg[i].id + "</td><td>"+msg[i].name + "</td><td>"+msg[i].sex + "</td></tr>";
            }
            $("tbody").append(str);
        }
    });
  });
});


