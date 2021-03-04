Feature: Cogmento CRM Creating Contacts Feature

Scenario Outline: Cogmento CRM Creating a contact Scenario

Given User is Already on Login Page
When Title of Login Page Is Cogmento CRM
Then User Enters "<username>" and "<password>"
Then User clicks on Login Button
Then User Is on Homepage
Then User moves to new Contact Page          
Then user enters contact details "<firstname>" and "<lastname>" and "<position>"
Then User clicks on Save button
Then Verify new Contact created
Then Close The Browser   

 Examples:
 
         |username              | password|firstname |lastname|position|
         |abcdtesting3@gmail.com| Abcd1234|Max       |Payne   |manager  |
         |abcdtesting3@gmail.com| Abcd1234|Eddie     |Murphy  |Team Lead|
          
              