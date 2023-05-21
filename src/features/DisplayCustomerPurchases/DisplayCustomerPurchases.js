import * as React from 'react';
import Box from '@mui/material/Box';
import { getAllCustomerPurchaseData } from '../../api/mockApi';
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';
import { Accordion, AccordionDetails, AccordionSummary, FormControl, FormControlLabel, Paper, Radio, RadioGroup, Typography } from '@mui/material';
import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import { ExpandMore } from '@mui/icons-material';
import '../../App.css';
import './DisplayCustomerPurchases.css';

export default function DisplayCustomerPurchases() {
    const [errors, setErrors] = React.useState(false)
    const [customerData, setCustomerData] = React.useState(null)
    const [radioButtonValue, setRadioButtonValue] = React.useState(3)
    const [accordionData, setAccordionData] = React.useState(null);
    const dollarFormat = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    })

    React.useEffect(() => {
        if(!customerData) {
            //You can flip the boolean value to the function here to simulate a rejected promise
            getAllCustomerPurchaseData(true).then((response) => {
                if(response.data) {
                    setCustomerData(response.data)
                }
            }).catch(() => {
                setErrors(true)
            })
        } else {
            let transactionObjects = []
            const today = new Date(Date.now())
            const currentYear = today.getFullYear()
            const currentMonthIndex = today.getMonth()

            customerData.forEach((customer) => {
                let transactionObject = {
                    name: customer.name,
                    id: customer.customerId,
                    yearlyPurchases: []
                }

                let transactionsByMonth = null;
                let purchases = []

                if(currentMonthIndex < radioButtonValue) {
                    transactionsByMonth = customer.purchasesInfo.filter(record => record.year === (currentYear - 1).toString())
                    transactionsByMonth[0].purchases.slice(currentMonthIndex - (radioButtonValue - 1)).forEach((month) => {
                        purchases.push(month)
                    })
                    transactionObject.yearlyPurchases.push({
                        year: transactionsByMonth[0].year,
                        purchases: purchases
                    })

                    transactionsByMonth = customer.purchasesInfo.filter(record => record.year === currentYear.toString())
                    purchases = []
                    transactionsByMonth[0].purchases.forEach((month) => {
                        purchases.push(month)
                    })
                    transactionObject.yearlyPurchases.push({
                        year: transactionsByMonth[0].year,
                        purchases: purchases
                    })
                    transactionObjects.push(transactionObject)
                } else {
                    transactionsByMonth = customer.purchasesInfo.filter(record => record.year === currentYear.toString())
                    transactionsByMonth[0].purchases.slice(currentMonthIndex - (radioButtonValue - 1)).forEach((month) => {
                        purchases.push(month)
                    })
                    transactionObject.yearlyPurchases.push({
                        year: transactionsByMonth[0].year,
                        purchases: purchases
                    })
                    transactionObjects.push(transactionObject)
                }
            })
            setAccordionData(transactionObjects)
        }
    }, [customerData, radioButtonValue])   

    return (
        <Box className='flexCenter'>
            { (accordionData && !errors) ? (
                <Box>
                    <Paper elevation={8} style={{borderRadius: '15px', marginBottom: '20px', minHeight: 'calc(90vh - 50px)', marginTop: '20px'}}>
                        <Box 
                            className='headers' 
                            style={{height: '50px', minWidth: '800px', backgroundColor: '#1976d2', borderTopRightRadius: '15px', borderTopLeftRadius: '15px', color: 'white'}}
                        >
                            <Typography variant="h6" component="div" style={{minWidth: '25%', paddingTop: '9px', align: 'left'}}>
                                Transactions and Rewards Points Earned
                            </Typography>
                        </Box>
                        <Box className='headers' style={{display: 'flex', justifyContent: 'center'}}>
                            <Typography fontSize={'20px'} component="div" style={{paddingRight: '20px', paddingTop: '7px'}}>
                                Timeframe:
                            </Typography>
                            <FormControl className='flexCenter' style={{flexDirection: 'column'}}>
                                <RadioGroup
                                    row
                                    name="radioButtons"
                                    defaultValue={3}
                                    onChange={(event) => setRadioButtonValue(event.target.value)}
                                >
                                    <FormControlLabel value={3} control={<Radio />} label="3 Months" />
                                    <FormControlLabel value={6} control={<Radio />} label="6 Months" />
                                    <FormControlLabel value={12} control={<Radio />} label="12 Months" />
                                </RadioGroup>
                            </FormControl>
                        </Box>
                        <Box className='flexCenter' style={{flexDirection: 'column', paddingTop: '15px', paddingBottom: '15px'}}>
                            <Typography variant="h6" component="div" style={{display: 'flex', alignItems: 'left', width: '100%', paddingLeft: '5%'}}>
                                Customers:
                            </Typography>
                            { accordionData.map((customer) => { return renderCustomersAccordion(customer) }) }
                        </Box>
                    </Paper>
                </Box>
            ) : null }
            { errors ? (
                <Box className='flexCenter' style={{height: 'calc(100vh - 50px)', flexDirection: 'column'}}>
                    <ErrorOutlineOutlinedIcon className='StyledErrorIcon' sx={{ fontSize: 75 }}/>
                    <Box style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Uh oh, something went wrong...  Please try again later
                        </Typography>
                    </Box>
                </Box>
            ) : null }
        </Box>  
    );

    function renderPurchases (purchase) {
        const date = new Date(purchase.dateTimeOfTransaction)
        return (
            <TableRow key={ purchase.dateTimeOfTransaction }>
                <TableCell component="th" scope="row" style={{width: '60%'}}> 
                    { (date.getMonth() + 1) + '/' + date.getDate() + ' ' + formatTime(date)}  
                </TableCell>
                <TableCell align="right"> { dollarFormat.format(purchase.transactionAmount) } </TableCell>
                <TableCell align="right"> { calculateRewardsPointsForTransaction(purchase.transactionAmount) }  </TableCell>
            </TableRow>
        );
    };

    function renderMonthsAccordion (month, id) {
        let monthlyRewardsPoints = 0;
        month.purchases.map((transaction) => (
            monthlyRewardsPoints += calculateRewardsPointsForTransaction(transaction.transactionAmount)
        ))

        return (
            <Accordion key={ month.month } elevation={6}>
                <AccordionSummary expandIcon={<ExpandMore/>}>
                    <Typography> { month.month } </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Box sx={{ margin: 1 }}>
                        <Table size="small">
                            <TableHead>
                                <TableRow>
                                    <TableCell style={{whiteSpace: 'nowrap'}}> Transaction Date and Time </TableCell>
                                    <TableCell style={{whiteSpace: 'nowrap'}} align="right"> Amount </TableCell>
                                    <TableCell style={{whiteSpace: 'nowrap'}} align="right"> Rewards Points Earned </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                { month.purchases.length ? (
                                    month.purchases.map((purchase) => {
                                        return renderPurchases(purchase)
                                    })
                                ) : (
                                    <TableRow>
                                        <TableCell> No transactions to display. </TableCell>
                                    </TableRow>
                                )}
                            </TableBody>
                        </Table>
                    </Box>
                </AccordionDetails>
                <Box>
                    <Typography align='right' variant="h6" component="div" style={{paddingRight: '5%', paddingBottom: '10px'}}>
                        Monthly Rewards Points Earned: { monthlyRewardsPoints }
                    </Typography>
                </Box>
            </Accordion>
        );
    };

    function renderYearsAccordion (years) {
        let monthlyRewardsPoints = 0
        years.purchases.map(monthlyPurchaseInfo => (
            monthlyPurchaseInfo.purchases.map(transaction => (
                monthlyRewardsPoints += calculateRewardsPointsForTransaction(transaction.transactionAmount)
            ))
        ))

        return (
            <Box key={ years.year }>
                <Accordion elevation={6}>
                        <AccordionSummary expandIcon={<ExpandMore/>}>
                        <Typography> { years.year } </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        { years.purchases.map((month) => {
                            return renderMonthsAccordion(month) 
                        })} 
                    </AccordionDetails>
                </Accordion>
                <Typography align='right' variant="h6" component="div" style={{paddingTop: '10px', paddingBottom: '10px'}}>
                    YTD Rewards Points Earned: { monthlyRewardsPoints }
                </Typography>
            </Box>
        );
    };

    function renderCustomersAccordion (customer) {
        let totalRewardsPoints = 0
        customer.yearlyPurchases.forEach(allPurchaseInfo => {
            allPurchaseInfo.purchases.map(monthlyPurchaseInfo => (
                monthlyPurchaseInfo.purchases.map(transaction => (
                    totalRewardsPoints += calculateRewardsPointsForTransaction(transaction.transactionAmount)
                ))
            ))
        })

        return (
            <Accordion key={ customer.id } elevation={6} style={{width: '95%'}}>
                <AccordionSummary expandIcon={<ExpandMore/>} key={ customer.id }>
                    <Typography align='left' style={{width: '45%'}}> { customer.name } </Typography>
                    <Typography align='right' style={{width: '45%'}}> Total Rewards Points Earned: </Typography>
                    <Typography align='right' style={{width: '10%', paddingRight: '20px'}}> { totalRewardsPoints } </Typography>
                </AccordionSummary>
                <AccordionDetails key={ customer.id }>
                        { customer.yearlyPurchases.map((purchasesByYear) => (
                            renderYearsAccordion(purchasesByYear) 
                        ))}
                </AccordionDetails>
            </Accordion>
        );
    };
}

//Typically wouldn't leave these here, just moved them out for testing
export function calculateRewardsPointsForTransaction(transactionAmount) {
    let rewardsPoints = 0
    if( transactionAmount >= 101 ) {
        rewardsPoints += (Math.floor(transactionAmount - 100) * 2)
    }
    if( transactionAmount >= 51 ) {
        if(transactionAmount >= 100) {
            rewardsPoints += 50
        } else {
            let modifiedTransactionAmount = transactionAmount % 100
            if(modifiedTransactionAmount > 50) {
                rewardsPoints += (Math.floor(modifiedTransactionAmount - 50))
            }
        }
    }
    return rewardsPoints
}

export function formatTime (date) {
    if ( date instanceof Date) {
        let hours = date.getHours() ; // gives the value in 24 hours format
        const AmOrPm = hours >= 12 ? 'PM' : 'AM';
        hours = (hours % 12) || 12;
        let minutes = date.getMinutes() ;
        if ( minutes < 10) {
            minutes = '0' + minutes.toString()
        }
        return hours + ":" + minutes + " " + AmOrPm;
    }
    return 'Invalid Date'
}