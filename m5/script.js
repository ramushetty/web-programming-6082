var data = {
  quizz : [
    {
    "question" : "WP abrivation is Web programming",
    "answer" : "TRUE",
    "hint1" : "this is hint 1",
    "hint2" : "this is hint 2"
  },
  {
    "question" : "Computer understands low level language?",
    "answer" : "TRUE",
    "hint1" : "this is hint 1",
    "hint2" : "this is hint 2"
  },
  {
    "question" : "Computer: Common Operating Machine Purposely Used for Technological and Educational Research",
    "answer" : "TRUE",
    "hint1" : "this is hint 1",
    "hint2" : "this is hint 2"
  },
  {
    "question" : "Node js is runtime environment",
    "answer" : "TRUE",
    "hint1" : "this is hint 1",
    "hint2" : "this is hint 2"
  }
]
};

var dataobj = JSON.stringify(data);
var objdata = JSON.parse(dataobj);
var len = objdata.quizz.length;
var tr = "TRUE";
var fa  = "FALSE";

for(let i=0;i<len;i++) {
	var div = document.getElementById("main");
	div.insertAdjacentHTML('beforeend', '<p id="question">'+(i+1)+'. '+objdata.quizz[i].question+'</p>');
	div.insertAdjacentHTML('beforeend','<button class="btn btn-info" id = "hint'+i+'" onclick="hint('+i+')">HINT</button>')
	div.insertAdjacentHTML('beforeend','<div class="radio"> \
  <label><input type="radio" value="TRUE" onclick="che(this.value,'+i+')" class="radiobtn'+i+'" name="optradio'+i+'">TRUE</label> \
</div> \
<div class="radio"> \
  <label><input type="radio" value="FALSE" onclick="che(this.value,'+i+')" class="radiobtn'+i+'" name="optradio'+i+'">FALSE</label> \
</div><div id="lastElem'+i+'"></div>');
	div.insertAdjacentHTML('beforeend','<hr>')
}

function che(val,j) {
	var a = document.getElementById("lastElem"+j);
	if(objdata.quizz[j].answer == val) {
		a.innerHTML= '<div class="alert alert-success">\
  <strong>CORRECT!</strong> \
</div>';
	document.getElementsByClassName("radiobtn"+j)[0].disabled = true;
	document.getElementsByClassName("radiobtn"+j)[1].disabled = true;
	} else {
		a.innerHTML= '<div class="alert alert-danger">\
  <strong>WRONG!</strong> \
</div>';
	document.getElementsByClassName("radiobtn"+j)[0].disabled = true;
	document.getElementsByClassName("radiobtn"+j)[1].disabled = true;
	}
}
function hint(i) {
	var h = document.getElementById("hint"+i);
	h.insertAdjacentHTML('afterend', '<div id="hintdiv'+i+'" class="alert alert-warning alert-dismissible fade in">\
    <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>\
    <strong>HINT 1!</strong><p id="hintone">'+objdata.quizz[i].hint1+'</p>\
    <button class="btn btn-warning" onclick="hintn('+i+')">NEXT HINT</button>\
  </div>');
}
function hintn(i) {
	var h = document.getElementById("hintdiv"+i);
	h.innerHTML = '\
    <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>\
    <strong>HINT 2!</strong><p id="hinttwo">'+objdata.quizz[i].hint2+'</p>\
    <button class="btn btn-warning" onclick="hintp('+i+')">PREVIOUS HINT</button>\
  ';
}
function hintp(i) {
	var h = document.getElementById("hintdiv"+i);
	h.innerHTML = '\
    <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>\
    <strong>HINT 2!</strong><p id="hintone">'+objdata.quizz[i].hint1+'</p>\
    <button class="btn btn-warning" onclick="hintn('+i+')">NEXT HINT</button>\
  ';
}

function reloadPage(){
 	location.reload();
 }  

