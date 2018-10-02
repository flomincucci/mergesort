// 結果の表示+++++++++++++++++++++++++++++++++++++++++++++++++++++++++
function showResult() {
	var str = "";
	var nq = numQuestion-1;
	var col="";
	var s="";
	var Gcol = new Array();

	Gcol[0]=G_Peo[0];
	for(i=1; i<G_Peo.length; i++){
		Gcol[i]=Gcol[i-1]+G_Peo[i];
	}


	str += "<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><div style=\"text-align:center; margin-top:20px;\">";
	str += "優柔不断度："+Math.round((dd/nq)*10000)/100+"%";
	str += "<\/div><br>";
	str += "ソートの結果<br><br>";

	str += '<form><input type="button"  value="グループ分け" onclick="showResultG()"></form>';
	str += '<form><input type="button"  value="画像表示" onclick="showResultPT()"></form>';
	str += '<form><input type="button"  value="ツイート用" onclick="showResultTW()"></form><br><br>';

	str += "<table id=\"resultTable\">";
	str += "<tr><th>順位<\/th><th>名前<\/th><th>得点<\/th><\/tr>";

	for (i=0; i<Members.length; i++) {
		s='id="iro'+i+'"';
		str += "<tr>";
		str += "<td class=\"score\">"+Members[i].rank+"位<\/td>";
		str += "<td class=\"name\" "+s+">"+toNameFace0(Members[i].id)+"<\/td>";
		str += "<td class=\"score\">"+Members[i].score+"p<\/td><\/tr>";
	}
	str += "<\/table><br>";

	document.getElementById("resultField").innerHTML = str;

	for (i=0; i<Members.length; i++) {
		if(Members[i].id<Gcol[0]){ col=G_Color[0];}
		else if(Members[i].id<Gcol[1]){ col=G_Color[1]; }
		else if(Members[i].id<Gcol[2]){ col=G_Color[2]; }
		else if(Members[i].id<Gcol[3]){ col=G_Color[3]; }
		else if(Members[i].id<Gcol[4]){ col=G_Color[4]; }
		else if(Members[i].id<Gcol[5]){ col=G_Color[5]; }
		else if(Members[i].id<Gcol[6]){ col=G_Color[6]; }
		else if(Members[i].id<Gcol[7]){ col=G_Color[7]; }
		else if(Members[i].id<Gcol[8]){ col=G_Color[8]; }
		else if(Members[i].id<Gcol[9]){ col=G_Color[9]; }
		else if(Members[i].id<Gcol[10]){ col=G_Color[10]; }
		else if(Members[i].id<Gcol[11]){ col=G_Color[11]; }
		else if(Members[i].id<Gcol[12]){ col=G_Color[12]; }
		else if(Members[i].id<Gcol[13]){ col=G_Color[13]; }
		else if(Members[i].id<Gcol[14]){ col=G_Color[14]; }
		else if(Members[i].id<Gcol[15]){ col=G_Color[15]; }
		else if(Members[i].id<Gcol[16]){ col=G_Color[16]; }
		else if(Members[i].id<Gcol[17]){ col=G_Color[17]; }
		else if(Members[i].id<Gcol[18]){ col=G_Color[18]; }
		else if(Members[i].id<Gcol[19]){ col=G_Color[19]; }
		else if(Members[i].id<Gcol[20]){ col=G_Color[20]; }
		else if(Members[i].id<Gcol[21]){ col=G_Color[21]; }
		else if(Members[i].id<Gcol[22]){ col=G_Color[22]; }
		s="iro"+i;
//		document.getElementById(s).innerHTML = col;
		document.getElementById(s).style.backgroundColor = col;
	}

}

// ■グループ分け■

