Feature: Free Cogmento CRM App test

Scenario: Free CRM Create Deal Test
Given User in on Deal Page
When User fills the Deals Form
Then Deal is created 


Scenario: Free CRM Create Contact Test
Given User is on Contact Page
When User fills the Contact Form
Then Contact is created


Scenario Outline: Free CRM Create Task Test 
Given User is on Task Page 
When  User fills the Task form "<Title>"
Then  Task is created 
	
Examples: 
	    
	    |Title|
		|mail1|
		|mail2|
		|mail3|	




