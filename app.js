function getDogImages() {
    var dogBreed = document.getElementById("breedEntry").value;
    console.log(dogBreed);
    var url = `https://dog.ceo/api/breed/${dogBreed}/images/random`;
    fetch(url)
        .then(response => response.json())
        .then(responseJson => 
          displayResults(responseJson))
        //.catch(error => alert('Something went wrong. Try again later.'));
}

function displayResults(responseJson) {
    console.log(responseJson);
    if (responseJson.status == "success") {
        
    $('.results').append(`<img src="${responseJson.message}" class="results-img">`)
    $('.results').removeClass('hidden');
    } else if (responseJson.code == 404) {
        alert("ERROR 404 Breed Not Found");
    }
    
}

function deleteResults() {
    $("img").remove();
    $("span").remove();
}

function watchForm() {
    $("form").submit(event => {
        event.preventDefault();
        deleteResults();
        getDogImages();
    });
}

$(function() {
    console.log('App is loaded! Waiting for Submit')
    watchForm();
});