Feature: Cogmento Login Feature

#Without Examples Keyword

#Scenario: Cogmento Login Test Scenario

#Given user is already on Login Page
#When title of Login Page is Cogmento CRM
#Then user enters "abcdtesting3@gmail.com" and "Abcd1234"
#Then user clicks on Login button
#Then user is on Homepage

Scenario Outline: Cogmento Login Test Scenario 

Given user is already on Login Page
When title of Login Page is Cogmento CRM
Then user enters "<username>" and "<password>"
Then user clicks on Login button
Then user is on Homepage
Then User moves to new contact page          
Then Close the Browser          

Examples:
     
      | username              | password |     
      |abcdtesting3@gmail.com |Abcd1234  |
      |abcdtesting4@gmail.com |abcD4321  |