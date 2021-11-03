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