// ���ʂ̕\��+++++++++++++++++++++++++++++++++++++++++++++++++++++++++
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
	str += "�D�_�s�f�x�F"+Math.round((dd/nq)*10000)/100+"%";
	str += "<\/div><br>";
	str += "�\�[�g�̌���<br><br>";

	str += '<form><input type="button"  value="�O���[�v����" onclick="showResultG()"></form>';
	str += '<form><input type="button"  value="�摜�\��" onclick="showResultPT()"></form>';
	str += '<form><input type="button"  value="�c�C�[�g�p" onclick="showResultTW()"></form><br><br>';

	str += "<table id=\"resultTable\">";
	str += "<tr><th>����<\/th><th>���O<\/th><th>���_<\/th><\/tr>";

	for (i=0; i<Members.length; i++) {
		s='id="iro'+i+'"';
		str += "<tr>";
		str += "<td class=\"score\">"+Members[i].rank+"��<\/td>";
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
		s="iro"+i;
//		document.getElementById(s).innerHTML = col;
		document.getElementById(s).style.backgroundColor = col;
	}

}

// ���O���[�v������

function showResultG() {
	var str = "";
	var Gcol = new Array();
	var Gtotal = new Array();
	var Heikin = new Array();
	
	Gcol[0]=G_Peo[0];
	for(i=1; i<G_Peo.length; i++){
		Gcol[i]=Gcol[i-1]+G_Peo[i];
	}

	str += "<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>�O���[�v�ʂ̌���<br><br>";

	str += '<form><input type="button"  value="�S�̏���" onclick="showResult()"></form>';
	str += '<form><input type="button"  value="�摜�\��" onclick="showResultPT()"></form>';
	str += '<form><input type="button"  value="�c�C�[�g�p" onclick="showResultTW()"></form><br><br>';

	for (j=1; j<=G_Peo.length; j++) {
		Gtotal[j] = 0;
		Heikin[j] = 0;
		str += "<table id=\"resultTable"+j+"\">";
		switch(j) {
		case 1: str += "<tr><th colspan=3>���[�j���O���B'18<\/th><\/tr>";break;
		case 2: str += "<tr><th colspan=3>�A���W������<\/th><\/tr>";break;
		case 3: str += "<tr><th colspan=3>Juice=Juice<\/th><\/tr>";break;
		case 4: str += "<tr><th colspan=3>�J���g���[�E�K�[���Y<\/th><\/tr>";break;
		case 5: str += "<tr><th colspan=3>���Ԃ��t�@�N�g���[<\/th><\/tr>";break;
		case 6: str += "<tr><th colspan=3>�΂��t�@�N�g���[<\/th><\/tr>";break;
		case 7: str += "<tr><th colspan=3>�V�O���[�v�P<\/th><\/tr>";break;
		case 8: str += "<tr><th colspan=3>�V�O���[�v�Q<\/th><\/tr>";break;
		case 9: str += "<tr><th colspan=3>�\��<\/th><\/tr>";break;
		case 10: str += "<tr><th colspan=3>�n���v�����C��<\/th><\/tr>";break;
		case 11: str += "<tr><th colspan=3>�n���v�����C���k�C��<\/th><\/tr>";break;
		}		
		str += "<tr><th>����<\/th><th>���O<\/th><th>���_<\/th><\/tr>";

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
			case 11: if(Members[i].id<Gcol[9]){continue;}else{break;}
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
		str += "<td class=\"score\" colspan=2>���ϓ��_<\/td><td class=\"score\">"+Heikin[j]+"<\/td><\/tr>";	
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
		s="iro"+i;
		document.getElementById(s).style.backgroundColor = col;
	}
}

// �摜�\��

function showResultPT() {
	var str = "";

	str += "<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>�摜�\��<br><br>";

	str += '<form><input type="button"  value="�S�̏���" onclick="showResult()"></form>';
	str += '<form><input type="button"  value="�O���[�v����" onclick="showResultG()"></form>';
	str += '<form><input type="button"  value="�c�C�[�g�p" onclick="showResultTW()"></form><br><br>';

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

// �c�C�[�g�p

function showResultTW() {
	var str = "";
	var nq=numQuestion-1;

	str += "<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><div style=\"text-align:center; margin-top:20px;\">";

	str += "�\�[�g�̌���<br><br>";

	str += '<form><input type="button"  value="�S�̏���" onclick="showResult()"></form>';
	str += '<form><input type="button"  value="�O���[�v����" onclick="showResultG()"></form>';
	str += '<form><input type="button"  value="�摜�\��" onclick="showResultPT()"></form><br><br>';

	str += '<textarea name="kekka" rows="5" cols="60">';
	for (i=0; i<15; i++) {
		if(i == 0){ str += Members[i].rank+"�ʁF";} else { if(Members[i].rank != Members[i-1].rank){ str += " "+Members[i].rank+"�ʁF";} else { str += "�A";}}
		str += toNameFace0(Members[i].id);
	}
	str += '</textarea><br><br>';

	str += "<\/div>";

	document.getElementById("resultField").innerHTML = str;

}


// �������@�\���e�X�g�@������

function showResultTEST() {
	var str = "";
	var col="";
	var s="";
	var Gcol = new Array();

	Gcol[0]=G_Peo[0];
	for(i=1; i<G_Peo.length; i++){
		Gcol[i]=Gcol[i-1]+G_Peo[i];
	}

	str += "�摜�\��<br><br>";

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

	str += '<form><input type="button"  value="�S�̏���" onclick="showResult()"></form>';
	str += '<form><input type="button"  value="�O���[�v����" onclick="showResultG()"></form>';
	str += '<form><input type="button"  value="�c�C�[�g�p" onclick="showResultTW()"></form><br><br>';

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
		s="iro"+i;
		document.getElementById(s).style.backgroundColor = col;
	}

}
