let arrayOfArtists = JSON.parse(localStorage.getItem("artistArray"));
if (arrayOfArtists) {
    arrayOfArtists.forEach( artist => {
        var artistCard = createArtistCard({name: artist.name, description: artist.description, img: artist.img, id: artist.id});
        document.getElementById('artistList').appendChild(artistCard);
    });
} else {
    localStorage.setItem("artistArray", "[]");
}

function createArtistCard(bio) {
    var div = document.createElement('div');
    div.classList.add("artistCard");
    div.id = bio.id;
    var artistBox = createArtistBox(bio);
    var deleteBtn = document.createElement('button');
    deleteBtn.innerText = "Delete";
    deleteBtn.classList.add("deleteBtn");
    deleteBtn.addEventListener('click', function() {
        deleteArtist(bio.id);
    }, false);
    div.appendChild(artistBox);
    div.appendChild(deleteBtn);
    div.classList.add("lightBorder");
    return div;
}

function createArtistBox(bio) {
    var div = document.createElement('div');
    div.classList.add("artistBox");
    var img = document.createElement('img');
    img.src = bio.img;
    var textBox = makeTextDiv(bio.name, bio.description);

    div.appendChild(img);
    div.appendChild(textBox);
    return div;
    
}

function makeTextDiv(name, desc) {
    var div = document.createElement('div');
    div.classList.add("artistBio");
    var header = document.createElement('h3');
    header.innerText = name;
    header.classList.add("artistName");
    var description = document.createElement('span');
    description.innerText = desc;
    description.classList.add("artistDescription");
    div.appendChild(header);
    div.appendChild(description);
    return div;
}

function toggleForm() {
    var form = document.getElementById('addForm');
    form.classList.toggle('hide');
    document.getElementById('nameInput').value = "";
    document.getElementById('aboutInput').value = "";
    document.getElementById('imgInput').value = "";
}

function addArtist() {
    var name = document.getElementById('nameInput').value;
    var description = document.getElementById('aboutInput').value;
    var img = document.getElementById('imgInput').value;
    var id = Date.now();
    var artistCard = createArtistCard({name, description, img, id});
    document.getElementById('artistList').appendChild(artistCard);
    let newArtist = { name, description, img, id };
    //push new artist to localStorage
    arrayOfArtists.push(newArtist);
    localStorage.setItem("artistArray", JSON.stringify(arrayOfArtists));
}

function deleteArtist(id) {
    var artist = document.getElementById(id);
    document.getElementById('artistList').removeChild(artist);

    arrayOfArtists = arrayOfArtists.filter(item => {
        return item.id != id;
    })
    localStorage.setItem("artistArray", JSON.stringify(arrayOfArtists));
}

document.getElementById('addBtn').addEventListener('click', function() {
    addArtist();
    toggleForm();
})

function searchArtists() {
    //form.classList.toggle('hide');
    var input = document.getElementById("searchInput").value.toLowerCase();
    arrayOfArtists.forEach(artist => {
        if (artist.name.toLowerCase().search(input) > -1) {
            document.getElementById(artist.id).classList.remove("hide");
        } else {
            document.getElementById(artist.id).classList.add("hide");
        }
    })
}