$(document).ready(function () {
    $.getJSON("ajaxjson.json", function(data){
        for(var i in data){
        $("#output").append("<li><strong>" + data[i].division + "</strong></li>");
            for(var j in data[i].person){
                $("#output").append("<li>" + data[i].person[j].name +
                "（" + data[i].person[j].age + "才）性別 " + data[i].person[j].sex + "</li>");
            }
        }
    });
});
