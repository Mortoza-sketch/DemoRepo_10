$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/tamji/eclipse-workspace/CucumberDemo_P1/src/main/java/Features/dealmap.feature");
formatter.feature({
  "line": 1,
  "name": "Deal Data Creation",
  "description": "",
  "id": "deal-data-creation",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Cogmento Free CRM Creating a new deal scenario",
  "description": "",
  "id": "deal-data-creation;cogmento-free-crm-creating-a-new-deal-scenario",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "User is Already On Login PAGE",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Title Of Login Page Is COGMENTO CRM",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User enters Username AND Password",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 8
    },
    {
      "cells": [
        "abcdtesting3@gmail.com",
        "Abcd1234"
      ],
      "line": 9
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "User clicks On LOGIN Button",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "User Is On HOMEPAGE",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "User moves to DEAL Page",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "user enters DEAL details",
  "rows": [
    {
      "cells": [
        "Title",
        "Amount",
        "Probability",
        "Commission"
      ],
      "line": 15
    },
    {
      "cells": [
        "Test Deal01",
        "1000",
        "50",
        "10"
      ],
      "line": 16
    },
    {
      "cells": [
        "Test Deal02",
        "2000",
        "60",
        "20"
      ],
      "line": 17
    },
    {
      "cells": [
        "Test Deal03",
        "3000",
        "70",
        "30"
      ],
      "line": 18
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "Close The BROWSER",
  "keyword": "Then "
});
formatter.match({
  "location": "DealStepwithMapDefinition.User_is_already_on_login_page()"
});
formatter.result({
  "duration": 12662632200,
  "status": "passed"
});
formatter.match({
  "location": "DealStepwithMapDefinition.Title_of_Login_Page_is_Cogmento_CRM()"
});
formatter.result({
  "duration": 2022185000,
  "status": "passed"
});
formatter.match({
  "location": "DealStepwithMapDefinition.user_enters_username_and_password(DataTable)"
});
formatter.result({
  "duration": 2282715700,
  "status": "passed"
});
formatter.match({
  "location": "DealStepwithMapDefinition.User_clicks_on_Login_button()"
});
formatter.result({
  "duration": 2053333100,
  "status": "passed"
});
formatter.match({
  "location": "DealStepwithMapDefinition.User_is_on_Homepage()"
});
formatter.result({
  "duration": 13397200,
  "status": "passed"
});
formatter.match({
  "location": "DealStepwithMapDefinition.User_moves_to_Deal_Page()"
});
formatter.result({
  "duration": 3235778900,
  "status": "passed"
});
formatter.match({
  "location": "DealStepwithMapDefinition.user_enters_deal_details(DataTable)"
});
formatter.result({
  "duration": 54174020500,
  "status": "passed"
});
formatter.match({
  "location": "DealStepwithMapDefinition.Close_the_browser()"
});
formatter.result({
  "duration": 733729800,
  "status": "passed"
});
});