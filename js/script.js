addEventListener('DOMContentLoaded', ()=>{
    const contadores = document.querySelectorAll('.contador_cantidad');
    const velocidad = 1000;

    const animarContadores = () =>{
        for(const contador of contadores){
            const actualizar_contador =() =>{
                let cantidad_maxima = +contador.dataset.cantidadTotal,
                valor_actual = +contador.innerText,
                incremento = cantidad_maxima / velocidad;
                if(valor_actual < cantidad_maxima){
                    contador.innerText = Math.ceil(valor_actual + incremento)
                    setTimeout((actualizar_contador), 150);
                }else{
                    contador.innerText = cantidad_maxima;

                }
            }
            actualizar_contador();
        }
    }

    const mostrarContadores = elementos =>{
        elementos.forEach(element => {
            if(element.isIntersecting){
                   element.target.classList.add('animar');
                   element.target.classList.remove('ocultar');
                   setTimeout(animarContadores, 300)
            }
        });
    }

    const observer = new IntersectionObserver(mostrarContadores, {
        threshold: 0.75 //0 - 1 
    })

    const elementosHTML = document.querySelectorAll('.contador')
    elementosHTML.forEach(elementoHTML =>{
        observer.observe(elementoHTML)
    })
    
})

// 1000

addEventListener('DOMContentLoaded', ()=>{
    const contadores = document.querySelectorAll('.contador_cantidad2');
    const velocidad = 1000;

    const animarContadores = () =>{
        for(const contador of contadores){
            const actualizar_contador =() =>{
                let cantidad_maxima = +contador.dataset.cantidadTotal,
                valor_actual = +contador.innerText,
                incremento = cantidad_maxima / velocidad;
                if(valor_actual < cantidad_maxima){
                    contador.innerText = Math.ceil(valor_actual + incremento)
                    setTimeout((actualizar_contador), 10);
                }else{
                    contador.innerText = cantidad_maxima;

                }
            }
            actualizar_contador();
        }
    }

    const mostrarContadores = elementos =>{
        elementos.forEach(element => {
            if(element.isIntersecting){
                   element.target.classList.add('animar');
                   element.target.classList.remove('ocultar');
                   setTimeout(animarContadores, 300)
            }
        });
    }

    const observer = new IntersectionObserver(mostrarContadores, {
        threshold: 0.75 //0 - 1 
    })

    const elementosHTML = document.querySelectorAll('.contador')
    elementosHTML.forEach(elementoHTML =>{
        observer.observe(elementoHTML)
    })
    
})

// 3ro
    
addEventListener('DOMContentLoaded', ()=>{
    const contadores = document.querySelectorAll('.contador_cantidad3');
    const velocidad = 100000000000;

    const animarContadores = () =>{
        for(const contador of contadores){
            const actualizar_contador =() =>{
                let cantidad_maxima = +contador.dataset.cantidadTotal,
                valor_actual = +contador.innerText,
                incremento = cantidad_maxima / velocidad;
                if(valor_actual < cantidad_maxima){
                    contador.innerText = Math.ceil(valor_actual + incremento)
                    setTimeout((actualizar_contador), 700);
                }else{
                    contador.innerText = cantidad_maxima;

                }
            }
            actualizar_contador();
        }
    }

    const mostrarContadores = elementos =>{
        elementos.forEach(element => {
            if(element.isIntersecting){
                   element.target.classList.add('animar');
                   element.target.classList.remove('ocultar');
                   setTimeout(animarContadores, 300)
            }
        });
    }

    const observer = new IntersectionObserver(mostrarContadores, {
        threshold: 0.7 //0 - 1 
    })

    const elementosHTML = document.querySelectorAll('.contador')
    elementosHTML.forEach(elementoHTML =>{
        observer.observe(elementoHTML)
    })
    
})


// 4to


addEventListener('DOMContentLoaded', ()=>{
    const contadores = document.querySelectorAll('.contador_cantidad4');
    const velocidad = 1000*10000000000000;

    const animarContadores = () =>{
        for(const contador of contadores){
            const actualizar_contador =() =>{
                let cantidad_maxima = +contador.dataset.cantidadTotal,
                valor_actual = +contador.innerText,
                incremento = cantidad_maxima / velocidad;
                if(valor_actual < cantidad_maxima){
                    contador.innerText = Math.ceil(valor_actual + incremento)
                    setTimeout((actualizar_contador), 300);
                }else{
                    contador.innerText = cantidad_maxima;

                }
            }
            actualizar_contador();
        }
    }

    const mostrarContadores = elementos =>{
        elementos.forEach(element => {
            if(element.isIntersecting){
                   element.target.classList.add('animar');
                   element.target.classList.remove('ocultar');
                   setTimeout(animarContadores, 300)
            }
        });
    }

    const observer = new IntersectionObserver(mostrarContadores, {
        threshold: 0.4 //0 - 1 
    })

    const elementosHTML = document.querySelectorAll('.contador')
    elementosHTML.forEach(elementoHTML =>{
        observer.observe(elementoHTML)
    })
    
})