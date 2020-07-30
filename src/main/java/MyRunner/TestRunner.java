package MyRunner;
import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
	        @CucumberOptions(
			features = "C:\\Users\\tamji\\eclipse-workspace\\CucumberDemo_P1\\src\\main\\java\\Features\\login.feature", //The path of the Feature file
			glue={"LoginStepDefinitions"},		
			
		    plugin = {"pretty","html:test-outout"},			
		    dryRun = false 
			)

	public class TestRunner {
	 
	}


