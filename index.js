$('h1').addClass('title');
$('button').text('don not click me');
$('button').html('<em> hey </em>')
$(document).keypress(function(event){
    $('h1').text(event.key);
});