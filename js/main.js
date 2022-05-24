let toolTip = document.querySelectorAll('.sensitive .tooltip');

toolTip.forEach((ele) => {
       ele.addEventListener('click', () => {
              document.querySelector('.overlay').classList.add('show');
       });
});

let section = document.querySelector('.header .section');
section.onclick = function () {
       window.history.back();
};

document.querySelector('.close').onclick = function () {
       document.querySelector('.overlay').classList.remove('show');
};

let searchBar = document.querySelector('.search input');
searchBar.onfocus = function () {
       document.querySelector('.footer').classList.add('hide');
};
searchBar.onblur = function () {
       document.querySelector('.footer').classList.remove('hide');
};
