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

"���V�T�q",
"�΍���",
"�ѓc�\�D",
"���{�Ȃ�",
"���c������",
"�ۓc�\",
"����^��",
"�s��і덁",
"�㓡�^��",
"�ΐ엜��",//10
"�g�V�ЂƂ�",
"�Ҋ��",
"���숟��",
"������",
"���삠����",
"���얃��",
"�V�_����",
"���{���M",
"�T��G��",
"���d�����",//20
"�c���ꂢ��",
"�v�Z���t",
"���䈤��",
"�W�����W����",
"��������",
"���v����",
"���c�ߗ���",
"��t����",
"��؍���",
"�ьE�t��",//30
"�Γc���C��",
"�����D��",
"�H���y",
"���c������",
"���`�t��",
"�쒆����",
"�q��^仈�",
"�H��鉹",
"���ꕖ",
"���R���",//40
"�X�˒m����",

"�M�c����",
"��t�M�q",
"RURU(�{������)",
"�������a",

"�A���J",
"�`�F���V�[",
"�G�C�v����",
"�_�j�G��",
"�~�J",//50
"���t�A",

"���ш�",
"�����q��",
"����(�˓c�鉹)",
"������(�ؑ�����)",
"���c�܂�",
"�݂���(�֓����C)",

"�ē���",
"���c�߂���",
"��J��b",//60
"�ēc�����",

"�k��A�~(�̖т����)",
"��؈ߐ�(EVEKI)",
"���i�^��(�z)",
"�r��ыI",

"���Ƃ݂���",
"�O�����(�J���~�R)",
"�O�c�L�I",
"���Y����",
"�Έ䃊�J(�Έ䗢��)",//70

"�������I",
"�k�i���q",
"���i��ޔ�",
"�{��䝖�",
"�ďĉ�",
"�Α����g",
"�F��F����",
"���J�����q",

"�~�c���肩",
"�����",//80
"���㈤",
"�������M",
"��؈���",
"����琹",
"������",
"�L���x��(�x��)",

"�O�D�G����",
"���c�B",

"�a�c�ʉ�",
"�O�c�J��",//90
"���c�ԉ�",
"����ыG",

"��������",
"�����ꕇ�R��",
"�|�����",
"���c����",
"�c�����",

"���c����",
"����䝕�",
"���X��仉��q",//100
"�㚠���G��",
"�}������",
"�D�،�",
"�쑺���T",

"�{��R��",
"���V���q", 
"���؎їF��",
"�{�{����",
"�A��������",
"��ˈ���",//110
"����ށX��",
"�i���ځX",
"��ꈤ��",

"�R�ؗ���",
"���֕�",
"�������S",

"���䗜��",
"�L���ʊC",
"�쑺�݂Ȕ�",
"������",//120
"�l�Y�ʔT",
"�c���Ď�",
"�a�c���q",
"���批",

"�R�ݗ��q",
"���Ѓ��T",
"�V�����",
"�J�{����",
"�ݖ{��߂�",
"��q���X",//130
"���쐐��",
"����c�ўx",
"�H�R����",

"�g��F",
"�k�����퍁",

"���i���L",
"�\�o�L��",
"�^��b����",
"��΂݂Ȃ�",
"�V�c�R��",//140
"��������(�ނƂ�����)",
"���ۖ���",
"�O�c�ʗ�",
"�c�ӓލؔ�",

"���{����",
"���ˍ��ގ�",
"�H�R��肩",
"�吣��",
"���c���r���Ďq",
"�㓡�[�M",//150

"��������",
"���R�؁X(�R�c�؁X)",
"�Ⓢ��ޖ�",
"�{����",

"�V�F���V�F��",
"�A���`�[",
"�y�C�y�C",
"���E�R",
"���C���C",
"�O�[�`����",//160

"�t�����V�X",
"���q"
);

