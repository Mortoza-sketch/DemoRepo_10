Feature: Data Table Creation

Scenario: Cogmento CRM Creating a new deal scenario

Given User is Already On Login Page
When Title Of Login Page Is Cogmento CRM
Then User enters Username And PassworD
|abcdtesting3@gmail.com|Abcd1234|

Then User clicks On Login Button
Then User Is On Homepage
Then User moves to Deal Page          
Then user enters deal details
|Test Deal|1000|50|10|

Then User clicks on Save Button
Then Close The BrowseR
