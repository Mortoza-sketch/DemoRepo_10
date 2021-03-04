package DataTableStepDefinition;
import java.util.List;
import java.util.concurrent.TimeUnit;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;
import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
public class DataTableStepDefinition {
	
	   WebDriver driver;
	   @Given("^User is Already On Login Page$")
	   public void User_is_already_on_login_page() throws InterruptedException{
	
	   System.setProperty("webdriver.chrome.driver", "C:/Users/tamji/OneDrive/Desktop/Selenium/chromedriver_win32/chromedriver.exe");
	   driver = new ChromeDriver();
	   driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);	   
	   driver.manage().deleteAllCookies();
	   driver.get("https://ui.cogmento.com/");
	   driver.manage().window().maximize();
       Thread.sleep(3000);
       }
	   
	   @When("^Title Of Login Page Is Cogmento CRM$")
	   public void Title_of_Login_Page_is_Cogmento_CRM() throws InterruptedException{
	   String title = driver.getTitle();
	   System.out.println(title);
	   Assert.assertEquals("Cogmento CRM", title);
	   Thread.sleep(3000);
	   }
	   
	   @Then("^User enters Username And PassworD$") 
	   public void user_enters_username_and_password(DataTable credentials) throws InterruptedException {   
		    List<List<String>> data = credentials.raw();
	   driver.findElement(By.name("email")).sendKeys(data.get(0).get(0));
	   driver.findElement(By.name("password")).sendKeys(data.get(0).get(1));
	   Thread.sleep(3000);}
	   
	   @Then("^User clicks On Login Button$")
	   public void User_clicks_on_Login_button() throws InterruptedException{	   
	   WebElement loginBtn = driver.findElement(By.xpath("//div[@class='ui fluid large blue submit button']"));	   
	   JavascriptExecutor js = (JavascriptExecutor)driver;
       js.executeScript("arguments[0].click();", loginBtn);		   
       Thread.sleep(3000);}
	   
	   @Then("^User Is On Homepage$")
	   public void User_is_on_Homepage() {
	   String title = driver.getTitle();	   
	   System.out.println("Home Page Title ::" +title);
	   Assert.assertEquals("Cogmento CRM", title);}
	   
	   @Then("^User moves to Deal Page$")
	   public void User_moves_to_Deal_Page() throws InterruptedException {
	   WebElement contacts = driver.findElement(By.xpath("//span[contains(text(),'Deals')]"));	   
	   Actions act = new Actions (driver);
	   act.moveToElement(contacts).click().build().perform();
	   Thread.sleep(3000);}
	   
	   @Then("^user enters deal details$")
	   public void user_enters_deal_details(DataTable dealData) throws InterruptedException {
	   driver.findElement(By.xpath("//button[contains(text(),'New')]")).click(); 
	   Thread.sleep(3000);
	       List<List<String>> dealvalues = dealData.raw();
	   driver.findElement(By.xpath("//input[@name='title']")).sendKeys(dealvalues.get(0).get(0));
	   Thread.sleep(2000);
       driver.findElement(By.xpath("//input[@name='amount']")).sendKeys(dealvalues.get(0).get(1)); 
       Thread.sleep(2000);
       driver.findElement(By.xpath("//input[@name='probability']")).sendKeys(dealvalues.get(0).get(2));
       Thread.sleep(2000);
       driver.findElement(By.xpath("//input[@name='commission']")).sendKeys(dealvalues.get(0).get(3));
       Thread.sleep(2000);}
	   
	   @Then("^User clicks on Save Button$")
	   public void User_clicks_on_save_button() throws InterruptedException {
	   driver.findElement(By.xpath("//button[@class='ui linkedin button']")).click();	   
	   Thread.sleep(3000);}
	   
	   @Then("^Close The BrowseR$")
	   public void Close_the_browser(){
	   driver.quit(); }
	   
   

}