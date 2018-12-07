'use strict';

function watchForm() {
    $('form').submit(event => {
        event.preventDefault();
        const repoName = $('#js-search-user').val();
        console.log(repoName);
    })
}

$(watchForm);