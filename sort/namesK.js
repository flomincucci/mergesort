//*********************************************************************
//
// �]�����郁���o�[�̖��O�̃��X�g
//
// ���̕�����ύX���Ă��������B���O�̒ǉ��E�폜���\�ł��B
// ���O�����p��(")�Ŋ���A�R���}(,)�ŋ�؂��ĉ������B
// �A���A���X�g�̍Ō�ɂ̓R���}�����Ă͂����܂���B
//
//********************************************************************
var Names = new Array(

"���v����",
"���c�ߗ���",
"�ьE�t��",
"�Γc���C��",
"�����D��",
"���c������",
"�쒆����",
"�q��^仈�",
"�H��鉹",
"���ꕖ",//10
"���R���",
"�X�˒m����",

"�a�c�ʉ�",

"��������",
"�|�����",
"���c����",

"���c����",
"���X��仉��q",

"�㚠���G��",

"�}������",//20
"�D�،�",
"�쑺���T",

"�{��R��",
"���V���q", 
"���؎їF��",
"�{�{����",
"�A��������",
"����ށX��",
"�i���ځX",

"��ꈤ��",//30

"�R�ؗ���",
"���֕�",

"�L���ʊC",
"�쑺�݂Ȕ�",
"�l�Y�ʔT",
"�a�c���q",
"���批",

"�R�ݗ��q",
"���Ѓ��T",
"�V�����",//40
"�J�{����",
"�ݖ{��߂�",
"��q���X",
"���쐐��",
"����c�ўx",
"�H�R����",

"�ꉪ����",
"���q�肩",
"���c����",
"�]���і�",//50

"���������",
"�O�c������",
"�R�����H",
"�������g",
"���쓍�X�P",

"���䈤��",
"��t����",

//"�x�]����",
//"���Ô���",

"����ӓ�",
"����Ռ�",
"���ʍ�q",//60
"�đ��P�ǁX",

"������",

"���䖃����",
"�y�����",
"���i����",
"�R�c�",
"���R�Č��P",

"�׉i�K��",
"�E�c���C",
"�o���Ǔ�",//70
"�������X",
"����������",

"���c�y��",
"������",
"�ΌI�t��",
"�͖�݂̂�",
"�H���R��",
"�R������"//78
);

// �Z���\�L�p�i������j�b�N�l�[���Ȃǁj
var F_Names = new Array(
"���v��", //���[�j���O���B
"���c",
"�ьE",
"�Γc",
"������",
"���c",
"�쒆",
"�q��",
"�H��",
"����",
"���R",
"�X��",

"�a�c��", //�A���W������
"����",
"�|��",
"���c",
"���c",
"���X��",
"�㚠��",
"�}��",
"�D��",
"�쑺",

"�{��", //Juice=Juice
"���V",
"����",
"�{�{",
"�A��",
"����",
"�i��",
"���",

"�R��", //�J���g���[�K�[���Y
"����",

"�L��",//���Ԃ�
"�쑺",
"�l�Y",
"�a�c��",
"���",

"�R��",//�΂�
"����",
"�V��",
"�J�{",
"�ݖ{",
"���q",
"�����",
"����c",
"�H�R",

"�ꉪ",
"���q",
"���c",
"�]��",

"����",
"�O�c",
"�R����",
"����",
"����",

"����",//�\��
"��t",

"���",//�n���v�����C��
"���삱",
"����",
"�đ�",

"����",

"����",
"�y��",
"���i",
"�R�c",//20
"���R",

"�׉i",
"�E�c",
"�o��",
"����",
"����",

"���c",
"������",
"�ΌI",
"�͖�",
"�H��",
"�R����"
);

// �O���[�v�̐l��
var G_Peo = new Array(
12,10,8,2,5,9,4,5,2,15,6
);

// �O���[�v�̐F
var G_Color = new Array(
"#E5457D","#FF85AD","#FF9900","#56BF00","#F72F1F","#787FDC","#0075C2","#3096D0","#3385D6","#33D6AD","#1CBDBA"
);


