function toggleTheme() {
    document.body.classList.toggle("light");
}

const games = [
    { title: "CS2", description: "Соревновательный шутер.", image: "cs2.jpg", category: "computer" },
    { title: "Minecraft", description: "Игра для творчества.", image: "minecraft.jpg", category: "computer" },
    { title: "GTA V", description: "Открытый мир.", image: "gtav.jpg", category: "computer" },
    { title: "Clash Royale", description: "Карточная стратегия.", image: "cr.jpg", category: "telefon" },
    { title: "Brawl Stars", description: "Динамичный экшен.", image: "bs.jpg", category: "telefon" },
    { title: "Assasin's Creed", description: "Серия игр с открытым миром, паркуром и историческим сюжетом.", image: "assasinscreed.jpg", category: "computer" }
];

const container = document.getElementById("cardsContainer");
const filter = document.getElementById("categoryFilter");

function renderCards(list) {
    container.innerHTML = "";
    list.forEach(game => {
        const card = document.createElement("div");
        card.className = "js-card";
        card.innerHTML = `
            <img src="${game.image}">
            <h3>${game.title}</h3>
            <button>Подробнее</button>
        `;
        card.querySelector("button").onclick = () => openModal(game);
        container.appendChild(card);
    });
}

filter.addEventListener("change", () => {
    renderCards(
        filter.value === "all"
            ? games
            : games.filter(g => g.category === filter.value)
    );
});

const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");
const modalImage = document.getElementById("modalImage");

function openModal(game) {
    modal.style.display = "flex";
    modalTitle.textContent = game.title;
    modalDescription.textContent = game.description;
    modalImage.src = game.image;
}

document.getElementById("closeModal").onclick = () => modal.style.display = "none";
modal.onclick = e => {
    if (e.target === modal) modal.style.display = "none";
};

renderCards(games);