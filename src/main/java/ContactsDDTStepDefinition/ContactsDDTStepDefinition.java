package ContactsDDTStepDefinition;
import java.util.concurrent.TimeUnit;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
public class ContactsDDTStepDefinition {
	
	
	   WebDriver driver;
	   @Given("^User is Already on Login Page$")
	   public void User_is_already_on_login_page() throws InterruptedException{
	
	   System.setProperty("webdriver.chrome.driver", "C:/Users/tamji/OneDrive/Desktop/Selenium/chromedriver_win32/chromedriver.exe");
	   driver = new ChromeDriver(); 
	    
	   driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
	   driver.manage().deleteAllCookies(); 
	   driver.manage().window().maximize();
	   driver.get("https://ui.cogmento.com/");
	   Thread.sleep(3000);
	   }
	    
	   @When("^Title of Login Page Is Cogmento CRM$")
	   public void Title_of_Login_Page_is_Cogmento_CRM() throws InterruptedException{
	   String title = driver.getTitle();
	   System.out.println(title);
	   Assert.assertEquals("Cogmento CRM", title);
	   Thread.sleep(3000);
	   } 
	    
	   @Then("^User Enters \"(.*)\" and \"(.*)\"$") 
	   public void user_enters_username_and_password(String username, String password) throws InterruptedException {   
	   driver.findElement(By.name("email")).sendKeys(username);
	   driver.findElement(By.name("password")).sendKeys(password);
	   Thread.sleep(3000);}
	  
	   @Then("^User clicks on Login Button$")
	   public void User_clicks_on_Login_button() throws InterruptedException{	   
	   WebElement loginBtn = driver.findElement(By.xpath("//div[@class='ui fluid large blue submit button']"));	   
	   JavascriptExecutor js = (JavascriptExecutor)driver;
       js.executeScript("arguments[0].click();", loginBtn);		   
       Thread.sleep(3000);}
	   
	   @Then("^User Is on Homepage$")
	   public void User_is_on_Homepage() {
	   String title = driver.getTitle();	   
	   System.out.println("Home Page Title ::" +title);
	   Assert.assertEquals("Cogmento CRM", title);}
	   
	   @Then("^User moves to new Contact Page$")
	   public void User_moves_to_new_contact_page() throws InterruptedException {
	   WebElement contacts = driver.findElement(By.xpath("//span[contains(text(),'Contacts')]"));	   
	   Actions act = new Actions (driver);
	   act.moveToElement(contacts).click().build().perform();
	   Thread.sleep(3000);}
	   
	   
	   @Then("^user enters contact details \"(.*)\" and \"(.*)\" and \"(.*)\"$")
	   public void User_enters_first_name_and_last_name_and_position(String firstname, String lastname, String position) throws InterruptedException {
	   driver.findElement(By.xpath("//button[contains(text(),'New')]")).click(); 
	   Thread.sleep(3000);
	   driver.findElement(By.xpath("//input[@name='first_name']")).sendKeys(firstname);
       driver.findElement(By.xpath("//input[@name='last_name']")).sendKeys(lastname); 
       driver.findElement(By.xpath("//input[@name='position']")).sendKeys(position);
       Thread.sleep(3000);}

	   @Then("^User clicks on Save button$")
	   public void User_clicks_on_save_button() throws InterruptedException {
	   driver.findElement(By.xpath("//button[@class='ui linkedin button']")).click();	   
	   Thread.sleep(3000);}
	   
	   @Then("^Verify new Contact created$")
	   public void Verify_new_contact_created() throws InterruptedException {
	   Assert.assertTrue(driver.getPageSource().contains("Max Payne"));
	   Thread.sleep(3000);} 
	   
	   @Then("^Close The Browser$")
	   public void Close_the_browser(){
	   driver.quit(); } 

}
