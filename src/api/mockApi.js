export function getAllCustomerPurchaseData (resolvePath) {
    return new Promise((resolve, reject) => {
        if(resolvePath) {
            setTimeout(
                resolve({
                    data: customerPurchasesByYearObject
                }), Math.random() * 1000
            )
        } else {
            reject({
                error: 'failure'
            })
        }
    })
}

//*******************************************************************************************************************
//  What I am modeling here is a data structure where                                                               *
//  the last 12 months of purchase data is stored.  The record inclues first/last name, id, and purchasesInfo.      *
//  purchasesInfo contains an an array of objects that contain the year and the array of monthly purchase objects   *
//  Monthly purchase objects contain the month name and the array containing all individual purchases for the month *
//  The purchases for the month are stored in another array of objects containing the date/time of the transaction  *
//  and the transactionAmount.  Might be overkill, just tried to create a somewhat realistic data object            *
//*******************************************************************************************************************
export const customerPurchasesByYearObject = [
    {
        name: 'Connor McDavid',
        customerId: '1000',
        purchasesInfo: [
            {
                year: '2022',
                purchases: [
                    { month: 'January', purchases: []},
                    { month: 'February', purchases: []},
                    { month: 'March', purchases: []},
                    { month: 'April', purchases: []},
                    { month: 'May', purchases: []},
                    { month: 'June', purchases: [{ dateTimeOfTransaction: '2022-06-21T00:51:23Z', transactionAmount: 22.5 },{ dateTimeOfTransaction: '2022-06-21T00:51:24Z', transactionAmount: 44 },{ dateTimeOfTransaction: '2022-06-23T00:51:23Z', transactionAmount: 99.99 },{ dateTimeOfTransaction: '2022-06-26T00:51:24Z', transactionAmount: 324.74 }]},
                    { month: 'July', purchases: [{ dateTimeOfTransaction: '2022-07-21T00:51:23Z', transactionAmount: 44 },{ dateTimeOfTransaction: '2022-07-21T00:51:24Z', transactionAmount: 55 }]},
                    { month: 'August', purchases: [{ dateTimeOfTransaction: '2022-08-21T00:51:23Z', transactionAmount: 56.73 },{ dateTimeOfTransaction: '2022-08-21T00:51:24Z', transactionAmount: 12.5 }]},
                    { month: 'September', purchases: [{ dateTimeOfTransaction: '2022-09-21T00:51:23Z', transactionAmount: 82.41 },{ dateTimeOfTransaction: '2022-09-21T00:51:24Z', transactionAmount: 66 }]},
                    { month: 'October', purchases: [{ dateTimeOfTransaction: '2022-10-21T00:51:23Z', transactionAmount: 66.66 },{ dateTimeOfTransaction: '2022-10-21T00:51:24Z', transactionAmount: 44 }]},
                    { month: 'November', purchases: [{ dateTimeOfTransaction: '2022-11-21T00:51:23Z', transactionAmount: 66.66 },{ dateTimeOfTransaction: '2022-11-21T00:51:24Z', transactionAmount: 99.99 }]},
                    { month: 'December', purchases: [{ dateTimeOfTransaction: '2022-12-21T00:51:23Z', transactionAmount: 77.77 },{ dateTimeOfTransaction: '2022-12-21T00:51:24Z', transactionAmount: 33.73 }]},
                ]
            },{
                year: '2023',
                purchases: [
                    {
                        month: 'January',
                        purchases: [
                            {
                                dateTimeOfTransaction: '2023-01-18T00:51:23Z',
                                transactionAmount: 433
                            },
                            {
                                dateTimeOfTransaction: '2023-01-21T00:51:24Z',
                                transactionAmount: 433
                            }
                        ]
                    },
                    { month: 'February', purchases: [{ dateTimeOfTransaction: '2023-02-21T00:51:23Z', transactionAmount: 20 },{ dateTimeOfTransaction: '2023-02-21T03:51:24Z', transactionAmount: 20 }]},
                    { month: 'March', purchases: [{ dateTimeOfTransaction: '2023-03-21T00:51:23Z', transactionAmount: 20 },{ dateTimeOfTransaction: '2023-03-21T02:51:24Z', transactionAmount: 20 }]},
                    { month: 'April', purchases: [{ dateTimeOfTransaction: '2023-04-13T00:51:23Z', transactionAmount: 20 },{ dateTimeOfTransaction: '2023-04-22T01:51:24Z', transactionAmount: 20 }]},
                    { month: 'May', purchases: [{ dateTimeOfTransaction: '2023-05-21T00:51:23Z', transactionAmount: 20 },{ dateTimeOfTransaction: '2023-05-21T00:51:25Z', transactionAmount: 20 }]},
                ]

            }
        ]
    },{
        name: 'Brayden Schenn',
        customerId: '1001',
        purchasesInfo: [
            {
                year: '2022',
                purchases: [
                    { month: 'January', purchases: []},
                    { month: 'February', purchases: []},
                    { month: 'March', purchases: []},
                    { month: 'April', purchases: []},
                    { month: 'May', purchases: []},
                    { month: 'June', purchases: [{ dateTimeOfTransaction: '2022-06-21T00:51:23Z', transactionAmount: 22.5 },{ dateTimeOfTransaction: '2022-06-21T00:51:24Z', transactionAmount: 44 }]},
                    { month: 'July', purchases: [{ dateTimeOfTransaction: '2022-07-21T00:51:23Z', transactionAmount: 44 },{ dateTimeOfTransaction: '2022-07-21T00:51:24Z', transactionAmount: 55 }]},
                    { month: 'August', purchases: [{ dateTimeOfTransaction: '2022-08-21T00:51:23Z', transactionAmount: 56.73 },{ dateTimeOfTransaction: '2022-08-21T00:51:24Z', transactionAmount: 12.5 }]},
                    { month: 'September', purchases: [{ dateTimeOfTransaction: '2022-09-21T00:51:23Z', transactionAmount: 82.41 },{ dateTimeOfTransaction: '2022-09-21T00:51:24Z', transactionAmount: 66 }]},
                    { month: 'October', purchases: [{ dateTimeOfTransaction: '2022-10-21T00:51:23Z', transactionAmount: 66.66 },{ dateTimeOfTransaction: '2022-10-21T00:51:24Z', transactionAmount: 44 }]},
                    { month: 'November', purchases: [{ dateTimeOfTransaction: '2022-11-21T00:51:23Z', transactionAmount: 66.66 },{ dateTimeOfTransaction: '2022-11-21T00:51:24Z', transactionAmount: 99.99 }]},
                    { month: 'December', purchases: [{ dateTimeOfTransaction: '2022-12-21T00:51:23Z', transactionAmount: 77.77 },{ dateTimeOfTransaction: '2022-12-21T00:51:24Z', transactionAmount: 33.73 }]},
                ]
            },{
                year: '2023',
                purchases: [
                    { month: 'January', purchases: [{ dateTimeOfTransaction: '2023-01-21T00:51:23Z', transactionAmount: 123 },{ dateTimeOfTransaction: '2023-01-21T00:51:24Z', transactionAmount: 321 }]},
                    { month: 'February', purchases: [{ dateTimeOfTransaction: '2023-02-21T00:51:23Z', transactionAmount: 37 },{ dateTimeOfTransaction: '2023-02-21T00:51:24Z', transactionAmount: 222 }]},
                    { month: 'March', purchases: [{ dateTimeOfTransaction: '2023-03-21T00:51:23Z', transactionAmount: 22 },{ dateTimeOfTransaction: '2023-03-21T00:51:24Z', transactionAmount: 17 }]},
                    { month: 'April', purchases: [{ dateTimeOfTransaction: '2023-04-21T00:51:23Z', transactionAmount: 34 },{ dateTimeOfTransaction: '2023-04-21T00:51:24Z', transactionAmount: 99 }]},
                    { month: 'May', purchases: [{ dateTimeOfTransaction: '2023-05-21T00:51:23Z', transactionAmount: 52.4 },{ dateTimeOfTransaction: '2023-05-21T00:51:24Z', transactionAmount: 67.97 }]},
                ]
            }
        ]
    },{
        name: 'Al MacInnis',
        customerId: '1002',
        purchasesInfo: [
            {
                year: '2022',
                purchases: [
                    { month: 'January', purchases: []},
                    { month: 'February', purchases: []},
                    { month: 'March', purchases: []},
                    { month: 'April', purchases: []},
                    { month: 'May', purchases: []},
                    { month: 'June', purchases: [{ dateTimeOfTransaction: '2022-06-21T00:51:23Z', transactionAmount: 100 },{ dateTimeOfTransaction: '2022-06-21T00:51:24Z', transactionAmount: 100 }]},
                    { month: 'July', purchases: [{ dateTimeOfTransaction: '2022-07-21T00:51:23Z', transactionAmount: 100 },{ dateTimeOfTransaction: '2022-07-21T00:51:24Z', transactionAmount: 100 }]},
                    { month: 'August', purchases: [{ dateTimeOfTransaction: '2022-08-21T00:51:23Z', transactionAmount: 100 },{ dateTimeOfTransaction: '2022-08-21T00:51:24Z', transactionAmount: 100 }]},
                    { month: 'September', purchases: [{ dateTimeOfTransaction: '2022-09-21T00:51:23Z', transactionAmount: 100 },{ dateTimeOfTransaction: '2022-09-21T00:51:24Z', transactionAmount: 100 }]},
                    { month: 'October', purchases: [{ dateTimeOfTransaction: '2022-10-21T00:51:23Z', transactionAmount: 100 },{ dateTimeOfTransaction: '2022-10-21T00:51:24Z', transactionAmount: 100 }]},
                    { month: 'November', purchases: [{ dateTimeOfTransaction: '2022-11-21T00:51:23Z', transactionAmount: 100 },{ dateTimeOfTransaction: '2022-11-21T00:51:24Z', transactionAmount: 100 }]},
                    { month: 'December', purchases: [{ dateTimeOfTransaction: '2022-12-21T00:51:23Z', transactionAmount: 100 },{ dateTimeOfTransaction: '2022-12-21T00:51:24Z', transactionAmount: 100 }]},
                ]
            },{
                year: '2023',
                purchases: [
                    { month: 'January', purchases: []},
                    { month: 'February', purchases: [{ dateTimeOfTransaction: '2023-02-21T00:51:23Z', transactionAmount: 100 },{ dateTimeOfTransaction: '2023-02-21T00:51:24Z', transactionAmount: 100 }]},
                    { month: 'March', purchases: [{ dateTimeOfTransaction: '2023-03-21T00:51:23Z', transactionAmount: 100 },{ dateTimeOfTransaction: '2023-03-21T00:51:24Z', transactionAmount: 100 }]},
                    { month: 'April', purchases: [{ dateTimeOfTransaction: '2023-04-21T00:51:23Z', transactionAmount: 100 },{ dateTimeOfTransaction: '2023-04-21T00:51:24Z', transactionAmount: 100 }]},
                    { month: 'May', purchases: [{ dateTimeOfTransaction: '2023-05-21T00:51:23Z', transactionAmount: 100 },{ dateTimeOfTransaction: '2023-05-21T00:51:24Z', transactionAmount: 100 }]},
                ]
            }
        ]
    },{
        name: 'Paul Goldschmidt',
        customerId: '1003',
        purchasesInfo: [
            {
                year: '2022',
                purchases: [
                    { month: 'January', purchases: []},
                    { month: 'February', purchases: []},
                    { month: 'March', purchases: []},
                    { month: 'April', purchases: []},
                    { month: 'May', purchases: []},
                    { month: 'June', purchases: [{ dateTimeOfTransaction: '2022-06-21T00:51:23Z', transactionAmount: 1000 },{ dateTimeOfTransaction: '2022-06-21T00:51:24Z', transactionAmount: 1000 }]},
                    { month: 'July', purchases: [{ dateTimeOfTransaction: '2022-07-21T00:51:23Z', transactionAmount: 1000 },{ dateTimeOfTransaction: '2022-07-21T00:51:24Z', transactionAmount: 1000 }]},
                    { month: 'August', purchases: [{ dateTimeOfTransaction: '2022-08-21T00:51:23Z', transactionAmount: 1000 },{ dateTimeOfTransaction: '2022-08-21T00:51:24Z', transactionAmount: 1000 }]},
                    { month: 'September', purchases: [{ dateTimeOfTransaction: '2022-09-21T00:51:23Z', transactionAmount: 1000 },{ dateTimeOfTransaction: '2022-09-21T00:51:24Z', transactionAmount: 1000 }]},
                    { month: 'October', purchases: [{ dateTimeOfTransaction: '2022-10-21T00:51:23Z', transactionAmount: 1000 },{ dateTimeOfTransaction: '2022-10-21T00:51:24Z', transactionAmount: 1000 }]},
                    { month: 'November', purchases: [{ dateTimeOfTransaction: '2022-11-21T00:51:23Z', transactionAmount: 1000 },{ dateTimeOfTransaction: '2022-11-21T00:51:24Z', transactionAmount: 1000 }]},
                    { month: 'December', purchases: [{ dateTimeOfTransaction: '2022-12-21T00:51:23Z', transactionAmount: 1000 },{ dateTimeOfTransaction: '2022-12-21T00:51:24Z', transactionAmount: 1000 }]},
                ]
            },{
                year: '2023',
                purchases: [
                    { month: 'January', purchases: [{ dateTimeOfTransaction: '2023-01-21T00:51:23Z', transactionAmount: 1000 },{ dateTimeOfTransaction: '2023-01-21T00:51:24Z', transactionAmount: 1000 }]},
                    { month: 'February', purchases: [{ dateTimeOfTransaction: '2023-02-21T00:51:23Z', transactionAmount: 1000 },{ dateTimeOfTransaction: '2023-02-21T00:51:24Z', transactionAmount: 1000 }]},
                    { month: 'March', purchases: [{ dateTimeOfTransaction: '2023-03-21T00:51:23Z', transactionAmount: 1000 },{ dateTimeOfTransaction: '2023-03-21T00:51:24Z', transactionAmount: 1000 }]},
                    { month: 'April', purchases: []},
                    { month: 'May', purchases: []},
                ]
            }
        ]
    }
]