// �Z���\�L�p�i������j�b�N�l�[���Ȃǁj
var F_Names = new Array(
"���V",
"�΍�",
"�ѓc",
"���{",
"���c��",
"�ۓc",
"���",
"�s��",
"�㓡��",
"�ΐ�",//10
"�g�V",
"��",
"����",
"����",
"����",
"����",
"�V�_",
"���{",
"�T��",
"���d",//20
"�c����",
"�v�Z",
"����",
"�W�����W����",
"��������",
"���v��", //���[�j���O���B
"���c",
"��t",
"��؂�",
"�ьE",//30
"�Γc",
"������",
"�H����",
"���c",
"���`",
"�쒆",
"�q��",
"�H��",
"����",
"���R",//40
"�X��",

"�M�c",
"��t",
"RURU",
"����",

"�A���J",
"�`�F���V�[",
"�G�C�v����",
"�_�j�G��",
"�~�J",//50
"���t�A",

"����",
"����",
"����",
"������",
"���c",
"�݂���",

"�ē�",
"���c",
"��J",//60
"�ēc",

"�k��",
"���",
"���i",
"�r��",

"����",
"�O��",
"�O�c�䂫",
"���Y",
"�Έ�",//70

"����",
"�k�i",
"���i��",
"�{��",
"�ď�",
"�Α�",
"�F��",
"���J",

"�~�c",
"�",//80
"����",
"����",
"��؂�",
"����",
"����",
"�L��",

"�O�D",
"���c��",

"�a�c��", //�A���W������
"�O�c�䂤",//90
"���c��",
"����",
"����",
"������",
"�|��",
"���c",
"�c��",
"���c",
"����",
"���X�؂�",
"�㚠��",
"�}��",
"�D��",
"�쑺",

"�{��", //Juice=Juice
"���V",
"����",
"�{�{",
"�A��",
"���",//110
"����",
"�i��",
"���",

"�R��", //�J���g���[�K�[���Y
"����",
"����",

"����",
"�L��",//���Ԃ�
"�쑺",
"����",//120
"�l�Y",
"�c��",
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

"�g��",//MilkyWay
"�k��",

"���i",//���y�K�b�^�X
"�\�o",
"�^��",
"���",
"�V�c",//140
"����",
"����",//���ゲ�L�����G�b�O�I
"�O�c��",
"�c��",

"���{",//�|�b�V
"����",
"�H�R",
"�吣",
"���c��",
"�㓡��",

"����",
"���R",
"�Ⓢ",
"�{��",

"�V�F���V�F��",
"�A���`�[",
"�y�C�y�C",
"���E�R",
"���C���C",
"�O�[�`����",//160

"�t�����V�X",
"���q"//162
);

// �O���[�v�̐l��
var G_Peo = new Array(
41,4,6,6,4,4,5,8,8,2,
16,9,3,8,9,11,6,4,8
);

