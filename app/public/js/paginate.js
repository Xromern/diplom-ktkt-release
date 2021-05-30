export function paginateArticle(currentPage, preloader) {
    history.replaceState(//занести в историю номер страницы с коментариеями

        {'type': 'paginate_article', 'article_page_comment': currentPage},
        '',
        $(this).attr('href'));

    let preloaderArticlePaginate = new Preloader(
        $('#preloader-article-paginate'),
        preloader

    );

    function showAjaxArticles(page) {

        $.ajax({
            type: "POST",
            url: '/articlesAjaxPaginate',
            data: ({
                "page": page,
            }),
            beforeSend: function () {

                $('#ajax-articles-canvas').html('');
                preloaderArticlePaginate.showPeloader();
            },
            success: function (html) {

                preloaderArticlePaginate.hidePrloaer();
                $('#ajax-articles-canvas').html(html);
                setTimeout(() => {
                    setDefaultImage();

                }, 100)

            }
        });

    }

    $('#ajax-articles-canvas').on('click', ".pagination a", function (e) {


        let page = $(this).attr('data-article-page');
        var state = {
            'type': 'paginate_article',
            'article_page_comment': page === null || page === undefined ? 1 : page
        };

        history.pushState(//занести в историю номер страницы с коментариеями
            state,
            '',
            $(this).attr('href')
        );
        let destination = $("#top").offset().top;
        $('html, body').animate({scrollTop: destination}, 150);
        $('#ajax-articles-canvas').html('');
        preloaderArticlePaginate.showPeloader();
        showAjaxArticles(page);


        e.preventDefault();
    });

    onpopstate = function (event) {

        let state = JSON.parse(JSON.stringify(event.state));
        if (state['type'] !== null)
            showAjaxArticles(state['article_page_comment']);


    }
}
