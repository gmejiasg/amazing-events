
// console.log(data);
const context = document.getElementById('contentEvent')

const events = ( data.events ) ? data.events : [] ;

let contentEvents="";

events.forEach((ev)=>{
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

    // let div1=document.createElement('div');
    // div1.classList.add('col');
    // let div2=document.createElement('div');
    // div2.classList.add('card', 'h-100');
    // div1.appendChild(div2);

    // let img = document.createElement('img')
    // img.setAttribute("src", ev.image);
    // img.setAttribute("alt", ev.name);
    // div2.appendChild(img);

    // let div3=document.createElement('div');
    // div3.classList.add('card-body');
    // div2.appendChild(div3);

    // let h5=document.createElement('h5');
    // h5.classList.add('card-title', 'text-center');
    // let text1=document.createTextNode(ev.name);
    // h5.appendChild(text1);
    // div3.appendChild(h5);

    // let p1=document.createElement('p');
    // p1.classList.add('card-text');
    // let text2=document.createTextNode(ev.description);
    // p1.appendChild(text2);
    // div3.appendChild(p1);

    // let div4=document.createElement('div');
    // div4.classList.add('card-footer', 'd-flex', 'justify-content-between', 'align-items-center');
    // div2.appendChild(div4)
    // let small=document.createElement('small');
    // small.classList.add('text-muted');
    // let text3=document.createTextNode('Price: $'+ev.price);
    // div4.appendChild(small);
    // small.appendChild(text3);

    // let button= document.createElement('a')
    // div4.appendChild(button);
    // button.setAttribute("href", "/details.html");
    // button.classList.add('btn', 'btn-outline-danger', 'btn-custom');
    // let text4=document.createTextNode('see more...');
    // button.appendChild(text4);





    // context.appen dChild(div1);
}); 

context.innerHTML=contentEvents;
