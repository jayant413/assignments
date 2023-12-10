/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  const ans = []

  transactions.forEach(e => {
    let matched = false;
    ans.forEach(a => {
      if (a.category == e.category) {
        a.totalSpent += e.price;
        matched = true;
      }
    })
    if (!matched) ans.push({
      category: e.category,
      totalSpent: e.price
    })
  });
  return ans;
}


module.exports = calculateTotalSpentByCategory;
