const cardData = [
  {
    image: "IYKYK.jpg",
    title: "IYKYK",
    description: "-Who Knows??",
  },
  {
    image: "ghale knows.jpg",
    title: "Ghale Knows",
    description: "Ghale Know everything",
  },
  {
    image: "serious parbal.jpg",
    title: "Serious Parbal",
    description: "Parbal is Serious",
  },
  {
    image: "the un-upasna.png",
    title: "The un-upasna",
    description: "Un-upasna",
  },
  {
    image: "RAMESH IS OK.jpg",
    title: "Ramesh OK",
    description: "Ramesh Dai is ok",
  },
  {
    image: "Whatever.jpg",
    title: "Whatever",
    description: "Whatever Bro",
  },
  {
    image: "heh.jpg",
    title: "heh",
    description: "Rohan Confused",
  },
  {
    image: "married status.jpg",
    title: "Married Status",
    description: "heh",
  },
];

function createCard(card) {
  const cardList = document.getElementById("cardSection");
  const cardElement = document.createElement("li");
  cardElement.className = "card";

  const cardContent = `
        <img src="img/${card.image}" alt="${card.title}">
        <h3>${card.title}</h3>
        <p>${card.description}</p>
        
      `;

  cardElement.innerHTML = cardContent;
  cardList.appendChild(cardElement);

  const cardWidth = 90 / Math.min(cardList.children.length, 4);
  cardList.querySelectorAll(".card").forEach((card) => {
    card.style.width = cardWidth + "%";
    card.style.color = "white";
  });
}

cardData.forEach(createCard);
