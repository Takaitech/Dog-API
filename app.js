function getDogImages() {
    var number = document.getElementById("numberEntry").value
    console.log(number);
    var url = `https://dog.ceo/api/breeds/image/random/${number}`;
    fetch(url)
    .then(response => response.json())
    .then(responseJson => console.log(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'));
}

function watchForm() {
    $("form").submit(event => {
        event.preventDefault();
        getDogImages();
    });
}

$(function() {
    console.log('App is loaded! Waiting for Submit')
    watchForm();
});