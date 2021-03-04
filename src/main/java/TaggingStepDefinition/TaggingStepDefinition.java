package TaggingStepDefinition;
import java.util.concurrent.TimeUnit;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;
import cucumber.api.java.en.Given;
public class TaggingStepDefinition {
	
	    public static WebDriver driver;

       	@Given("^This is a valid Login Test$")
	    public void this_is_a_valid_Login_Test() throws InterruptedException{
		
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

	    @Given("^This is an invalid Login Test$")
	    public void this_is_an_invalid_Login_Test() throws InterruptedException{
	    driver.get("https://ui.cogmento.com");
		driver.manage().deleteAllCookies();
	    driver.manage().window().maximize();
	 	driver.findElement(By.name("email")).sendKeys("abcdtesting2@gmail.com");
	 	driver.findElement(By.name("password")).sendKeys("Abcd1235");
	 	Thread.sleep(2000); 	
	 	WebElement loginBtn = driver.findElement(By.xpath("//div[@class='ui fluid large blue submit button']"));	   
	    JavascriptExecutor js = (JavascriptExecutor)driver;
        js.executeScript("arguments[0].click();", loginBtn);		   
        Thread.sleep(3000);
    	} 

    	@Given("^This is a Contact Test Case$")
	    public void this_is_a_Contact_Test_Case() throws InterruptedException {
    		
    	WebElement Contacts = driver.findElement(By.xpath("//span[contains(text(),'Contacts')]"));	   
    	Actions act6 = new Actions (driver);
    	act6.moveToElement(Contacts).click().build().perform();
    	Thread.sleep(3000); 	
    	driver.findElement(By.xpath("//button[contains(text(),'New')]")).click(); 
    	Thread.sleep(3000);
    	driver.findElement(By.xpath("//input[@name='first_name']")).sendKeys("Faisal");
    	driver.findElement(By.xpath("//input[@name='last_name']")).sendKeys("Khan"); 
    	Thread.sleep(2000);
    	driver.findElement(By.xpath("//button[@class='ui linkedin button']")).click();
    	Thread.sleep(3000);}
	

	     @Given("^This is a Deal Test Case$")
	     public void this_is_a_Deal_Test_Case() throws InterruptedException{
	     WebElement deal = driver.findElement(By.xpath("//span[contains(text(),'Deals')]"));	   
	     Actions act1 = new Actions (driver);
	     act1.moveToElement(deal).click().build().perform(); 	 
	     Thread.sleep(2000);
	     driver.findElement(By.xpath("//button[contains(text(),'New')]")).click();
	     Thread.sleep(3000);	 
	     driver.findElement(By.xpath("//input[@name='title']")).sendKeys("Test Deal 004");
	     Thread.sleep(2000);  
	     driver.findElement(By.xpath("//button[@class='ui linkedin button']")).click();
	     Thread.sleep(2000);
	     driver.navigate().to("https://ui.cogmento.com/");
		 Thread.sleep(2000);	
 
         }

	     @Given("^This is a Tasks Test Case$")
	     public void this_is_a_Tasks_Test_Case() throws InterruptedException{
	     WebElement task = driver.findElement(By.xpath("//span[contains(text(),'Tasks')]"));	   
		 Actions act2 = new Actions (driver);
		 act2.moveToElement(task).click().build().perform(); 	 
		 Thread.sleep(3000);
		 driver.findElement(By.xpath("//button[contains(text(),'New')]")).click();
		 Thread.sleep(3000);	 
		 driver.findElement(By.xpath("//input[@name='title']")).sendKeys("Test Task 001");
		 Thread.sleep(3000);  
		 driver.findElement(By.xpath("//div[@name='deal']//input[@class='search']")).sendKeys("Test Deal36");
		 driver.findElement(By.xpath("//div[@name='case']//input[@class='search']")).sendKeys("Test Case69");
		 driver.findElement(By.xpath("//button[@class='ui linkedin button']")).click();
		 Thread.sleep(2000);
	     }

	    @Given("^This is a Case Test case$")
	    public void this_is_a_Case_Test_case() throws InterruptedException{
	    WebElement Case = driver.findElement(By.xpath("//span[contains(text(),'Cases')]"));	   
		Actions act3 = new Actions (driver);
		act3.moveToElement(Case).click().build().perform(); 	 
		Thread.sleep(2000);
		driver.findElement(By.xpath("//button[contains(text(),'New')]")).click();
		Thread.sleep(3000);	 
		driver.findElement(By.xpath("//input[@name='title']")).sendKeys("Test Case 001");
		Thread.sleep(3000);  
		driver.findElement(By.xpath("//button[@class='ui linkedin button']")).click();
		Thread.sleep(2000);
	    }

	    @Given("^This is a Search Deal Test$")
	    public void this_is_a_Search_Deal_Test() throws InterruptedException{
        driver.findElement(By.xpath("//input[@placeholder='Search']")).sendKeys("Test Deal 004");
        Thread.sleep(3000);
        driver.navigate().to("https://ui.cogmento.com/");
        Thread.sleep(2000);
	    }

	    @Given("^This is a Search Contact Test$")
	    public void this_is_a_Search_Contact_Test() throws InterruptedException{
	    driver.findElement(By.xpath("//input[@placeholder='Search']")).sendKeys("Faisal Khan");
	    Thread.sleep(3000);
	    driver.navigate().to("https://ui.cogmento.com/");
	    Thread.sleep(2000);	
	    }

	    @Given("^This is a Search Case Test$")
	    public void this_is_a_Search_Case_Test() throws InterruptedException {
	    driver.findElement(By.xpath("//input[@placeholder='Search']")).sendKeys("Test Case 001");
		Thread.sleep(3000);
		driver.navigate().to("https://ui.cogmento.com/");
		Thread.sleep(4000);	

	    }

	    @Given("^This is a Search Task Test$")
	    public void this_is_a_Search_Task_Test() throws InterruptedException{
	    driver.findElement(By.xpath("//input[@placeholder='Search']")).sendKeys("Test Task 005");
		Thread.sleep(4000);
		driver.navigate().to("https://ui.cogmento.com/");
		Thread.sleep(3000);	
	    }

	    @Given("^This is a Search Call Test$")
	    public void this_is_a_Search_Call_Test() throws InterruptedException{
	    driver.findElement(By.xpath("//input[@placeholder='Search']")).sendKeys("267-9685560");
		Thread.sleep(3000);
		driver.navigate().to("https://ui.cogmento.com/");
		Thread.sleep(2000);		

	   }

	  @Given("^This is a Search an email Test$")
	  public void this_is_a_Search_an_email_Test() throws InterruptedException{
	  driver.findElement(By.xpath("//input[@placeholder='Search']")).sendKeys("abcdtesting4@gmail.com");
	  Thread.sleep(3000);
	  driver.navigate().to("https://ui.cogmento.com/");
	  Thread.sleep(2000);	
	  }

	  @Given("^This is a Search Document Test$")
	  public void this_is_a_Search_Document_Test() throws InterruptedException{
	  driver.findElement(By.xpath("//input[@placeholder='Search']")).sendKeys("Test Folder 002");
	  Thread.sleep(3000);
	  driver.navigate().to("https://ui.cogmento.com/");
	  Thread.sleep(2000);		  

	  }

	  @Given("^This is a Search Form Test$")
	  public void this_is_a_Search_Form_Test() throws InterruptedException{
	  driver.findElement(By.xpath("//input[@placeholder='Search']")).sendKeys("Test Form 001");
	  Thread.sleep(3000);
	  driver.navigate().to("https://ui.cogmento.com/");
	  Thread.sleep(2000);	  

    	}

	  @Given("^This is a validate a Report Test$")
	  public void this_is_a_validate_a_Report_Test() throws InterruptedException{
	  driver.findElement(By.xpath("//input[@placeholder='Search']")).sendKeys("Test Report 001");
	  Thread.sleep(3000);
	  driver.navigate().to("https://ui.cogmento.com/");
	  Thread.sleep(2000);

	 }

	  @Given("^This is an Application Log out Test$")
	  public void this_is_an_Application_Log_out_Test() throws InterruptedException{
	  driver.findElement(By.xpath("/html[1]/body[1]/div[1]/div[1]/div[2]/div[1]/div[3]/div[2]/div[1]/i[1]")).click();  
	  Thread.sleep(3000);
	  driver.findElement(By.xpath("//span[contains(text(),'Log Out')]")).click(); 
	  Thread.sleep(2000);
	
	  }

	  @Given("^This is a Close the Browser Test$")
	  public void this_is_a_Close_the_Browser_Test(){	  
	  driver.quit();  
	  }



}
