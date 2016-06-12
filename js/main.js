window.onload = function () {
    var blurCnt = 20;
    while (blurCnt >= 0) {
        $(".backimg img").css("filter", "blur(" + blurCnt + "px)");
        blurCnt--;
    }
}