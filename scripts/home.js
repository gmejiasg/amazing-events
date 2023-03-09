const events = ( data.events ) ? data.events : [] ;

const crearTarjetasEventos = (listaEventos) => {
  const context = document.getElementById('contentEvent');
  let contentEvents="";
  if (listaEventos.length) {
    listaEventos.forEach((ev)=>{
      contentEvents += `<div class="col">
      <div class="card h-100">
      <img src=" ${ev.image}" alt="${ev.name}">
      <div class="card-body">
      <h5 class="card-title text-center"> ${ev.name}</h5>
      <p class="card-text"> ${ev.description}</p>
      </div>
      <div class="card-footer d-flex justify-content-between align-items-center">
      <small class="text-muted">Price: ${ev.price}</small>
      <a href="./details.html" class="btn btn-outline-danger btn-custom" >see more...</a>
      </div>
      </div>
      </div>`;
    }); 
  } else {
    contentEvents = ` <div class="d-flex w-100 justify-content-center"><div class="alert alert-danger d-flex justify-contex" role="alert">
      No hay resultados. Prueba otros filtros!
      </div></div>`;
  }
  
  context.innerHTML=contentEvents;
}

crearTarjetasEventos(events);

const contextCategory = document.getElementById('categoryBox');

let categoriesList = new Set(events.map((even)=> even.category));

let categoryBox="";
categoriesList.forEach((category) => {
  categoryBox += `<label>
  ${category}
  <input type="checkbox" name="category" value="${category}">
  </label>`
});

contextCategory.innerHTML=categoryBox;

let formSearch = document.getElementById('form-search');

formSearch.addEventListener("submit", (event)=> { 
  event.preventDefault();

  let evetFilter = [];
  let filtros = false;
  const formData = new FormData(event.target);

  
  formData.getAll("category").forEach((category)=>{
    filtros=true
    evetFilter= [...evetFilter, ...events.filter( event =>  event.category.includes(category) )];
  })

  if(formData.get('filtro')){
    let find=formData.get('filtro').toLowerCase();
    if (!filtros) {
      evetFilter =[...events.filter( event =>  event.name.toLowerCase().includes(find) || event.description.toLowerCase().includes(find) )];
    } else {
      evetFilter =[...evetFilter.filter( event =>  event.name.toLowerCase().includes(find)) || event.description.toLowerCase().includes(find)];
    }
    filtros=true
  }

  if (filtros) {
    crearTarjetasEventos(evetFilter);
  } else {
    crearTarjetasEventos(events);
  }

})


