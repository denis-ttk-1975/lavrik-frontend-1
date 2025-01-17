/*  in real this operation calcs on server */

const DB_PROPABILITY = 1;
const MATH_PROPABILITY = 0.5;

export function getItemsFromDB(onDone, onError){
	setTimeout(() => {
		if(Math.random() > DB_PROPABILITY){
			onError('DB_ERROR')
		}
		else{
			onDone([
				{ id: 5, price: 1000 },
				{ id: 7, price: 2000 },
				{ id: 8, price: 4000 }
			]);
		}
	}, Math.random() * 300 + 200);
}

export function calcTotal(items, onDone, onError){
	setTimeout(() => {
		if(Math.random() > MATH_PROPABILITY){
			onError('MATH_ERROR')
		}
		else{
			const res = items.reduce((total, item) => {
				return total + item.price;
			}, 0);

			onDone(res);
		}
	}, Math.random() * 300 + 200);
}

export function calcYearBalance(total, onDone, onError){
	setTimeout(() => {
		if(Math.random() > MATH_PROPABILITY){
			onError('MATH_TOTAL_ERROR')
		}
		else{
			onDone(Math.floor(total * Math.random()));
		}
	}, Math.random() * 300 + 200);
}

const W_PROP = 0.9;

export function getWeatherForecast(serviceId, onDone, onError){
	console.log(`start for service ${serviceId}`)
	setTimeout(() => {
		if(Math.random() > W_PROP){
			onError('W_PROP_ERROR')
		}
		else{
			onDone(2 + Math.random() * 3 * (Math.random() > 0.5 ? 1 : -1));
		}
	
	}, Math.random() * 1000 + 200);
}