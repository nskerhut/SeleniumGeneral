package automatedTests;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Action;
import org.openqa.selenium.interactions.Actions;

import automatedFramework.*;

public class SHRK_145_165 
{
	public static void main(String[] args)
	{
	
		// Variables 
		WebDriver driver;
		
		
		
		// get the driver and login
		driver = SharknadoLogin.GetDriver("ie");
		SharknadoLogin.login(driver);
	
		Actions Builder = new Actions(driver);
		
		//navigate to projects page
		driver.findElement(By.xpath("//a[text() = 'Projects']")).click();
		
		SharknadoLogin.sleep(15000);
		
		WebElement avaYorel = driver.findElement(By.xpath("//li[@class = 'list-group-item']//div[text() = 'Yorel Baker']"));
		WebElement projBob = driver.findElement(By.xpath("//div[@class = 'panel-info' and contains(.,'bob') ]/div[@id = 'Projpanel']"));
		
		//WebElement projBobYorel = driver.findElement(By.xpath("//div[@class = 'panel-info' and contains(.,'bob') ]//div[text() = 'Yorel Baker']"));
		//WebElement avaEmployees = driver.findElement(By.xpath("//li[@class = 'list-group-item']"));
		Action test = Builder.dragAndDrop(driver.findElement(By.xpath("//li[@class = 'list-group-item']//div[text() = 'Yorel Baker']")), driver.findElement(By.xpath("//div[@class = 'panel-info' and contains(.,'bob') ]/div[@id = 'Projpanel']"))).build();
		
		test.perform();
		
		SharknadoLogin.sleep(3000);
		
		//dragEmployee.dragAndDrop(projBobYorel, avaEmployees).perform();
		
		//driver.quit();
		
	
	}
}
