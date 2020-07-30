Feature: Free CRM Create Contacts

Scenario: Free CRM Create a new contact scenario

Given User is already on Login Page
When Title of Login Page is Cogmento CRM
Then User enters username and password
Then User clicks on Login button
Then User is on Homepage
Then User moves to new contact page
Then User enters first name and last name
Then User clicks on save button
Then Verify new contact created
Then Close the browser
