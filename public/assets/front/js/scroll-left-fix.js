$(window).on("scroll", function () {
    const $wrapper = $(".twiceWrapperRevert");
    const $content = $(".twiceLeftContent");

    if ($wrapper.length === 0 || $content.length === 0) return;

    const wrapperTop = $wrapper.offset().top;
    const wrapperHeight = $wrapper.outerHeight();
    const contentHeight = $content.outerHeight();

    const scrollTop = $(window).scrollTop();
    const fixedTop = 110; // fixed başladığında tepeden boşluk (isteğe göre ayarla)

    // Wrapper içinde kalma sınırı
    const limit = wrapperTop + wrapperHeight - contentHeight;

    if (scrollTop > wrapperTop - fixedTop && scrollTop < limit) {
        // fixed konumda
        $content.removeClass("absolute").addClass("fixed").css({
            top: fixedTop + "px",
            bottom: "auto"
        });
    } else if (scrollTop >= limit) {
        // absolute konumda (wrapper sonuna geldiğinde)
        $content.removeClass("fixed").addClass("absolute").css({
            top: "auto",
            bottom: "0"
        });
    } else {
        // normal konum
        $content.removeClass("fixed absolute").css({
            top: "auto",
            bottom: "auto"
        });
    }
});
