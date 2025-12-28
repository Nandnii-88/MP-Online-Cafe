// Master Menu Data for 40 Unique Cafes
const menuData = {};

// 1. UNIQUE DATABASE FOR POPULAR CAFES
menuData[1] = [ // Indian Coffee House (Bhopal)
    { name: "Special Masala Dosa", price: 95, cat: "main" }, { name: "Veg Cutlet", price: 65, cat: "snack" },
    { name: "Filter Coffee", price: 45, cat: "drink" }, { name: "Mutton Omelette", price: 120, cat: "main" },
    { name: "Cold Coffee w/ Ice Cream", price: 90, cat: "drink" }, { name: "Gulab Jamun", price: 50, cat: "dessert" },
    { name: "Bread Butter Toast", price: 40, cat: "snack" }, { name: "Veg Biryani", price: 180, cat: "main" },
    { name: "Upma", price: 55, cat: "snack" }, { name: "Sweet Lassi", price: 60, cat: "drink" },
    { name: "Mutton Cutlet", price: 110, cat: "snack" }, { name: "Egg Roast", price: 95, cat: "main" },
    { name: "Banana Shake", price: 85, cat: "drink" }, { name: "Idli Sambhar", price: 60, cat: "snack" },
    { name: "Onion Uttapam", price: 110, cat: "main" }, { name: "Hot Chocolate", price: 70, cat: "drink" },
    { name: "Cheese Sandwich", price: 85, cat: "snack" }, { name: "Chicken Curry", price: 210, cat: "main" },
    { name: "Pineapple Juice", price: 80, cat: "drink" }, { name: "Vanilla Pastry", price: 70, cat: "dessert" },
    { name: "Vada Sambhar", price: 70, cat: "snack" }, { name: "Plain Dosa", price: 75, cat: "main" },
    { name: "Bread Omelette", price: 80, cat: "main" }, { name: "Masala Tea", price: 30, cat: "drink" },
    { name: "Samosa (2pc)", price: 40, cat: "snack" }
];

menuData[21] = [ // Sayaji Indore (Luxury)
    { name: "Indori Poha", price: 55, cat: "snack" }, { name: "Jalebi (100g)", price: 80, cat: "dessert" },
    { name: "Mutton Roganjosh", price: 799, cat: "main" }, { name: "Signature Chicken Burger", price: 699, cat: "main" },
    { name: "Murgh Malai Tikka", price: 625, cat: "snack" }, { name: "Blueberry Cheesecake", price: 449, cat: "dessert" },
    { name: "Virgin Mojito", price: 180, cat: "drink" }, { name: "Butter Naan", price: 149, cat: "main" },
    { name: "Dal Tadka", price: 599, cat: "main" }, { name: "Oreo Shake", price: 210, cat: "drink" },
    { name: "Arancini Balls", price: 250, cat: "snack" }, { name: "Alfredo Pasta", price: 445, cat: "main" },
    { name: "Paneer Lababdar", price: 550, cat: "main" }, { name: "Greek Salad", price: 220, cat: "snack" },
    { name: "Tomato Soup", price: 150, cat: "drink" }, { name: "Fruit Salad", price: 190, cat: "dessert" },
    { name: "Kashmiri Pulao", price: 450, cat: "main" }, { name: "Hakka Noodles", price: 320, cat: "main" },
    { name: "Choco Lava Cake", price: 180, cat: "dessert" }, { name: "Flat White Coffee", price: 190, cat: "drink" },
    { name: "Crispy Corn", price: 240, cat: "snack" }, { name: "Tiramisu", price: 390, cat: "dessert" },
    { name: "Manchow Soup", price: 190, cat: "drink" }, { name: "Pesto Pasta", price: 460, cat: "main" },
    { name: "Hara Bhara Kebab", price: 350, cat: "snack" }
];

// 2. DYNAMIC UNIQUE GENERATOR FOR ALL OTHER CAFES
// This creates different items and prices for every cafe ID (1-40)
const baseFoods = [
    { n: "Pizza", p: 250, c: "main" }, { n: "Burger", p: 150, c: "main" }, { n: "Pasta", p: 200, c: "main" },
    { n: "Sandwich", p: 120, c: "snack" }, { n: "Fries", p: 90, c: "snack" }, { n: "Nachos", p: 160, c: "snack" },
    { n: "Momos", p: 110, c: "snack" }, { n: "Coffee", p: 100, c: "drink" }, { n: "Tea", p: 40, c: "drink" },
    { n: "Shake", p: 140, c: "drink" }, { n: "Mojito", p: 130, c: "drink" }, { n: "Cake", p: 110, c: "dessert" },
    { n: "Brownie", p: 150, cat: "dessert" }, { n: "Rolls", p: 130, c: "snack" }, { n: "Noodles", p: 170, c: "main" }
];

