//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=180; timeIni=180; timeBon=20;
var successes=0; successesMax=16; attempts=0; attemptsMax=4;
var score=0; scoreMax=2; scoreInc=2; scoreDec=2
var typeGame=1;
var tiTime=true;
var tiTimeType=1;
var tiButtonTime=true;
var textButtonTime="INICIAR";
var tiSuccesses=true;
var tiAttempts=true;
var tiScore=true;
var startTime;
var colorBack="#FFFDFD"; colorButton="#3737FF"; colorText="#0000A0"; colorSele="#8080FF";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=1; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="";
var fEnun="'Lucida Sans Unicode', 'Lucida Grande', sans-serif";
var timeOnMessage=4; messageOk="¡FELICITACIONES!"; messageTime="TICK TACK "; messageError="¡ERROR!"; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var boardGame=[["0","0","0","0"],["0","0","0","0"],["0","0","0","0"],["0","0","0","0"]]; var imaSel=0; texSel=0;
var original="PUZLE2_resources/media/original.jpg";
var board=[["PUZLE2_resources/media/cGllY2UxXzE=.jpg","PUZLE2_resources/media/cGllY2UyXzE=.jpg","PUZLE2_resources/media/cGllY2UzXzE=.jpg","PUZLE2_resources/media/cGllY2U0XzE=.jpg"],["PUZLE2_resources/media/cGllY2UxXzI=.jpg","PUZLE2_resources/media/cGllY2UyXzI=.jpg","PUZLE2_resources/media/cGllY2UzXzI=.jpg","PUZLE2_resources/media/cGllY2U0XzI=.jpg"],["PUZLE2_resources/media/cGllY2UxXzM=.jpg","PUZLE2_resources/media/cGllY2UyXzM=.jpg","PUZLE2_resources/media/cGllY2UzXzM=.jpg","PUZLE2_resources/media/cGllY2U0XzM=.jpg"],["PUZLE2_resources/media/cGllY2UxXzQ=.jpg","PUZLE2_resources/media/cGllY2UyXzQ=.jpg","PUZLE2_resources/media/cGllY2UzXzQ=.jpg","PUZLE2_resources/media/cGllY2U0XzQ=.jpg"]]; var xAnswer=5; answer=[]; rows=6; cols=10; xKey=-1; yKey=-1; animationX=[]; animationY=[]; animationPosX=[]; animationPosY=[]; animationLetter=[];
var words=[];letters=[]; indexLetters=0; xSel=-1; ySel=-1; iLetter=-1; jLetter=-1;
var wordsGame="UFVaTEUy"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
