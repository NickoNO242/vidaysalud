//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=320; timeIni=320; timeBon=0;
var successes=0; successesMax=8; attempts=0; attemptsMax=10;
var score=0; scoreMax=24; scoreInc=3; scoreDec=2
var typeGame=0;
var tiTime=false;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=true;
var tiScore=true;
var startTime;
var colorBack="#FFFDFD"; colorButton="#009595"; colorText="#000000"; colorSele="#C0C0C0";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="Muy bien, buen trabajo "; messageTime=""; messageError="Upssss error"; messageErrorG="Upssss error"; messageAttempts="sigue intentando, lo puedes lograr "; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="anVlZ19yZWxhY2lvbl8y"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var cL=["<p>saludable</p>","<p>saludable</p>","<p>saludable</p>","<p>saludable</p>","<p>No saludable</p>","<p>No saludable</p>","<p>No saludable</p>","<p>No saludable</p>"];
var iL=["<div  align='center'><img alt='' src='jueg_relacion_2_resources/media/ensalada.png'></div>","<div  align='center'><img alt='' src='jueg_relacion_2_resources/media/Huevos.png'></div>","<div  align='center'><img alt='' src='jueg_relacion_2_resources/media/vegetales_2.png'></div>","<div  align='center'><img alt='' src='jueg_relacion_2_resources/media/Agua.jpg'></div>","<div  align='center'><img alt='' src='jueg_relacion_2_resources/media/papas_fritas.jpg'></div>","<div  align='center'><img alt='' src='jueg_relacion_2_resources/media/hamburguesas.jpg'></div>","<div  align='center'><img alt='' src='jueg_relacion_2_resources/media/gaseosa.jpg'></div>","<div  align='center'><img alt='' src='jueg_relacion_2_resources/media/dulces.jpg'></div>"];
var order=["","","","","","","",""]; orderR=["","","","","","","",""];indexR=0; indexL=0;
var cR=["<p>Hamburguesa</p>","<p>Gaseosa</p>","<p>Ensalada</p>","<p>Dulces</p>","<p>Huevos</p>","<p>vegetales</p>","<p>Agua</p>","<p>Papas fritas</p>"]; ansRL=["Mg==","NA==","NQ==","Ng==","Nw==","MA==","MQ==","Mw=="];
var iR=["","","","","","","",""];
var auR=[6,7,1,8,2,3,4,5];
