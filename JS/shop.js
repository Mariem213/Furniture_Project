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
        category: "chair",
        tags: ["tufted", "beige", "wood", "fabric"],
        description: "Our chairs are designed to combine comfort and style, making them a perfect addition to any living or working space. Crafted from high-quality materials such as solid wood, metal, or premium plastic, they provide durability and long-lasting support. The ergonomic designs ensure proper posture, while the elegant finishes and modern aesthetics enhance the overall decor. Whether you need a cozy armchair for relaxing at home or a sleek office chair for productivity, our collection offers a variety of options to suit every taste and requirement."
    },
    {
        id: 2,
        name: "Classic Armchair in Dark Grey Fabric",
        currentPrice: "$189.99",
        img: "images/All Products/Chair/Product_2.png",
        label: "Available",
        category: "chair",
        tags: ["classic", "fabric", "grey", "armchair"],
        description: "A comfy beige tufted chair with stylish wooden legs. Perfect for any living room. Our chairs are designed to combine comfort and style, making them a perfect addition to any living or working space. Crafted from high-quality materials such as solid wood, metal, or premium plastic, they provide durability and long-lasting support. The ergonomic designs ensure proper posture, while the elegant finishes and modern aesthetics enhance the overall decor. Whether you need a cozy armchair for relaxing at home or a sleek office chair for productivity, our collection offers a variety of options to suit every taste and requirement."
    },
    {
        id: 3,
        name: "Modern Minimalist Lounge Chair",
        currentPrice: "$249.99",
        img: "images/All Products/Chair/Product_3.png",
        label: "Available",
        category: "chair",
        tags: ["modern", "minimal", "lounge", "wood"],
        description: "Our chairs are designed to combine comfort and style, making them a perfect addition to any living or working space. Crafted from high-quality materials such as solid wood, metal, or premium plastic, they provide durability and long-lasting support. The ergonomic designs ensure proper posture, while the elegant finishes and modern aesthetics enhance the overall decor. Whether you need a cozy armchair for relaxing at home or a sleek office chair for productivity, our collection offers a variety of options to suit every taste and requirement. A comfy beige tufted chair with stylish wooden legs. Perfect for any living room."
    },
    {
        id: 4,
        name: "Luxury Leather Accent Chair",
        currentPrice: "$329.99",
        img: "images/All Products/Chair/Product_4.jpg",
        label: "Sale",
        category: "chair",
        tags: ["luxury", "leather", "brown", "accent"],
        description: "Our chairs are designed to combine comfort and style, making them a perfect addition to any living or working space. Crafted from high-quality materials such as solid wood, metal, or premium plastic, they provide durability and long-lasting support. The ergonomic designs ensure proper posture, while the elegant finishes and modern aesthetics enhance the overall decor. Whether you need a cozy armchair for relaxing at home or a sleek office chair for productivity, our collection offers a variety of options to suit every taste and requirement. A comfy beige tufted chair with stylish wooden legs. Perfect for any living room."
    },
    {
        id: 5,
        name: "Compact Fabric Armchair, Beige",
        currentPrice: "$159.99",
        img: "images/All Products/Chair/Product_5.png",
        label: "Available",
        category: "chair",
        tags: ["compact", "fabric", "beige", "modern"],
        description: "A comfy beige tufted chair with stylish wooden legs. Perfect for any living room. Our chairs are designed to combine comfort and style, making them a perfect addition to any living or working space. Crafted from high-quality materials such as solid wood, metal, or premium plastic, they provide durability and long-lasting support. The ergonomic designs ensure proper posture, while the elegant finishes and modern aesthetics enhance the overall decor. Whether you need a cozy armchair for relaxing at home or a sleek office chair for productivity, our collection offers a variety of options to suit every taste and requirement."
    },
    {
        id: 6,
        name: "Contemporary Round Coffee Table, White Top",
        currentPrice: "$79.99",
        img: "images/All Products/Table/Product_1.jpg",
        label: "Available",
        category: "table",
        tags: ["coffee", "round", "modern", "white"],
        description: "Our tables are the centerpiece of functionality and elegance, available in various sizes, shapes, and materials to meet all your needs. From sturdy wooden dining tables that create a warm family gathering space to stylish coffee tables that add charm to your living room, every piece is crafted with attention to detail. The smooth surfaces, durable finishes, and practical designs ensure both beauty and longevity. Whether for dining, work, or leisure, our tables combine practicality with sophisticated style."
    },
    {
        id: 7,
        name: "Industrial Style Wooden Coffee Table",
        currentPrice: "$119.99",
        img: "images/All Products/Table/Product_2.jpg",
        label: "Available",
        category: "table",
        tags: ["industrial", "wood", "rustic", "living-room"],
        description: "Our tables are the centerpiece of functionality and elegance, available in various sizes, shapes, and materials to meet all your needs. From sturdy wooden dining tables that create a warm family gathering space to stylish coffee tables that add charm to your living room, every piece is crafted with attention to detail. The smooth surfaces, durable finishes, and practical designs ensure both beauty and longevity. Whether for dining, work, or leisure, our tables combine practicality with sophisticated style."

    },
    {
        id: 8,
        name: "Glass Top Coffee Table with Metal Legs",
        currentPrice: "$149.99",
        img: "images/All Products/Table/Product_3.png",
        label: "Sale",
        category: "table",
        tags: ["glass", "metal", "modern", "round"],
        description: "Our tables are the centerpiece of functionality and elegance, available in various sizes, shapes, and materials to meet all your needs. From sturdy wooden dining tables that create a warm family gathering space to stylish coffee tables that add charm to your living room, every piece is crafted with attention to detail. The smooth surfaces, durable finishes, and practical designs ensure both beauty and longevity. Whether for dining, work, or leisure, our tables combine practicality with sophisticated style."
    },
    {
        id: 9,
        name: "Scandinavian Style Coffee Table",
        currentPrice: "$99.99",
        img: "images/All Products/Table/Product_4.jpg",
        label: "Available",
        category: "table",
        tags: ["scandinavian", "wood", "compact"],
        description: "Our tables are the centerpiece of functionality and elegance, available in various sizes, shapes, and materials to meet all your needs. From sturdy wooden dining tables that create a warm family gathering space to stylish coffee tables that add charm to your living room, every piece is crafted with attention to detail. The smooth surfaces, durable finishes, and practical designs ensure both beauty and longevity. Whether for dining, work, or leisure, our tables combine practicality with sophisticated style."
    },
    {
        id: 10,
        name: "Modern Compact Sofa, Grey",
        currentPrice: "$259.99",
        img: "images/All Products/Sofa/Product_1.png",
        label: "Sale",
        category: "sofa",
        tags: ["modern", "compact", "grey", "sofa"],
        description: "Our sofas provide ultimate comfort and timeless elegance, perfect for both modern and classic interiors. Upholstered in soft fabrics or premium leather, they are designed to offer maximum relaxation without compromising on style. With supportive cushions, durable frames, and versatile designs, these sofas accommodate everything from daily lounging to entertaining guests. Available in a wide range of colors, sizes, and styles, our sofas can complement any living space and create a welcoming atmosphere."

    },
    {
        id: 11,
        name: "Luxury Velvet Sofa, Dark Blue",
        currentPrice: "$499.99",
        img: "images/All Products/Sofa/Product_2.png",
        label: "Available",
        category: "sofa",
        tags: ["luxury", "velvet", "blue", "comfortable"],
        description: "Our sofas provide ultimate comfort and timeless elegance, perfect for both modern and classic interiors. Upholstered in soft fabrics or premium leather, they are designed to offer maximum relaxation without compromising on style. With supportive cushions, durable frames, and versatile designs, these sofas accommodate everything from daily lounging to entertaining guests. Available in a wide range of colors, sizes, and styles, our sofas can complement any living space and create a welcoming atmosphere."
    },
    {
        id: 12,
        name: "Minimalist Two-Seater Sofa",
        currentPrice: "$349.99",
        img: "images/All Products/Sofa/Product_3.jpg",
        label: "Available",
        category: "sofa",
        tags: ["minimal", "two-seater", "modern", "light"],
        description: "Our sofas provide ultimate comfort and timeless elegance, perfect for both modern and classic interiors. Upholstered in soft fabrics or premium leather, they are designed to offer maximum relaxation without compromising on style. With supportive cushions, durable frames, and versatile designs, these sofas accommodate everything from daily lounging to entertaining guests. Available in a wide range of colors, sizes, and styles, our sofas can complement any living space and create a welcoming atmosphere."
    },
    {
        id: 13,
        name: "Beige Family Sofa, 3-Seater",
        currentPrice: "$429.99",
        img: "images/All Products/Sofa/Product_4.jpg",
        label: "Sale",
        category: "sofa",
        tags: ["family", "3-seater", "beige", "comfortable"],
        description: "Our sofas provide ultimate comfort and timeless elegance, perfect for both modern and classic interiors. Upholstered in soft fabrics or premium leather, they are designed to offer maximum relaxation without compromising on style. With supportive cushions, durable frames, and versatile designs, these sofas accommodate everything from daily lounging to entertaining guests. Available in a wide range of colors, sizes, and styles, our sofas can complement any living space and create a welcoming atmosphere."
    },
    {
        id: 14,
        name: "Kendal Dark Teal Fabric Accent Chair",
        currentPrice: "$360.99",
        img: "images/All Products/Bedroom/Product_1.jpg",
        label: "Available",
        category: "bedroom",
        tags: ["fabric", "teal", "accent", "chair"],
        description: "Our beds are designed for restful sleep and luxurious comfort, making every night a rejuvenating experience. Built with sturdy frames, high-quality materials, and stylish headboards, they ensure both durability and aesthetic appeal. The mattresses are ergonomically designed to provide proper support and align your spine for healthy sleep. Available in various sizes, from single to king-size, and a variety of styles, our beds suit any bedroom decor, combining elegance, functionality, and superior comfort."
    },
    {
        id: 15,
        name: "Classic Wooden Bedside Table",
        currentPrice: "$129.99",
        img: "images/All Products/Bedroom/Product_2.jpg",
        label: "Available",
        category: "bedroom",
        tags: ["wood", "bedside", "classic"],
        description: "Our beds are designed for restful sleep and luxurious comfort, making every night a rejuvenating experience. Built with sturdy frames, high-quality materials, and stylish headboards, they ensure both durability and aesthetic appeal. The mattresses are ergonomically designed to provide proper support and align your spine for healthy sleep. Available in various sizes, from single to king-size, and a variety of styles, our beds suit any bedroom decor, combining elegance, functionality, and superior comfort."
    },
    {
        id: 16,
        name: "Luxury Upholstered Bed Frame",
        currentPrice: "$599.99",
        img: "images/All Products/Bedroom/Product_3.png",
        label: "Sale",
        category: "bedroom",
        tags: ["upholstered", "bed", "luxury", "fabric"],
        description: "Our beds are designed for restful sleep and luxurious comfort, making every night a rejuvenating experience. Built with sturdy frames, high-quality materials, and stylish headboards, they ensure both durability and aesthetic appeal. The mattresses are ergonomically designed to provide proper support and align your spine for healthy sleep. Available in various sizes, from single to king-size, and a variety of styles, our beds suit any bedroom decor, combining elegance, functionality, and superior comfort."
    },
    {
        id: 17,
        name: "Minimalist Nightstand with Drawer",
        currentPrice: "$149.99",
        img: "images/All Products/Bedroom/Product_4.jpg",
        label: "Available",
        category: "bedroom",
        tags: ["minimal", "nightstand", "modern", "wood"],
        description: "Our beds are designed for restful sleep and luxurious comfort, making every night a rejuvenating experience. Built with sturdy frames, high-quality materials, and stylish headboards, they ensure both durability and aesthetic appeal. The mattresses are ergonomically designed to provide proper support and align your spine for healthy sleep. Available in various sizes, from single to king-size, and a variety of styles, our beds suit any bedroom decor, combining elegance, functionality, and superior comfort."
    },
    {
        id: 18,
        name: "Modern Tufted Chair - Beige Fabric",
        currentPrice: "$129.99",
        img: "images/All Products/Chair/Product_13.png",
        label: "Sale",
        category: "chair",
        tags: ["chair", "tufted", "wood", "beige", "fabric"],
        description: "Our chairs are designed to combine comfort and style, making them a perfect addition to any living or working space. Crafted from high-quality materials such as solid wood, metal, or premium plastic, they provide durability and long-lasting support. The ergonomic designs ensure proper posture, while the elegant finishes and modern aesthetics enhance the overall decor. Whether you need a cozy armchair for relaxing at home or a sleek office chair for productivity, our collection offers a variety of options to suit every taste and requirement. A comfy beige tufted chair with stylish wooden legs. Perfect for any living room."
    },
    {
        id: 19,
        name: "Contemporary Coffee Table - Round Glass",
        currentPrice: "$199.99",
        img: "images/All Products/Table/Product_13.jpg",
        label: "Available",
        category: "table",
        tags: ["table", "round", "coffee", "glass", "modern"],
        description: "Our tables are the centerpiece of functionality and elegance, available in various sizes, shapes, and materials to meet all your needs. From sturdy wooden dining tables that create a warm family gathering space to stylish coffee tables that add charm to your living room, every piece is crafted with attention to detail. The smooth surfaces, durable finishes, and practical designs ensure both beauty and longevity. Whether for dining, work, or leisure, our tables combine practicality with sophisticated style."
    },
    {
        id: 20,
        name: "Luxury Bedroom Accent Chair - Teal",
        currentPrice: "$360.99",
        img: "images/All Products/Bedroom/Product_2.jpg",
        label: "Available",
        category: "bedroom",
        tags: ["bedroom", "chair", "teal", "fabric", "accent"],
        description: "Our beds are designed for restful sleep and luxurious comfort, making every night a rejuvenating experience. Built with sturdy frames, high-quality materials, and stylish headboards, they ensure both durability and aesthetic appeal. The mattresses are ergonomically designed to provide proper support and align your spine for healthy sleep. Available in various sizes, from single to king-size, and a variety of styles, our beds suit any bedroom decor, combining elegance, functionality, and superior comfort."
    },
    {
        id: 21,
        name: "Compact Modern Sofa - Grey",
        currentPrice: "$499.99",
        img: "images/All Products/Sofa/Product_6.jpg",
        label: "Sale",
        category: "sofa",
        tags: ["sofa", "modern", "grey", "compact"],
        description: "Our sofas provide ultimate comfort and timeless elegance, perfect for both modern and classic interiors. Upholstered in soft fabrics or premium leather, they are designed to offer maximum relaxation without compromising on style. With supportive cushions, durable frames, and versatile designs, these sofas accommodate everything from daily lounging to entertaining guests. Available in a wide range of colors, sizes, and styles, our sofas can complement any living space and create a welcoming atmosphere."
    },
    {
        id: 22,
        name: "Wooden Coffee Table - Living Room",
        currentPrice: "$149.99",
        img: "images/All Products/Table/Product_12.jpg",
        label: "Available",
        category: "table",
        tags: ["table", "wood", "living-room", "coffee"],
        description: "Our tables are the centerpiece of functionality and elegance, available in various sizes, shapes, and materials to meet all your needs. From sturdy wooden dining tables that create a warm family gathering space to stylish coffee tables that add charm to your living room, every piece is crafted with attention to detail. The smooth surfaces, durable finishes, and practical designs ensure both beauty and longevity. Whether for dining, work, or leisure, our tables combine practicality with sophisticated style."
    },
    {
        id: 23,
        name: "Classic Tufted Chair - Dark Brown",
        currentPrice: "$239.99",
        img: "images/All Products/Chair/Product_14.png",
        label: "Sale",
        category: "chair",
        tags: ["chair", "tufted", "brown", "classic", "wood"],
        description: "Our chairs are designed to combine comfort and style, making them a perfect addition to any living or working space. Crafted from high-quality materials such as solid wood, metal, or premium plastic, they provide durability and long-lasting support. The ergonomic designs ensure proper posture, while the elegant finishes and modern aesthetics enhance the overall decor. Whether you need a cozy armchair for relaxing at home or a sleek office chair for productivity, our collection offers a variety of options to suit every taste and requirement. A comfy beige tufted chair with stylish wooden legs. Perfect for any living room."
    },
    {
        id: 24,
        name: "Modern L-Shaped Sofa - Beige",
        currentPrice: "$799.99",
        img: "images/All Products/Sofa/Product_8.jpg",
        label: "Available",
        category: "sofa",
        tags: ["sofa", "modern", "beige", "living-room"],
        description: "Our sofas provide ultimate comfort and timeless elegance, perfect for both modern and classic interiors. Upholstered in soft fabrics or premium leather, they are designed to offer maximum relaxation without compromising on style. With supportive cushions, durable frames, and versatile designs, these sofas accommodate everything from daily lounging to entertaining guests. Available in a wide range of colors, sizes, and styles, our sofas can complement any living space and create a welcoming atmosphere."
    }
];

