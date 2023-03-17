
const filterUpcoming = (data) => {
  const date = new Date(data.currentDate) ;
  return data.events.filter( event => {
              let evDate= new Date(event.date);
              return date < evDate
          });
}

cargarDatos(filterUpcoming);
