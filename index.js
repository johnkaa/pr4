$(function () {
  $('.slider').slick({
    infinite: true,
    prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-arrow-left"></i></button>',
    nextArrow: '<button type="button" class="slick-next"><i class="fa fa-arrow-right"></i></button>'
  })

  $(document).scroll(() => {
    if (window.scrollY > 250) {
      $('#btn-back-to-top').addClass('show')
    } else {
      $('#btn-back-to-top').removeClass('show')
    }
  })
  $('#btn-back-to-top').click(() => {
    $(document).scrollTop(0)
  })

  $('.burger-button').click(() => {
    $('.burger').toggleClass('active')
    $('html, body').css({
      overflow: 'hidden',
      height: '100%'
    })
  })

  $("#jquery_jplayer_1").jPlayer({
    ready: function () {
      $(this).jPlayer("setMedia", {
        title: "Inomarka",
        mp3: 'media/audio.mp3'
      });
    },
    cssSelectorAncestor: "#jp_container_1",
    swfPath: "/js",
    supplied: "mp3",
    useStateClassSkin: true,
    autoBlur: false,
    smoothPlayBar: true,
    keyEnabled: true,
    remainingDuration: true,
    toggleDuration: true
  });


})


const products = [
  {
    id: 0,
    name: 'Poco X4 Pro 5G 6/128GB Yellow',
    price: 12999,
    img: 'https://i.allo.ua/media/catalog/product/cache/3/image/710x600/602f0fa2c1f0d1ba5e241f914e856ff9/p/m/pms_1645778744.12147256.jpg',
    category: 'smartphone',
    sale: false,
    rating: 1
  },
  {
    id: 1,
    name: 'Планшет Xiaomi Pad 5 10.9” 6/128GB Cosmic Gray',
    price: 12999,
    img: 'https://i.allo.ua/media/catalog/product/cache/3/image/710x600/602f0fa2c1f0d1ba5e241f914e856ff9/7/8/78867868678_3.jpg',
    category: 'tablet',
    sale: false,
    rating: 1
  },
  {
    id: 2,
    name: 'Xiaomi 12X 5G 8/128GB Gray (2112123AG)',
    price: 22999,
    img: 'https://i.allo.ua/media/catalog/product/cache/3/image/710x600/602f0fa2c1f0d1ba5e241f914e856ff9/p/m/pms_1648782872.32459166.jpg',
    category: 'smartphone',
    sale: false,
    rating: 1
  },
  {
    id: 3,
    name: 'Ноутбук Mi RedmiBook 14 II R5/16/512/W (JYU4260CN)',
    price: 23499,
    img: 'https://i.allo.ua/media/catalog/product/cache/3/image/710x600/602f0fa2c1f0d1ba5e241f914e856ff9/1/8/1845134_result.jpg',
    category: 'notebook',
    sale: true,
    rating: 1
  },
  {
    id: 4,
    name: 'Ноутбук Apple MacBook Air 13 M1 (MGN63) Space Grey',
    price: 39999,
    img: 'https://i.allo.ua/media/catalog/product/cache/3/image/710x600/602f0fa2c1f0d1ba5e241f914e856ff9/w/w/wwru_macbook-air_q121_spacegray_pdp-image-1_1.jpg',
    category: 'notebook',
    sale: true,
    rating: 1
  },
  {
    id: 5,
    name: 'Планшет Lenovo Tab M10 FHD Plus (2nd Gen) LTE 64 GB Platinum Grey',
    price: 8499,
    img: 'https://i.allo.ua/media/catalog/product/cache/3/image/710x600/602f0fa2c1f0d1ba5e241f914e856ff9/1/9/193988499.jpg',
    category: 'tablet',
    sale: false,
    rating: 1
  },
  {
    id: 6,
    name: 'Ноутбук Mi RedmiBook 14 II R5/16/512/W (JYU4260CN)',
    price: 23499,
    img: 'https://i.allo.ua/media/catalog/product/cache/3/image/710x600/602f0fa2c1f0d1ba5e241f914e856ff9/1/8/1845134_result.jpg',
    category: 'notebook',
    sale: true,
    rating: 1
  },
]

let basket = []

