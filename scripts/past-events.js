const context = document.getElementById('contentEvent')

const date = new Date(data.currentDate) ;

const events = data.events.filter( event => {
    let evDate= new Date(event.date);
    return date > evDate
});


let contentEvents="";

events.forEach((ev)=>{
    contentEvents += `<div class="col">
    <div class="card h-100">
      <img src="${ev.image}" alt="${ev.name}">
      <div class="card-body">
        <h5 class="card-title text-center">${ev.name}</h5>
        <p class="card-text">${ev.description}</p>
      </div>
      <div class="card-footer d-flex justify-content-between align-items-center">
        <small class="text-muted">Price: ${ev.price}</small>
        <a href="./details.html"  class="btn btn-outline-danger btn-custom" >see more...</a>
      </div>
    </div>
  </div>`;

}); 

context.innerHTML=contentEvents;