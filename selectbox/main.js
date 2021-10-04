$(function () {
    //select-default click
    $('.select-default').click(function() {
        $(this).parent().toggleClass('active');
    })

    //list item-select click
    $('.list-select li').click(function() {
        //select htmls of element
        const htmls = $(this).html();
        $('.select-default li').html(htmls);
        $(this).parents('.wrap-select').removeClass('active');
    })
});