import { getItemsFromDB, getWeatherForecast } from './service'

// #1
/*
	getItemsFromDB
		-> calcTotal(itemsFromPrev)
			-> calcYearBalance(resOFPrev)

	onDone, onError -> show

*/
//getItemsFromDB(console.log, console.warn)

// run all immediatly, but await when all is done
getWeatherForecast(1, () => {}, () => {})
getWeatherForecast(2, () => {}, () => {})
getWeatherForecast(3, () => {}, () => {})

function showResult(){
	
}