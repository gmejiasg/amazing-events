const events = ( data.events ) ? data.events : [] ;
let params = new URLSearchParams(document.location.search);

const id = params.get("id")

const even = events.find(ev => ev._id == id);

const element= document.getElementById("card-details")
element.innerHTML = `<div class="col">
  <div class="card w-100">
    <div class="verEvento">
      <img class="" src="${even.image}" alt="${even.name}">
    </div>
    <div class="card-body">
      <h5 class="card-title text-center"> ${even.name}</h5>
      <p class="card-text"> ${even.description}</p>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Lugar: ${even.place}</li>
        <li class="list-group-item">Capacidad:${even.capacity}</li>
        <li class="list-group-item">Fecha: ${even.date}</li>
        <li class="list-group-item">Price: ${even.price}</li>
      </ul>          
    </div>
  </div>
</div>`;
