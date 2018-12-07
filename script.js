'use strict';

function displayResults(responseJson) {
    $('#results-list').empty();
    $('#js-error-message').empty();

    for (let i = 0; i < responseJson.length; i++) {
        console.log(responseJson[i]);
        $('#results-list').append(
        `<li><h3>${responseJson[i].name}</h3>
        <p><a href="${responseJson[i].html_url}">${responseJson[i].html_url}</a></p>
        </li>`
        );
    }
    $('#results').removeClass('hidden');
}

function getRepo(repoName) {
    const url = `https://api.github.com/users/${repoName}/repos`;

    fetch(url)
        .then(response => {
            if(response.ok) {
                return response.json();
            }
            throw new Error(response.statusText);
        })
        .then(responseJson => displayResults(responseJson))
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