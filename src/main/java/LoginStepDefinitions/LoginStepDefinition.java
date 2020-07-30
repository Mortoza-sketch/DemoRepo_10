package LoginStepDefinitions;
import java.util.concurrent.TimeUnit;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;	
public class LoginStepDefinition {
	
	   WebDriver driver;
	   @Given("^user is already on Login Page$")
	   public void user_is_already_on_login_page() throws InterruptedException{
	
	   System.setProperty("webdriver.chrome.driver", "C:/Users/tamji/OneDrive/Desktop/Selenium/chromedriver.exe");
	   driver = new ChromeDriver(); 
	    
	   driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
	   driver.manage().deleteAllCookies(); 
	   driver.manage().window().maximize();
	   driver.get("https://ui.cogmento.com/");
	   Thread.sleep(5000);
	   }
	    
	   @When("^title of Login Page is Cogmento CRM$")
	   public void title_of_Login_Page_is_Cogmento_CRM() throws InterruptedException{
	   String title = driver.getTitle();
	   System.out.println(title);
	   Assert.assertEquals("Cogmento CRM", title);
	   Thread.sleep(5000);
	   } 
	    
	   @Then("^user enters username and password$")
	   public void user_enters_username_and_password() throws InterruptedException {   
	   driver.findElement(By.name("email")).sendKeys("abcdtesting3@gmail.com");
	   driver.findElement(By.name("password")).sendKeys("Abcd1234");
	   Thread.sleep(5000);}
	   
	   @Then("^user clicks on Login button$")
	   public void user_clicks_on_Login_button() throws InterruptedException{	   
	   WebElement loginBtn = driver.findElement(By.xpath("//div[@class='ui fluid large blue submit button']"));	   
	   JavascriptExecutor js = (JavascriptExecutor)driver;
       js.executeScript("arguments[0].click();", loginBtn);		   
       Thread.sleep(5000);}
	   
	   @Then("^user is on Homepage$")
	   public void user_is_on_Homepage() {
	   String title = driver.getTitle();	   
	   System.out.println("Home Page Title ::" +title);
	   Assert.assertEquals("Cogmento CRM", title);}

	   }
		   

	   

		   
	   
	   
	   
	   
   
	    
	    
	    
	    
	
	
	    
	    
	    
	    
	    


		
 