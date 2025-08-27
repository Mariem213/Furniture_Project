/* ------------------------------------------------------------------ */
/* ======================= Shop Products Data ======================= */
/* ------------------------------------------------------------------ */

const products = [
    {
        id: 1,
        name: "Beige Tufted Accent Chair with Wooden Legs",
        currentPrice: "$129.99",
        img: "images/All Products/Chair/Product_1.png",
        label: "Sale",
        category: "Chair",
        tags: ["tufted", "beige", "wood", "fabric"]
    },
    {
        id: 2,
        name: "Classic Armchair in Dark Grey Fabric",
        currentPrice: "$189.99",
        img: "images/All Products/Chair/Product_2.png",
        label: "Available",
        category: "Chair",
        tags: ["classic", "fabric", "grey", "armchair"]
    },
    {
        id: 3,
        name: "Modern Minimalist Lounge Chair",
        currentPrice: "$249.99",
        img: "images/All Products/Chair/Product_3.png",
        label: "Available",
        category: "Chair",
        tags: ["modern", "minimal", "lounge", "wood"]
    },
    {
        id: 4,
        name: "Luxury Leather Accent Chair",
        currentPrice: "$329.99",
        img: "images/All Products/Chair/Product_4.jpg",
        label: "Sale",
        category: "Chair",
        tags: ["luxury", "leather", "brown", "accent"]
    },
    {
        id: 5,
        name: "Compact Fabric Armchair, Beige",
        currentPrice: "$159.99",
        img: "images/All Products/Chair/Product_5.png",
        label: "Available",
        category: "Chair",
        tags: ["compact", "fabric", "beige", "modern"]
    },
    {
        id: 6,
        name: "Contemporary Round Coffee Table, White Top",
        currentPrice: "$79.99",
        img: "images/All Products/Table/Product_1.jpg",
        label: "Available",
        category: "Table",
        tags: ["coffee", "round", "modern", "white"]
    },
    {
        id: 7,
        name: "Industrial Style Wooden Coffee Table",
        currentPrice: "$119.99",
        img: "images/All Products/Table/Product_2.jpg",
        label: "Available",
        category: "Table",
        tags: ["industrial", "wood", "rustic", "living-room"]
    },
    {
        id: 8,
        name: "Glass Top Coffee Table with Metal Legs",
        currentPrice: "$149.99",
        img: "images/All Products/Table/Product_3.png",
        label: "Sale",
        category: "Table",
        tags: ["glass", "metal", "modern", "round"]
    },
    {
        id: 9,
        name: "Scandinavian Style Coffee Table",
        currentPrice: "$99.99",
        img: "images/All Products/Table/Product_4.jpg",
        label: "Available",
        category: "Table",
        tags: ["scandinavian", "wood", "compact"]
    },
    {
        id: 10,
        name: "Modern Compact Sofa, Grey",
        currentPrice: "$259.99",
        img: "images/All Products/Sofa/Product_1.png",
        label: "Sale",
        category: "Sofa",
        tags: ["modern", "compact", "grey", "sofa"]
    },
    {
        id: 11,
        name: "Luxury Velvet Sofa, Dark Blue",
        currentPrice: "$499.99",
        img: "images/All Products/Sofa/Product_2.png",
        label: "Available",
        category: "Sofa",
        tags: ["luxury", "velvet", "blue", "comfortable"]
    },
    {
        id: 12,
        name: "Minimalist Two-Seater Sofa",
        currentPrice: "$349.99",
        img: "images/All Products/Sofa/Product_3.jpg",
        label: "Available",
        category: "Sofa",
        tags: ["minimal", "two-seater", "modern", "light"]
    },
    {
        id: 13,
        name: "Beige Family Sofa, 3-Seater",
        currentPrice: "$429.99",
        img: "images/All Products/Sofa/Product_4.jpg",
        label: "Sale",
        category: "Sofa",
        tags: ["family", "3-seater", "beige", "comfortable"]
    },
    {
        id: 14,
        name: "Kendal Dark Teal Fabric Accent Chair",
        currentPrice: "$360.99",
        img: "images/All Products/Bedroom/Product_1.jpg",
        label: "Available",
        category: "Bedroom",
        tags: ["fabric", "teal", "accent", "chair"]
    },
    {
        id: 15,
        name: "Classic Wooden Bedside Table",
        currentPrice: "$129.99",
        img: "images/All Products/Bedroom/Product_2.jpg",
        label: "Available",
        category: "Bedroom",
        tags: ["wood", "bedside", "classic"]
    },
    {
        id: 16,
        name: "Luxury Upholstered Bed Frame",
        currentPrice: "$599.99",
        img: "images/All Products/Bedroom/Product_3.png",
        label: "Sale",
        category: "Bedroom",
        tags: ["upholstered", "bed", "luxury", "fabric"]
    },
    {
        id: 17,
        name: "Minimalist Nightstand with Drawer",
        currentPrice: "$149.99",
        img: "images/All Products/Bedroom/Product_4.jpg",
        label: "Available",
        category: "Bedroom",
        tags: ["minimal", "nightstand", "modern", "wood"]
    },
    {
        id: 18,
        name: "Modern Tufted Chair - Beige Fabric",
        currentPrice: "$129.99",
        img: "images/All Products/Chair/Product_13.png",
        label: "Sale",
        category: "Chair",
        tags: ["chair", "tufted", "wood", "beige", "fabric"]
    },
    {
        id: 19,
        name: "Contemporary Coffee Table - Round Glass",
        currentPrice: "$199.99",
        img: "images/All Products/Table/Product_13.jpg",
        label: "Available",
        category: "Table",
        tags: ["table", "round", "coffee", "glass", "modern"]
    },
    {
        id: 20,
        name: "Luxury Bedroom Accent Chair - Teal",
        currentPrice: "$360.99",
        img: "images/All Products/Bedroom/Product_2.jpg",
        label: "Available",
        category: "Bedroom",
        tags: ["bedroom", "chair", "teal", "fabric", "accent"]
    },
    {
        id: 21,
        name: "Compact Modern Sofa - Grey",
        currentPrice: "$499.99",
        img: "images/All Products/Sofa/Product_6.jpg",
        label: "Sale",
        category: "Sofa",
        tags: ["sofa", "modern", "grey", "compact"]
    },
    {
        id: 22,
        name: "Wooden Coffee Table - Living Room",
        currentPrice: "$149.99",
        img: "images/All Products/Table/Product_12.jpg",
        label: "Available",
        category: "Table",
        tags: ["table", "wood", "living-room", "coffee"]
    },
    {
        id: 23,
        name: "Classic Tufted Chair - Dark Brown",
        currentPrice: "$239.99",
        img: "images/All Products/Chair/Product_14.png",
        label: "Sale",
        category: "Chair",
        tags: ["chair", "tufted", "brown", "classic", "wood"]
    },
    {
        id: 24,
        name: "Modern L-Shaped Sofa - Beige",
        currentPrice: "$799.99",
        img: "images/All Products/Sofa/Product_8.jpg",
        label: "Available",
        category: "Sofa",
        tags: ["sofa", "modern", "beige", "living-room"]
    }
];

