$(document).ready(function () {
    $('.hamburger__btn').click(function() {
        $('.hamburger__btn').toggleClass('active');
        $('.menu').toggleClass('active');
    })
});