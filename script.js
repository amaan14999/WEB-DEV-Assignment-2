function SearchImages(){
    let clientId = "BvOyvz7lPY6vI053M1Sfy1JpBdWjCSwdK4R0DsMd1oE";
    let query = document.getElementById("Search").value;
    let url="https://api.unsplash.com/search/photos?client_id="+clientId+"&query="+query;

    //make a request to the api

    fetch(url)
        .then(function(data) {
            return data.json();
        })
        .then(function (data){
            console.log(data);

            data.results.forEach(photo => {

                let result =`
                   <img src="${photo.urls.regular}">
                   <a href="${photo.links.download}">
                `;

                $("#result").append(result);

            });
        });
        document.getElementById("result").innerHTML="";
}
function SearchNew(){
    let clientId = "RBvOyvz7lPY6vI053M1Sfy1JpBdWjCSwdK4R0DsMd1oE";
    let query = "New";
    let url="https://api.unsplash.com/search/photos?client_id="+clientId+"&query="+query;

    fetch(url)
        .then(function(data) {
            return data.json();
        })
        .then(function (data){
            console.log(data);

            data.results.forEach(photo => {

                let result =`
                   <img src="${photo.urls.regular}">
                   <a href="${photo.links.download}">
                `;

                $("#result").append(result);

            });
        });
        document.getElementById("result").innerHTML="";
}
function SearchTop(){
    let clientId = "BvOyvz7lPY6vI053M1Sfy1JpBdWjCSwdK4R0DsMd1oE";
    let query = "Top";
    let url="https://api.unsplash.com/search/photos?client_id="+clientId+"&query="+query;

    fetch(url)
        .then(function(data) {
            return data.json();
        })
        .then(function (data){
            console.log(data);

            data.results.forEach(photo => {

                let result =`
                   <img src="${photo.urls.regular}">
                   <a href="${photo.links.download}">
                `;

                $("#result").append(result);

            });
        });
        document.getElementById("result").innerHTML="";
}
function SearchRandom(){
    let clientId = "BvOyvz7lPY6vI053M1Sfy1JpBdWjCSwdK4R0DsMd1oE";
    let query = "scenery";
    let url="https://api.unsplash.com/search/photos?client_id="+clientId+"&query="+query;

    fetch(url)
        .then(function(data) {
            return data.json();
        })
        .then(function (data){
            console.log(data);

            data.results.forEach(photo => {

                let result =`
                   <img src="${photo.urls.regular}">
                   <a href="${photo.links.download}">
                `;

                $("#result").append(result);

            });
        });
        document.getElementById("result").innerHTML="";
}
function SearchLatest(){
    let clientId = "BvOyvz7lPY6vI053M1Sfy1JpBdWjCSwdK4R0DsMd1oE";
    let query = "Latest";
    let url="https://api.unsplash.com/search/photos?client_id="+clientId+"&query="+query;

    fetch(url)
        .then(function(data) {
            return data.json();
        })
        .then(function (data){
            console.log(data);

            data.results.forEach(photo => {

                let result =`
                   <img src="${photo.urls.regular}">
                   <a href="${photo.links.download}">
                `;

                $("#result").append(result);

            });
        });
        document.getElementById("result").innerHTML="";
}
function images(){
    let clientId = "BvOyvz7lPY6vI053M1Sfy1JpBdWjCSwdK4R0DsMd1oE";
    let query = "randoms";
    let url="https://api.unsplash.com/search/photos?client_id="+clientId+"&query="+query;

    fetch(url)
        .then(function(data) {
            return data.json();
        })
        .then(function (data){
            console.log(data);

            data.results.forEach(photo => {

                let result =`
                   <img src="${photo.urls.regular}">
                   <a href="${photo.links.download}">
                `;

                $("#result").append(result);

            });
        });
        document.getElementById("result").innerHTML="";
}