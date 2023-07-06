const propiedadesJSON = [
  {
    name: "Casa de campo",
    description: "Un lugar ideal para descansar de la ciudad",
    src: "https://www.construyehogar.com/wp-content/uploads/2020/02/Dise%C3%B1o-casa-en-ladera.jpg",
    rooms: 2,
    m: 170,
  },
  {
    name: "Casa de playa",
    description: "Despierta tus días oyendo el oceano",
    src: "https://media.chvnoticias.cl/2018/12/casas-en-la-playa-en-yucatan-2712.jpg",
    rooms: 2,
    m: 130,
  },
  {
    name: "Casa en el centro",
    description: "Ten cerca de ti todo lo que necesitas",
    src: "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
    rooms: 1,
    m: 80,
  },
  {
    name: "Casa rodante",
    description: "Conviertete en un nómada del mundo sin salir de tu casa",
    src: "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
    rooms: 1,
    m: 6,
  },
  {
    name: "Departamento",
    description: "Desde las alturas todo se ve mejor",
    src: "https://www.adondevivir.com/noticias/wp-content/uploads/2016/08/depto-1024x546.jpg",
    rooms: 3,
    m: 200,
  },
  {
    name: "Mansión",
    description: "Vive una vida lujosa en la mansión de tus sueños ",
    src: "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
    rooms: 5,
    m: 500,
  },
];

// CREACION DEL CUADRO DE RESULTADOS Y DECLARACION DE LAS VARIABLES QUE LO CONTIENEN

const boxPropiedades = document.querySelector(".propiedades");
const propiedadesJSONMain = propiedadesJSON.slice(); // copia intacta del arreglo original mientras se realizan operaciones

// Ahora pintamos el cuadro que generamos con la section propiedad para traer los resultados

function boxResults(propiedad) {
return `
    <div class="propiedad">
        <div class="img" style="background-image: url('${propiedad.src}')"></div>
        <section>
            <h5>${propiedad.name}</h5>
            <div class="d-flex justify-content-between">
            <p>Cuartos: ${propiedad.rooms}</p>
            <p>Metros: ${propiedad.m}</p>
            </div>
            <p class="my-3">${propiedad.description}</p>
            <button class="btn btn-info">Ver más</button>
        </section>
    </div>
    `;
}

// Ahora recorremos el arreglo, generando tambien un html para cada elemento recorrido y agregandolos al cuadro de resultados

    function agregarPropiedadesAlCuadro(propiedades) {
        let htmlPropiedades = "";
        for (let i = 0; i < propiedades.length; i++) {
            const propiedad = propiedades[i];
            htmlPropiedades += boxResults(propiedad);
        }
        boxPropiedades.innerHTML = htmlPropiedades;
}

agregarPropiedadesAlCuadro(propiedadesJSONMain);
document.getElementById("totalPropiedades").textContent =
    propiedadesJSONMain.length;

// Declaracion del boton search y evento sobre el mismo

const botonBuscar = document.getElementById("search");
botonBuscar.addEventListener("click", function () {
    const cuartosInput = document.getElementById("cuartosInput").value;
    const desdeInput = document.getElementById("desdeInput").value;
    const hastaInput = document.getElementById("hastaInput").value;

    if (cuartosInput === "" || desdeInput === "" || hastaInput === "") {
        alert("Por favor rellena todos los recuadros");
    } else {
        const propiedadesFiltradas = propiedadesJSONMain.filter(
            (propiedad) =>
        propiedad.rooms === parseInt(cuartosInput) &&
        propiedad.m >= parseInt(desdeInput) &&
        propiedad.m <= parseInt(hastaInput)
    );

    document.getElementById("totalPropiedades").textContent =
        propiedadesFiltradas.length;

    let htmlPropiedadesFiltradas = "";
    for (let i = 0; i < propiedadesFiltradas.length; i++) {
        const propiedad = propiedadesFiltradas[i];
        htmlPropiedadesFiltradas += boxResults(propiedad);
    }
    boxPropiedades.innerHTML = htmlPropiedadesFiltradas;
    }
});

const botonLimpiar = document.getElementById("clear");

botonLimpiar.addEventListener("click", function () {
    document.getElementById("cuartosInput").value = "";
    document.getElementById("desdeInput").value = "";
    document.getElementById("hastaInput").value = "";

  // Vaciamos y restauramos las propiedades originales

    boxPropiedades.innerHTML = "";

    for (let i = 0; i < propiedadesJSONMain.length; i++) {
    const propiedad = propiedadesJSONMain[i];
    const htmlPropiedad = boxResults(propiedad);
    boxPropiedades.innerHTML += htmlPropiedad;
}

    agregarPropiedadesAlCuadro(propiedadesJSONMain);
    document.getElementById("totalPropiedades").textContent =
    propiedadesJSONMain.length;
});
