/**
	Date vs unix timestamp vs Moments
	unix timestamp - seconds the number of seconds that have elapsed since 00:00:00 Coordinated Universal Time (UTC), Thursday, 1 January 1970. 
	JavaScript's Date.getTime() returns the numeric value of the specified date as the number of milliseconds since January 1, 1970, 00:00:00 UTC (negative for prior times).
 */

/*1. Date to unix timestamp*/
let date = new Date();
let time = date.getTime(); //in milliseconds
//to get unix timestamp
let timestamp = Math.floor(time/1000) //or Math.round()

/*2. unix timestamp to Date*/
{
	let timestamp = 
}


/*3. moment to unix timestamp*/
{
	let mom=moment()
	let timestamp3 = mom.unix() //milliseconds
}

