[![Build Status](https://travis-ci.org/y0m0/Bank_tech_test_v2.svg?branch=master)](https://travis-ci.org/y0m0/Bank_tech_test_v2)
[![Code Climate](https://codeclimate.com/github/y0m0/Bank_tech_test_v2/badges/gpa.svg)](https://codeclimate.com/github/y0m0/Bank_tech_test_v2)
[![Test Coverage](https://codeclimate.com/github/y0m0/Bank_tech_test_v2/badges/coverage.svg)](https://codeclimate.com/github/y0m0/Bank_tech_test_v2)

# Bank tech test

Small piece of software written in JavaScript to manage a bank deposit account

## Getting Started
- clone this repo
- install all the required dependencies
```
$ yarn
```
- to run it:
```
$ node
> account = new Account();
```
- to run the tests:
```
yarn test
```

## Requirements

-  You should be able to interact with the your code via a REPL like IRB or the JavaScript console. (You don't need to implement a command line interface that takes input from STDIN.)
-  Deposits, withdrawal.
-  Account statement (date, amount, balance) printing.
-  Data can be kept in memory (it doesn't need to be stored to a database or anything).

#### Test case
- Given a client makes a deposit of 1000 on 10-01-2012 
- And a deposit of 2000 on 13-01-2012 
- And a withdrawal of 500 on 14-01-2012 
- When she prints her bank statement 
- Then she would see
```
date || credit || debit || balance
14/01/2012 || || 500.00 || 2500.00
13/01/2012 || 2000.00 || || 3000.00
10/01/2012 || 1000.00 || || 1000.00
```

## My approach

I started by extracting some user stories from the requirements to guide me

```
As a user
So that I can manage my $$$
I want to be able to create a new bank account

As a user
So that I can safely store my $$$
I want to be able to deposit in to my account

As a user
So that I can spend my $$$
I want to be able to withdraw from my account

As a user
So that I can keep track of my $$$ spendings
I want to be able to print a transaction list

As a user
So that I can have a clearer idea of when I used my $$$
I want to be able to print a statement with dates
```


