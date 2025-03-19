
function oblicz(){
          
var rodzajpaliwa1 = document.getElementById("rodzaj").value;
var wynik = document.getElementById("wynik");
var ilelitrow = document.getElementById("litr").value;
var tekst = "Koszt paliwa wynosi: ";   
          
if(rodzajpaliwa1 == 1){
              
tekst += ilelitrow * 4 ;
}
else if(rodzajpaliwa1 == 2){
              
tekst += ilelitrow * 3.5 ;
}
else{
              tekst += " 0 ";
          }
           
           wynik.innerHTML = tekst + "" + "zł";              
}
    
