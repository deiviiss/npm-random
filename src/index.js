const messages =
  ["David",
    "Valeria",
    "Armin",
    "Lisy",
    "Summer"
  ];

const randomMsg = () => {

  // la posición del índice del arreglo messages es determinado por un número aleatorio (Math.random) multiplicado por la longitud del arreglo (lenght) y redondeado con Math.floor.
  const message = messages[Math.floor(Math.random() * messages.length)];

  console.log(message);
};

module.exports = { randomMsg }
