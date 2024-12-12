let inventory = [];
let idCounter = 1;

document.getElementById('productForm').addEventListener('submit', function(event) {
    event.preventDefault();
    addProduct();
});

function addProduct() {
    const name = document.getElementById('productName').value;
    const category = document.getElementById('productCategory').value;
    const price = parseFloat(document.getElementById('productPrice').value);

    if (name && category && !isNaN(price)) {
        inventory.push({ id: idCounter++, name, category, price });
        displayInventory();
        document.getElementById('productForm').reset();
    } else {
        alert("Please fill out all fields with valid information.");
    }
}

function displayInventory() {
        const tableBody = document.getElementById('inventoryTable');
        tableBody.innerHTML = '';
    
        inventory.forEach(function(product) {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td style="text-align: center;">${product.id}</td>
                <td style="text-align: center;">${product.name}</td>
                <td style="text-align: center;">${product.category}</td>
                <td style="text-align: center;">Rs.${product.price.toFixed(2)}</td>
                <td style="text-align: center;">
                    <button class="btn btn-sm btn-danger" onclick="removeProduct(${product.id})">Delete</button>
                </td>
            `;
            tableBody.appendChild(row);
        });
    }
    

    function removeProduct(id) {
        inventory = inventory.filter(function(product) {
            return product.id !== id;
        });
        displayInventory();
    }
