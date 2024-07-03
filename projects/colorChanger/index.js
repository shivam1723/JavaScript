const button = document.querySelectorAll('.button');
// console.log(button[0].id);
const body = document.querySelector('body');

button.forEach((item) => {
  item.addEventListener('click', (e) => {
    console.log(e.target.id);
    let color = e.target.id;

    switch (color) {
      case 'grey':
        body.style.backgroundColor = e.target.id;
        break;
      case 'yellow':
        body.style.backgroundColor = e.target.id;

      case 'blue':
        body.style.backgroundColor = e.target.id;

      case 'white':
        body.style.backgroundColor = e.target.id;
    }
  });
});
