function getDogImages() {
    var number = document.getElementById("numberEntry").value
    console.log(number);
    var url = `https://dog.ceo/api/breeds/image/random/${number}`;
    fetch(url)
    .then(response => response.json())
    .then(responseJson => displayImages(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'));
}

function displayImages(responseJson) {
    console.log(responseJson);
    for (let i = 0; i < responseJson.message.length; i++) {
    $('.results').append(`<img src="${responseJson.message[i]}" class="results-img">`)
    $('.results').removeClass('hidden');
    }
}

function deleteImages() {
    $("img").remove();
}

function watchForm() {
    $("form").submit(event => {
        event.preventDefault();
        deleteImages();
        getDogImages();
    });
}

$(function() {
    console.log('App is loaded! Waiting for Submit')
    watchForm();
});