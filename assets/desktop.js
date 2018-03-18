window.onscroll = function() {
    stick_bar()
};

var bar = document.getElementById("main-nav");
var sidebar = document.getElementById("page-nav");
var content = document.getElementById("content");
var sticky = bar.offsetTop;

function stick_bar() {
    var mq = window.matchMedia("(min-width: 900px)");

    if (mq.matches) {
        if (window.pageYOffset >= sticky) {
            sidebar.classList.add("sticky");
            bar.parentNode.classList.add("sticky");
            content.classList.add("extra-margin");
        } else {
            sidebar.classList.remove("sticky");
            bar.parentNode.classList.remove("sticky");
            content.classList.remove("extra-margin");
        }
    }
}

var acc = document.getElementsByClassName("acc-button");

for (var i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        var mq = window.matchMedia("(min-width: 900px)");

        if (mq.matches) {
            this.classList.toggle("slide-out");
            var panel = this.nextElementSibling;
            if (panel.style.maxHeight){
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        }
    });
}