function showResultG() {
	var str = "";
	var Gcol = new Array();
	var Gtotal = new Array();
	var Heikin = new Array();
	
	Gcol[0]=G_Peo[0];
	for(i=1; i<G_Peo.length; i++){
		Gcol[i]=Gcol[i-1]+G_Peo[i];
	}

	str += "<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>グループ別の結果<br><br>";

	str += '<form><input type="button"  value="全体順位" onclick="showResult()"></form>';
	str += '<form><input type="button"  value="画像表示" onclick="showResultPT()"></form>';
	str += '<form><input type="button"  value="ツイート用" onclick="showResultTW()"></form><br><br>';

	for (j=1; j<=G_Peo.length; j++) {
		Gtotal[j] = 0;
		Heikin[j] = 0;
		str += "<table id=\"resultTable"+j+"\">";
		switch(j) {
		case 1: str += "<tr><th colspan=3>モーニング娘。<\/th><\/tr>";break;
		case 2: str += "<tr><th colspan=3>太陽とシスコムーン(T&Cボンバー)<\/th><\/tr>";break;
		case 3: str += "<tr><th colspan=3>ココナッツ娘。<\/th><\/tr>";break;
		case 4: str += "<tr><th colspan=3>カントリー娘。<\/th><\/tr>";break;
		case 5: str += "<tr><th colspan=3>メロン記念日<\/th><\/tr>";break;
		case 6: str += "<tr><th colspan=3>シェキドル<\/th><\/tr>";break;
		case 7: str += "<tr><th colspan=3>ソロ(1998-2002年)<\/th><\/tr>";break;
		case 8: str += "<tr><th colspan=3>Berryz工房<\/th><\/tr>";break;
		case 9: str += "<tr><th colspan=3>℃-ute<\/th><\/tr>";break;
		case 10: str += "<tr><th colspan=3>美勇伝<\/th><\/tr>";break;
		case 11: str += "<tr><th colspan=3>スマイレージ・アンジュルム<\/th><\/tr>";break;
		case 12: str += "<tr><th colspan=3>Juice=Juice<\/th><\/tr>";break;
		case 13: str += "<tr><th colspan=3>カントリー・ガールズ<\/th><\/tr>";break;
		case 14: str += "<tr><th colspan=3>こぶしファクトリー<\/th><\/tr>";break;
		case 15: str += "<tr><th colspan=3>つばきファクトリー<\/th><\/tr>";break;
		case 16: str += "<tr><th colspan=3>エッグ所属中ユニットデビュー組<\/th><\/tr>";break;
		case 17: str += "<tr><th colspan=3>チャオベッラチンクエッティ(Theポッシボー)<\/th><\/tr>";break;
		case 18: str += "<tr><th colspan=3>ハロプロ関西<\/th><\/tr>";break;
		case 19: str += "<tr><th colspan=3>ハロプロ台湾<\/th><\/tr>";break;
		case 20: str += "<tr><th colspan=3>アップアップガールズ(仮)<\/th><\/tr>";break;
		case 21: str += "<tr><th colspan=3>ハロプロエッグ(13期まで)<\/th><\/tr>";break;
		case 22: str += "<tr><th colspan=3>ハロプロ研修生(14期以降)<\/th><\/tr>";break;
		case 23: str += "<tr><th colspan=3>ハロプロ研修生北海道<\/th><\/tr>";break;
		}		
		str += "<tr><th>順位<\/th><th>名前<\/th><th>得点<\/th><\/tr>";

		for (i=0,z=1; i<Members.length; i++) {
		switch(j) {
			case 1: if(Members[i].id>=Gcol[0]){continue;}else{break;}
			case 2: if(Members[i].id>=Gcol[1] || Members[i].id<Gcol[0]){continue;}else{break;}
			case 3: if(Members[i].id>=Gcol[2] || Members[i].id<Gcol[1]){continue;}else{break;}
			case 4: if(Members[i].id>=Gcol[3] || Members[i].id<Gcol[2]){continue;}else{break;}
			case 5: if(Members[i].id>=Gcol[4] || Members[i].id<Gcol[3]){continue;}else{break;}
			case 6: if(Members[i].id>=Gcol[5] || Members[i].id<Gcol[4]){continue;}else{break;}
			case 7: if(Members[i].id>=Gcol[6] || Members[i].id<Gcol[5]){continue;}else{break;}
			case 8: if(Members[i].id>=Gcol[7] || Members[i].id<Gcol[6]){continue;}else{break;}
			case 9: if(Members[i].id>=Gcol[8] || Members[i].id<Gcol[7]){continue;}else{break;}
			case 10: if(Members[i].id>=Gcol[9] || Members[i].id<Gcol[8]){continue;}else{break;}
			case 11: if(Members[i].id>=Gcol[10] || Members[i].id<Gcol[9]){continue;}else{break;}
			case 12: if(Members[i].id>=Gcol[11] || Members[i].id<Gcol[10]){continue;}else{break;}
			case 13: if(Members[i].id>=Gcol[12] || Members[i].id<Gcol[11]){continue;}else{break;}
			case 14: if(Members[i].id>=Gcol[13] || Members[i].id<Gcol[12]){continue;}else{break;}
			case 15: if(Members[i].id>=Gcol[14] || Members[i].id<Gcol[13]){continue;}else{break;}
			case 16: if(Members[i].id>=Gcol[15] || Members[i].id<Gcol[14]){continue;}else{break;}
			case 17: if(Members[i].id>=Gcol[16] || Members[i].id<Gcol[15]){continue;}else{break;}
			case 18: if(Members[i].id>=Gcol[17] || Members[i].id<Gcol[16]){continue;}else{break;}
			case 19: if(Members[i].id>=Gcol[18] || Members[i].id<Gcol[17]){continue;}else{break;}
			case 20: if(Members[i].id>=Gcol[19] || Members[i].id<Gcol[18]){continue;}else{break;}
			case 21: if(Members[i].id>=Gcol[20] || Members[i].id<Gcol[19]){continue;}else{break;}
			case 22: if(Members[i].id>=Gcol[21] || Members[i].id<Gcol[20]){continue;}else{break;}
			case 22: if(Members[i].id<Gcol[21]){continue;}else{break;}
		}		
		s='id="iro'+i+'"';
		str += "<tr>";
		str += "<td class=\"score\">"+z+" ("+Members[i].rank+")<\/td>";
		str += "<td class=\"name\" "+s+">"+toNameFace0(Members[i].id)+"<\/td>";
		str += "<td class=\"score\">"+Members[i].score+"<\/td><\/tr>";
		z++;
		Gtotal[j] += Members[i].score;
		}

		Heikin[j] = Math.round((Gtotal[j]/G_Peo[j-1])*100)/100;
		str += "<td class=\"score\" colspan=2>平均得点<\/td><td class=\"score\">"+Heikin[j]+"<\/td><\/tr>";	
		str += "<\/table><br>";
	}

	document.getElementById("resultField").innerHTML = str;

	col="";
	s="";
	for (i=0; i<Members.length; i++) {
		if(Members[i].id<Gcol[0]){ col=G_Color[0];}
		else if(Members[i].id<Gcol[1]){ col=G_Color[1]; }
		else if(Members[i].id<Gcol[2]){ col=G_Color[2]; }
		else if(Members[i].id<Gcol[3]){ col=G_Color[3]; }
		else if(Members[i].id<Gcol[4]){ col=G_Color[4]; }
		else if(Members[i].id<Gcol[5]){ col=G_Color[5]; }
		else if(Members[i].id<Gcol[6]){ col=G_Color[6]; }
		else if(Members[i].id<Gcol[7]){ col=G_Color[7]; }
		else if(Members[i].id<Gcol[8]){ col=G_Color[8]; }
		else if(Members[i].id<Gcol[9]){ col=G_Color[9]; }
		else if(Members[i].id<Gcol[10]){ col=G_Color[10]; }
		else if(Members[i].id<Gcol[11]){ col=G_Color[11]; }
		else if(Members[i].id<Gcol[12]){ col=G_Color[12]; }
		else if(Members[i].id<Gcol[13]){ col=G_Color[13]; }
		else if(Members[i].id<Gcol[14]){ col=G_Color[14]; }
		else if(Members[i].id<Gcol[15]){ col=G_Color[15]; }
		else if(Members[i].id<Gcol[16]){ col=G_Color[16]; }
		else if(Members[i].id<Gcol[17]){ col=G_Color[17]; }
		else if(Members[i].id<Gcol[18]){ col=G_Color[18]; }
		else if(Members[i].id<Gcol[19]){ col=G_Color[19]; }
		else if(Members[i].id<Gcol[20]){ col=G_Color[20]; }
		else if(Members[i].id<Gcol[21]){ col=G_Color[21]; }
		else if(Members[i].id<Gcol[22]){ col=G_Color[22]; }
		s="iro"+i;
		document.getElementById(s).style.backgroundColor = col;
	}
}