// ���l���O���[�v���ɕϊ�+++++++++++++++++++++++++++++++++++++++++
function toNameFace(n){
	var str = Names[n];
	var temp = "";

	//�當����ǉ�����ꍇ�͈ȉ��̃R�����g�A�E�g���O��
	//namMember�̃C���f�b�N�X�Ɩ������Ȃ��悤�ɒ���

	str += "<br>";
	switch(n) {
		//case -1 �̓T���v���Ȃ̂ō폜���邱��
		case 0: str+="���[�j���O���B'18[9��]9��ڃ��[�_�[<br>�n���v���T�u���[�_�[<br>(7��ڃT�u���[�_�[,�n���v���G�b�O[4��])";break;
		case 1: str+="���[�j���O���B'18[9��]8��ڃT�u���[�_�[";break;
		case 2: str+="���[�j���O���B'18[10��]7,8��ڃT�u���[�_�[";break;
		case 3: str+="���[�j���O���B'18[10��]";break;
		case 4: str+="���[�j���O���B'18[10��]";break;
		case 5: str+="���[�j���O���B'18[11��]<br>(�n���v�����C��[13��])";break;
		case 6: str+="���[�j���O���B'18[12��]";break;
		case 7: str+="���[�j���O���B'18[12��]<br>(�n���v�����C��[17��])";break;
		case 8: str+="���[�j���O���B'18[12��]<br>(�n���v�����C��[20��])";break;
		case 9: str+="���[�j���O���B'18[13��]<br>(�n���v�����C��[17��])";break;
		case 10: str+="���[�j���O���B'18[13��]<br>(�n���v�����C��[26��])";break;
		case 11: str+="���[�j���O���B'18[14��] �� �J���g���[�E�K�[���Y";break;
		case 12: str+="�A���W������ ���[�_�[,�n���v�����[�_�[<br>(�X�}�C���[�W���[�_�[,�n���v���G�b�O[1��])";break;
		case 13: str+="�A���W������<br>(�X�}�C���[�W[2��])";break;
		case 14: str+="�A���W������<br>(�X�}�C���[�W[2��],�n���v���G�b�O[4��])";break;
		case 15: str+="�A���W������<br>(�X�}�C���[�W[2��],�n���v���G�b�O[7��])";break;
		case 16: str+="�A���W������<br>(�X�}�C���[�W[3��],�n���v�����C��[15��])";break;
		case 17: str+="�A���W������<br>(�X�}�C���[�W[3��],�n���v�����C��[18��])";break;
		case 18: str+="�A���W������[2��]";break;
		case 19: str+="�A���W������[3��]<br>(�n���v�����C��[24��])";break;
		case 20: str+="�A���W������[4��] �� �J���g���[�E�K�[���Y[2��]<br>(�n���v�����C��[20��])";break;
		case 21: str+="�A���W������[4��]<br>(�n���v�����C��[26��])";break;
		case 22: str+="Juice=Juice ���[�_�[";break;
		case 23: str+="Juice=Juice �T�u���[�_�[<br>(�n���v�����C��[17��])";break;
		case 24: str+="Juice=Juice<br>(�n���v�����C��[8��])";break;
		case 25: str+="Juice=Juice �Z���^�[<br>(�n���v�����C��[5��])";break;
		case 26: str+="Juice=Juice<br>(�n���v�����C��[14��])";break;
		case 27: str+="Juice=Juice[2��] �� �J���g���[�E�K�[���Y[2��]<br>(�n���v�����C��[24��])";break;
		case 28: str+="Juice=Juice[2��]<br>(�n���v�����C��[20��])";break;
		case 29: str+="Juice=Juice[3��]<br>(�J���g���[�E�K�[���Y)";break;
		case 30: str+="�J���g���[�E�K�[���Y<br>(�n���v�����C��[20��])";break;
		case 31: str+="�J���g���[�E�K�[���Y";break;
		case 32: str+="���Ԃ��t�@�N�g���[ ���[�_�[<br>(�n���v�����C��[22��])";break;
		case 33: str+="���Ԃ��t�@�N�g���[<br>(�n���v�����C��[17��])";break;
		case 34: str+="���Ԃ��t�@�N�g���[<br>(�n���v�����C��[11��])";break;
		case 35: str+="���Ԃ��t�@�N�g���[<br>(�n���v�����C��[17��])";break;
		case 36: str+="���Ԃ��t�@�N�g���[<br>(�n���v�����C��[22��])";break;
		case 37: str+="�΂��t�@�N�g���[ ���[�_�[<br>(�n���v�����C��[16��])";break;
		case 38: str+="�΂��t�@�N�g���[ �T�u���[�_�[<br>(�n���v�����C��[22��])";break;
		case 39: str+="�΂��t�@�N�g���[<br>(�n���v�����C��[20��])";break;
		case 40: str+="�΂��t�@�N�g���[<br>(�n���v�����C��[22��])";break;
		case 41: str+="�΂��t�@�N�g���[<br>(�n���v�����C��[17��])";break;
		case 42: str+="�΂��t�@�N�g���[<br>(�n���v�����C��[22��])";break;
		case 43: str+="�΂��t�@�N�g���[[2��]<br>(�n���v�����C��[22��])";break;
		case 44: str+="�΂��t�@�N�g���[[2��]<br>(�n���v�����C��[24��])";break;
		case 45: str+="�΂��t�@�N�g���[[2��]<br>(�n���v�����C��[24��])";break;
		case 46: str+="[�V�O���[�v�P]���[�_�[<br>�n���v�����C��[17��])";break;
		case 47: str+="[�V�O���[�v�P]<br>(�n���v�����C��[27��])";break;
		case 48: str+="[�V�O���[�v�P]<br>(�n���v�����C��[26��])";break;
		case 49: str+="[�V�O���[�v�P]<br>(�n���v�����C��[27��])";break;
		case 50: str+="[�V�O���[�v�Q]<br>(�n���v�����C��[23��])";break;
		case 51: str+="[�V�O���[�v�Q]<br>(�n���v�����C��[24��])";break;
		case 52: str+="[�V�O���[�v�Q]<br>(�n���v�����C��[26��])";break;
		case 53: str+="[�V�O���[�v�Q]<br>(�n���v�����C��[27��])";break;
		case 54: str+="[�V�O���[�v�Q]<br>(�n���v�����C��[25��])";break;
		case 55: str+="�\��<br>(���[�j���O���B[8��])";break;
		case 56: str+="�\��<br>(���[�j���O���B[9��])";break;
		case 57: str+="�n���v�����C��[25��]";break;
		case 58: str+="�n���v�����C��[25��]";break;
		case 59: str+="�n���v�����C��[25��]";break;
		case 60: str+="�n���v�����C��[25��]";break;
		case 61: str+="�n���v�����C��[26��]";break;
		case 62: str+="�n���v�����C��[27��]";break;
		case 63: str+="�n���v�����C��[27��]";break;
		case 64: str+="�n���v�����C��[27��]";break;
		case 65: str+="�n���v�����C��[27��]";break;
		case 66: str+="�n���v�����C��[27��]";break;
		case 67: str+="�n���v�����C��[28��]";break;
		case 68: str+="�n���v�����C��[28��]";break;
		case 69: str+="�n���v�����C��[28��]";break;
		case 70: str+="�n���v�����C��[28��]";break;
		case 71: str+="�n���v�����C��[28��]";break;
		case 72: str+="�n���v�����C���k�C��[1��]";break;
		case 73: str+="�n���v�����C���k�C��[1��]";break;
		case 74: str+="�n���v�����C���k�C��[1��]";break;
		case 75: str+="�n���v�����C���k�C��[1��]";break;
		case 76: str+="�n���v�����C���k�C��[1��]";break;
		case 77: str+="�n���v�����C���k�C��[1��]";break;
		default: str+=""+n;
	}
	temp = "00"+String(n+1);
	temp = (temp.length==4) ? temp.substr(1,3) : temp.substr(0,3);
	str = "<img src=\"./"+temp+".jpg?20180926\" width=\"280\"><br>"+str;

	return str;
}

