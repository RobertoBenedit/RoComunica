const menu = document.querySelector(".hamburguesa"); // Selecciona la clase hamburguesa
const navegacion = document.querySelector(".navegacion"); // selecciona la clase navegacion
const imagenes = document.querySelectorAll("img"); // Selecciona todas las imagenes
const btnTodos = document.querySelector(".todos");
const btnEnsaladas = document.querySelector(".ensaladas");
const btnPastas = document.querySelector(".pastas");
const btnPizzas = document.querySelector(".pizzas");
const btnPostres = document.querySelector(".postres");
const contenedorPlatillos = document.querySelector(".platillos");

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const imagen = entry.target;
      observer.unobserve(imagen);
      imagen.src = imagen.dataset.src; // asigna el valor de dataset-src al src de la img a cada imagen del document
    }
  });
});

imagenes.forEach((imagen) => {
  observer.observe(imagen); // Ejecuta el la funcion observer
});

document.addEventListener("DOMContentLoaded", () => {
  //Ejecuta el codigo que esta dentro una vez que carga todo el dom
  eventos();
  platillos();
});

const eventos = () => {
  // Función que añade un evento al elemento "menu" para ejecutar la función "abrirMenu" cuando se haga clic
  menu.addEventListener("click", abrirMenu);
};

const abrirMenu = () => {
  // Función que elimina la clase "ocultar" del elemento "navegación" y ejecuta la función "botonCerrar"
  navegacion.classList.remove("ocultar");
  botonCerrar();
};

const botonCerrar = () => {
  // Función que crea un elemento "p" y un elemento "div" con la clase "pantalla-completa", y los añade al "body". También agrega la clase "btn-cerrar" al elemento "p" y lo añade al elemento "navegación"y por ultimo lo agrega al div "navegacion"
  //  PARTE 1: Agrega boton de cerrar

  const btnCerrar = document.createElement("p"); //crea el <p>
  btnCerrar.textContent = "X"; //Le agrega de texto "x"
  btnCerrar.classList.add("btn-cerrar"); //Le agrega la clase "btn-cerrar"

  navegacion.appendChild(btnCerrar); // Le agrega el <p > al <div> con la clase "navegacion"

  //  PARTE 2: Cierra el menu

  //  PARTE 3: Crea la capa de cobertura transparente oscura

  const overlay = document.createElement("div"); // Crea un <div>
  if (document.querySelectorAll("pantalla-completa").lenght > 0) return;
  overlay.classList.add("pantalla-completa"); // Le agrega la clase 'pantalla-completa'
  const body = document.querySelector("body"); // Selecciona el <body>
  body.appendChild(overlay); // Le agrega al <body> el <div> con clase pantalla completa
  cerrarMenu(btnCerrar, overlay); // Llama a la funcion cerrarMenu que agrega al div "navegacion" la clase "ocultar"
};

const cerrarMenu = (boton, overlay) => {
  // Función que añade eventos a los elementos "boton" y "overlay" para ocultar el elemento "navegación" y eliminar el elemento "overlay" cuando se haga clic en ellos

  //  PARTE 1: borra el menu al hacer click en el boton

  boton.addEventListener("click", () => {
    // Le agrega al parametro boton, un event listener click
    navegacion.classList.add("ocultar"); //Agrega la clase "ocultar al div "navegacion"
    overlay.remove(); //Remueve el div "overlay"
    boton.remove();
  });

  //  Parte 2: Borra el menu al hacer click en la pantalla

  overlay.onclick = function () {
    overlay.remove();
    navegacion.classList.add("ocultar");
    boton.remove();
  };
};

const platillos = () => {
  let platillosArreglo = [];
  // const platillos = document.getElementsByClassName(".platillo");
  const platillos = document.querySelectorAll(".platillo");

  platillos.forEach((platillo) => {
    platillosArreglo = [...platillosArreglo, platillo];
  });

  const ensaladas = platillosArreglo.filter(
    (ensalada) => ensalada.getAttribute("data-platillo") === "ensalada"
  );
  const pastas = platillosArreglo.filter(
    (pasta) => pasta.getAttribute("data-platillo") === "pasta"
  );
  const pizzas = platillosArreglo.filter(
    (pizza) => pizza.getAttribute("data-platillo") === "pizza"
  );
  const postres = platillosArreglo.filter(
    (postre) => postre.getAttribute("data-platillo") === "postre"
  );

  mostrarPlatillos(platillosArreglo, ensaladas, pastas, pizzas, postres);

  console.log(ensaladas);
  console.log(pastas);
  console.log(pizzas);
  console.log(postres);
};

