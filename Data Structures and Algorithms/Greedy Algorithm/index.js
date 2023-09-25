//<==========Best Time to Buy and Sell Stocks===============>
//<==========Greedy Algorithm===============>
//Input: prices = [3, 7, 1, 5, 6, 2, 4]; ---> Output: 5

function maxProfit(prices) {
	let minProfitPrice = prices[0];
	let profit = 0;

	for (let i = 0; i < prices.length; i++) {
		if (prices[i] < minProfitPrice) {
			//console.log(prices[i]);
			minProfitPrice = prices[i];
		}
		let diff = prices[i] - minProfitPrice;
		profit = Math.max(profit, diff);
	}
	console.log("profit:", profit);
}

console.log(maxProfit([3, 7, 1, 5, 6, 2, 4]));