// 画像表示

function showResultPT() {
	var str = "";

	str += "<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>画像表示<br><br>";

	str += '<form><input type="button"  value="全体順位" onclick="showResult()"></form>';
	str += '<form><input type="button"  value="グループ分け" onclick="showResultG()"></form>';
	str += '<form><input type="button"  value="ツイート用" onclick="showResultTW()"></form><br><br>';

	str += "<table id=\"resultTable\" style=\"border: thin solid black;\">";

	str += "<tr>";
	str += "<td Colspan=12 style=\"text-align: center;border: thin solid black;\">["+Members[0].rank+"]<br>"+toNameFace1(Members[0].id)+"<br>"+Members[0].score+"p<\/td>";
	str += "<\/tr>";

	str += "<tr>";
	for (i=1; i<4; i++) {
		str += "<td Colspan=4 style=\"text-align: center;border: thin solid black;\">["+Members[i].rank+"]<br>"+toNameFace2(Members[i].id,200)+"<br>"+Members[i].score+"p<\/td>";
	}
	str += "<\/tr>";

	str += "<tr>";
	for (i=4; i<8; i++) {
		str += "<td Colspan=3 style=\"text-align: center;border: thin solid black;\">["+Members[i].rank+"]<br>"+toNameFace2(Members[i].id,150)+"<br>"+Members[i].score+"p<\/td>";
	}
	str += "<\/tr>";

	str += "<tr>";
	for (i=8; i<14; i++) {
		str += "<td Colspan=2 style=\"text-align: center;border: thin solid black;\">["+Members[i].rank+"]<br>"+toNameFace2(Members[i].id,100)+"<br>"+Members[i].score+"p<\/td>";
	}
	str += "<\/tr>";

	str += "<tr>";
	for (i=14; i<20; i++) {
		str += "<td Colspan=2 style=\"text-align: center;border: thin solid black;\">["+Members[i].rank+"]<br>"+toNameFace2(Members[i].id,100)+"<br>"+Members[i].score+"p<\/td>";
	}
	str += "<\/tr>";

	str += "<tr>";
	for (j=0; j<((Members.length-20)/12); j++) {
	str += "<\/tr>";
	for (k=0; k<12; k++,i++) {
		if(Members.length==i) break;
		str += "<td style=\"text-align: center;border: thin solid black;font-size:x-small;\">["+Members[i].rank+"]<br>"+toNameFace3(Members[i].id,50)+"<br>"+Members[i].score+"p<\/td>";
	}
	str += "<\/tr>";
	}

	str += "<\/table><br>";

	document.getElementById("resultField").innerHTML = str;

}

