

$(window).scroll(function () {

    if ($(this).scrollTop() > $('nav').height()) {
        $("nav").animate({
            height:'100px'
          });
        $("nav").removeClass("navbar-dark")
        $("nav").removeClass("balck")

        $("nav").addClass("navbar-light")
        $("nav").addClass("border")

    } else {
        $("nav").animate({
            height:'110px'
          });
        $("nav").addClass("navbar-dark")
        $("nav").addClass("balck")

        $("nav").removeClass("navbar-light")
        $("nav").removeClass("border")

    }

});

$.getJSON("data.json", function(data) {
    var someGame = template('someGame', data);
    // 5.将拼接好的html字符串添加到页面中。
    var box = document.querySelector(".m-some_game")
    box.innerHTML = someGame;
    var allGame = template('allGame',data);
    var box2 = document.querySelector(".m-all_game")
    box2.innerHTML=allGame;
});

var a = document.querySelector('iframe').src
alert(a)