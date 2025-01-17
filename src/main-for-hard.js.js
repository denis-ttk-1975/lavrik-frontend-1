document.querySelector('.short').addEventListener('click', function(){
	console.log('here')
});

document.querySelector('.long').addEventListener('click', function(){
	let i = 2000;
	let j = 20000;
	let sum = 0;
	let k = 1;

	function runICalc(){
		sum += multIOnRange(k++, j);

		if(k < i){
			setTimeout(runICalc, 0); // very bad for perfom
		}
		else{
			console.log(sum);
		}
	}

	console.log('start')
	runICalc();
});



function multIOnRange(currentI, j){
	let sum = 0;

	for(let m = 1; m < j; m++){
		sum += currentI * j;
	}

	return sum;
}


/* import Sample from './sample1' */
/* const a = require('./modules-test/common') */

/* const el = document.querySelector('.test1'); */

/* document.querySelector('.test1').addEventListener('click', function(){
	

	setTimeout(() => {
		this.style.color = 'red';
	}, 2000);
});
 */
/* function sum(a, b){
	//console.log(this);
	return a + b;
} */
/* 
sum();

let s = new Sample();
s.calc(); */
/*
setTimeout(s.calc, 1000)
let b = s.calc;
b()  

const store = {} // mobx

function Catalog(){
	const cartStore = useMobxStore();
	
	return <>
		.map(
			<Card onAdd={cartStore.add} />
		)
	</>
}

function Card({ oNaDD }){

}*/