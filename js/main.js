window.onscroll = function () {
    var scrolltop =
        document.documentElement.scrollTop ||
        document.body.scrollTop;
    if (scrolltop === 0) {
        $("nav").addClass("navbar-top-trans");
        $("nav").removeClass("shadow-under");
        console.log("on");
    }else{
        $("nav").removeClass("navbar-top-trans");
        $("nav").addClass("shadow-under");
        console.log("off");
    }
}