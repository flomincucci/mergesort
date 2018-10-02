// �O���[�o���ϐ��̒�`+++++++++++++++++++++++++++++++++++++++++++++++
var lstMember = new Array(); //�\�[�g�󋵂�ێ�����z��i�񎟌��z��j
var parent    = new Array();
var equal     = new Array(); //�����������ʂ�ۑ����郊�X�g
var rec       = new Array(); //�ꎞ�ۑ��p�z��

var cmp1,cmp2;   //�}�[�W���̔z��ID(lstMember�̑��C���f�b�N�X)
var head1,head2;
var nrec;

var numQuestion;
var totalSize;
var finishSize;

// �\�[�g�̏�����+++++++++++++++++++++++++++++++++++++++++++++++++++++
function initSort(){
	var n = 0;
	var mid;
	var memb = new Array();
	var tmp = new Array();

for(i=0;i<Names.length;i++){
  tmp[i]=i;
}
str="";
for(i=0;i<Names.length;i++){
  p=Math.floor(Math.random()*Names.length);
  while(tmp[p]==-1){
    p=(p>=(Names.length-1))?0:p+1;
  }
  memb[i]=tmp[p];
  tmp[p]=-1;
}

	//�\�[�g���ׂ��z��
	lstMember[n] = new Array();
	for (var i=0; i<Members.length; i++) {
		lstMember[n][i] = memb[i];
	}
	parent[n] = -1;
	totalSize = 0;
	n++;

	for (var i=0; i<lstMember.length; i++) {
		//�v�f�����Q�ȏ�Ȃ�Q�������A
		//�������ꂽ�z���lstMember�̍Ō�ɉ�����
		if(lstMember[i].length>=2) {
			mid = Math.ceil(lstMember[i].length/2);
			lstMember[n] = new Array();
			lstMember[n] = lstMember[i].slice(0,mid);
			totalSize += lstMember[n].length;
			parent[n] = i;
			n++;
			lstMember[n] = new Array();
			lstMember[n] = lstMember[i].slice(mid,lstMember[i].length);
			totalSize += lstMember[n].length;
			parent[n] = i;
			n++;
		}
	}

	//�ۑ��p�z��
	for (i=0; i<Members.length; i++) {
		rec[i] = 0;
	}
	nrec = 0;

	//���������̌��ʂ�ۑ����郊�X�g
	//�L�[�F�����N�n�_�̒l
	// �l �F�����N�I�_�̒l
	for (i=0; i<=Members.length; i++) {
		equal[i] = -1;
	}

	cmp1 = lstMember.length-2;
	cmp2 = lstMember.length-1;
	head1 = 0;
	head2 = 0;
	numQuestion = 1;
	finishSize = 0;

	showTable();
}

//��r����Q�v�f�̕\��+++++++++++++++++++++++++++++++++++
function showTable() {
	var str0 = "Battle No."+numQuestion+"<br>"+Math.floor(finishSize*100/totalSize)+"% sorted.";
	var str1 = ""+toNameFace(lstMember[cmp1][head1]);
	var str2 = ""+toNameFace(lstMember[cmp2][head2]);

	document.getElementById("battleNumber").innerHTML = str0;
	document.getElementById("leftCell").innerHTML    = str1;
	document.getElementById("rightCell").innerHTML   = str2;

	numQuestion++;
}

