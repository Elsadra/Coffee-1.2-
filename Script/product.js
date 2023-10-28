class coffee {
  constructor(id, name, desc, img, price, price_text, Model) {
    this.id = id;
    this.name = name;
    this.desc = desc;
    this.img = img;
    this.price = price;
    this.price_text = price_text;
    this.Model = Model;
  }
}

const coffee_1 = new coffee(
  1,
  "اسپرسو",
  "ساده و غلیظ",
  "../Image/Espresso.jpg",
  "۳۵,۰۰۰",
  35000,
  "hot drink"
);

const coffee_2 = new coffee(
  2,
  "قهوه ترک",
  "اصیل و خوشمزه",
  "../Image/Turk coffee.jpg",
  "۳۵,۰۰۰",
  35000,
  "hot drink"
);

const coffee_3 = new coffee(
  3,
  "قهوه فرانسوی",
  "راحت و در دسترس",
  "../Image/French coffee.jpg",
  "۴۰,۰۰۰",
  40000,
  "hot drink"
);

const coffee_4 = new coffee(
  4,
  "کاپوچینو",
  "لطیف و پرطرفدار",
  "../Image/Cappuccino.jpg",
  "۳۰,۰۰۰",
  30000,
  "hot drink"
);

const coffee_5 = new coffee(
  5,
  "قهوه لاته",
  "سبک و دلپذیر",
  "../Image/coffee latte.jpg",
  "۳۵,۰۰۰",
  35000,
  "hot drink"
);

const coffee_6 = new coffee(
  6,
  "قهوه موکا",
  "شکلاتی و جذاب",
  "../Image/mocha coffee.avif",
  "۴۵,۰۰۰",
  45000,
  "hot drink"
);

const coffee_7 = new coffee(
  7,
  "قهوه آمریکانو",
  "رقیق و خوش‌عطر",
  "../Image/American coffee.jpg",
  "۴۵,۰۰۰",
  45000,
  "hot drink"
);

const coffee_8 = new coffee(
  8,
  "ماکیاتو",
  "طرح‌دار و جذاب",
  "../Image/Macchiato coffee.avif",
  "۴۵,۰۰۰",
  45000,
  "hot drink"
);

// Cold drink

const coffee_9 = new coffee(
  9,
  "کلد برو",
  "قهوه دمی و سرد",
  "../Image/Go cold coffee.jpg",
  "۴۵,۰۰۰",
  45000,
  "cold drink"
);

const coffee_10 = new coffee(
  10,
  "آیس لاته",
  "خنک و متفاوت",
  "../Image/Iced latte.jpg",
  "۴۵,۰۰۰",
  45000,
  "cold drink"
);

const coffee_11 = new coffee(
  11,
  "آفوگاتو",
  "دسر قهوه",
  "../Image/Frappe.jpg",
  "۴۵,۰۰۰",
  45000,
  "cold drink"
);

const coffee_12 = new coffee(
  12,
  "فراپه",
  "شیک قهوه",
  "../Image/Frappe.avif",
  "۴۵,۰۰۰",
  45000,
  "cold drink"
);

// Fruit juice

const coffee_13 = new coffee(
  13,
  "موهیتو",
  "خنک و معطر",
  "../Image/Mojito.jpg",
  "۴۵,۰۰۰",
  45000,
  "Fruit juice"
);

const coffee_14 = new coffee(
  14,
  "دتاکس واتر",
  "آب سم‌زدا",
  "../Image/Detox water.jpg",
  "۴۰,۰۰۰",
  40000,
  "Fruit juice"
);

const coffee_15 = new coffee(
  15,
  "آیس تی",
  "چای سرد",
  "../Image/Ice T.jpg",
  "۳۵,۰۰۰",
  35000,
  "Fruit juice"
);

// coffee maker

