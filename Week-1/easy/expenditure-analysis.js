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
  
  const categoryTotals = {};

  
  for (let i = 0; i < transactions.length; i++) {
    const transaction = transactions[i];

    
    if (categoryTotals[transaction.category]) {
      categoryTotals[transaction.category] += transaction.price;
    } else {
      
      categoryTotals[transaction.category] = transaction.price;
    }
  }

  const result = [];
  for (const category in categoryTotals) {
    result.push({
      category: category,
      totalSpent: categoryTotals[category]
    });
  }

  return result;
}





/* Solution 2: 
function calculateTotalSpentByCategory(transactions) {
  // Use reduce to accumulate total price for each category
  const categoryTotals = transactions.reduce((acc, transaction) => {
    // Check if the category already exists in the accumulator
    if (acc[transaction.category]) {
      acc[transaction.category] += transaction.price; // Add the price
    } else {
      acc[transaction.category] = transaction.price; // Initialize with the first price
    }
    return acc;
  }, {});

  // Convert the accumulator object into an array of objects
  const result = Object.keys(categoryTotals).map(category => ({
    category,
    totalSpent: categoryTotals[category]
  }));

  return result;
}
  */


module.exports = calculateTotalSpentByCategory;
