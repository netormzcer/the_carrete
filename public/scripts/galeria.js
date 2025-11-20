// ------------------------------------
// Navbar
// ------------------------------------
fetch("../../pages/section/navbar.html")
  .then(r => r.text())
  .then(html => (document.querySelector("#navbar").innerHTML = html));


// ------------------------------------
// Cargar JSON principal
// ------------------------------------
fetch("../../public/data/galeria.json")
  .then(r => r.json())
  .then(data => {
    construirSubmenu(data.secciones);
    construirSecciones(data.secciones);
    inicializarCarrusel();
  });


// ------------------------------------
// Submenú dinámico
// ------------------------------------
function construirSubmenu(secciones) {
  const menu = document.getElementById("submenu");
  const ul = document.createElement("ul");
  ul.className = "flex justify-center gap-6 text-lg";

  secciones.forEach(sec => {
    const li = document.createElement("li");
    li.innerHTML = `<a href="#${sec.id}" class="hover:text-gray-300">${sec.titulo}</a>`;
    ul.appendChild(li);
  });

  menu.appendChild(ul);
}


// ------------------------------------
// Construir secciones completas
// ------------------------------------
function construirSecciones(secciones) {
  const root = document.getElementById("galeria-dinamica");

  secciones.forEach(sec => {
    const section = document.createElement("section");
    section.id = sec.id;
    section.className = `mt-20 p-6 ${sec.color}`;

    section.innerHTML = `
      <h2 class="text-3xl font-bold mb-2">${sec.titulo}</h2>
      <p class="text-gray-300 mb-6">${sec.descripcion}</p>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"></div>
    `;

    const grid = section.querySelector("div");

    sec.fotos.forEach(nombre => {
      const img = document.createElement("img");
      img.src = `../../public/images/${sec.carpeta}/${nombre}`;
      img.className = "w-full object-cover rounded-lg aspect-[2/3]";
      grid.appendChild(img);
    });

    root.appendChild(section);
  });
}


// ------------------------------------
// Carrusel dinámico (fade + swipe)
// ------------------------------------
function inicializarCarrusel() {
  const fotos = ["banner.webp", "/carrusel/1.webp", "/carrusel/2.webp", "/carrusel/3.webp"];
  const container = document.getElementById("carousel-container");

  fotos.forEach((name, i) => {
    const img = document.createElement("img");
    img.src = `../../public/images/${name}`;
    img.className = `
      carousel-item absolute inset-0 w-full h-full object-cover
      transition-opacity duration-700 
      ${i === 0 ? "opacity-100" : "opacity-0"}
    `;
    container.appendChild(img);
  });

  const items = document.querySelectorAll(".carousel-item");
  const total = items.length;
  let index = 0;

  const show = () => {
    items.forEach((img, i) => (img.style.opacity = i === index ? 1 : 0));
  };

  const next = () => {
    index = (index + 1) % total;
    show();
  };

  const prev = () => {
    index = (index - 1 + total) % total;
    show();
  };

  document.getElementById("next").onclick = next;
  document.getElementById("prev").onclick = prev;

  let auto = setInterval(next, 4000);

  // Swipe
  let startX = 0;

  container.addEventListener("touchstart", e => {
    startX = e.touches[0].clientX;
    clearInterval(auto);
  });

  container.addEventListener("touchend", e => {
    const diff = startX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) diff > 0 ? next() : prev();
    auto = setInterval(next, 4000);
  });

  show();
}
