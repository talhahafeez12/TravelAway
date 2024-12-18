function search() {
    var searched = document.getElementById("searchBar").value.toLowerCase();
    var display = document.getElementById("main_div_home");
    fetch ("./travel_recommendation_api.json")
    .then (response => response.json())
    .then (data => {
        if ("beaches".includes(searched)) {
            clear();
            display.innerHTML += '<div id="displayedimgs"></div>';
            data.beaches.forEach(beach => {
                var new_image = `<div class="option"><img src="${beach.imageUrl}"  style="width:400px;height:auto;">
                <span id="searchedInfo">
                    <h3>${beach.name}</h3>
                    <p>${beach.description}</p>
                    <button>Visit</button>
                </span></div>`
                document.getElementById("displayedimgs").innerHTML += new_image;
            });
        } else if ("temples".includes(searched)) {
            clear();
            display.innerHTML += '<div id="displayedimgs"></div>';
            data.temples.forEach(temple => {
                var new_image = `<div class="option"><img src="${temple.imageUrl}" style="width:400px;height:auto;">
                <span id="searchedInfo">
                    <h3>${temple.name}</h3>
                    <p>${temple.description}</p>
                    <button>Visit</button>
                </span></div>`
                document.getElementById("displayedimgs").innerHTML += new_image;
            });
        } else {
            clear();
            display.innerHTML += '<div id="displayedimgs"></div>';
            data.countries.forEach(country => {
                if (country.name.toLowerCase().includes(searched)) {
                    country.cities.forEach(city => {
                        var new_image = `<div class="option"><img src="${city.imageUrl}" style="width:400px;height:auto;">
                        <span id="searchedInfo">
                            <h3>${city.name}</h3>
                            <p>${city.description}</p>
                            <button>Visit</button>
                        </span></div>`
                        document.getElementById("displayedimgs").innerHTML += new_image;
                    });
                } 
            });
        
        }
    });
}

function clear() {
    var images = document.getElementById("displayedimgs");
    if (images != null) {
        images.remove();
    }
}

document.getElementById("btnSearch").addEventListener('click', search);
document.getElementById("btnClear").addEventListener('click', clear);
