
//second js
const btn = document.getElementById('scrollTop')
btn.addEventListener('click', () => {
    window.scrollTo({
        top:0,
        behavior: "smooth"
    });
});