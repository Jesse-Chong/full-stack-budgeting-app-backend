const request = require('supertest');
const app = require('../app.js');
const transactions = require('../models/data.js');

describe('transactions', () => {
    let transactionsData = transactions;

    beforeEach(() => {
        transactionsData = transactions;
    });

    describe('/transactions', () => {
        describe('GET', () => {
            it('sends the transactions array', async () => {
                const response = await request(app).get('/transactions');

                expect(response.statusCode).toEqual(200);
                expect(response.body).toEqual(transactionsData);
            });
        });
        
        describe("POST", () => {
            it("adds new item to end of transactionsData array", async () => {
              const newLastArrayPosition = transactionsData.length;
              const newTransaction = {
                item_name: "utility-bill",
                amount: -150,
                date: "10-18-2023",
                from: "employer"
              };
      
              await new Promise((resolve) => {
                request(app)
                  .post(`/transactions`)
                  .send(newTransaction)
                  .set("Accept", "application/json")
                  .expect("headers.location", "/transactions")
                  .expect("statusCode", 303)
                  .end(resolve);
              });
      
              expect(transactionsData[newLastArrayPosition]).toEqual(newTransaction);
            });
          });
    })

    describe('/transactions/:id', () => {
        describe("GET", () => {
            it("sends the corresponding log when a valid index is given", async () => {
                const response = await request(app).get('/transactions/1');

                expect(JSON.parse(response.text)).toEqual(transactionsData[0]);
            });
        });


        describe("PUT", () => {
            it('replaces the index in the logs array', async () => {
                const updatedTransaction = transactionsData[0];

                await new Promise((resolve) => {
                    request(app)
                    .put('/transactions/0')
                    .send(updatedTransaction)
                    .set("Accept", "application/json")
                    .expect("headers.location", "/transactions/")
                    .expect("statusCode", 303)
                    .end(resolve);
                });

                expect(transactionsData[0]).toEqual(updatedTransaction);
            });
        });

        describe("DELETE", () => {
            it('deletes at the index in the logs array', async () => {
                const transactionToDelete = transactionsData[2];
                const originalLength = transactionsData.length;
                await new Promise((resolve) => {
                    request(app)
                    .delete('/transactions/2')
                    .set("Accept", "application/json")
                    .expect("headers.location", "/transactions")
                    .expect("statusCode", 303)
                    .end(resolve);
                });

                expect(transactionsData[2]).toEqual(transactionsData[2]);
                expect(transactionsData).toHaveLength(originalLength - 1);
            });
        });
    });
});