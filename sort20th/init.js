//�O���[�o���ϐ��̒�`++++++++++++++++++++++++++++++++++++++++++++++++
var IsFinished = false;
var Members = new Array(); 
var dd = 0;

// �E�B���h�E�����[�h���ꂽ��Ă΂��֐�+++++++++++++++++++++++++++++
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
	str += "<div id=\"hikiwake\">��������<\/div>";
	str += "<\/div>";
	str += "<div id=\"rightCell\">";
	str += "&nbsp;";
	str += "<\/div>";
	str += "<\/div>";
	str += "<\/div>";
	str += "<div id=\"resultField\">";
	str += "<p>�D���ȕ��i�܂��͈��������j���N���b�N�őI�����Ă��������B<\/p>";
	str += "<p>�摜�̓I�t�B�V�����ʐ^����Ƃ��Ă��܂��B<\/p>";
	str += "<\/div>";
	str += "<div id=\"taisen\">";
	str += "<\/div>";

	document.getElementById("mainField").innerHTML = str;

	// �֐��̒ǉ�
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

	// ���X�g�̏�����
	for (var i=0; i<Names.length; i++) {
		Members[i] = new Person(i,0);
	}

	// �\�[�g�̏�����
	initSort();
}
