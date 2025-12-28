const cafes = [
    // BHOPAL CAFES (1-20)
    { id: 1, city: "Bhopal", name: "Indian Coffee House", loc: "New Market" },
    { id: 2, city: "Bhopal", name: "Bake N Shake", loc: "Arera Colony" },
    { id: 3, city: "Bhopal", name: "Cafe Amado", loc: "Arera Colony" },
    { id: 4, city: "Bhopal", name: "Cafechino", loc: "Sayaji Hotel" },
    { id: 5, city: "Bhopal", name: "The Roof Tree", loc: "MP Nagar" },
    { id: 6, city: "Bhopal", name: "Kiosk Kaffee", loc: "Gulmohar" },
    { id: 7, city: "Bhopal", name: "Caffeine Mug", loc: "Habibganj" },
    { id: 8, city: "Bhopal", name: "Chai & More", loc: "New Market" },
    { id: 9, city: "Bhopal", name: "Central Kafe", loc: "Kolar Road" },
    { id: 10, city: "Bhopal", name: "Cafe Led", loc: "Baghmughalia" },
    { id: 11, city: "Bhopal", name: "Pin & Pan", loc: "Gulmohar" },
    { id: 12, city: "Bhopal", name: "Marbella’s Cafe", loc: "Lalghati" },
    { id: 13, city: "Bhopal", name: "Sagar Gaire", loc: "7 Number" },
    { id: 14, city: "Bhopal", name: "The Tea Factory", loc: "MP Nagar" },
    { id: 15, city: "Bhopal", name: "Public Relation", loc: "Arera Colony" },
    { id: 16, city: "Bhopal", name: "Dr. Bubbles", loc: "MP Nagar" },
    { id: 17, city: "Bhopal", name: "Wind & Waves", loc: "Van Vihar" },
    { id: 18, city: "Bhopal", name: "Aura Cafe", loc: "Arera Colony" },
    { id: 19, city: "Bhopal", name: "99 North", loc: "Indrapuri" },
    { id: 20, city: "Bhopal", name: "Starbucks", loc: "DB Mall" },

    // INDORE CAFES (21-40)
    { id: 21, city: "Indore", name: "Sayaji Maggi", loc: "Vijay Nagar" },
    { id: 22, city: "Indore", name: "The Piano Project", loc: "Vijay Nagar" },
    { id: 23, city: "Indore", name: "Mama Loca", loc: "New Palasia" },
    { id: 24, city: "Indore", name: "O2 Cafe de la Ville", loc: "New Palasia" },
    { id: 25, city: "Indore", name: "Farzi Cafe", loc: "Apollo Premier" },
    { id: 26, city: "Indore", name: "Chai Sutta Bar", loc: "Bhawarkua" },
    { id: 27, city: "Indore", name: "Vigour & Verve", loc: "Vijay Nagar" },
    { id: 28, city: "Indore", name: "Cafe Palette", loc: "Saket" },
    { id: 29, city: "Indore", name: "The Chocolate Room", loc: "Geeta Bhawan" },
    { id: 30, city: "Indore", name: "Kritunga", loc: "Vijay Nagar" },
    { id: 31, city: "Indore", name: "The Monroe", loc: "Gold Stone Building" },
    { id: 32, city: "Indore", name: "Hobnob Bistro", loc: "Vijay Nagar" },
    { id: 33, city: "Indore", name: "Mr. Beans", loc: "Saket" },
    { id: 34, city: "Indore", name: "C'est La Vie", loc: "New Palasia" },
    { id: 35, city: "Indore", name: "Little Italy", loc: "Vijay Nagar" },
    { id: 36, city: "Indore", name: "Indore Coffee House", loc: "MG Road" },
    { id: 37, city: "Indore", name: "Social", loc: "Ring Road" },
    { id: 38, city: "Indore", name: "Siyag's Cafe", loc: "Bhawarkua" },
    { id: 39, city: "Indore", name: "Effotel Coffee Shop", loc: "Vijay Nagar" },
    { id: 40, city: "Indore", name: "Chapter One", loc: "Vijay Nagar" }
];

function selectCity(cityName) {
    // 1. Hide the selection screen, show the cafe list area
    document.getElementById('city-selector').style.display = 'none';
    document.getElementById('cafe-display-area').style.display = 'block';
    
    // 2. Change the title
    document.getElementById('sub-title').innerText = "Top 20 Cafes in " + cityName;

    // 3. Find and display cafes for that city
    const container = document.getElementById('cafe-container');
    container.innerHTML = ""; // Clear area first

    const filteredCafes = cafes.filter(c => c.city === cityName);

    filteredCafes.forEach(cafe => {
        const card = document.createElement('div');
        card.className = 'cafe-card';
        card.innerHTML = `
            <h3>${cafe.name}</h3>
            <p>📍 ${cafe.loc}</p>
            <button class="view-menu-btn" onclick="goToMenu(${cafe.id})">View Menu</button>
        `;
        container.appendChild(card);
    });
}

function goToMenu(id) {
    // Save the ID and go to menu page
    localStorage.setItem('selectedCafe', id);
    window.location.href = "menu.html";
}