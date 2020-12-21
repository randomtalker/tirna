var image = ["mark1.png"/*0*/,"mark2.png","mark3.png","mark4.png","mark5.png",
  "mark6.png","mark7.png","mark8.png"/*7*/];
var a0 = [0,0,0];
var a1 = [0,0,1];
var a2 = [0,1,0];
var a3 = [0,1,1];
var a4 = [1,0,0];
var a5 = [1,0,1];
var a6 = [1,1,0];
var a7 = [1,1,1];

var q_set = [a0,a1,a2,a3,a4,a5,a6,a7];

var ran_set = [];
var ans;
function rangen(){

  var crrt=0;
  while(crrt==0){
    var i;
    var ran_def = [0,1,2,3,4,5,6,7];
    var n = 0;

    while (n<4){
      i = Math.floor(Math.random()*100)%(8-n);
      ran_set[n] = ran_def[i];
      ran_def.splice(i,1);
      n++;

    }
    var sa;
    var sb;
    var sc;
    var da,db,dc;
    //ran_set = [4,5,6,7]
    sa = q_set[ran_set[0]][0]+q_set[ran_set[1]][0]+q_set[ran_set[2]][0]+q_set[ran_set[3]][0];
    sb = q_set[ran_set[0]][1]+q_set[ran_set[1]][1]+q_set[ran_set[2]][1]+q_set[ran_set[3]][1];
    sc = q_set[ran_set[0]][2]+q_set[ran_set[1]][2]+q_set[ran_set[2]][2]+q_set[ran_set[3]][2];
    da = sa % 2;
    db = sb % 2;
    dc = sc % 2;



    if(da+db+dc ==1){//유효한 문제일때
      if(sa == 3){//첫머리 0이 정답인 경우
        if (q_set[ran_set[0]][0] ==0){
          ans = ran_set[0];
        }
        else if (q_set[ran_set[1]][0] ==0) {
          ans = ran_set[1];
        }
        else if (q_set[ran_set[2]][0] ==0) {
          ans = ran_set[2];
        }
        else  {
          ans = ran_set[3];
        }
      }
      else if (sa == 1) {//첫머리 정답 1
        if (q_set[ran_set[0]][0] ==1){
          ans = ran_set[0];
        }
        else if (q_set[ran_set[1]][0] ==1) {
          ans = ran_set[1];
        }
        else if (q_set[ran_set[2]][0] ==1) {
          ans = ran_set[2];
        }
        else  {
          ans = ran_set[3];
        }
      }
      else if(sb == 3){//2머리 0이 정답인 경우
        if (q_set[ran_set[0]][1] ==0){
          ans = ran_set[0];
        }
        else if (q_set[ran_set[1]][1] ==0) {
          ans = ran_set[1];
        }
        else if (q_set[ran_set[2]][1] ==0) {
          ans = ran_set[2];
        }
        else  {
          ans = ran_set[3];
        }
      }
      else if (sb == 1) {//2머리 정답 1
        if (q_set[ran_set[0]][1] ==1){
          ans = ran_set[0];
        }
        else if (q_set[ran_set[1]][1] ==1) {
          ans = ran_set[1];
        }
        else if (q_set[ran_set[2]][1] ==1) {
          ans = ran_set[2];
        }
        else  {
          ans = ran_set[3];
        }
      }
      else if(sc == 3){//3머리 0이 정답인 경우
        if (q_set[ran_set[0]][2] ==0){
          ans = ran_set[0];
        }
        else if (q_set[ran_set[1]][2] ==0) {
          ans = ran_set[1];
        }
        else if (q_set[ran_set[2]][2] ==0) {
          ans = ran_set[2];
        }
        else  {
          ans = ran_set[3];
        }
      }
      else if (sc == 1) {//3머리 정답 1
        if (q_set[ran_set[0]][2] ==1){
          ans = ran_set[0];
        }
        else if (q_set[ran_set[1]][2] ==1) {
          ans = ran_set[1];
        }
        else if (q_set[ran_set[2]][2] ==1) {
          ans = ran_set[2];
        }
        else  {
          ans = ran_set[3];
        }
      }
      crrt = 1;

      return 0;
      console.log("ans:"+ans);


            }
    else{//답이 없을때
      crrt = 0;
      ran_set=[];

    }

  }

  }



window.onload=function(){
rangen();
sec1.src = image[ran_set[0]];
sec2.src = image[ran_set[1]];
sec3.src = image[ran_set[2]];
sec4.src = image[ran_set[3]];

initTimer();
}



var crtans=0;
function sel1(){
  if(ans==ran_set[0]){
    wrong.src = "crt.png";
    crtans = 1;
  }
  else{
    wrong.src = "wrong.png";
  }
  return;
}
function sel2(){
  if(ans==ran_set[1]){
    wrong.src = "crt.png";
    crtans = 1;
  }
  else{
    wrong.src = "wrong.png";
  }
  return;
}
function sel3(){
  if(ans==ran_set[2]){
    wrong.src = "crt.png";
    crtans = 1;
  }
  else{
    wrong.src = "wrong.png";
  }
  return;
}
function sel4(){
  if(ans==ran_set[3]){
    wrong.src = "crt.png";
    crtans = 1;
  }
  else{
    wrong.src = "wrong.png";
  }
  return;
}

function rst(){//재시작
  location.reload();
}




Lpad=function(str, len) {//시간 숫자 예쁘게
	str = str + "";
	while(str.length < len) {
		str = "0"+str;
	}
	return str;
}
var record;
var iSecond = "00" ;
var timerchecker = null;
initTimer=function() {
	rMinute = parseInt(iSecond / 60);
	rSecond = iSecond % 60;
	if(iSecond < 601) {
		timer.innerHTML = Lpad(rMinute, 2)+":"+Lpad(rSecond, 2);
		iSecond++;
		timerchecker = setTimeout("initTimer()", 11); // 1초 간격으로 체크

    if (crtans==1){
      record = parseInt(iSecond);

      clearTimeout(timerchecker);

      if (record<60){
        result1.innerHTML = "어케핸노 시발ㄹ려나";
      }
      else if (record<120) {
        result1.innerHTML = "개빠름";
      }


    }

	}
	else {
		clearTimeout(timerchecker);
    result1.innerHTML = "쐐기 가지마소 아재요";
		// 시간 종료!

	}
}
