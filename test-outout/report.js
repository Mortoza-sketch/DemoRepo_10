$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/tamji/eclipse-workspace/CucumberDemo_P1/src/main/java/Features/contactsDDTP1.feature");
formatter.feature({
  "line": 1,
  "name": "Cogmento CRM Creating Contacts Feature",
  "description": "",
  "id": "cogmento-crm-creating-contacts-feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Cogmento CRM Creating a contact Scenario",
  "description": "",
  "id": "cogmento-crm-creating-contacts-feature;cogmento-crm-creating-a-contact-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User is Already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Title of Login Page Is Cogmento CRM",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User Enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "User clicks on Login Button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User Is on Homepage",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User moves to new Contact Page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user enters contact details \"\u003cfirstname\u003e\" and \"\u003clastname\u003e\" and \"\u003cposition\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "User clicks on Save button",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "Verify new Contact created",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "Close The Browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 16,
  "name": "",
  "description": "",
  "id": "cogmento-crm-creating-contacts-feature;cogmento-crm-creating-a-contact-scenario;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "firstname",
        "lastname",
        "position"
      ],
      "line": 18,
      "id": "cogmento-crm-creating-contacts-feature;cogmento-crm-creating-a-contact-scenario;;1"
    },
    {
      "cells": [
        "abcdtesting3@gmail.com",
        "Abcd1234",
        "Max",
        "Payne",
        "manager"
      ],
      "line": 19,
      "id": "cogmento-crm-creating-contacts-feature;cogmento-crm-creating-a-contact-scenario;;2"
    },
    {
      "cells": [
        "abcdtesting3@gmail.com",
        "Abcd1234",
        "Eddie",
        "Murphy",
        "Team Lead"
      ],
      "line": 20,
      "id": "cogmento-crm-creating-contacts-feature;cogmento-crm-creating-a-contact-scenario;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 19,
  "name": "Cogmento CRM Creating a contact Scenario",
  "description": "",
  "id": "cogmento-crm-creating-contacts-feature;cogmento-crm-creating-a-contact-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User is Already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Title of Login Page Is Cogmento CRM",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User Enters \"abcdtesting3@gmail.com\" and \"Abcd1234\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "User clicks on Login Button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User Is on Homepage",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User moves to new Contact Page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user enters contact details \"Max\" and \"Payne\" and \"manager\"",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "User clicks on Save button",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "Verify new Contact created",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "Close The Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "ContactsDDTStepDefinition.User_is_already_on_login_page()"
});
formatter.result({
  "duration": 13068004300,
  "status": "passed"
});
formatter.match({
  "location": "ContactsDDTStepDefinition.Title_of_Login_Page_is_Cogmento_CRM()"
});
formatter.result({
  "duration": 3012350300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abcdtesting3@gmail.com",
      "offset": 13
    },
    {
      "val": "Abcd1234",
      "offset": 42
    }
  ],
  "location": "ContactsDDTStepDefinition.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 3400303700,
  "status": "passed"
});
formatter.match({
  "location": "ContactsDDTStepDefinition.User_clicks_on_Login_button()"
});
formatter.result({
  "duration": 3061610800,
  "status": "passed"
});
formatter.match({
  "location": "ContactsDDTStepDefinition.User_is_on_Homepage()"
});
formatter.result({
  "duration": 10087200,
  "status": "passed"
});
formatter.match({
  "location": "ContactsDDTStepDefinition.User_moves_to_new_contact_page()"
});
formatter.result({
  "duration": 3238679900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Max",
      "offset": 29
    },
    {
      "val": "Payne",
      "offset": 39
    },
    {
      "val": "manager",
      "offset": 51
    }
  ],
  "location": "ContactsDDTStepDefinition.User_enters_first_name_and_last_name_and_position(String,String,String)"
});
formatter.result({
  "duration": 7617065700,
  "status": "passed"
});
formatter.match({
  "location": "ContactsDDTStepDefinition.User_clicks_on_save_button()"
});
formatter.result({
  "duration": 3132994300,
  "status": "passed"
});
formatter.match({
  "location": "ContactsDDTStepDefinition.Verify_new_contact_created()"
});
formatter.result({
  "duration": 3273873200,
  "status": "passed"
});
formatter.match({
  "location": "ContactsDDTStepDefinition.Close_the_browser()"
});
formatter.result({
  "duration": 718558100,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Cogmento CRM Creating a contact Scenario",
  "description": "",
  "id": "cogmento-crm-creating-contacts-feature;cogmento-crm-creating-a-contact-scenario;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User is Already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Title of Login Page Is Cogmento CRM",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User Enters \"abcdtesting3@gmail.com\" and \"Abcd1234\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "User clicks on Login Button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User Is on Homepage",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User moves to new Contact Page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user enters contact details \"Eddie\" and \"Murphy\" and \"Team Lead\"",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "User clicks on Save button",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "Verify new Contact created",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "Close The Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "ContactsDDTStepDefinition.User_is_already_on_login_page()"
});
formatter.result({
  "duration": 11946412700,
  "status": "passed"
});
formatter.match({
  "location": "ContactsDDTStepDefinition.Title_of_Login_Page_is_Cogmento_CRM()"
});
formatter.result({
  "duration": 3007768400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abcdtesting3@gmail.com",
      "offset": 13
    },
    {
      "val": "Abcd1234",
      "offset": 42
    }
  ],
  "location": "ContactsDDTStepDefinition.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 3357822600,
  "status": "passed"
});
formatter.match({
  "location": "ContactsDDTStepDefinition.User_clicks_on_Login_button()"
});
formatter.result({
  "duration": 3061510800,
  "status": "passed"
});
formatter.match({
  "location": "ContactsDDTStepDefinition.User_is_on_Homepage()"
});
formatter.result({
  "duration": 7913000,
  "status": "passed"
});
formatter.match({
  "location": "ContactsDDTStepDefinition.User_moves_to_new_contact_page()"
});
formatter.result({
  "duration": 8227009900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Eddie",
      "offset": 29
    },
    {
      "val": "Murphy",
      "offset": 41
    },
    {
      "val": "Team Lead",
      "offset": 54
    }
  ],
  "location": "ContactsDDTStepDefinition.User_enters_first_name_and_last_name_and_position(String,String,String)"
});
formatter.result({
  "duration": 13109381100,
  "status": "passed"
});
formatter.match({
  "location": "ContactsDDTStepDefinition.User_clicks_on_save_button()"
});
formatter.result({
  "duration": 8195812500,
  "status": "passed"
});
formatter.match({
  "location": "ContactsDDTStepDefinition.Verify_new_contact_created()"
});
formatter.result({
  "duration": 231175000,
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:87)\r\n\tat org.junit.Assert.assertTrue(Assert.java:42)\r\n\tat org.junit.Assert.assertTrue(Assert.java:53)\r\n\tat ContactsDDTStepDefinition.ContactsDDTStepDefinition.Verify_new_contact_created(ContactsDDTStepDefinition.java:82)\r\n\tat ✽.Then Verify new Contact created(C:/Users/tamji/eclipse-workspace/CucumberDemo_P1/src/main/java/Features/contactsDDTP1.feature:13)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "ContactsDDTStepDefinition.Close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
});