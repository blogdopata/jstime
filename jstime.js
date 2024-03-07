




let personaje = {
    nombre: 'VicThor',
    nickname: "THOR",
    edad: 35,
    coords: {
        lat: 33.000,
        lng: 23.323
    },
    trajes: ['mark1','ironbuster']
};

console.log(personaje);

delete personaje.edad;
console.log(personaje);