

function (category, eventos) {
    return eventos.filter(evento => evento.category == category);
}

function getPorcentajeTotalAsistencia(eventos) {
    let sumaAsistencia = 0;
    let capacidadTotal=0;
    eventos.forEach(element => {
        if (element.assistance){
            sumaAsistencia += element.assistance;
        }else if(element.estimate){
            sumaAsistencia += element.estimate;
        }
        capacidadTotal += element.capacity;
    });
    return Math.round((sumaAsistencia*100) / capacidadTotal);
}

function getTotalGanancia(eventos) {
    let totalGanancia = 0;
    eventos.forEach(element => {
        totalGanancia += element.capacity*element.price;
    });
    return totalGanancia;
}

function agregarStatsEvents(eventos) {
    eventos.forEach(element => {
        if (element.assistance){
            element.porcentaje = Math.round((element.assistance*100)/(element.capacity))
        }else if(element.estimate){
            element.porcentaje= Math.round((element.estimate*100)/element.capacity)
        }
    });

    let mayorCapacidad = [...eventos];
    mayorCapacidad.sort((a,b) => b.capacity - a.capacity);

    let eventMayorPorc = [...eventos];
    eventMayorPorc.sort((a,b) => b.porcentaje - a.porcentaje);

    let eventMenorPorc = [...eventos];
    eventMenorPorc.sort((a,b) => a.porcentaje - b.porcentaje);

    const bodyEvent=document.getElementById("eventsTable");
    let str='';
    for (let index = 0; index < mayorCapacidad.length; index++) {
        str += `<tr>
                <td>${eventMayorPorc[index].name} - ${eventMayorPorc[index].porcentaje} % </td>
                <td>${eventMenorPorc[index].name} - ${eventMenorPorc[index].porcentaje} %</td>
                <td>${mayorCapacidad[index].name} - capacity: ${mayorCapacidad[index].capacity}</td>
                </tr>
            `;
    }
    bodyEvent.innerHTML=str;
}

function imprimirCategories(eventos, id) {
    let categoriesList = new Set(eventos.map((even)=> even.category));

    let categories=[];
    let indice=0;
    categoriesList.forEach((category)=>{
        let eventosdeCategoria=filtrarEventosPorCategory(category, eventos);
        categories[indice]=[]
        categories[indice]['porcentajeAsistencia']=getPorcentajeTotalAsistencia(eventosdeCategoria);
        categories[indice]['ganancia']=getTotalGanancia(eventosdeCategoria);
        categories[indice]['nombre']=category;
        indice++;
    });
    const box=document.getElementById(id);
    let str2='';
    categories.forEach((data)=>{
        str2 += `<tr>
                <td>${data.nombre}</td>
                <td>$ ${data.ganancia}</td>
                <td>${data.porcentajeAsistencia} %</td>
                </tr>
            `;
    });
    box.innerHTML=str2;
}

const procesarEstadistica= (datos) => {

    let eventos = datos.events;

    agregarStatsEvents(eventos);

    const date = new Date(datos.currentDate);

    let upcommigEvent = eventos.filter( event => {
        let evDate= new Date(event.date);
        return date < evDate
    });

    imprimirCategories(upcommigEvent, "upcommingCategoryTable");

    let passEvent = eventos.filter( event => {
        let evDate= new Date(event.date);
        return date > evDate
    });

    imprimirCategories(passEvent, "pastCategoryTable");

    
}

cargarDatos(procesarEstadistica);


  