//���X�g�̃\�[�g+++++++++++++++++++++++++++++++++++++++++++
//flag�F��r����
//  -1�F����I��
//   0�F��������
//   1�F�E��I��
function sortList(flag){
	var i;
	var str;

	//rec�ɕۑ�
	if (flag<0) {
		document.getElementById("resultField").innerHTML = toNameFace0(Members[lstMember[cmp1][head1]].id);
		rec[nrec] = lstMember[cmp1][head1];
		head1++;
		nrec++;
		finishSize++;
		while (equal[rec[nrec-1]]!=-1) {
			rec[nrec] = lstMember[cmp1][head1];
			head1++;
			nrec++;
			finishSize++;
		}
	}
	else if (flag>0) {
		document.getElementById("resultField").innerHTML = toNameFace0(Members[lstMember[cmp2][head2]].id);
		rec[nrec] = lstMember[cmp2][head2];
		head2++;
		nrec++;
		finishSize++;
		while (equal[rec[nrec-1]]!=-1) {
			rec[nrec] = lstMember[cmp2][head2];
			head2++;
			nrec++;
			finishSize++;
		}
	}
	else {
		document.getElementById("resultField").innerHTML = "�Ђ��킯";
		rec[nrec] = lstMember[cmp1][head1];
		head1++;
		nrec++;
		finishSize++;
		while (equal[rec[nrec-1]]!=-1) {
			rec[nrec] = lstMember[cmp1][head1];
			head1++;
			nrec++;
			finishSize++;
		}
		equal[rec[nrec-1]] = lstMember[cmp2][head2];
		rec[nrec] = lstMember[cmp2][head2];
		head2++;
		nrec++;
		finishSize++;
		while (equal[rec[nrec-1]]!=-1) {
			rec[nrec] = lstMember[cmp2][head2];
			head2++;
			nrec++;
			finishSize++;
		}
	}

	//�Е��̃��X�g�𑖍����I������̏���
	if (head1<lstMember[cmp1].length && head2==lstMember[cmp2].length) {
		//���X�gcmp2�������� - ���X�gcmp1�̎c����R�s�[
		while (head1<lstMember[cmp1].length){
			rec[nrec] = lstMember[cmp1][head1];
			head1++;
			nrec++;
			finishSize++;
		}
	}
	else if (head1==lstMember[cmp1].length && head2<lstMember[cmp2].length) {
		//���X�gcmp1�������� - ���X�gcmp2�̎c����R�s�[
		while (head2<lstMember[cmp2].length){
			rec[nrec] = lstMember[cmp2][head2];
			head2++;
			nrec++;
			finishSize++;
		}
	}

	//�����̃��X�g�̍Ō�ɓ��B�����ꍇ��
	//�e���X�g���X�V����
	if (head1==lstMember[cmp1].length && head2==lstMember[cmp2].length) {
		for (i=0; i<lstMember[cmp1].length+lstMember[cmp2].length; i++) {
			lstMember[parent[cmp1]][i] = rec[i];
		}
		lstMember.pop();
		lstMember.pop();
		cmp1 = cmp1-2;
		cmp2 = cmp2-2;
		head1 = 0;
		head2 = 0;

		//�V������r���s���O��rec��������
		if (head1==0 && head2==0) {
			for (i=0; i<Members.length; i++) {
				rec[i] = 0;
			}
			nrec = 0;
		}
	}

	if (cmp1<0) {
		str = "Battle No."+(numQuestion-1)+"<br>"+Math.floor(finishSize*100/totalSize)+"% sorted.";
		document.getElementById("battleNumber").innerHTML = str;

		IsFinished = true;
		calcScore();
		showResult();
	}
	else {
		showTable();
	}
}

// ���_�̌v�Z+++++++++++++++++++++++++++++++++++++++++++++++++++++++++
function calcScore(){
	var numEqual;
	var tmpScore = (Members.length-1)*3;

	for (var i=0; i<Members.length; i++) {
		numEqual = 0;
		if (i<Members.length-1) {
			for (j=i; equal[lstMember[0][j]]==lstMember[0][j+1]; j++) {
				numEqual++;
			}
		}
		Members[lstMember[0][i]].score = tmpScore-numEqual*2;
		if (i<Members.length-1) {
			for (j=i; equal[lstMember[0][j]]==lstMember[0][j+1]; j++) {
				i++;
				Members[lstMember[0][i]].score = tmpScore-numEqual*2;
			}
		}
		tmpScore -= 3*(numEqual+1);
	}
	
	Members.sort(sortPerson);
	
	//���ʂ̌���
	var ranking;
	for (var i=0; i<Members.length; i++) {
		ranking = i+1;
		Members[i].rank = ranking;
		while (i<Members.length-1
					 && Members[i].score==Members[i+1].score) {
			i++;
			Members[i].rank = ranking;
		}
	}
}

// Person�I�u�W�F�N�g���\�[�g����֐�+++++++++++++++++++++++++++++++++
function sortPerson(a, b){
	if (a.score!=b.score) return b.score-a.score;
	else return a.id-b.id;
}


//�`�F�b�N�e�X�g
function ctest(){	
	//���ʂ̌���
	var ranking;
	for (var i=0; i<Members.length; i++) {
		ranking = i+1;
		Members[i].rank = ranking;
	}
	showResultTEST();
}