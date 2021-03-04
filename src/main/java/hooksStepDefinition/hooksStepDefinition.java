package hooksStepDefinition;
import java.util.Map;
import java.util.concurrent.TimeUnit;
import cucumber.api.DataTable;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
public class hooksStepDefinition {
	
	
	public static WebDriver driver;
	
	@Before
	public void SetUp() throws InterruptedException{
	System.setProperty("webdriver.chrome.driver", "C:/Users/tamji/OneDrive/Desktop/Selenium/chromedriver.exe");
	driver = new ChromeDriver(); 
		    
	driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
	driver.manage().deleteAllCookies(); 
	driver.manage().window().maximize();
	driver.get("https://ui.cogmento.com/");
	Thread.sleep(3000);
	driver.findElement(By.name("email")).sendKeys("abcdtesting3@gmail.com");
	driver.findElement(By.name("password")).sendKeys("Abcd1234");
	Thread.sleep(2000);
	WebElement loginBtn = driver.findElement(By.xpath("//div[@class='ui fluid large blue submit button']"));	   
    JavascriptExecutor js = (JavascriptExecutor)driver;
    js.executeScript("arguments[0].click();", loginBtn);		   
    Thread.sleep(3000);
	}	
	
	@After
	public void TearDown() throws InterruptedException{
	driver.findElement(By.xpath("/html[1]/body[1]/div[1]/div[1]/div[2]/div[1]/div[3]/div[2]/div[1]/i[1]")).click();  
	Thread.sleep(3000);
	driver.findElement(By.xpath("//span[contains(text(),'Log Out')]")).click(); 
	Thread.sleep(2000);	
	driver.quit();  
		  }
	
	@Given("^User in on Deal Page$")
	public void user_in_on_Deal_Page() throws InterruptedException{
	WebElement deal = driver.findElement(By.xpath("//span[contains(text(),'Deals')]"));	   
	Actions act1 = new Actions (driver);
	act1.moveToElement(deal).click().build().perform(); 	 
	Thread.sleep(2000);	
	
	}

	@When("^User fills the Deals Form$")
	public void user_fills_the_Deals_Form() throws InterruptedException {
	driver.findElement(By.xpath("//button[contains(text(),'New')]")).click();
	Thread.sleep(3000);	 
	driver.findElement(By.xpath("//input[@name='title']")).sendKeys("Test Deal 004");
	Thread.sleep(2000);  
	driver.findElement(By.xpath("//input[@name='probability']")).sendKeys("10");
	Thread.sleep(2000);  
	driver.findElement(By.xpath("//input[@name='amount']")).sendKeys("5000");
	Thread.sleep(2000);  
	driver.findElement(By.xpath("//input[@name='commission']")).sendKeys("200");
	Thread.sleep(2000);
	}

	@Then("^Deal is created$")
	public void deal_is_created() throws InterruptedException{
	driver.findElement(By.xpath("//button[@class='ui linkedin button']")).click();
	Thread.sleep(2000);
	driver.navigate().to("https://ui.cogmento.com/");
    Thread.sleep(2000);			
	}
	
	@Given("^User is on Contact Page$")
	public void user_is_on_Contact_Page() throws InterruptedException{
	WebElement Contacts = driver.findElement(By.xpath("//span[contains(text(),'Contacts')]"));	   
    Actions act6 = new Actions (driver);
    act6.moveToElement(Contacts).click().build().perform();
    Thread.sleep(3000);	  
	}

	
	@When("^User fills the Contact Form$")
	public void user_fills_the_Contact_Form() throws InterruptedException{
	driver.findElement(By.xpath("//button[contains(text(),'New')]")).click(); 
    Thread.sleep(3000);
    driver.findElement(By.xpath("//input[@name='first_name']")).sendKeys("Faisal");
    driver.findElement(By.xpath("//input[@name='last_name']")).sendKeys("Khan"); 
    Thread.sleep(3000);	  
	}

	@Then("^Contact is created$")
	public void contact_is_created() throws InterruptedException{
	driver.findElement(By.xpath("//button[@class='ui linkedin button']")).click();
	Thread.sleep(3000);    
	driver.navigate().to("https://ui.cogmento.com/");
    Thread.sleep(2000);	
	}
    
	@Given("^User is on Task Page$")
	public void user_is_on_Task_Page() throws InterruptedException{
	WebElement task = driver.findElement(By.xpath("//span[contains(text(),'Tasks')]"));	   
	Actions act10 = new Actions (driver);
	act10.moveToElement(task).click().build().perform(); 	 
	Thread.sleep(3000);	
	driver.findElement(By.xpath("//button[contains(text(),'New')]")).click();
	Thread.sleep(3000);	  
	}

	@When("^User fills the Task form \"(.*)\"$")
	public void user_fills_the_Task_form(String Title) throws InterruptedException{
	driver.findElement(By.xpath("//input[@name='title']")).sendKeys(Title);
	Thread.sleep(2000);}


	@Then("^Task is created$")
	public void task_is_created() throws InterruptedException{	
	WebElement SaveBtn = driver.findElement(By.xpath("//button[@class='ui linkedin button']"));	   
	JavascriptExecutor js = (JavascriptExecutor)driver;
	js.executeScript("arguments[0].click();", SaveBtn);		   
	Thread.sleep(3000);
	}
	
	
}
	
