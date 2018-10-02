// グローバル変数の定義+++++++++++++++++++++++++++++++++++++++++++++++
var lstMember = new Array(); //ソート状況を保持する配列（二次元配列）
var parent    = new Array();
var equal     = new Array(); //引き分け結果を保存するリスト
var rec       = new Array(); //一時保存用配列

var cmp1,cmp2;   //マージ中の配列ID(lstMemberの第一インデックス)
var head1,head2;
var nrec;

var numQuestion;
var totalSize;
var finishSize;

// ソートの初期化+++++++++++++++++++++++++++++++++++++++++++++++++++++
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

	//ソートすべき配列
	lstMember[n] = new Array();
	for (var i=0; i<Members.length; i++) {
		lstMember[n][i] = memb[i];
	}
	parent[n] = -1;
	totalSize = 0;
	n++;

	for (var i=0; i<lstMember.length; i++) {
		//要素数が２以上なら２分割し、
		//分割された配列をlstMemberの最後に加える
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

	//保存用配列
	for (i=0; i<Members.length; i++) {
		rec[i] = 0;
	}
	nrec = 0;

	//引き分けの結果を保存するリスト
	//キー：リンク始点の値
	// 値 ：リンク終点の値
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

//比較する２つ要素の表示+++++++++++++++++++++++++++++++++++
function showTable() {
	var str0 = "Battle No."+numQuestion+"<br>"+Math.floor(finishSize*100/totalSize)+"% sorted.";
	var str1 = ""+toNameFace(lstMember[cmp1][head1]);
	var str2 = ""+toNameFace(lstMember[cmp2][head2]);

	document.getElementById("battleNumber").innerHTML = str0;
	document.getElementById("leftCell").innerHTML    = str1;
	document.getElementById("rightCell").innerHTML   = str2;

	numQuestion++;
}

//リストのソート+++++++++++++++++++++++++++++++++++++++++++
//flag：比較結果
//  -1：左を選択
//   0：引き分け
//   1：右を選択
function sortList(flag){
	var i;
	var str;

	//recに保存
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
		document.getElementById("resultField").innerHTML = "ひきわけ";
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

	//片方のリストを走査し終えた後の処理
	if (head1<lstMember[cmp1].length && head2==lstMember[cmp2].length) {
		//リストcmp2が走査済 - リストcmp1の残りをコピー
		while (head1<lstMember[cmp1].length){
			rec[nrec] = lstMember[cmp1][head1];
			head1++;
			nrec++;
			finishSize++;
		}
	}
	else if (head1==lstMember[cmp1].length && head2<lstMember[cmp2].length) {
		//リストcmp1が走査済 - リストcmp2の残りをコピー
		while (head2<lstMember[cmp2].length){
			rec[nrec] = lstMember[cmp2][head2];
			head2++;
			nrec++;
			finishSize++;
		}
	}

	//両方のリストの最後に到達した場合は
	//親リストを更新する
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

		//新しい比較を行う前にrecを初期化
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

// 得点の計算+++++++++++++++++++++++++++++++++++++++++++++++++++++++++
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
	
	//順位の決定
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

// Personオブジェクトをソートする関数+++++++++++++++++++++++++++++++++
function sortPerson(a, b){
	if (a.score!=b.score) return b.score-a.score;
	else return a.id-b.id;
}


//チェックテスト
function ctest(){	
	//順位の決定
	var ranking;
	for (var i=0; i<Members.length; i++) {
		ranking = i+1;
		Members[i].rank = ranking;
	}
	showResultTEST();
}