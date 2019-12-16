if(localStorage.getItem('row')===null){
	location.href='enterPage.html';
}
else{
	var row=localStorage.getItem('row');
	if(row>3){
		let table=document.getElementById('table'),tr =document.getElementsByTagName('tr'), len=tr.length ;
		for(j=0;j<len;j++){
			for(i=3;i<row;i++){
				tr[j].innerHTML+='<td></td>';
			}
		}
		for(i=3;i<row;i++){
			table.innerHTML+=tr[0].innerHTML;
		}
		
	}
}
document.getElementById('restart').addEventListener('click',restart);
var tdElements = document.getElementsByTagName('td'),len=tdElements.length,x='X',h3=document.getElementById('result');
var a=[],temp=0,numOfRows=Math.sqrt(len), start=numOfRows-1;
for(let i=0;i<len;i++){
	tdElements[i].addEventListener('click',input);
}
for(let i=0;i<len;i++){
	if(i%numOfRows===0){
		start-=(numOfRows-1);
		temp=start;
	}
	a[i]=temp;
	temp+=(numOfRows-1);
}

function input(){
	if(this.innerHTML===''){
	this.innerHTML=x;
	if(x==='X') x='O';
	else x='X';
	checkTable();
	}
}
function restart(){
	h3.innerHTML="";
	x='X';
	for(let i=0;i<len;i++)
		tdElements[i].innerHTML='';
}
function checkTable(){
	let row=0,dia1=0,dia2=0,col=0,count=0;
	for(let i=0;i<len;i++){
		if(i!==0&&i%numOfRows===0){
			if(row===numOfRows) {h3.innerHTML="X wins!!! Restarting game ";;setTimeout(restart,3000);}
			else if(col===numOfRows) {h3.innerHTML="X wins!!! Restarting game ";setTimeout(restart,3000);}
			else if(row===-numOfRows) {h3.innerHTML="O wins!!! Restarting game ";setTimeout(restart,3000);}
			else if(col===-numOfRows) {h3.innerHTML="O wins!!! Restarting game ";setTimeout(restart,3000);}
			//console.log(row+"  "+ col);
			row=0;col=0;
		}
		if(tdElements[i].innerHTML==='X') row++;
		else if(tdElements[i].innerHTML==='O') row--;
		if(tdElements[i+a[i]].innerHTML==='X') col++;
		else if (tdElements[i+a[i]].innerHTML==='O') col--;
		if(i%(numOfRows+1)===0&&(tdElements[i].innerHTML==='X')) dia1++;
		else if(i%(numOfRows+1)===0&&(tdElements[i].innerHTML==='O')) dia1--;
		if(i!==0&&i%(numOfRows-1)===0&&(tdElements[i].innerHTML==='X')) dia2++;
		else if(i!==0&&i%(numOfRows-1)===0&&(tdElements[i].innerHTML==='O')) dia2--;
		if(tdElements[i].innerHTML!=='') count++;
	}
	if(dia1===numOfRows||dia2===numOfRows) {h3.innerHTML="X wins!!! Restarting game ";setTimeout(restart,3000);}
	else if(dia1===-numOfRows||dia2===-numOfRows) {h3.innerHTML="O wins!!! Restarting game ";setTimeout(restart,3000);}
	if(count==len){
		h3.innerHTML="Match draw !!! Restarting game "; setTimeout(restart,3000);
	}
}
document.getElementById('close').addEventListener('click',windowClose);
function windowClose(){
	location.href='enterPage.html';
}
