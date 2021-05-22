// === HELP FUNCTIONS ===
// Random id
function randomId() {
    return Math.floor(Math.random() * 100000);
}

// Convert number to money VND
function convertMoney(num) {
    return num.toLocaleString('it-IT', { style: 'currency', currency: 'VND' });
}

// === KHAI BÁO BIẾN ===
// Danh sách sản phẩm
let products = [
    {
        id: randomId(),
        name: 'Áo kiểu nữ cam đất phối cổ trắng dập ly',
        description:
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae, velit.',
        price: 250000,
        image:
            'https://image.yes24.vn/Upload/ProductImage/anhduong201605/1947415_L.jpg?width=550&height=550',
        count: 1,
    },
    {
        id: randomId(),
        name: 'Áo trắng bèo lé đen tay loe dễ thương',
        description:
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae, velit.',
        price: 350000,
        image:
            'https://image.yes24.vn/Upload/ProductImage/anhduong201605/1914666_L.jpg?width=550&height=550',
        count: 1,
    },
];

// === TRUY CẬP VÀO CÁC THÀNH PHẦN ===
let productsEle = document.querySelector('.products');

// === MAIN FUNCTION ===
// Render và hiển thị dữ liệu
function renderUI(arr) {
    productsEle.innerHTML = '';

    // Cập nhật số lượng sản phẩm trong cart
    let countEle = document.querySelector('.count');
    countEle.innerText = `${updateTotalItem(arr)} items in the bag`;

    if (arr.length == 0) {
        productsEle.insertAdjacentHTML(
            'afterbegin',
            '<li>Không có sản phẩm nào trong giỏ hàng</li>'
        );
        document.querySelector('.option-container').style.display = 'none';
        return;
    }

    for (let i = 0; i < arr.length; i++) {
        const p = arr[i];
        productsEle.innerHTML += `
            <li class="row">
                <div class="col left">
                    <div class="thumbnail">
                        <a href="#">
                            <img src="${p.image}" alt="${p.name}">
                        </a>
                    </div>
                    <div class="detail">
                        <div class="name"><a href="#">${p.name}</a></div>
                        <div class="description">
                            ${p.description}
                        </div>
                        <div class="price">${convertMoney(p.price)}</div>
                    </div>
                </div>
                <div class="col right">
                    <div class="quantity">
                        <input type="number" class="quantity" step="1" value="${p.count}">
                    </div>
                    <div class="remove">
                        <span class="close" onclick="removeItem(${p.id})">
                            <i class="fa fa-times" aria-hidden="true"></i>
                        </span>
                    </div>
                </div>
            </li>
        `;
    }
}

// Cập nhật số lượng sản phẩm
function updateTotalItem(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        const p = arr[i];
        total += p.count;
    }
    return total;
}

// Remove item trong cart
function removeItem(id) {
    for (let i = 0; i < products.length; i++) {
        if (products[i].id == id) {
            products.splice(i, 1);
        }
    }
    renderUI(products);
}

window.onload = renderUI(products);