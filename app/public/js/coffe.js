export function setDefaultImage(){
    $('img').each(function(){
        var img = new Image();
        img.src = $(this).attr('src');
        img.onerror = () => {
            $(this).attr('src', 'ktkt.png');
        };
    });
}
