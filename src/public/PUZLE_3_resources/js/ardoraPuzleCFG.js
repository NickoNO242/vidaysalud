//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=180; timeIni=180; timeBon=20;
var successes=0; successesMax=16; attempts=0; attemptsMax=4;
var score=0; scoreMax=1; scoreInc=1; scoreDec=1
var typeGame=1;
var tiTime=true;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="INICIAR";
var tiSuccesses=true;
var tiAttempts=true;
var tiScore=true;
var startTime;
var colorBack="#FFFDFD"; colorButton="#A6A6FF"; colorText="#000080"; colorSele="#8080FF";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="";
var fEnun="'Lucida Sans Unicode', 'Lucida Grande', sans-serif";
var timeOnMessage=4; messageOk="¡FELICITACIONES!"; messageTime="TICK TACK "; messageError="¡ERROR!"; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var boardGame=[["0","0","0","0"],["0","0","0","0"],["0","0","0","0"],["0","0","0","0"]]; var imaSel=0; texSel=0;
var original="PUZLE_3_resources/media/original.jpg";
var board=[["PUZLE_3_resources/media/cGllY2UxXzE=.jpg","PUZLE_3_resources/media/cGllY2UyXzE=.jpg","PUZLE_3_resources/media/cGllY2UzXzE=.jpg","PUZLE_3_resources/media/cGllY2U0XzE=.jpg"],["PUZLE_3_resources/media/cGllY2UxXzI=.jpg","PUZLE_3_resources/media/cGllY2UyXzI=.jpg","PUZLE_3_resources/media/cGllY2UzXzI=.jpg","PUZLE_3_resources/media/cGllY2U0XzI=.jpg"],["PUZLE_3_resources/media/cGllY2UxXzM=.jpg","PUZLE_3_resources/media/cGllY2UyXzM=.jpg","PUZLE_3_resources/media/cGllY2UzXzM=.jpg","PUZLE_3_resources/media/cGllY2U0XzM=.jpg"],["PUZLE_3_resources/media/cGllY2UxXzQ=.jpg","PUZLE_3_resources/media/cGllY2UyXzQ=.jpg","PUZLE_3_resources/media/cGllY2UzXzQ=.jpg","PUZLE_3_resources/media/cGllY2U0XzQ=.jpg"]]; var xAnswer=5; answer=[]; rows=6; cols=10; xKey=-1; yKey=-1; animationX=[]; animationY=[]; animationPosX=[]; animationPosY=[]; animationLetter=[];
var words=[];letters=[]; indexLetters=0; xSel=-1; ySel=-1; iLetter=-1; jLetter=-1;
var wordsGame="UFVaTEVfMw=="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
