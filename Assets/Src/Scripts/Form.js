var flagCity = false;
var flagArea = false;
var flagType = false;
var button = document.getElementById('find');
function validationForm(){
    if(flagCity && flagType & flagArea){
        console.log("foi")
        button.style.backgroundColor = "#006B3F";
        button.style.cursor = 'pointer';
        button.disabled = false;
    }
}
function handleChangerCity(){
    var selectCity = document.getElementById('city');
    var valueCity = selectCity.options[selectCity.selectedIndex].value;
    if(valueCity != ""){
        flagCity = true;
        validationForm()
    }
}
function handleChangerArea(){
    var selectArea = document.getElementById('area');
    var valueArea = selectArea.options[selectArea.selectedIndex].value;
    if(valueArea != ""){
        flagArea = true;
        validationForm()
    }
}
function handleChangerType(){
    var selectType = document.getElementById('type');
    var valueType = selectType.options[selectType.selectedIndex].value;
    if(valueType != ""){
        flagType = true;
        validationForm()
    }
}