//div containing the table for tic tac toe game
var gameBox=document.getElementById('gameContent');
//div containing the input field for denoting the grid size
var rowBox=document.getElementById('numOfRowsContainer');
var numOfRows,len;
//game is hidden by default and it is shown when grid size in entered in input field
gameBox.style.display='none';
//adding event listener to restart button to reset the values of all cells
document.getElementById('restart').addEventListener('click',restart);
var a=[],x='X' ,h3=document.getElementById('result'),tdElements;
//wheneven a cell is clicked this function is called
function input(){
	if(this.innerHTML===''){
	this.innerHTML=x;
	if(x==='X') x='O';
	else x='X';
	checkTable();
	}
}
//restart function
function restart(){
	h3.innerHTML="";
	x='X';
	for(let i=0;i<len;i++)
		tdElements[i].innerHTML='';
}
//function to check current values of all cells each time when a cell is click to determine the winner
function checkTable(){
	let row=0,dia1=0,dia2=0,col=0,count=0;
	//looping through every cell in table. Consider  grid size is 3 and if i=2 , a row and a column is checked for no. of X's at same time.
	//Array a contains the value to check row and column in one for loop.
	for(let i=0;i<len;i++){
		if((i!==0&&i%(numOfRows)==0)){
			if(row==numOfRows||col==numOfRows) {
				h3.innerHTML="X wins!!! Restarting game ";
				setTimeout(restart,3000);
			}
			else if(row===-numOfRows || col===-numOfRows) {
				h3.innerHTML="O wins!!! Restarting game ";
				setTimeout(restart,3000);
			}
			//every nth time row and col value is set to 0, n denotes the grid size.
			row=0;col=0;
		}
		if(tdElements[i].innerHTML==='X') row++;
		else if(tdElements[i].innerHTML==='O') row--;
		if(tdElements[i+a[i]].innerHTML==='X') col++;
		else if (tdElements[i+a[i]].innerHTML==='O') col--;
		
		
		if(i%(numOfRows+1)==0&&(tdElements[i].innerHTML==='X')) dia1++;
		else if(i%(numOfRows+1)==0&&(tdElements[i].innerHTML==='O')) dia1--;
		if(i!==0&&i%(numOfRows-1)==0&&(tdElements[i].innerHTML==='X')&&i!==len-1) dia2++;
		else if(i!==0&&i%(numOfRows-1)==0&&i!==len-1&&(tdElements[i].innerHTML==='O')) dia2--;
		if(tdElements[i].innerHTML!=='') count++;
		
	}
	console.log(dia2);
	//condition to determine the winner
	if(row==numOfRows||col==numOfRows) {
		h3.innerHTML="X wins!!! Restarting game ";
		setTimeout(restart,3000);
	}
	else if(row===-numOfRows || col===-numOfRows) {
		h3.innerHTML="O wins!!! Restarting game ";
		setTimeout(restart,3000);
	}
	//condition to draw match
	if(dia1==numOfRows||dia2==numOfRows) {
		h3.innerHTML="X wins!!! Restarting game ";setTimeout(restart,3000);
	}
	else if(dia1===-numOfRows||dia2===-numOfRows) {
		h3.innerHTML="O wins!!! Restarting game ";setTimeout(restart,3000);
	}
	if(count==len){
		h3.innerHTML="Match draw !!! Restarting game "; setTimeout(restart,3000);
	}
}
function home(){
	rowBox.style.display='block';
	gameBox.style.display='none';
}
//Game function to display required table for tic tac toe
function game(){
	numOfRows=parseInt(document.getElementsByTagName('input')[0].value);
	var temp=0,start=numOfRows-1;
	if(numOfRows<3||numOfRows>10) alert('Can\'t be empty or less than 3 or greater than 10');
	else{
		let table=document.getElementById('table'),tr =document.getElementsByTagName('tr'), trlen=tr.length;
		for(j=0;j<trlen;j++){
			for(i=3;i<numOfRows;i++){
				tr[j].innerHTML+='<td></td>';
			}
		}
		for(i=3;i<numOfRows;i++){
			table.innerHTML+=tr[0].innerHTML;
		}
		tdElements=document.getElementsByTagName('td');
		len=tdElements.length;
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
		rowBox.style.display='none';
		gameBox.style.display='block';
		document.getElementById('home').addEventListener('click',home);
	}
}