/* ------------------------------------------------------------------ */
/* ======================= Shop Dynamic Data ======================== */
/* ------------------------------------------------------------------ */

const row = document.getElementById("productsRow");

for (const p of products) {
    const col = document.createElement("div");
    col.className = "col-lg-4 col-md-4 col-sm-6";

    col.innerHTML = `
        <article class="single_product product-card">
            <figure>
                <div class="product_thumb">
                    <a href="single-product.html"><img src="${p.img}" alt="${p.name}"></a>
                    ${p.label ? `<div class="label_product"><span class="label_${p.label.toLowerCase()}">${p.label}</span></div>` : ""}
                </div>
                <figcaption class="product_content">
                    <h4><a href="single-product.html">${p.name}</a></h4>
                    <div class="price_box">
                        <span class="current_price">${p.currentPrice}</span>
                    </div>
                </figcaption>
            </figure>
        </article>
    `;
    row.appendChild(col);
}

/* ------------------------------------------------------------------ */
/* ========================= Sorting Data =========================== */
/* ------------------------------------------------------------------ */

const productRow = document.getElementById("productsRow");

function renderProducts(products) {
    productRow.innerHTML = "";
    for (let p of products) {
        const col = document.createElement("div");
        col.className = "col-lg-4 col-md-4 col-sm-6";

        col.innerHTML = `
            <article class="single_product product-card">
                <figure>
                    <div class="product_thumb">
                        <a href="single-product.html"><img src="${p.img}" alt="${p.name}"></a>
                        ${p.label ? `<div class="label_product"><span class="label_${p.label.toLowerCase()}">${p.label}</span></div>` : ""}
                    </div>
                    <figcaption class="product_content">
                        <h4><a href="single-product.html">${p.name}</a></h4>
                        <div class="price_box">
                            <span class="current_price">${p.currentPrice}</span>
                        </div>
                    </figcaption>
                </figure>
            </article>
        `;
        productRow.appendChild(col);
    }
}

renderProducts(products);

// sorting event
document.getElementById("sortProducts").addEventListener("change", function () {
    let sortedProducts = [...products];
    let value = this.value;

    if (value === "low-high") {
        sortedProducts.sort((a, b) => parseFloat(a.currentPrice.replace("$", "")) - parseFloat(b.currentPrice.replace("$", "")));
    } else if (value === "high-low") {
        sortedProducts.sort((a, b) => parseFloat(b.currentPrice.replace("$", "")) - parseFloat(a.currentPrice.replace("$", "")));
    } else {
        sortedProducts = [...products];
    }

    renderProducts(sortedProducts);
});

/* ------------------------------------------------------------------ */
/* ========================== Price Range =========================== */
/* ------------------------------------------------------------------ */

const rangeInput = document.getElementById('customRange4');
const rangeOutput = document.getElementById('rangeValue');

rangeOutput.textContent = rangeInput.value;

rangeInput.addEventListener('input', function () {
    rangeOutput.textContent = this.value;
});

/* ------------------------------------------------------------------ */
/* ==================== Filtering Data By Price ===================== */
/* ------------------------------------------------------------------ */

const filterBtn = document.getElementById("filterBtn");

rangeInput.addEventListener("input", () => {
    rangeOutput.textContent = rangeInput.value;
});

function renderProducts(list) {
    row.innerHTML = "";
    list.forEach(p => {
        const price = parseFloat(p.currentPrice.replace("$", ""));
        row.innerHTML += `
            <div class="col-md-3 mb-3">
                <div class="product-card">
                <img src="${p.img}" alt="${p.name}">
                <h6>${p.name}</h6>
                <p class="fw-bold">${p.currentPrice}</p>
                ${p.label ? `<span class="badge">${p.label}</span>` : ""}
                </div>
            </div>
        `;
    });
}

renderProducts(products);

filterBtn.addEventListener("click", () => {
    const maxPrice = parseFloat(rangeInput.value);
    const filtered = products.filter(p => parseFloat(p.currentPrice.replace("$", "")) <= maxPrice);
    renderProducts(filtered);
});

