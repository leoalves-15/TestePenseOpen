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