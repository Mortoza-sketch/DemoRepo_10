$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/tamji/eclipse-workspace/CucumberDemo_P1/src/main/java/Features/hooks.feature");
formatter.feature({
  "line": 1,
  "name": "Free Cogmento CRM App test",
  "description": "",
  "id": "free-cogmento-crm-app-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 18586522600,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "Free CRM Create Deal Test",
  "description": "",
  "id": "free-cogmento-crm-app-test;free-crm-create-deal-test",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "User in on Deal Page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User fills the Deals Form",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Deal is created",
  "keyword": "Then "
});
formatter.match({
  "location": "hooksStepDefinition.user_in_on_Deal_Page()"
});
formatter.result({
  "duration": 2500384000,
  "status": "passed"
});
formatter.match({
  "location": "hooksStepDefinition.user_fills_the_Deals_Form()"
});
formatter.result({
  "duration": 12327598000,
  "status": "passed"
});
formatter.match({
  "location": "hooksStepDefinition.deal_is_created()"
});
formatter.result({
  "duration": 5468671500,
  "status": "passed"
});
formatter.after({
  "duration": 6093744500,
  "status": "passed"
});
formatter.before({
  "duration": 17173351600,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Free CRM Create Contact Test",
  "description": "",
  "id": "free-cogmento-crm-app-test;free-crm-create-contact-test",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 10,
  "name": "User is on Contact Page",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "User fills the Contact Form",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "Contact is created",
  "keyword": "Then "
});
formatter.match({
  "location": "hooksStepDefinition.user_is_on_Contact_Page()"
});
formatter.result({
  "duration": 3276754900,
  "status": "passed"
});
formatter.match({
  "location": "hooksStepDefinition.user_fills_the_Contact_Form()"
});
formatter.result({
  "duration": 7562367100,
  "status": "passed"
});
formatter.match({
  "location": "hooksStepDefinition.contact_is_created()"
});
formatter.result({
  "duration": 6464171800,
  "status": "passed"
});
formatter.after({
  "duration": 6047611000,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 15,
  "name": "Free CRM Create Task Test",
  "description": "",
  "id": "free-cogmento-crm-app-test;free-crm-create-task-test",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 16,
  "name": "User is on Task Page",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "User fills the Task form \"\u003cTitle\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "Task is created",
  "keyword": "Then "
});
formatter.examples({
  "line": 20,
  "name": "",
  "description": "",
  "id": "free-cogmento-crm-app-test;free-crm-create-task-test;",
  "rows": [
    {
      "cells": [
        "Title"
      ],
      "line": 22,
      "id": "free-cogmento-crm-app-test;free-crm-create-task-test;;1"
    },
    {
      "cells": [
        "mail1"
      ],
      "line": 23,
      "id": "free-cogmento-crm-app-test;free-crm-create-task-test;;2"
    },
    {
      "cells": [
        "mail2"
      ],
      "line": 24,
      "id": "free-cogmento-crm-app-test;free-crm-create-task-test;;3"
    },
    {
      "cells": [
        "mail3"
      ],
      "line": 25,
      "id": "free-cogmento-crm-app-test;free-crm-create-task-test;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 17209140400,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Free CRM Create Task Test",
  "description": "",
  "id": "free-cogmento-crm-app-test;free-crm-create-task-test;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 16,
  "name": "User is on Task Page",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "User fills the Task form \"mail1\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "Task is created",
  "keyword": "Then "
});
formatter.match({
  "location": "hooksStepDefinition.user_is_on_Task_Page()"
});
formatter.result({
  "duration": 6472812400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mail1",
      "offset": 26
    }
  ],
  "location": "hooksStepDefinition.user_fills_the_Task_form(String)"
});
formatter.result({
  "duration": 2284919000,
  "status": "passed"
});
formatter.match({
  "location": "hooksStepDefinition.task_is_created()"
});
formatter.result({
  "duration": 3058976700,
  "status": "passed"
});
formatter.after({
  "duration": 6007162500,
  "status": "passed"
});
formatter.before({
  "duration": 17070805100,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Free CRM Create Task Test",
  "description": "",
  "id": "free-cogmento-crm-app-test;free-crm-create-task-test;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 16,
  "name": "User is on Task Page",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "User fills the Task form \"mail2\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "Task is created",
  "keyword": "Then "
});
formatter.match({
  "location": "hooksStepDefinition.user_is_on_Task_Page()"
});
formatter.result({
  "duration": 6515099200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mail2",
      "offset": 26
    }
  ],
  "location": "hooksStepDefinition.user_fills_the_Task_form(String)"
});
formatter.result({
  "duration": 2287034900,
  "status": "passed"
});
formatter.match({
  "location": "hooksStepDefinition.task_is_created()"
});
formatter.result({
  "duration": 3057223700,
  "status": "passed"
});
formatter.after({
  "duration": 5975893000,
  "status": "passed"
});
formatter.before({
  "duration": 17454531100,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Free CRM Create Task Test",
  "description": "",
  "id": "free-cogmento-crm-app-test;free-crm-create-task-test;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 16,
  "name": "User is on Task Page",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "User fills the Task form \"mail3\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "Task is created",
  "keyword": "Then "
});
formatter.match({
  "location": "hooksStepDefinition.user_is_on_Task_Page()"
});
formatter.result({
  "duration": 6525664100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mail3",
      "offset": 26
    }
  ],
  "location": "hooksStepDefinition.user_fills_the_Task_form(String)"
});
formatter.result({
  "duration": 2289455800,
  "status": "passed"
});
formatter.match({
  "location": "hooksStepDefinition.task_is_created()"
});
formatter.result({
  "duration": 3050412300,
  "status": "passed"
});
formatter.after({
  "duration": 6008844200,
  "status": "passed"
});
});