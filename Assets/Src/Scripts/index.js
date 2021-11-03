let width = window.innerWidth;
if(width > 1023){
    width = 312;
} else {
    width = 397;
}
function next(id){
    document.getElementById(id).scrollLeft += width;
}
function back(id){
    document.getElementById(id).scrollLeft -= width;
}
window.onload = () => {
    console.log("teste")
} 
function handleOpenModal() {
    var open = document.getElementById("flag");
    open.addEventListener("click",
    ()=>{
        document.getElementById("modal").classList.add('modal-open');
        document.getElementById("modal").classList.remove('modal-closed');
    }
    , false);
}
function handleCloseModal(){
    var close = document.getElementById("closeButton");
    close.addEventListener("click",
    ()=>{
        document.getElementById("modal").classList.add('modal-closed');
        document.getElementById("modal").classList.remove('modal-open');
    }
    , false);
}
function listenerModal(){
    handleOpenModal();
    handleCloseModal();
}
  
document.addEventListener("DOMContentLoaded", listenerModal, false);