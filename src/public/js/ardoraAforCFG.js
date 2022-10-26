//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=8; attempts=0; attemptsMax=20;
var score=0; scoreMax=24; scoreInc=3; scoreDec=0;
var typeGame=0;
var tiTime=false;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=false;
var tiScore=true;
var startTime;
var colorBack="#FFFDFD"; colorButton="#009797"; colorText="#000000"; colorSele="#FF8000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=8; messageOk="Felicidades, lo has logrado "; messageTime=""; messageError="Uppss has cometido un erros, vuelve a intentarlo "; messageErrorG="Uppss has cometido un erros, vuelve a intentarlo "; messageAttempts="Has agotado tu numero de intentos "; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="SlVFR19haG9yY2Fkb19GXzI="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var words=["UEVSQSA=","U0FORElBIA==","RlJFU0Eg","UExBVEFOTyA=","Q09DTw==","UEnDkUEg","QUdVQUNBVEU=","Q0VSRVpBIA==","",""];imaW=["","","","","","","","","",""];queW=["Blanca por dentro verde por fuera ","Roja por dentro ","Yo rimo con esa color de cereza del suelo a la mesa te doy la sorpresa ","Amarillo por fuera, blanco por dentro","Tengo duro el corazon, plulpa blanca y liquido en mi interior ","Tiene escamas pero no es un pez, tiene corona pero no es un rey ","Agua pasa por mi casa, cate que no lo vi","La A, anda la B, besa la C, reza","",""];var wordsL=[4,6,5,7,4,4,8,6,"",""];var altW=["","","","","","","","","",""];
var auW=["","","","","","","","","",""];
var fillLetter="ABCDEFGHIJKLMNÑOPQRSTUVWXYZÁÉÍÓÚÜ "; wordsG=[];var wordsGL=[]; indexG=0; actMaxWidth=550; indexWord=0; totalWord=0;
var alterW=[];var imageW=[];questionW=[];audioW=[];profG=0; dirMedia="../img/media/"; textBNext="Siguiente palabra ";
