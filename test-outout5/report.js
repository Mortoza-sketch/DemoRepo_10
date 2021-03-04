$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/tamji/eclipse-workspace/CucumberDemo_P1/src/main/java/Features/tagging.feature");
formatter.feature({
  "line": 2,
  "name": "Cogmento Free CRM Application Testing",
  "description": "",
  "id": "cogmento-free-crm-application-testing",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@FunctionalTest"
    }
  ]
});
formatter.scenario({
  "line": 5,
  "name": "Login with correct Username and Password",
  "description": "",
  "id": "cogmento-free-crm-application-testing;login-with-correct-username-and-password",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@SmokeTest"
    },
    {
      "line": 4,
      "name": "@RegressionTest"
    },
    {
      "line": 4,
      "name": "@EndToEnd"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "This is a valid Login Test",
  "keyword": "Given "
});
formatter.match({
  "location": "TaggingStepDefinition.this_is_a_valid_Login_Test()"
});
formatter.result({
  "duration": 19516078800,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Login with incorrect Username and Password",
  "description": "",
  "id": "cogmento-free-crm-application-testing;login-with-incorrect-username-and-password",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 8,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "This is an invalid Login Test",
  "keyword": "Given "
});
formatter.match({
  "location": "TaggingStepDefinition.this_is_an_invalid_Login_Test()"
});
formatter.result({
  "duration": 6926917100,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"*[name\u003d\u0027email\u0027]\"}\n  (Session info: chrome\u003d84.0.4147.105)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-7S4N7UG\u0027, ip: \u0027192.168.159.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002713.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 84.0.4147.105, chrome: {chromedriverVersion: 83.0.4103.39 (ccbf011cb2d2b..., userDataDir: C:\\Users\\tamji\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:57486}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 72e5b2cdbb74e82fc2f1891808128061\n*** Element info: {Using\u003dname, value\u003demail}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByName(RemoteWebDriver.java:404)\r\n\tat org.openqa.selenium.By$ByName.findElement(By.java:284)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat TaggingStepDefinition.TaggingStepDefinition.this_is_an_invalid_Login_Test(TaggingStepDefinition.java:39)\r\n\tat ✽.Given This is an invalid Login Test(C:/Users/tamji/eclipse-workspace/CucumberDemo_P1/src/main/java/Features/tagging.feature:10)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 13,
  "name": "Create a contact",
  "description": "",
  "id": "cogmento-free-crm-application-testing;create-a-contact",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 12,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "This is a Contact Test Case",
  "keyword": "Given "
});
formatter.match({
  "location": "TaggingStepDefinition.this_is_a_Contact_Test_Case()"
});
formatter.result({
  "duration": 10834761200,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Create a Deal",
  "description": "",
  "id": "cogmento-free-crm-application-testing;create-a-deal",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 16,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "This is a Deal Test Case",
  "keyword": "Given "
});
formatter.match({
  "location": "TaggingStepDefinition.this_is_a_Deal_Test_Case()"
});
formatter.result({
  "duration": 18901014700,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Create a Task",
  "description": "",
  "id": "cogmento-free-crm-application-testing;create-a-task",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 20,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 22,
  "name": "This is a Tasks Test Case",
  "keyword": "Given "
});
formatter.match({
  "location": "TaggingStepDefinition.this_is_a_Tasks_Test_Case()"
});
formatter.result({
  "duration": 27728097900,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Create a Case",
  "description": "",
  "id": "cogmento-free-crm-application-testing;create-a-case",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 24,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 26,
  "name": "This is a Case Test case",
  "keyword": "Given "
});
formatter.match({
  "location": "TaggingStepDefinition.this_is_a_Case_Test_case()"
});
formatter.result({
  "duration": 26044732800,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "Search a Deal",
  "description": "",
  "id": "cogmento-free-crm-application-testing;search-a-deal",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 28,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 30,
  "name": "This is a Search Deal Test",
  "keyword": "Given "
});
formatter.match({
  "location": "TaggingStepDefinition.this_is_a_Search_Deal_Test()"
});
formatter.result({
  "duration": 7105619800,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "Search a Contact",
  "description": "",
  "id": "cogmento-free-crm-application-testing;search-a-contact",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 32,
      "name": "@SmokeTest"
    },
    {
      "line": 32,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 34,
  "name": "This is a Search Contact Test",
  "keyword": "Given "
});
formatter.match({
  "location": "TaggingStepDefinition.this_is_a_Search_Contact_Test()"
});
formatter.result({
  "duration": 7237326300,
  "status": "passed"
});
formatter.scenario({
  "line": 37,
  "name": "Search a Case",
  "description": "",
  "id": "cogmento-free-crm-application-testing;search-a-case",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 36,
      "name": "@SmokeTest"
    },
    {
      "line": 36,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 38,
  "name": "This is a Search Case Test",
  "keyword": "Given "
});
formatter.match({
  "location": "TaggingStepDefinition.this_is_a_Search_Case_Test()"
});
formatter.result({
  "duration": 9304829400,
  "status": "passed"
});
formatter.scenario({
  "line": 41,
  "name": "Search a Task",
  "description": "",
  "id": "cogmento-free-crm-application-testing;search-a-task",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 40,
      "name": "@SmokeTest"
    },
    {
      "line": 40,
      "name": "@EndToEnd"
    }
  ]
});
formatter.step({
  "line": 42,
  "name": "This is a Search Task Test",
  "keyword": "Given "
});
formatter.match({
  "location": "TaggingStepDefinition.this_is_a_Search_Task_Test()"
});
formatter.result({
  "duration": 9247218600,
  "status": "passed"
});
formatter.scenario({
  "line": 45,
  "name": "Search a Call",
  "description": "",
  "id": "cogmento-free-crm-application-testing;search-a-call",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 44,
      "name": "@SmokeTest"
    },
    {
      "line": 44,
      "name": "@EndToEnd"
    }
  ]
});
formatter.step({
  "line": 46,
  "name": "This is a Search Call Test",
  "keyword": "Given "
});
formatter.match({
  "location": "TaggingStepDefinition.this_is_a_Search_Call_Test()"
});
formatter.result({
  "duration": 6884698500,
  "status": "passed"
});
formatter.scenario({
  "line": 49,
  "name": "Search an email",
  "description": "",
  "id": "cogmento-free-crm-application-testing;search-an-email",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 48,
      "name": "@SmokeTest"
    },
    {
      "line": 48,
      "name": "@EndToEnd"
    }
  ]
});
formatter.step({
  "line": 50,
  "name": "This is a Search an email Test",
  "keyword": "Given "
});
formatter.match({
  "location": "TaggingStepDefinition.this_is_a_Search_an_email_Test()"
});
formatter.result({
  "duration": 7333391300,
  "status": "passed"
});
formatter.scenario({
  "line": 53,
  "name": "Search a Document",
  "description": "",
  "id": "cogmento-free-crm-application-testing;search-a-document",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 52,
      "name": "@SmokeTest"
    },
    {
      "line": 52,
      "name": "@EndToEnd"
    }
  ]
});
formatter.step({
  "line": 54,
  "name": "This is a Search Document Test",
  "keyword": "Given "
});
formatter.match({
  "location": "TaggingStepDefinition.this_is_a_Search_Document_Test()"
});
formatter.result({
  "duration": 7241416000,
  "status": "passed"
});
formatter.scenario({
  "line": 57,
  "name": "Search a Form",
  "description": "",
  "id": "cogmento-free-crm-application-testing;search-a-form",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 56,
      "name": "@SmokeTest"
    },
    {
      "line": 56,
      "name": "@EndToEnd"
    }
  ]
});
formatter.step({
  "line": 58,
  "name": "This is a Search Form Test",
  "keyword": "Given "
});
formatter.match({
  "location": "TaggingStepDefinition.this_is_a_Search_Form_Test()"
});
formatter.result({
  "duration": 6951590300,
  "status": "passed"
});
formatter.scenario({
  "line": 61,
  "name": "Validate a Report",
  "description": "",
  "id": "cogmento-free-crm-application-testing;validate-a-report",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 60,
      "name": "@EndToEnd"
    }
  ]
});
formatter.step({
  "line": 62,
  "name": "This is a validate a Report Test",
  "keyword": "Given "
});
formatter.match({
  "location": "TaggingStepDefinition.this_is_a_validate_a_Report_Test()"
});
formatter.result({
  "duration": 7311758600,
  "status": "passed"
});
formatter.scenario({
  "line": 65,
  "name": "Search a Form",
  "description": "",
  "id": "cogmento-free-crm-application-testing;search-a-form",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 64,
      "name": "@EndToEnd"
    }
  ]
});
formatter.step({
  "line": 66,
  "name": "This is a Search Form Test",
  "keyword": "Given "
});
formatter.match({
  "location": "TaggingStepDefinition.this_is_a_Search_Form_Test()"
});
formatter.result({
  "duration": 6823241000,
  "status": "passed"
});
formatter.scenario({
  "line": 69,
  "name": "Application Log out",
  "description": "",
  "id": "cogmento-free-crm-application-testing;application-log-out",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 68,
      "name": "@EndToEnd"
    }
  ]
});
formatter.step({
  "line": 70,
  "name": "This is an Application Log out Test",
  "keyword": "Given "
});
formatter.match({
  "location": "TaggingStepDefinition.this_is_an_Application_Log_out_Test()"
});
formatter.result({
  "duration": 15402491600,
  "status": "passed"
});
formatter.scenario({
  "line": 73,
  "name": "Close the Browser",
  "description": "",
  "id": "cogmento-free-crm-application-testing;close-the-browser",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 72,
      "name": "@EndToEnd"
    }
  ]
});
formatter.step({
  "line": 74,
  "name": "This is a Close the Browser Test",
  "keyword": "Given "
});
formatter.match({
  "location": "TaggingStepDefinition.this_is_a_Close_the_Browser_Test()"
});
formatter.result({
  "duration": 827992500,
  "status": "passed"
});
});