if (window.location.pathname.includes("shop.html")) {

    /* ------------------------------------------------------------------ */
    /* ======================= Shop Dynamic Data ======================== */
    /* ------------------------------------------------------------------ */

    function displayProducts(list) {
        const productsContainer = document.getElementById("productsRow");
        productsContainer.innerHTML = "";

        list.forEach(p => {
            const col = document.createElement("div");
            col.className = "col-12 col-sm-6 col-md-4 col-lg-4";

            col.innerHTML = `
            <article class="single_product product-card">
                <figure>
                    <div class="product_thumb">
                        <a href="single_product.html?id=${p.id}">
                            <img src="${p.img}" alt="${p.name}">
                        </a>
                        ${p.label ? `<div class="label_product"><span class="label_${p.label.toLowerCase()}">${p.label}</span></div>` : ""}
                    </div>
                    <figcaption class="product_content">
                        <h4><a href="single_product.html?id=${p.id}">${p.name}</a></h4>
                        <div class="price_box">
                            <span class="current_price">${p.currentPrice}</span>
                        </div>
                    </figcaption>
                </figure>
            </article>
        `;

            productsContainer.appendChild(col);
        });
    }

    if (document.getElementById("productsRow")) {
        displayProducts(products);
    }

    /* ------------------------------------------------------------------ */
    /* ========================= Sorting Data =========================== */
    /* ------------------------------------------------------------------ */

    const productRow = document.getElementById("productsRow");

    function renderProducts(products) {
        productRow.innerHTML = "";
        for (let p of products) {
            const col = document.createElement("div");
            col.className = "col-12 col-sm-6 col-md-4 col-lg-4";

            col.innerHTML = `
            <article class="single_product product-card">
                <figure>
                    <div class="product_thumb">
                        <a href="single_product.html?id=${p.id}"><img src="${p.img}" alt="${p.name}"></a>
                        ${p.label ? `<div class="label_product"><span class="label_${p.label.toLowerCase()}">${p.label}</span></div>` : ""}
                    </div>
                    <figcaption class="product_content">
                        <h4><a href="single_product.html?id=${p.id}">${p.name}</a></h4>
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

    if (document.getElementById("productsRow")) {
        renderProducts(products);
    }

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

    if (document.getElementById("productsRow")) {
        displayProducts(products);
    }

    filterBtn.addEventListener("click", () => {
        const maxPrice = parseFloat(rangeInput.value);
        const filtered = products.filter(p => parseFloat(p.currentPrice.replace("$", "")) <= maxPrice);
        renderProducts(filtered);
    });

    /* ------------------------------------------------------------------ */
    /* =================== Filtering Data By Category =================== */
    /* ------------------------------------------------------------------ */

    document.querySelectorAll(".widget_categories a").forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const category = this.getAttribute("data-category");

            let filteredProducts = category === "all"
                ? products
                : products.filter(p => p.category === category);

            if (document.getElementById("productsRow")) {
                displayProducts(filteredProducts);
            }
        });
    });

    if (document.getElementById("productsRow")) {
        displayProducts(products);
    }

    /* ------------------------------------------------------------------ */
    /* ==================== Category Number of Data ===================== */
    /* ------------------------------------------------------------------ */

    function updateCategoryCounts(products) {
        const counts = {};

        products.forEach(product => {
            const cat = product.category.toLowerCase();
            counts[cat] = (counts[cat] || 0) + 1;
        });

        counts['all'] = products.length;

        document.querySelectorAll(".widget_categories ul li a span").forEach(span => {
            const cat = span.getAttribute("data-category");
            span.textContent = counts[cat] || 0;
        });
    }

    document.querySelectorAll('.widget_categories ul li a').forEach(cat => {
        cat.addEventListener('click', e => {
            e.preventDefault();
            filterProducts(cat.dataset.category);
        });
    });

    updateCategoryCounts(products);


    /* ------------------------------------------------------------------ */
    /* ========================= Pagination ============================= */
    /* ------------------------------------------------------------------ */

    let currentPage = 1;
    const productsPerPage = 12;
    const paginationContainer = document.getElementById("pagination");

    function renderPaginatedProducts(list, page = 1) {
        const start = (page - 1) * productsPerPage;
        const end = start + productsPerPage;
        const paginatedItems = list.slice(start, end);

        if (document.getElementById("productsRow")) {
            displayProducts(paginatedItems);
        }
        renderPaginationControls(list.length, page);
    }

    function renderPaginationControls(totalItems, currentPage) {
        paginationContainer.innerHTML = "";
        const totalPages = Math.ceil(totalItems / productsPerPage);

        if (currentPage > 1) {
            const prevBtn = document.createElement("button");
            prevBtn.textContent = "Prev";
            prevBtn.className = "btn nePrBTN btn-sm btn-outline-dark mx-1";
            prevBtn.addEventListener("click", () => {
                renderPaginatedProducts(products, currentPage - 1);
            });
            paginationContainer.appendChild(prevBtn);
        }

        for (let i = 1; i <= totalPages; i++) {
            const btn = document.createElement("button");
            btn.textContent = i;
            btn.className = `btn btn-sm mx-1 ${i === currentPage ? "btn-dark" : "btn-outline-dark"}`;
            btn.addEventListener("click", () => {
                renderPaginatedProducts(products, i);
            });
            paginationContainer.appendChild(btn);
        }

        if (currentPage < totalPages) {
            const nextBtn = document.createElement("button");
            nextBtn.textContent = "Next";
            nextBtn.className = "btn nePrBTN btn-sm btn-outline-dark mx-1";
            nextBtn.addEventListener("click", () => {
                renderPaginatedProducts(products, currentPage + 1);
            });
            paginationContainer.appendChild(nextBtn);
        }
    }

    renderPaginatedProducts(products, currentPage);

    /* ------------------------------------------------------------------ */
    /* ===================== Searching about Product ==================== */
    /* ------------------------------------------------------------------ */

    document.getElementById("searchInput").addEventListener("input", function () {
        const query = this.value.toLowerCase();
        const filteredProducts = products.filter(p =>
            p.name.toLowerCase().includes(query)
        );
        currentPage = 1;
        renderPaginatedProducts(filteredProducts, currentPage);
    });

}

/* ------------------------------------------------------------------ */
/* ===================== Showing Product Details ==================== */
/* ------------------------------------------------------------------ */

function getProductIdFromURL() {
    const params = new URLSearchParams(window.location.search);
    return parseInt(params.get("id"));
}

function renderProductDetails() {
    const productId = getProductIdFromURL();
    const product = products.find(p => p.id === productId);

    if (product) {
        document.getElementById("productDetails").innerHTML = `
        <article class="single_product product-card">
            <div class="col-12 col-md-6 mb-5 mx-5 mx-md-0">
                <img src="${product.img}" class="rounded" alt="${product.name}">
            </div>
            <div class="col-12 col-md-6 mx-3 mx-md-0 text-center">
                <h2>${product.name}</h2>
                <p>${product.description || "No description available."}</p>
                <div class="product-card-title col-6">
                    <span class="label">${product.label}</span>
                    <div class="mt-1">
                        <h4>${product.currentPrice}</h4>
                    </div>
                </div>
                <span class="tags d-block my-5">
                    ${product.tags.map(tag => `<span class="tag-item">${tag}</span>`).join(" ")}
                </span>
                <div class="d-lg-flex justify-content-center">
                    <a href="shop.html" class="btn mx-4 my-3 my-md-0">Back to Products</a>
                    <button href="cart.html" id="addToCartBtn" class="btn mx-4 add-to-cart"> Add to Cart </button>
                </div>
            </div>
        </article>
    `;
    } else {
        document.getElementById("productDetails").innerHTML = `<p class="text-danger">Product not found.</p>`;
    }
}

if (window.location.pathname.includes("single_product.html")) {
    renderProductDetails();

    const productId = getProductIdFromURL();
    const product = products.find(p => p.id === productId);

    document.addEventListener("click", function (e) {
        if (e.target && e.target.id === "addToCartBtn") {
            addToCart(product);
        }
    });
}

/* ------------------------------------------------------------------ */
/* ========================== Add To Cart =========================== */
/* ------------------------------------------------------------------ */

function addToCart(product) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const priceNumber = Number(String(product.currentPrice).replace(/[^0-9.-]+/g, '')) || 0;

    const existing = cart.find(item => item.id === product.id);
    if (existing) {
        existing.quantity = Number(existing.quantity || 0) + 1;
    } else {
        cart.push({ id: product.id, name: product.name, img: product.img, currentPrice: product.currentPrice, priceNumber, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    window.location.href = "cart.html";
}