const adjectives = ["Classic", "Spicy", "Peri Peri", "Double Cheese", "Premium", "Chef Special", "Loaded", "Garden", "Tandoori"];

for (let id = 1; id <= 40; id++) {
    if (!menuData[id]) {
        let uniqueMenu = [];
        for (let i = 0; i < 25; i++) {
            const base = baseFoods[i % baseFoods.length];
            const adj = adjectives[(id + i) % adjectives.length];
            // Unique Price: Base price + ID modifier + Item index modifier
            const uniquePrice = base.p + (id % 10) * 5 + (i * 2);
            uniqueMenu.push({
                name: `${adj} ${base.n}`,
                price: uniquePrice,
                cat: base.c || "snack"
            });
        }
        menuData[id] = uniqueMenu;
    }
}

// 3. UI RENDERING LOGIC
const selectedId = localStorage.getItem('selectedCafe') || 1;
let totalAmount = 0;

function displayMenu() {
    const cafeItems = menuData[selectedId];
    const containers = {
        main: document.getElementById('main-course-list'),
        snack: document.getElementById('snacks-list'),
        drink: document.getElementById('drinks-list'),
        dessert: document.getElementById('desserts-list')
    };

    // Clear old data first
    Object.values(containers).forEach(c => { if(c) c.innerHTML = ''; });

    cafeItems.forEach(item => {
        const card = document.createElement('div');
        card.className = 'cafe-card';
        card.innerHTML = `
            <h3>${item.name}</h3>
            <p>₹${item.price}</p>
            <button class="view-menu-btn" onclick="addToOrder(${item.price})">Add to Order</button>
        `;

        const target = containers[item.cat] || containers.snack;
        if (target) target.appendChild(card);
    });
}

function addToOrder(price) {
    totalAmount += price;
    const priceDisplay = document.getElementById('total-price');
    if (priceDisplay) {
        priceDisplay.innerText = totalAmount;
    }
}

displayMenu();
function addToOrder(price) {
    currentTotal += price;
    if (totalDisplay) totalDisplay.innerText = currentTotal;
}

displayMenu();
function addToOrder(price) {
    totalAmount += price;
    // This MUST match the ID in your HTML exactly
    const display = document.getElementById('total-price'); 
    if (display) {
        display.innerText = totalAmount;
    }
}// 1. Database of real cafe images
const cafeProfiles = {
    1: { name: "Indian Coffee House", img: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1200" },
    2: { name: "Bake N Shake", img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=1200" },
    13: { name: "Sagar Gaire", img: "https://images.unsplash.com/photo-1601050690597-df056fb0179a?w=1200" },
    21: { name: "Sayaji Indore", img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200" },
    25: { name: "Farzi Cafe", img: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=1200" },
    26: { name: "Chai Sutta Bar", img: "https://images.unsplash.com/photo-1544787210-2211d24731b4?w=1200" }
};

// Auto-fill other IDs with a high-quality default image
for (let id = 1; id <= 40; id++) {
    if (!cafeProfiles[id]) {
        cafeProfiles[id] = { name: "Cafe " + id, img: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1200" };
    }
}

// 2. Initialization Function
function initPage() {
    const selectedId = localStorage.getItem('selectedCafe') || 1;
    const cafe = cafeProfiles[selectedId];
    
    // Update Text and Background Image Dynamically
    const titleElement = document.getElementById('cafe-title');
    const heroSection = document.getElementById('cafe-hero');

    if (titleElement) titleElement.innerText = cafe.name;
    
    if (heroSection) {
        // Applying a gradient overlay for better text readability
        heroSection.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.7)), url('${cafe.img}')`;
    }
    
    displayCategorizedMenu(); 
}

// Run on page load
initPage();

// Optional: Reset Order Function
function resetOrder() {
    totalAmount = 0;
    document.getElementById('total-price').innerText = "0";
}

// Start
displayCategorizedMenu();