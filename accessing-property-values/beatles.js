const beatles = {
    albums: ["Abbey Road", "Sgt Peppers Lonely Heart's Club Band", "Revolver", "Magical Mystery Tour", "Something New"],
    history: {
        formed: 1960,
        disbanded: 1970
    },
    members: [
        {
            name: "George Harrison",
            birth: 1943,
            death: 2001
        },
        {
            name: "Paul McCartney",
            birth: 1942,
            death: null
        },
        {
            name: "John Lennon",
            birth: 1940,
            death: 1980
        },
        {
            name: "Ringo Starr",
            birth: 1940,
            death: null
        }
    ]
}

const paul = beatles.members[1];
const paulName = paul.name;
const paulBorn = paul.birth;
const beatlesFormed = beatles.history.formed;
const beatlesDisbanded = beatles.history.disbanded;
const magicalAlbum = beatles.albums[3];


console.log(`${paulName} was in the Beatles from ${beatlesFormed} to ${beatlesDisbanded}. He was born in ${paulBorn}. He contributed heavily to the ${magicalAlbum} Album.`);

// Output to console:  Paul McCartney was in the Beatles from 1960 to 1970. He was born in 1942. He contributed heavily to the Magical Myster Tour Album.
