$(document).ready(function () {
    var isDragging = false;

    $('.tableRow').click(function(){
      if ($(this).hasClass('active')) {
        $(this).removeClass('active');
      } else {
        $(this).addClass('active');
      }
    });

    $('.tableRow').hover(function(e) {
        if(isDragging){
            $(this).addClass('active');
        }
    });

    $('.tableTab').click(function(){
      if (!$(this).hasClass('active')) {
        var tableID = $(this).attr('id');
        $('.tableTab').removeClass('active');
        $(this).addClass('active');
        $('.issueGroup').removeClass('active');
        $('#' + tableID + 'Table').addClass('active');
      }
    });

    dragula([document.getElementById('unassigned'), document.getElementById('buglist1'), document.getElementById('buglist2'), document.getElementById('buglist3'), document.getElementById('buglist4'), document.getElementById('buglist5'), document.getElementById('buglist6'), document.getElementById('buglist7'), document.getElementById('buglist8'), document.getElementById('buglist9'), document.getElementById('buglist10'), document.getElementById('buglist11'), document.getElementById('buglist12'), document.getElementById('buglist13')])
    .on('drag', function (el) {
        isDragging = true;
        el.className = el.className.replace('ex-moved', '');
        $('.repos-assigned').css('opacity', '0');
    }).on('drop', function (el) {
        $('.drag').each(function() {
            $(this).removeClass('drag');
        });
        isDragging = false;
        el.className += ' drag';
        $('.repos-assigned').css('opacity', '1');
    }).on('over', function (el, container) {
        el.className += ' drag';
    }).on('out', function (el, container) {
        el.className += ' afterDrag';
    });
});
