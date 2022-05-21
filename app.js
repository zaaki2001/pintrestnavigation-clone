const togler = document.getElementById('toggle');
const list = document.getElementById('list');

function togleNavbar(){
    list.classList.toggle('opened')
}
document.body.click(function(){
    list.classList.remove('opened')
})