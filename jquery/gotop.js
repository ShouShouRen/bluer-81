$("body").append("<div id='gotop'>TOP</div>");
$("#gotop").css({
    width: "3em",
    height: "3em",
    backgroundColor: "#00000080",
    color: "#fff",
    textAlign: "center",
    lineHeight: "3em",
    position: "fixed",
    bottom: "1em",
    right: "1em",
    borderRadius: "50%",
    fontWeight: "900",
    fontFamily: "arial",
    cursor: "pointer"
});
$("#gotop").hide();
$("#gotop").click(function () {
    $("html,body").animate({
        scrollTop: 0
    })
})
$(window).scroll(function () {
    let h = $(window).scrollTop();
    console.log(h);
    if(h < 1500){
        $("#gotop").fadeOut();
    }else{
        $("#gotop").fadeIn();
    }
})