function renderProducts() {
  const productsHTML = ['<div class="row">']
  products.forEach((item, index) => {
    productsHTML.push(`
    <div class="card col m-1" style="width: 18rem;">
      <img src="${item.img}" class="card-img-top" alt="${item.name}">
      <div class="card-body">
        <h5 class="card-title">${item.name}</h5>
        <p class="card-text">${item.price} грн.</p>
        <div class="card-bottom">
          <div class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#basket" onclick="addToBasket(${item.id})">Купить</div>
          <div class="card-rating">
            ${renderStars(item, true)}
          </div>
        </div>
      </div>
    </div>
  `)
    if (index % 3 === 0 && index !== 0) {
      productsHTML.push(`</div><div class="row">`)
    }
  })
  document.getElementById('products').innerHTML = productsHTML.join('')
}

renderProducts()

function category(category, title) {
  document.getElementById('categoriesLabel').innerHTML = title
  const itemsHTML = []
  products.forEach(item => {
    if (item.category === category) {
      itemsHTML.push(`
        <div class="card col m-1" style="width: 18rem;">
          <img src="${item.img}" class="card-img-top" alt="${item.name}">
          <div class="card-body">
            <h5 class="card-title">${item.name}</h5>
            <p class="card-text">${item.price} грн.</p>
            <div class="card-bottom">
          <div class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#basket" onclick="addToBasket(${item.id})">Купить</div>
          <div class="card-rating">
            ${renderStars(item, false)}
          </div>
        </div>
          </div>
        </div>
      `)
    }
  })
  document.getElementById('categoriesItems').innerHTML = itemsHTML.join('')
}

const search = document.getElementById('search')
search.oninput = event => {
  let found = []
  let $found = ['<ul class="list-group">']
  const foundProducts = document.getElementById('found-products')
  products.forEach((item) => {
    if (item.name.toLowerCase().includes(event.target.value.toLowerCase())) {
      found.push(item)
    }
  })
  if (!event.target.value) {
    found = []
  }
  if (found.length !== 0) {
    found.forEach(item => {
      $found.push(`
        <li class="list-group-item">
          <div>
            <div class="mb-1">${item.name}</div>
            <div class="mb-1">${item.price} грн.</div>
          </div>
          <div class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#basket" onclick="addToBasket(${item.id})">Купить</div>
        </li>
      `)
    })
    $found.push('</ul>')
    foundProducts.innerHTML = $found.join('')
  } else {
    foundProducts.innerHTML = ''
  }
}

function addToBasket(id) {
  products.forEach(item => {
    if (item.id === id) {
      basket.push(item)
    }
  })
  renderBasket()
}

function clearBasket() {
  basket = []
  renderBasket()
}

function renderBasket() {
  const basketHTML = document.getElementById('basketInner')
  if (basket.length !== 0) {
    let $basket = ['<ul class="list-group">']
    let totalPrice = 0
    $basket.push('</ul>')
    basket.forEach(item => {
      totalPrice += item.price
      $basket.push(`
        <li class="list-group-item row">
          <div class="col">${item.name}</div>
          <div class="col">${item.price} грн.</div>
        </li>
      `)
    })
    $basket.push(`
    <button type="button" class="btn btn-danger mt-3 d-grid gap-2 col-6 mx-auto" onclick="clearBasket()">Очистить корзину</button>
    <hr />
    <div class="basket__price container row mt-3">
      <div class="basket__price-text col">Цена:</div>
      <div class="basket__price-num col">${totalPrice} грн.</div>
    </div>
    `)
    basketHTML.innerHTML = $basket.join('')
  } else {
    basketHTML.innerHTML = 'Корзина пуста'
  }
}

function buy() {
  setTimeout(() => {
    alert('Поздравляем с покупкой!')
  }, 200)
  clearBasket()
}

function renderStars(product, editable) {
  let starsHTML = []
  for (let i = 1; i <= 5; i++) {
    if (i <= product.rating) {
      starsHTML.push(`<i class="star star_active fa fa-solid fa-star ${editable ? '' : 'star__category'}" ${editable ? `onclick="ratingItem(${product.id}, ${i})"` : ''}></i>`)
    } else {
      starsHTML.push(`<i class="star fa fa-solid fa-star ${editable ? '' : 'star__category'}" ${editable ? `onclick="ratingItem(${product.id}, ${i})"` : ''}></i>`)
    }
  }
  return starsHTML.join('')
}

function ratingItem(id, stars) {
  products[id].rating = stars
  renderProducts()
}