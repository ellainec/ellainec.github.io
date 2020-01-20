function createArtistBox(bio) {
    var div = document.createElement('div');
    div.classList.add("artistBox");
    div.classList.add("lightBorder");
    var img = document.createElement('img');
    img.src = bio.img;
    var textBox = makeTextDiv(bio.name, bio.description);
    div.appendChild(img);
    div.appendChild(textBox);

    document.getElementById('artistList').appendChild(div);
}

function makeTextDiv(name, desc) {
    var div = document.createElement('div');
    div.classList.add("artistBio");
    var header = document.createElement('h2');
    header.innerHTML = name;
    header.classList.add("artistName");
    var description = document.createElement('span');
    description.innerHTML = desc;
    description.classList.add("artistDescription");
    div.appendChild(header);
    div.appendChild(description);
    return div;
}

var bios = [ 
    {name: "Barot Bellingham",
     description: "Royal Academy of Painting and Sculpture",
     img: "https://randomuser.me/api/portraits/med/men/1.jpg"}, 
     {name: "Jonathan G.Ferrar II",
     description: "Artist to Watch in 2012",
     img: "https://randomuser.me/api/portraits/med/men/2.jpg"}, 
     {name: "Hillary Hewit Goldwynn",
     description: "New York University",
     img: "https://randomuser.me/api/portraits/med/women/1.jpg"}, 
     {name: "Hassum Harrod",
     description: "Art College in New Dehli",
     img: "https://randomuser.me/api/portraits/med/men/3.jpg"}, 
     {name: "Jennifer Jerome",
     description: "Master Baker",
     img: "https://randomuser.me/api/portraits/med/women/2.jpg"}, 
]


for(let i = 0; i < 5; i++) {
    createArtistBox(bios[i]);
}