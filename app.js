document.addEventListener("DOMContentLoaded", function () {
    var botonMenu = document.getElementById("icono-Menu");
    var navegacion = document.querySelector(".navegacion");

    if (botonMenu && navegacion) {
        botonMenu.addEventListener("click", function () {
            navegacion.classList.toggle("active");
        });
    } else {
        console.error("No se encontraron los elementos para la barra principal");
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const botonBusqueda = document.getElementById('busquedaBtn');
    const inputBusqueda = document.getElementById('busquedaInput');

    botonBusqueda.addEventListener('click', realizarBusqueda);
    inputBusqueda.addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
            realizarBusqueda();
        }
    });

    function realizarBusqueda() {
        const terminoBusqueda = inputBusqueda.value.trim().toLowerCase();
        const elementosBuscados = document.querySelectorAll('.contenido h2');

        elementosBuscados.forEach(function (elemento) {
            const textoElemento = elemento.textContent.toLowerCase();
            const contenedorPadre = elemento.closest('.contenido');

            if (textoElemento.includes(terminoBusqueda)) {
                contenedorPadre.style.display = 'block';
            } else {
                contenedorPadre.style.display = 'none';
            }
        });
    }
});

    document.addEventListener("DOMContentLoaded", function () {
        const sliderContainer = document.querySelector(".slider-container");
        const prevBtn = document.getElementById("prevBtn");
        const nextBtn = document.getElementById("nextBtn");

        let currentIndex = 0;

        const showCurrentImage = () => {
            const slider = document.querySelector(".slider");
            slider.style.transform = `translateX(${-currentIndex * 100}%)`;
        };

        const showNextImage = () => {
            currentIndex = (currentIndex + 1) % sliderContainer.children.length;
            showCurrentImage();
        };

        const showPrevImage = () => {
            currentIndex =
                (currentIndex - 1 + sliderContainer.children.length) %
                sliderContainer.children.length;
            showCurrentImage();
        };

        nextBtn.addEventListener("click", showNextImage);
        prevBtn.addEventListener("click", showPrevImage);
    });
 
    let sliderInner= document.querySelector(".slider-inner");
    var sliderButtonIzq = document.getElementById("sliderButtonIzq");
    var sliderButtonDer = document.getElementById("sliderButtonDer");

    let index =1;
    let percentage
    function moverIzq() {
        if(index==1)
        {
            index=0;
            percentage = 2 * -100;
            sliderInner.style.transform= "translateX(" + percentage + "%)";
        }
        else{
            if(index==0)
            {
                index=2
                percentage = index * -50;
                sliderInner.style.transform= "translateX(" + percentage + "%)";
            }
            else{
                if(index==2)
                {
                    index=1
                    percentage = index * 0;
                    sliderInner.style.transform= "translateX(" + percentage + "%)";
                }
            }
        }
        
    }


