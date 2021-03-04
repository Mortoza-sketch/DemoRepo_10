$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/tamji/eclipse-workspace/CucumberDemo_P1/src/main/java/Features/DataTable.feature");
formatter.feature({
  "line": 1,
  "name": "Data Table Creation",
  "description": "",
  "id": "data-table-creation",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Cogmento CRM Creating a new deal scenario",
  "description": "",
  "id": "data-table-creation;cogmento-crm-creating-a-new-deal-scenario",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "User is Already On Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Title Of Login Page Is Cogmento CRM",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User enters Username And PassworD",
  "rows": [
    {
      "cells": [
        "abcdtesting3@gmail.com",
        "Abcd1234"
      ],
      "line": 8
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User clicks On Login Button",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "User Is On Homepage",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "User moves to Deal Page",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "user enters deal details",
  "rows": [
    {
      "cells": [
        "Test Deal",
        "1000",
        "50",
        "10"
      ],
      "line": 14
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "User clicks on Save Button",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "Close The BrowseR",
  "keyword": "Then "
});
formatter.match({
  "location": "DataTableStepDefinition.User_is_already_on_login_page()"
});
formatter.result({
  "duration": 13539496600,
  "status": "passed"
});
formatter.match({
  "location": "DataTableStepDefinition.Title_of_Login_Page_is_Cogmento_CRM()"
});
formatter.result({
  "duration": 3008454000,
  "status": "passed"
});
formatter.match({
  "location": "DataTableStepDefinition.user_enters_username_and_password(DataTable)"
});
formatter.result({
  "duration": 3241792800,
  "status": "passed"
});
formatter.match({
  "location": "DataTableStepDefinition.User_clicks_on_Login_button()"
});
formatter.result({
  "duration": 3042355100,
  "status": "passed"
});
formatter.match({
  "location": "DataTableStepDefinition.User_is_on_Homepage()"
});
formatter.result({
  "duration": 10035600,
  "status": "passed"
});
formatter.match({
  "location": "DataTableStepDefinition.User_moves_to_Deal_Page()"
});
formatter.result({
  "duration": 8268077300,
  "status": "passed"
});
formatter.match({
  "location": "DataTableStepDefinition.user_enters_deal_details(DataTable)"
});
formatter.result({
  "duration": 11896861800,
  "status": "passed"
});
formatter.match({
  "location": "DataTableStepDefinition.User_clicks_on_save_button()"
});
formatter.result({
  "duration": 3129015400,
  "status": "passed"
});
formatter.match({
  "location": "DataTableStepDefinition.Close_the_browser()"
});
formatter.result({
  "duration": 672850500,
  "status": "passed"
});
});