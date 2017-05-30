package automatedFramework;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;

public class SharknadoLogin {
	
	public static WebDriver GetDriver(String browser)
	{
		WebDriver driver;
		
		if (browser == "ie")
		{
			System.setProperty("webdriver.ie.driver", "C:\\Program Files\\Java\\seleniumDrivers\\IEDriverServer.exe");
			driver = new InternetExplorerDriver();
			return driver;
		}
		else if(browser == "firefox")
		{
			System.setProperty("webdriver.gecko.driver", "C:\\Program Files\\Java\\seleniumDrivers\\geckodriver.exe");
			driver = new FirefoxDriver();
			return driver;
		}
		else if(browser == "chrome")
		{
			System.setProperty("webdriver.chrome.driver", "C:\\Program Files\\Java\\seleniumDrivers\\chromedriver.exe");
			driver = new ChromeDriver();
			return driver;
		}
		else 
		{
			System.setProperty("webdriver.ie.driver", "C:\\Program Files\\Java\\seleniumDrivers\\IEDriverServer.exe");
		}
		driver = new InternetExplorerDriver();
		return driver;
		
	}
	
	public static void login(WebDriver driver)
	{
		//navigate to home page
		driver.navigate().to("http://Localhost:3000");
		
		//sleep for 2 secs
		sleep(2000);
		
		//Click the login button 
		driver.findElement(By.xpath("//a[text() = 'Login']")).click();
		
		//sleep for 2 secs
		sleep(2000);
		
		//clear and send username to  username text field
		driver.findElement(By.id("userName")).clear();
		driver.findElement(By.id("userName")).sendKeys("Mitch");
		
		//clear and send password to password text field
		driver.findElement(By.id("password")).clear();
		driver.findElement(By.id("password")).sendKeys("Owens");
		
		//click submit to sign in
		driver.findElement(By.xpath("//input[@class = 'btn-yes btn']")).click();
		
		//sleep for 2 secs
		sleep(2000);
		
		
	}
	
	public static void sleep(int x)
	{
		try        
		{
		    Thread.sleep(x);
		} 
		catch(InterruptedException ex) 
		{
		    Thread.currentThread().interrupt();
		}
		
	}
}