const coffee_16 = new coffee(
  16,
  "قهوه جوش موکا اکسپرس ۴ کاپ بیالتی",
  "بیالتی",
  "../Image/Moka Express coffee maker 4 cups Bialti.jpg",
  "۲,۱۳۴,۰۰۰",
  2134000,
  "coffee maker"
);

const coffee_17 = new coffee(
  17,
  "اسپرسوساز ECM 2009 مباشی",
  "مباشی",
  "../Image/Welcome ECM 2009 espresso maker.jpg",
  "۴,۹۲۲,۰۰۰",
  4922000,
  "coffee maker"
);

const coffee_18 = new coffee(
  18,
  "اسپرسوساز ME-ECM 2022 مباشی",
  "مباشی",
  "../Image/Welcome to the ME-ECM 2022 espresso machine.webp",
  "۵,۳۵۰,۰۰۰",
  5350000,
  "coffee maker"
);

const coffee_19 = new coffee(
  19,
  "اسپرسوساز ME-ECM 2034 مباشی",
  "مباشی",
  "../Image/Espresso maker ME-ECM 2034.webp",
  "۸,۳۶۰,۰۰۰",
  8360000,
  "coffee maker"
);

const coffee_20 = new coffee(
  20,
  "اسپرسوساز ME-ECM 2038 مباشی",
  "مباشی",
  "../Image/Espresso maker ME-ECM 2038.webp",
  "۷,۲۷۶,۰۰۰",
  7276000,
  "coffee maker"
);

const coffee_21 = new coffee(
  21,
  "قهوه ساز نوردیا",
  "نوردیا",
  "../Image/Nordia coffee maker.webp",
  "۱,۹۱۰,۰۰۰",
  1910000,
  "coffee maker"
);

const coffee_22 = new coffee(
  22,
  "قهوه جوش موکا ۳ کاپ طرح کلاسیک",
  "متفرقه",
  "../Image/Moka coffee maker 3 cups, classic design.jpg",
  "۲۸۰,۰۰۰",
  280000,
  "coffee maker"
);

const coffee_23 = new coffee(
  23,
  "قهوه جوش موکا ۶ کاپ طرح کلاسیک",
  "متفرقه",
  "../Image/Moka coffee maker 6 cups classic design.jpg",
  "۵۰۰,۰۰۰",
  500000,
  "coffee maker"
);

const coffee_24 = new coffee(
  24,
  "اسپرسوساز EC9 دلونگی",
  "دلوتگی",
  "../Image/DeLonghi EC9 espresso machine.jpg",
  "۳,۶۳۸,۰۰۰",
  3638000,
  "coffee maker"
);

let product_coffee = [
  coffee_1,
  coffee_2,
  coffee_3,
  coffee_4,
  coffee_5,
  coffee_6,
  coffee_7,
  coffee_8,
  coffee_9,
  coffee_10,
  coffee_11,
  coffee_12,
  coffee_13,
  coffee_14,
  coffee_15,
  coffee_16,
  coffee_17,
  coffee_18,
  coffee_19,
  coffee_20,
  coffee_21,
  coffee_22,
  coffee_23,
  coffee_24,
];

let $ = document;

let container_card = $.querySelector(".container-card");

let M_hot_drink = product_coffee.filter(function (item) {
  return item.Model === "hot drink";
});

let M_cold_drink = product_coffee.filter(function (item) {
  return item.Model === "cold drink";
});

let M_Fruit_juice = product_coffee.filter(function (item) {
  return item.Model === "Fruit juice";
});

let M_coffee_maker = product_coffee.filter(function (item) {
  return item.Model === "coffee maker";
});

let num_box_1 = $.querySelector(".num-box-1");
let num_box_2 = $.querySelector(".num-box-2");
let box_poster = $.querySelector(".box-poster");
let box_filter = $.querySelector(".box-filter");
let box_filter_1 = $.querySelector(".box-filter-1");
let box_filter_2 = $.querySelector(".box-filter-2");
let box_filter_3 = $.querySelector(".box-filter-3");
let box_filter_4 = $.querySelector(".box-filter-4");

