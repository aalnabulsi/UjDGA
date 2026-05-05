$('.btn-digital-stamp-card').on('click', function () {
    $(this).parent().toggleClass("open");
    $(this).parent().next().slideToggle("fast");
});