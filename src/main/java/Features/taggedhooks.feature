Feature: Free Cogmento CRM App test

@First
Scenario: Free CRM Create DEAL Test
Given User in on DEAL Page
When User fills the DEALS Form
Then DEAL is created 

@Second
Scenario: Free CRM Create CONTACT Test
Given User is on CONTACT Page
When User fills the CONTACT Form
Then CONTACT is created

@Third
Scenario Outline: Free CRM Create TASK Test 
Given User is on TASK Page 
When  User fills the TASK form "<Title>"
Then  TASK is created 
	
Examples: 
	    
	    |Title|
		|mail1|
		|mail2|
		|mail3|	
