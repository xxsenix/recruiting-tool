'use strict';


function getRepo(repoName) {
    const url = `https://api.github.com/users/${repoName}/repos`;

    fetch(url)
        .then(response => {
            if(response.ok) {
                return response.json();
            }
            throw new Error(response.statusText);
        })
        .then(responseJson => console.log(responseJson))
        .catch(err => {
            $('#js-error-message').text(`Something went wrong: ${err.message}`);
        });
}

function watchForm() {
    $('form').submit(event => {
        event.preventDefault();
        const repoName = $('#js-search-user').val();
        getRepo(repoName);
    })
}

$(watchForm);