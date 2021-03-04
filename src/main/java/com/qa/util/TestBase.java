package com.qa.util;
import java.io.FileInputStream;
import java.io.IOException;
import java.util.Properties;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
public class TestBase {
	
	public static WebDriver driver;
	public static Properties prop;
	
    public TestBase() {
    	try {
    		prop = new Properties ();
    		FileInputStream fis = new FileInputStream("C:/Users/tamji/eclipse-workspace/CucumberDemo_P1/"
    				+ "src/main/java/com/qa/config/config.properties");
    	prop.load(fis);}	
    	catch (IOException e){
    	   e.getMessage();
    	}
    }
	
    //Initialization Method
    
    public static void initialization() {
    	
    	String browserName = prop.getProperty("browser");
    	
    	if(browserName.equals("chrome"))
    	{
    		System.setProperty("webdriver.chrome.driver", "C:/Users/tamji/OneDrive/Desktop/Selenium/chromedriver_win32/chromedriver.exe");
    		driver = new ChromeDriver();    		
    	}
    	
    	else if(browserName.equals("FF"))
    	{
    		System.setProperty("webdriver.gecko.driver", "C:/Users/tamji/OneDrive/Desktop/Selenium/FireFox/geckodriver-v0.27.0-win32.exe");
    		driver = new ChromeDriver();    		
    	}	
    	
    	driver.manage().window().maximize();   
	    driver.manage().deleteAllCookies(); 
	    driver.manage().timeouts().pageLoadTimeout(TestUtil.PAGE_LOAD_TIMEOUT, TimeUnit.SECONDS);
	    driver.manage().timeouts().pageLoadTimeout(TestUtil.IMPLICIT_WAIT, TimeUnit.SECONDS); 
	    
	    driver.get(prop.getProperty("url"));
	    
} 
}