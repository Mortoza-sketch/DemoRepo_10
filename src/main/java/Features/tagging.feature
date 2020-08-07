@FunctionalTest
Feature: Cogmento Free CRM Application Testing

@SmokeTest @RegressionTest @EndToEnd
Scenario: Login with correct Username and Password
Given This is a valid Login Test

@RegressionTest
Scenario: Login with incorrect Username and Password
Given This is an invalid Login Test

@SmokeTest
Scenario: Create a contact
Given This is a Contact Test Case

@SmokeTest
Scenario: Create a Deal
Given This is a Deal Test Case

@SmokeTest
Scenario: Create a Task
Given This is a Tasks Test Case

@SmokeTest
Scenario: Create a Case
Given This is a Case Test case

@RegressionTest
Scenario: Search a Deal
Given This is a Search Deal Test

@SmokeTest @RegressionTest
Scenario: Search a Contact
Given This is a Search Contact Test

@SmokeTest @RegressionTest
Scenario: Search a Case
Given This is a Search Case Test

@SmokeTest @EndToEnd
Scenario: Search a Task
Given This is a Search Task Test

@SmokeTest @EndToEnd
Scenario: Search a Call
Given This is a Search Call Test

@SmokeTest @EndToEnd
Scenario: Search an email
Given This is a Search an email Test

@SmokeTest @EndToEnd
Scenario: Search a Document
Given This is a Search Document Test

@SmokeTest @EndToEnd
Scenario: Search a Form
Given This is a Search Form Test

@EndToEnd
Scenario: Validate a Report
Given This is a validate a Report Test

@EndToEnd
Scenario: Search a Form
Given This is a Search Form Test

@EndToEnd
Scenario: Application Log out
Given This is an Application Log out Test

@EndToEnd
Scenario: Close the Browser
Given This is a Close the Browser Test





