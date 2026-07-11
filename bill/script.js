document.getElementById("cartForm").addEventListener("submit", async function(e) {
    e.preventDefault();
    const formData = new FormData(e.target);

    await fetch("/add", {
        method: "POST",
        body: formData
    });

    alert("Item added successfully!");
    e.target.reset();
});

document.getElementById("billBtn").addEventListener("click", function() {
    window.location.href = "/bill"; // go to bill page served by Flask
});

// window.location.href = "billdisply.html";


let cart = [];

document.getElementById("cartForm").addEventListener("submit", function(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const item = formData.get("item");
    const price = parseFloat(formData.get("price"));
    const quantity = parseInt(formData.get("quantity"));

    cart.push({ item, price, quantity });
    localStorage.setItem("cart", JSON.stringify(cart)); // save to localStorage
    alert("Item added successfully!");
    e.target.reset();
});

document.getElementById("billBtn").addEventListener("click", function() {
    window.location.href = "billsisply.html"; // go to bill page
});

document.getElementById("quitBtn").addEventListener("click", function() {
    cart = [];
    localStorage.removeItem("cart"); // clear cart
    alert("Cart cleared!");
});

document.getElementById("billBtn").addEventListener("click", function() {
    window.location.href = "biilsisply.html"; // Opens your bill display page perfectly
});


// let cart = [];

// document.getElementById("cartForm").addEventListener("submit", function(e) {
//     e.preventDefault();
//     const formData = new FormData(e.target);
//     const item = formData.get("item");
//     const price = parseFloat(formData.get("price"));
//     const quantity = parseInt(formData.get("quantity"));

//     cart.push({ item, price, quantity });
//     alert("Item added successfully!");
//     e.target.reset();
// });

// document.getElementById("billBtn").addEventListener("click", function() {
//     localStorage.setItem("cart", JSON.stringify(cart));
//     window.open("bill.html", "_blank");
// });