// ���l���O���[�v���ɕϊ����܂���+++++++++++++++++++++++++++++++++++++++++
function toNameFace0(n){
	var str = Names[n];

	//�當����ǉ�����ꍇ�͈ȉ��̃R�����g�A�E�g���O��
	//namMember�̃C���f�b�N�X�Ɩ������Ȃ��悤�ɒ���

//	str += "<br>��������<br>";
//	switch(n) {
		//case -1 �̓T���v���Ȃ̂ō폜���邱��
//		case -1: str+="���[�j���O���B[�T��]";break;
//		default: str+=""+n;
//	}

	return str;
}

// �����̂�+++++++++++++++++++++++++++++++++++++++++
function toNameFace4(n){
	var str = F_Names[n];

	//�當����ǉ�����ꍇ�͈ȉ��̃R�����g�A�E�g���O��
	//namMember�̃C���f�b�N�X�Ɩ������Ȃ��悤�ɒ���

//	str += "<br>��������<br>";
//	switch(n) {
		//case -1 �̓T���v���Ȃ̂ō폜���邱��
//		case -1: str+="���[�j���O���B[�T��]";break;
//		default: str+=""+n;
//	}

	return str;
}

// �摜�Ɩ��O+++++++++++++++++++++++++++++++++++++++++
function toNameFace1(n){
	var str = Names[n];
	var temp = "";

	temp = "00"+String(n+1);
	temp = (temp.length==4) ? temp.substr(1,3) : temp.substr(0,3);
	str = "<img src=\"./"+temp+".jpg?20180926\"><br>"+str;

	return str;
}

// �摜�Ɩ��O ���̂Q+++++++++++++++++++++++++++++++++++++++++
function toNameFace2(n,w){
	var str = Names[n];
	var temp = "";

	temp = "00"+String(n+1);
	temp = (temp.length==4) ? temp.substr(1,3) : temp.substr(0,3);
	str = "<img style=\"width:"+w+"px;\" src=\"./"+temp+".jpg?20180926\"><br>"+str;

	return str;
}

// �摜�Ɩ��O ���̂R+++++++++++++++++++++++++++++++++++++++++
function toNameFace3(n,w){
	var str = F_Names[n];
	var temp = "";

	temp = "00"+String(n+1);
	temp = (temp.length==4) ? temp.substr(1,3) : temp.substr(0,3);
	str = "<img style=\"width:"+w+"px;\" src=\"./"+temp+".jpg?20180926\"><br>"+str;

	return str;
}

// ID�Ɠ��_���֘A�t����I�u�W�F�N�g�̒�` ++++++++++++++++++++++++++++
function Person(id, score){
	this.id 	 = id;
	this.score = score;
	this.rank  = 0;
}