// �O���[�v�̐F
var G_Color = new Array(
"#E5457D","#FF85AD","#FF9900","#56BF00","#F72F1F",
"#787FDC","#3385D6","#33D6AD","#1CBDBA","#5895CC",
"#FE7D8F","#F8F8F8","#EB5F89","#ffff00","#F0F0DF",
"#5FB7E9","#F5759D","#70C9EE","#53A5F6"
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
		case 0: str+="���[�j���O���B[1��]";break;
		case 1: str+="���[�j���O���B[1��]";break;
		case 2: str+="���[�j���O���B[1��]";break;
		case 3: str+="���[�j���O���B[1��]";break;
		case 4: str+="���[�j���O���B[1��]";break;
		case 5: str+="���[�j���O���B[2��]";break;
		case 6: str+="���[�j���O���B[2��]";break;
		case 7: str+="���[�j���O���B[2��]";break;
		case 8: str+="���[�j���O���B[3��]";break;
		case 9: str+="���[�j���O���B[4��]";break;
		case 10: str+="���[�j���O���B[4��]";break;
		case 11: str+="���[�j���O���B[4��]";break;
		case 12: str+="���[�j���O���B[4��]";break;
		case 13: str+="���[�j���O���B[5��]";break;
		case 14: str+="���[�j���O���B[5��]";break;
		case 15: str+="���[�j���O���B[5��]";break;
		case 16: str+="���[�j���O���B[5��]";break;
		case 17: str+="���[�j���O���B[6��]";break;
		case 18: str+="���[�j���O���B[6��]";break;
		case 19: str+="���[�j���O���B[6��]";break;
		case 20: str+="���[�j���O���B[6��]";break;
		case 21: str+="���[�j���O���B[7��]";break;
		case 22: str+="���[�j���O���B[8��]";break;
		case 23: str+="���[�j���O���B[8��](���w��)";break;
		case 24: str+="���[�j���O���B[8��](���w��)";break;
		case 25: str+="���[�j���O���B[9��]";break;
		case 26: str+="���[�j���O���B[9��]";break;
		case 27: str+="���[�j���O���B[9��]";break;
		case 28: str+="���[�j���O���B[9��]";break;
		case 29: str+="���[�j���O���B[10��]";break;
		case 30: str+="���[�j���O���B[10��]";break;
		case 31: str+="���[�j���O���B[10��]";break;
		case 32: str+="���[�j���O���B[10��]";break;
		case 33: str+="���[�j���O���B[11��]";break;
		case 34: str+="���[�j���O���B[12��]";break;
		case 35: str+="���[�j���O���B[12��]";break;
		case 36: str+="���[�j���O���B[12��]";break;
		case 37: str+="���[�j���O���B[12��]";break;
		case 38: str+="���[�j���O���B[13��]";break;
		case 39: str+="���[�j���O���B[13��]";break;
		case 40: str+="���[�j���O���B[14��] �� �J���g���[�E�K�[���Y";break;
		case 41: str+="���z�ƃV�X�R���[��(T&C�{���o�[)";break;
		case 42: str+="���z�ƃV�X�R���[��(T&C�{���o�[)";break;
		case 43: str+="���z�ƃV�X�R���[��(T&C�{���o�[)";break;
		case 44: str+="���z�ƃV�X�R���[��(T&C�{���o�[)";break;
		case 45: str+="�R�R�i�b�c���B";break;
		case 46: str+="�R�R�i�b�c���B";break;
		case 47: str+="�R�R�i�b�c���B";break;
		case 48: str+="�R�R�i�b�c���B";break;
		case 49: str+="�R�R�i�b�c���B";break;
		case 50: str+="�R�R�i�b�c���B";break;
		case 51: str+="�J���g���[���B";break;
		case 52: str+="�J���g���[���B";break;
		case 53: str+="�J���g���[���B";break;
		case 54: str+="�J���g���[���B";break;
		case 55: str+="�J���g���[���B";break;
		case 56: str+="�J���g���[���B";break;
		case 57: str+="�������L�O��";break;
		case 58: str+="�������L�O��";break;
		case 59: str+="�������L�O��";break;
		case 60: str+="�������L�O��";break;
		case 61: str+="�V�F�L�h��";break;
		case 62: str+="�V�F�L�h��";break;
		case 63: str+="�V�F�L�h��";break;
		case 64: str+="�V�F�L�h��";break;
		case 65: str+="�\��";break;
		case 66: str+="�\��";break;
		case 67: str+="�\��";break;
		case 68: str+="�\��";break;
		case 69: str+="�\��";break;
		case 70: str+="Berryz�H�[";break;
		case 71: str+="Berryz�H�[";break;
		case 72: str+="Berryz�H�[";break;
		case 73: str+="Berryz�H�[";break;
		case 74: str+="Berryz�H�[";break;
		case 75: str+="Berryz�H�[";break;
		case 76: str+="Berryz�H�[";break;
		case 77: str+="Berryz�H�[";break;
		case 78: str+="��-ute";break;
		case 79: str+="��-ute";break;
		case 80: str+="��-ute";break;
		case 81: str+="��-ute";break;
		case 82: str+="��-ute";break;
		case 83: str+="��-ute";break;
		case 84: str+="��-ute";break;
		case 85: str+="��-ute";break;
		case 86: str+="���E�`";break;
		case 87: str+="���E�`";break;
		case 88: str+="�X�}�C���[�W�E�A���W������";break;
		case 89: str+="�X�}�C���[�W";break;
		case 90: str+="�X�}�C���[�W�E�A���W������";break;
		case 91: str+="�X�}�C���[�W";break;
		case 92: str+="�X�}�C���[�W�E�A���W������";break;
		case 93: str+="�X�}�C���[�W�T�u�����o�[";break;
		case 94: str+="�X�}�C���[�W�E�A���W������";break;
		case 95: str+="�X�}�C���[�W�E�A���W������";break;
		case 96: str+="�X�}�C���[�W�E�A���W������";break;
		case 97: str+="�X�}�C���[�W�E�A���W������";break;
		case 98: str+="�X�}�C���[�W�E�A���W������";break;
		case 99: str+="�X�}�C���[�W�E�A���W������";break;
		case 100: str+="�A���W������";break;
		case 101: str+="�A���W������";break;
		case 102: str+="�A���W������ �� �J���g���[�E�K�[���Y";break;
		case 103: str+="�A���W������";break;
		case 104: str+="Juice=Juice";break;
		case 105: str+="Juice=Juice";break;
		case 106: str+="Juice=Juice";break;
		case 107: str+="Juice=Juice";break;
		case 108: str+="Juice=Juice";break;
		case 109: str+="Juice=Juice";break;
		case 110: str+="Juice=Juice �� �J���g���[�E�K�[���Y";break;
		case 111: str+="Juice=Juice";break;
		case 112: str+="Juice=Juice(���J���g���[�E�K�[���Y)";break;
		case 113: str+="�J���g���[�E�K�[���Y";break;
		case 114: str+="�J���g���[�E�K�[���Y";break;
		case 115: str+="�J���g���[�E�K�[���Y";break;
		case 116: str+="���Ԃ��t�@�N�g���[";break;
		case 117: str+="���Ԃ��t�@�N�g���[";break;
		case 118: str+="���Ԃ��t�@�N�g���[";break;
		case 119: str+="���Ԃ��t�@�N�g���[";break;
		case 120: str+="���Ԃ��t�@�N�g���[";break;
		case 121: str+="���Ԃ��t�@�N�g���[";break;
		case 122: str+="���Ԃ��t�@�N�g���[";break;
		case 123: str+="���Ԃ��t�@�N�g���[";break;
		case 124: str+="�΂��t�@�N�g���[";break;
		case 125: str+="�΂��t�@�N�g���[";break;
		case 126: str+="�΂��t�@�N�g���[";break;
		case 127: str+="�΂��t�@�N�g���[";break;
		case 128: str+="�΂��t�@�N�g���[";break;
		case 129: str+="�΂��t�@�N�g���[";break;
		case 130: str+="�΂��t�@�N�g���[";break;
		case 131: str+="�΂��t�@�N�g���[";break;
		case 132: str+="�΂��t�@�N�g���[";break;
		case 133: str+="MilkyWay";break;
		case 134: str+="MilkyWay";break;
		case 135: str+="���y�K�b�^�X";break;
		case 136: str+="���y�K�b�^�X";break;
		case 137: str+="���y�K�b�^�X";break;
		case 138: str+="���y�K�b�^�X";break;
		case 139: str+="���y�K�b�^�X";break;
		case 140: str+="���y�K�b�^�X";break;
		case 141: str+="���ゲ�L�����G�b�O!";break;
		case 142: str+="���ゲ�L�����G�b�O!";break;
		case 143: str+="���ゲ�L�����G�b�O!";break;
		case 144: str+="�`���I�x�b���`���N�G�b�e�B";break;
		case 145: str+="�`���I�x�b���`���N�G�b�e�B";break;
		case 146: str+="�`���I�x�b���`���N�G�b�e�B";break;
		case 147: str+="THE �|�b�V�{�[";break;
		case 148: str+="�`���I�x�b���`���N�G�b�e�B";break;
		case 149: str+="�`���I�x�b���`���N�G�b�e�B";break;
		case 150: str+="SI��NA(�n���v���֐�)";break;
		case 151: str+="SI��NA(�n���v���֐�)";break;
		case 152: str+="SI��NA(�n���v���֐�)";break;
		case 153: str+="SI��NA(�n���v���֐�)";break;
		case 154: str+="�A�C�X�N���[���B(�n���v����p)";break;
		case 155: str+="�A�C�X�N���[���B(�n���v����p)";break;
		case 156: str+="�A�C�X�N���[���B(�n���v����p)";break;
		case 157: str+="�A�C�X�N���[���B(�n���v����p)";break;
		case 158: str+="�A�C�X�N���[���B(�n���v����p)";break;
		case 159: str+="�A�C�X�N���[���B(�n���v����p)";break;
		case 160: str+="�召��(�n���v����p)";break;
		case 161: str+="�召��(�n���v����p)";break;
		default: str+=""+n;
	}
	temp = "0"+String(n+1);
	temp = (temp.length==4) ? temp.substr(1,3) : temp.substr(0,3);
	str = "<img src=\"./"+temp+".jpg?20180608\" width=\"280\"><br>"+str;

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

	temp = "0"+String(n+1);
	temp = (temp.length==4) ? temp.substr(1,3) : temp.substr(0,3);
	str = "<img src=\"./"+temp+".jpg?20180608\"><br>"+str;

	return str;
}

// �摜�Ɩ��O ���̂Q+++++++++++++++++++++++++++++++++++++++++
function toNameFace2(n,w){
	var str = Names[n];
	var temp = "";

	temp = "0"+String(n+1);
	temp = (temp.length==4) ? temp.substr(1,3) : temp.substr(0,3);
	str = "<img style=\"width:"+w+"px;\" src=\"./"+temp+".jpg?20180608\"><br>"+str;

	return str;
}

// �摜�Ɩ��O ���̂R+++++++++++++++++++++++++++++++++++++++++
function toNameFace3(n,w){
	var str = F_Names[n];
	var temp = "";

	temp = "0"+String(n+1);
	temp = (temp.length==4) ? temp.substr(1,3) : temp.substr(0,3);
	str = "<img style=\"width:"+w+"px;\" src=\"./"+temp+".jpg?20180608\"><br>"+str;

	return str;
}

// ID�Ɠ��_���֘A�t����I�u�W�F�N�g�̒�` ++++++++++++++++++++++++++++
function Person(id, score){
	this.id 	 = id;
	this.score = score;
	this.rank  = 0;
}