// ツイート用

function showResultTW() {
	var str = "";
	var nq=numQuestion-1;

	str += "<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><div style=\"text-align:center; margin-top:20px;\">";

	str += "ソートの結果<br><br>";

	str += '<form><input type="button"  value="全体順位" onclick="showResult()"></form>';
	str += '<form><input type="button"  value="グループ分け" onclick="showResultG()"></form>';
	str += '<form><input type="button"  value="画像表示" onclick="showResultPT()"></form><br><br>';

	str += '<textarea name="kekka" rows="5" cols="60">';
	for (i=0; i<15; i++) {
		if(i == 0){ str += Members[i].rank+"位：";} else { if(Members[i].rank != Members[i-1].rank){ str += " "+Members[i].rank+"位：";} else { str += "、";}}
		str += toNameFace0(Members[i].id);
	}
	str += '</textarea><br><br>';

	str += "<\/div>";

	document.getElementById("resultField").innerHTML = str;

}


// ■■■　表示テスト　■■■

function showResultTEST() {
	var str = "";
	var col="";
	var s="";
	var Gcol = new Array();

	Gcol[0]=G_Peo[0];
	for(i=1; i<G_Peo.length; i++){
		Gcol[i]=Gcol[i-1]+G_Peo[i];
	}

	str += "画像表示<br><br>";

	str += "<table id=\"resultTable\" style=\"border: thin solid black;\">";

	s='id="iro'+0+'"';
	str += "<tr>";
	str += "<td class=\"name\" "+s+" Colspan=12 style=\"text-align: center;border: thin solid black;\">["+Members[0].rank+"]<br>"+toNameFace1(Members[0].id)+"<br>"+"<\/td>";
	str += "<\/tr>";

	str += "<tr>";
	for (i=1; i<4; i++) {
		s='id="iro'+i+'"';
		str += "<td class=\"name\" "+s+" Colspan=4 style=\"text-align: center;border: thin solid black;\">["+Members[i].rank+"]<br>"+toNameFace2(Members[i].id,200)+"<br>"+"<\/td>";
	}
	str += "<\/tr>";

	str += "<tr>";
	for (i=4; i<8; i++) {
		s='id="iro'+i+'"';
		str += "<td class=\"name\" "+s+" Colspan=3 style=\"text-align: center;border: thin solid black;\">["+Members[i].rank+"]<br>"+toNameFace2(Members[i].id,150)+"<br>"+"<\/td>";
	}
	str += "<\/tr>";

	for (j=0; j<((Members.length-8)/6); j++) {
	str += "<\/tr>";
	for (k=0; k<6; k++,i++) {
		if(Members.length==i) break;
		s='id="iro'+i+'"';
		str += "<td class=\"name\" "+s+" Colspan=2 style=\"text-align: center;border: thin solid black;\">["+Members[i].rank+"]<br>"+toNameFace2(Members[i].id,100)+"<br>"+"<\/td>";
	}
	str += "<\/tr>";
	}

	str += "<\/table><br>";

	str += '<form><input type="button"  value="全体順位" onclick="showResult()"></form>';
	str += '<form><input type="button"  value="グループ分け" onclick="showResultG()"></form>';
	str += '<form><input type="button"  value="ツイート用" onclick="showResultTW()"></form><br><br>';

	document.getElementById("resultField").innerHTML = str;

	col="";
	s="";
	for (i=0; i<Members.length; i++) {
		if(Members[i].id<Gcol[0]){ col=G_Color[0];}
		else if(Members[i].id<Gcol[1]){ col=G_Color[1]; }
		else if(Members[i].id<Gcol[2]){ col=G_Color[2]; }
		else if(Members[i].id<Gcol[3]){ col=G_Color[3]; }
		else if(Members[i].id<Gcol[4]){ col=G_Color[4]; }
		else if(Members[i].id<Gcol[5]){ col=G_Color[5]; }
		else if(Members[i].id<Gcol[6]){ col=G_Color[6]; }
		else if(Members[i].id<Gcol[7]){ col=G_Color[7]; }
		else if(Members[i].id<Gcol[8]){ col=G_Color[8]; }
		else if(Members[i].id<Gcol[9]){ col=G_Color[9]; }
		else if(Members[i].id<Gcol[10]){ col=G_Color[10]; }
		else if(Members[i].id<Gcol[11]){ col=G_Color[11]; }
		else if(Members[i].id<Gcol[12]){ col=G_Color[12]; }
		else if(Members[i].id<Gcol[13]){ col=G_Color[13]; }
		else if(Members[i].id<Gcol[14]){ col=G_Color[14]; }
		else if(Members[i].id<Gcol[15]){ col=G_Color[15]; }
		else if(Members[i].id<Gcol[16]){ col=G_Color[16]; }
		else if(Members[i].id<Gcol[17]){ col=G_Color[17]; }
		else if(Members[i].id<Gcol[18]){ col=G_Color[18]; }
		else if(Members[i].id<Gcol[19]){ col=G_Color[19]; }
		else if(Members[i].id<Gcol[20]){ col=G_Color[20]; }
		else if(Members[i].id<Gcol[21]){ col=G_Color[21]; }
		else if(Members[i].id<Gcol[22]){ col=G_Color[22]; }
		s="iro"+i;
		document.getElementById(s).style.backgroundColor = col;
	}

}
