Feature: Deal Data Creation

Scenario: Cogmento Free CRM Creating a new deal scenario

Given User is Already On Login PAGE
When Title Of Login Page Is COGMENTO CRM
Then User enters Username AND Password
|username              |password|
|abcdtesting3@gmail.com|Abcd1234|

Then User clicks On LOGIN Button
Then User Is On HOMEPAGE
Then User moves to DEAL Page          
Then user enters DEAL details
|Title      |Amount |Probability|Commission|
|Test Deal01|1000   |50         |10        |
|Test Deal02|2000   |60         |20        |
|Test Deal03|3000   |70         |30        |

Then Close The BROWSER



