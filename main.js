menuListArray = ["Pizza Vegetariana","pizza Portuguesa","pizza de frango","pizza quatro queijos","calabresa","estravaganza"];

function getMenu(){
var htmldata="";
menuListArray.sort();
for(var i=0;i<menuListArray.length;i++){
    htmldata=htmldata+menuListArray[i]+'<br>'
}
document.getElementById("diplayMenu").innerHTML=htmldata;



}

function addItem(){
var htmldata;
var imgtags='<img id="im1"  src="image/pizzaImg.png"/>'
var item=document.getElementById("addItem").value;
menuListArray.sort();
htmldata="";
for(var i=0;i<menuListArray.length;i++){
    htmldata=htmldata+menuListArray[i]+'<br>'
}
document.getElementById("diplayMenu").innerHTML=htmldata;

}

function addTop(){
var item=document.getElementById(addItem).value;
menuListArray.push(item);
addItem();
}