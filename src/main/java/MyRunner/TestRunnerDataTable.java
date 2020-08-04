package MyRunner;
import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
	
	@RunWith(Cucumber.class)
	@CucumberOptions(
	features = "C:\\Users\\tamji\\eclipse-workspace\\CucumberDemo_P1\\src\\main\\java\\Features\\DataTable.feature", // The path of the Feature files
	glue={"DataTableStepDefinition"}, //	The path of the step definition files
	plugin = {"pretty","html:test-outout3", "json:json_output/cucumber.json", "junit:junit_xml/cucumber.xml"}, // to generate different types of reporting		
	monochrome = true, // display the console output in a proper readable format 
	strict = true, // it will check any step is not defined in step definition file
	dryRun = false // to check the mapping between feature file and step definition file
	)
  
	public class TestRunnerDataTable {

}
