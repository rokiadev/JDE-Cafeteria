/*=============== MIXITUP FILTER PRODUCTS ===============*/
let mixerProducts = mixitup('.imgs-container', {
    selectors: {
        target: '.box'
    },
    animation: {
        duration: 300
    }
});

/* Default filter products */ 
mixerProducts.filter('.all');

/* Link active products */ 
const linkProducts = document.querySelectorAll('.products-card');
function activeProducts() {
    linkProducts.forEach( l => l.classList.remove('active-products'));
    this.classList.add('active-products');
}
linkProducts.forEach(l => l.addEventListener('click', activeProducts));

// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
  }
  
  getYear();