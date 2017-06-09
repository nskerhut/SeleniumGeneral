package automatedFramework;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class Navi {
	
	  private Navi()
	  {
		  throw new IllegalAccessError("Utility class");
	  }
	
	public static void home (WebDriver driver)
	{
		//store dashboard navi element
		WebElement home = driver.findElement(By.xpath("//a[text() = 'Home']"));
	
		//click dashboard navi element
		home.click();
	}
	
	public static void register (WebDriver driver)
	{
		//store dashboard navi element
		WebElement register = driver.findElement(By.xpath("//a[text() = 'Register']"));
	
		//click dashboard navi element
		register.click();
	}
	
	public static void employee (WebDriver driver)
	{
		//store dashboard navi element
		WebElement employee = driver.findElement(By.xpath("//a[text() = 'Employee']"));
	
		//click dashboard navi element
		employee.click();
	}
	
	public static void projects (WebDriver driver)
	{
		//store dashboard navi element
		WebElement projects = driver.findElement(By.xpath("//a[text() = 'Projects']"));
	
		//click dashboard navi element
		projects.click();
	}
	
	public static void search (WebDriver driver)
	{
		//store dashboard navi element
		WebElement search = driver.findElement(By.xpath("//a[text() = 'Search']"));
	
		//click dashboard navi element
		search.click();
	}
	
	public static void profile (WebDriver driver)
	{
		//store dashboard navi element
		WebElement profile = driver.findElement(By.xpath("//a[text() = 'Profile']"));
	
		//click dashboard navi element
		profile.click();
	}
	
	public static void logout (WebDriver driver)
	{
		//store dashboard navi element
		WebElement logout = driver.findElement(By.xpath("//a[text() = 'Logout']"));
	
		//click dashboard navi element
		logout.click();
	}	
	public static void login (WebDriver driver)
	{
		//store dashboard navi element
		WebElement login = driver.findElement(By.xpath("//a[text() = 'Login']"));
	
		//click dashboard navi element
		login.click();
	}
	
}