window.addEventListener("load", function () {
  for (var i = 0; i < 1; i++) {
    let numPlus = this.setInterval(function () {
      num_box_1.innerHTML = i++ + "+";
      if (num_box_1.innerHTML == 25 + "+") {
        clearInterval(numPlus);
      }
    }, 100);
  }
  for (var i = 0; i < 1; i++) {
    let numPlus = this.setInterval(function () {
      num_box_2.innerHTML = i++ + "+";
      if (num_box_2.innerHTML == 35 + "+") {
        clearInterval(numPlus);
      }
    }, 65);
  }
  this.setTimeout(function () {
    box_poster.setAttribute(
      "style",
      "opacity: 1; transition: 1s; position: absolute; top: 0rem;"
    );
  }, 800);
  box_filter_1.classList.add("box-filter-click");
  box_filter_1.classList.remove("box-filter");
  M_hot_drink.forEach(function (item) {
    let div_node = $.createElement("div");
    div_node.setAttribute("class", "card");
    div_node.innerHTML = $.createTextNode = `
    <img src="${item.img}" alt="" class="img-card">
    <div class="card-title">${item.name}</div>
    <div class="card-desc">${item.desc}</div>
    <div class="card-price">${item.price} تومان</div>
    `;
    container_card.appendChild(div_node);
  });
});

box_filter_1.addEventListener("click", function () {
  container_card.innerHTML = "";
  box_filter_2.classList.add("box-filter");
  box_filter_2.classList.remove("box-filter-click");
  box_filter_3.classList.add("box-filter");
  box_filter_3.classList.remove("box-filter-click");
  box_filter_4.classList.add("box-filter");
  box_filter_4.classList.remove("box-filter-click");
  box_filter_1.classList.add("box-filter-click");
  box_filter_1.classList.remove("box-filter");
  M_hot_drink.forEach(function (item) {
    let div_node = $.createElement("div");
    div_node.setAttribute("class", "card");
    div_node.innerHTML = $.createTextNode = `
    <img src="${item.img}" alt="${item.name}" class="img-card">
    <div class="card-title">${item.name}</div>
    <div class="card-desc">${item.desc}</div>
    <div class="card-price">${item.price} تومان</div>
    `;
    container_card.appendChild(div_node);
  });
});

box_filter_2.addEventListener("click", function () {
  container_card.innerHTML = "";
  box_filter_1.classList.add("box-filter");
  box_filter_1.classList.remove("box-filter-click");
  box_filter_3.classList.add("box-filter");
  box_filter_3.classList.remove("box-filter-click");
  box_filter_4.classList.add("box-filter");
  box_filter_4.classList.remove("box-filter-click");
  box_filter_2.classList.add("box-filter-click");
  box_filter_2.classList.remove("box-filter");
  M_cold_drink.forEach(function (item) {
    let div_node = $.createElement("div");
    div_node.setAttribute("class", "card");
    div_node.innerHTML = $.createTextNode = `
    <img src="${item.img}" alt="${item.name}" class="img-card">
    <div class="card-title">${item.name}</div>
    <div class="card-desc">${item.desc}</div>
    <div class="card-price">${item.price} تومان</div>
    `;
    container_card.appendChild(div_node);
  });
});

box_filter_3.addEventListener("click", function () {
  container_card.innerHTML = ``;
  box_filter_1.classList.add("box-filter");
  box_filter_1.classList.remove("box-filter-click");
  box_filter_2.classList.add("box-filter");
  box_filter_2.classList.remove("box-filter-click");
  box_filter_4.classList.add("box-filter");
  box_filter_4.classList.remove("box-filter-click");
  box_filter_3.classList.add("box-filter-click");
  box_filter_3.classList.remove("box-filter");
  M_Fruit_juice.forEach(function (item) {
    let div_node = $.createElement("div");
    div_node.setAttribute("class", "card");
    div_node.innerHTML = $.createTextNode = `
    <img src="${item.img}" alt="${item.name}" class="img-card">
    <div class="card-title">${item.name}</div>
    <div class="card-desc">${item.desc}</div>
    <div class="card-price">${item.price} تومان</div>
    `;
    container_card.appendChild(div_node);
  });
});

