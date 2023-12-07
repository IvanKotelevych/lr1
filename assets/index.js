const wrapper = document.querySelector('.spin_bender');

if (wrapper) {
  window.addEventListener('click', (event) => {
    wrapper.style.top = `${ event.clientY / window.innerHeight * 100 }%`;
    wrapper.style.left = `${ event.clientX / window.innerWidth * 100 }%`;
  });
}
