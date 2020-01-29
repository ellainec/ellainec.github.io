function createArtistCard(bio) {
    var div = document.createElement('div');
    div.classList.add("artistCard");
    var uniqueId =  Date.now();
    div.id = uniqueId;
    var artistBox = createArtistBox(bio);
    var deleteBtn = document.createElement('button');
    deleteBtn.innerText = "Delete";
    deleteBtn.classList.add("deleteBtn");
    deleteBtn.addEventListener('click', function() {
        deleteArtist(uniqueId);
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
}

function addArtist() {
    console.log("hello");
    var name = document.getElementById('nameInput').value;
    var description = document.getElementById('aboutInput').value;
    var img = document.getElementById('imgInput').value;
    var artistCard = createArtistCard({name, description, img});
    document.getElementById('artistList').appendChild(artistCard);
}

function deleteArtist(id) {
    var artist = document.getElementById(id);
    document.getElementById('artistList').removeChild(artist);
}

document.getElementById('addBtn').addEventListener('click', function() {
    addArtist();
})