const mostrarPlatillos = (todos, ensaladas, pastas, pizzas, postres) => {
  btnTodos.addEventListener("click", () => {
    limpiarHTML(contenedorPlatillos);
    todos.forEach((todo) => {
      contenedorPlatillos.appendChild(todo);
    });
  });

  btnEnsaladas.addEventListener("click", () => {
    limpiarHTML(contenedorPlatillos);
    ensaladas.forEach((ensalada) => contenedorPlatillos.appendChild(ensalada));
  });

  btnPastas.addEventListener("click", () => {
    limpiarHTML(contenedorPlatillos);
    pastas.forEach((pasta) => contenedorPlatillos.appendChild(pasta));
  });

  btnPizzas.addEventListener("click", () => {
    limpiarHTML(contenedorPlatillos);
    pizzas.forEach((pizza) => contenedorPlatillos.appendChild(pizza));
  });

  btnPostres.addEventListener("click", () => {
    limpiarHTML(contenedorPlatillos);
    postres.forEach((postre) => contenedorPlatillos.appendChild(postre));
  });

  // mobile

  btnTodos.addEventListener("touchstart", () => {
    limpiarHTML(contenedorPlatillos);
    todos.forEach((todo) => {
      contenedorPlatillos.appendChild(todo);
    });
  });

  btnEnsaladas.addEventListener("touchstart", () => {
    limpiarHTML(contenedorPlatillos);
    ensaladas.forEach((ensalada) => contenedorPlatillos.appendChild(ensalada));
  });

  btnPastas.addEventListener("touchstart", () => {
    limpiarHTML(contenedorPlatillos);
    pastas.forEach((pasta) => contenedorPlatillos.appendChild(pasta));
  });

  btnPizzas.addEventListener("touchstart", () => {
    limpiarHTML(contenedorPlatillos);
    pizzas.forEach((pizza) => contenedorPlatillos.appendChild(pizza));
  });

  btnPostres.addEventListener("touchstart", () => {
    limpiarHTML(contenedorPlatillos);
    postres.forEach((postre) => contenedorPlatillos.appendChild(postre));
  });
};

const limpiarHTML = (contenedor) => {
  while (contenedor.firstChild) {
    contenedor.removeChild(contenedor.firstChild);
  }
};

// Codigo de ChatGTP:
// const platillos = () => {
//   let platillosArreglo = [];
//   const platillos = document.getElementsByClassName("platillo");
//   platillosArreglo = platillosArreglo.concat(Array.from(platillos));
//   const ensaladas = Array.from(platillos).filter((ensalada) =>
//     ensalada.getAttribute("data-platillo") === "ensalada"
//   );

//   console.log(ensaladas);
// };

// Este código es parte de un menú de navegación que se despliega al hacer clic en un elemento con la clase "hamburguesa" y se cierra al hacer clic en un botón con la clase "btn-cerrar" o en un elemento con la clase "pantalla-completa".

// A continuación se describen las líneas del código:

// La primera línea guarda una referencia al elemento HTML con la clase "hamburguesa" en la variable "menu".
// La segunda línea guarda una referencia al elemento HTML con la clase "navegacion" en la variable "navegacion".
// La tercera línea establece un evento que se ejecutará cuando el DOM (árbol de elementos del documento HTML) haya sido cargado completamente. El evento llama a la función "eventos".
// La cuarta línea define la función "eventos", que establece un evento "click" en el elemento "menu" y llama a la función "abrirMenu" cuando se haga clic en el elemento.
// La quinta línea define la función "abrirMenu", que elimina la clase "ocultar" del elemento "navegacion" (lo que lo hace visible) y llama a la función "botonCerrar".
// La sexta línea define la función "botonCerrar", que crea un elemento "p" y un elemento "div", le asigna a cada uno de ellos una clase respectivamente y los añade al documento HTML. Si ya existe un elemento "div" con la clase "pantalla-completa", la función termina.
// La séptima línea añade el elemento "p" (con la clase "btn-cerrar") como hijo del elemento "navegacion".
// La octava línea llama a la función "cerrarMenu" y le pasa como argumentos el elemento "p" y el elemento "div".
// La novena línea define la función "cerrarMenu", que establece un evento "click" en el elemento "p" (el botón de cierre) y elimina el elemento "div" (la pantalla completa) y agrega la clase "ocultar" al elemento "navegación" (para ocultarlo) cuando se hace clic en el botón. También establece un evento "onclick" en el elemento "div" (la pantalla completa) que tiene el mismo efecto cuando se hace clic en él.
