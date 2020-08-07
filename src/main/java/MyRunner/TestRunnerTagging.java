package MyRunner;
import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
features = "C:\\Users\\tamji\\eclipse-workspace\\CucumberDemo_P1\\src\\main\\java\\Features\\tagging.feature", // The path of the Feature files
glue={"TaggingStepDefinition"}, //	The path of the step definition files
plugin = {"pretty","html:test-outout5", "json:json_output/cucumber.json", "junit:junit_xml/cucumber.xml"}, // to generate different types of reporting		
monochrome = true, // display the console output in a proper readable format 
strict = true, // it will check any step is not defined in step definition file
dryRun = false, // to check the mapping between feature file and step definition file
tags = {"~@SmokeTest"}
)

public class TestRunnerTagging {

}

    //ORed  : tags = {"@SmokeTest , @RegressionTest"}          --> execute all tests tagged as @SmokeTest OR @RegressionTest
    //Meaning Run all the Test cases that has either @SmokeTest or @RegressionTest
                                                                       
	//ANDed : tags = tags = {"@SmokeTest" , "@RegressionTest"}  --> execute all tests tagged as @SmokeTest AND @RegressionTest
    //Meaning Run all the Test cases that has @SmokeTest And @RegressionTest
    // tags = {"~@RegressionTest" , "~@SmokeTest" , "~@EndToEnd"} --> "~" in order to ignore all the Tests
   