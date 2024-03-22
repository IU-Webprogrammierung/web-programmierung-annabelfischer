// load nav where id=placeholder
    $.get("nav.html", function(data){
    $("#nav-placeholder").replaceWith(data);
});