// load nav where id=placeholder
    $.get("nav.html", function(data){
    $("#nav-placeholder").replaceWith(data);
});

// get ul
var navContainer = document.getElementsByClassName("ul");

// get all navlinks inside ul
var navlinks = navContainer.getElementsByClassName("navlink");

// loop through nav links and add active class to current navlink
for (var i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}