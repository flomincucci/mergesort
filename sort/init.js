//グローバル変数の定義++++++++++++++++++++++++++++++++++++++++++++++++
var IsFinished = false;
var Members = new Array(); 
var dd = 0;

// ウィンドウがロードされたら呼ばれる関数+++++++++++++++++++++++++++++
window.onload = function(){
	var str = "";
	
	str += "<div id=\"mainTable\">";
	str += "<div id=\"battleNumber\">";
	str += "&nbsp;";
	str += "<\/div>";
	str += "<div id=\"matome\">";
	str += "<div id=\"leftCell\">";
	str += "&nbsp;";
	str += "<\/div>";
	str += "<div id=\"centerCell1\">";
	str += "<div id=\"hikiwake\">引き分け<\/div>";
	str += "<\/div>";
	str += "<div id=\"rightCell\">";
	str += "&nbsp;";
	str += "<\/div>";
	str += "<\/div>";
	str += "<\/div>";
	str += "<div id=\"resultField\">";
	str += "<p>好きな方（または引き分け）をクリックで選択してください。<\/p>";
	str += "<p>画像はオフィシャル写真を基準としています。<\/p>";
	str += "<\/div>";
	str += "<div id=\"taisen\">";
	str += "<\/div>";

	document.getElementById("mainField").innerHTML = str;

	// 関数の追加
	document.getElementById("centerCell1").onclick = function(){
		if (IsFinished==false){ dd++; sortList(0); }
	}
//	document.getElementById("centerCell2").onclick = function(){
//		if (IsFinished==false) sortList(0);
//	}
	document.getElementById("leftCell").onclick = function(){
		if (IsFinished==false) sortList(-1);
	}
	document.getElementById("rightCell").onclick = function(){
		if (IsFinished==false) sortList(1);
	}

	// リストの初期化
	for (var i=0; i<Names.length; i++) {
		Members[i] = new Person(i,0);
	}

	// ソートの初期化
	initSort();
}