box_filter_4.addEventListener("click", function () {
  container_card.innerHTML = ``;
  box_filter_1.classList.add("box-filter");
  box_filter_1.classList.remove("box-filter-click");
  box_filter_2.classList.add("box-filter");
  box_filter_2.classList.remove("box-filter-click");
  box_filter_3.classList.add("box-filter");
  box_filter_3.classList.remove("box-filter-click");
  box_filter_4.classList.add("box-filter-click");
  box_filter_4.classList.remove("box-filter");
  M_coffee_maker.forEach(function (item) {
    let div_node = $.createElement("div");
    div_node.setAttribute("class", "card");
    div_node.innerHTML = $.createTextNode = `
    <img src="${item.img}" alt="${item.name}" class="img-card">
    <div class="card-title">${item.name}</div>
    <div class="card-desc">${item.desc}</div>
    <div class="card-price">${item.price} تومان</div>
    `;
    container_card.appendChild(div_node);
  });
});

let alert_green = `
<div class="alert-green">
    <div class="parent-alert">
      <div class="icon-alert-green"><i class="bi bi-check-circle"></i></div>
      <div class="text-alert-green">اتصال برقرار است.</div>
    </div>
</div>
`;
let alert_red = `
<div class="alert-red">
    <div class="parent-alert">
      <div class="icon-alert-red"><i class="bi bi-x-circle"></i></div>
      <div class="text-alert-red">اتصال قطع است.</div>
    </div>
</div>
`;

let container_alert = $.querySelector(".container-alert");
let container_offline = $.querySelector(".container-offline");

window.addEventListener("online", function () {
  container_alert.innerHTML = alert_green;
  let set_online = setTimeout(function () {
    container_alert.setAttribute(
      "style",
      "position: fixed; top: 5rem; transition: .7s;"
    );
  }, 1000);
  if (set_online) {
    setTimeout(function () {
      container_alert.setAttribute(
        "style",
        "position: fixed; top: -5rem; transition: .7s;"
      );
    }, 4500);
  }
});

window.addEventListener("offline", function () {
  container_alert.innerHTML = alert_red;
  let set_offline = setTimeout(function () {
    container_alert.setAttribute(
      "style",
      "position: fixed; top: 5rem; transition: .7s;"
    );
    container_offline.setAttribute("style", "display:flex;");
  }, 1000);
  if (set_offline) {
    setTimeout(function () {
      container_alert.setAttribute(
        "style",
        "position: fixed; top: -5rem; transition: .7s;"
      );

      container_offline.setAttribute("style", "display:none;");
    }, 7000);
  }
});

let parent_card_search = $.querySelector(".parent-card-search");

product_coffee.forEach(function (item) {
  let div_node = $.createElement("div");
  div_node.setAttribute("class", "card-search");
  div_node.setAttribute("style", "none");
  div_node.innerHTML = $.createTextNode = `
  <img src="${item.img}" alt="${item.name}" class="img-card">
  <div class="card-title">${item.name}</div>
  <div class="card-desc">${item.desc}</div>
  <div class="card-price">${item.price} تومان</div>
  `;
  parent_card_search.appendChild(div_node);
});

let search = $.querySelector(".input-search");
search.addEventListener("input", filterList);

function filterList() {
  const filter = search.value;
  const card_search = $.querySelectorAll(".card-search");

  card_search.forEach((item) => {
    let text = item.textContent;
    item.style.display = "none";
    if (text.includes(filter)) {
      item.style.display = "";
    } else {
      item.style.display = "none";
    }
  });
}
