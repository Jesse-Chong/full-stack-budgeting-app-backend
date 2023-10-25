// • id - A unique number for each item
// • item_name - string - the name of the transaction (ie: income, savings, cat food, etc.)
// • amount -number - the amount of the transaction
// date - string - the date should be a simple string.
// As a bonus activity, use the date object and date input field and format it to be human-readable
// •from - string - who this transaction was with (ie. employer, bank, pet store, grocery store, etc)
// category - string - what category does this fall into (income, savings, pets, food, etc)

module.exports = [
  {
    id: 1,
    item_name: "income",
    amount: 3000,
    date: "10-01-2023",
    from: "employer"
  },
  {
    id: 2,
    item_name: "taxes",
    amount: -300,
    date: "10-05-2023",
    from: "user"
  },
  {
    id: 3,
    item_name: "retirement",
    amount: -150,
    date: "10-05-2023",
    from: "user"
  },
  {
    id: 4,
    item_name: "savings",
    amount: -150,
    date: "10-10-2023",
    from: "user"
  },
  {
    id: 5,
    item_name: "credit-card",
    amount: -200,
    date: "10-15-2023",
    from: "user"
  },
  {
    id: 6,
    item_name: "coffee",
    amount: -5,
    date: "10-15-2023",
    from: "starbucks"
  },
  {
    id: 7,
    item_name: "internet",
    amount: -80,
    date: "10-15-2023",
    from: "verizon"
  },
  {
    id: 8,
    item_name: "groceries",
    amount: 75,
    date: "10-18-2023",
    from: "key-food"
  },
  {
    id: 9,
    item_name: "utility-bill",
    amount: -150,
    date: "10-18-2023",
    from: "employer"
  },
  {
    id: 10,
    item_name: "car-insurance",
    amount: -150,
    date: "10-18-2023",
    from: "employer"
  },
];
