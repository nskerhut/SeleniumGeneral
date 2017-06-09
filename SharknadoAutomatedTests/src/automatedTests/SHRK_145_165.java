package automatedTests;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;

import automatedFramework.*;

public class SHRK_145_165 
{
	  private SHRK_145_165() 
	  {
		  throw new IllegalAccessError("Utility class");	
	  }
	public static void main(String[] args)
	{
	
		// Variables 
		WebDriver driver;

		// get the driver and login
		driver = Login.GetDriver("firefox");
		Login.login(driver);
			
		//navigate to projects page
		Navi.projects(driver);
		
		//sleep to load all projects and employees
		GeneralMethods.sleep(8000);
		
		//add employee to a project with a certain allocation of hours
		employeeToProject("Yorel Baker","Project Beta","12",driver);
		
		//remove employee from a project 
		removeEmployee("Yorel Baker","Project Beta",driver);
		
		dragToProject("Bob Barker", "Project Tiger", "20", driver);
		
		dragToRemove("Bob Barker", "Project Tiger", driver);
		
		
		driver.quit();

		



	}
	
	public static void employeeToProject(String employee, String Project, String hours, WebDriver driver)
	{
		//store employee hamburger element
		WebElement avaEmployeeMenu = driver.findElement(By.xpath("//span[@title='edit employee']/../div[.='" + employee + "']/../span[@title='employee menu']"));
		
		//click employee hamburger to open sub menu
		GeneralMethods.jsClick(avaEmployeeMenu, driver);
		//avaEmployeeMenu.click();
		
		GeneralMethods.sleep(1000);
		
		//store add to project sub menu
		WebElement addToProject = driver.findElement(By.xpath("//a[contains (., 'Add to Project')]"));

		//click add to project sub menu to open add to project modal
		addToProject.click();
		
		//sleep to wait for modal
		GeneralMethods.sleep(1000);
		
		//Storing Select drop down elements
		Select addProject = new Select(driver.findElement(By.xpath("//h3[text() = 'Project:']/../select")));
		Select allocateHours = new Select(driver.findElement(By.xpath("//h4[contains(., 'Employee:')]/../select")));
		
		//Select Project
		addProject.selectByVisibleText(Project);
		
		//select hours to allocate to the project 
		allocateHours.selectByVisibleText(hours);
		
		//store save button element
		WebElement saveAdd = driver.findElement(By.xpath("//h4[contains(., 'Employee:')]/../..//button[text() = 'Save changes']"));
		
		//click save button
		saveAdd.click();
		
		//sleep for end of method
		GeneralMethods.sleep(3000);

		
	}
	
	public static void removeEmployee(String employee, String project,WebDriver driver)
	{
		WebElement employeeMenuInProject = driver.findElement(By.xpath("//div[@class = 'panel-info' and contains(.,'" + project + "') ]//div[text() = '" + employee + "']/../span[@title = 'employee menu']"));
		//WebElement employeesAvaTable = driver.findElement(By.xpath("//li[@class = 'list-group-item']"));

		GeneralMethods.jsClick(employeeMenuInProject, driver);
		
		//sleep for employee menu
		GeneralMethods.sleep(1000);
		
		//store add to project sub menu
		WebElement removeFromProject = driver.findElement(By.xpath("//a[contains (., 'Remove from project')]"));

		//click add to project sub menu to open add to project modal
		removeFromProject.click();
		
		//sleep for end of method
		GeneralMethods.sleep(3000);
		
		
	}
	
	public static void dragToProject(String employee, String project, String hours, WebDriver driver)
	{
		//store employee to drag and project to be dragged to
		WebElement employeeElement = driver.findElement(By.xpath("//li[@class = 'list-group-item']//div[text() = '" + employee + "']"));
		WebElement projectElement = driver.findElement(By.xpath("//div[@class ='panel-info' and contains(., '" + project + "')] //div[@id = 'Projpanel']"));
		
		//drag and drop
		GeneralMethods.dragAndDrop(employeeElement, projectElement, driver);
		
		//sleep to wait for modal
		GeneralMethods.sleep(2000);
		
		//store Select for hours
		Select allocateHours = new Select(driver.findElement(By.xpath("//h4[contains(., 'Employee:')]/../select")));

		//select hours to allocate to the project 
		allocateHours.selectByVisibleText(hours);
		
		//store save button element
		WebElement saveAdd = driver.findElement(By.xpath("//h4[contains(., 'Employee:')]/../..//button[text() = 'Save changes']"));
		
		//click save button
		GeneralMethods.jsClick(saveAdd, driver);
		
		//sleep for end of method
		GeneralMethods.sleep(3000);
		
		
	}
	
	public static void dragToRemove(String employee, String project,WebDriver driver)
	{
		//store employee to be dragged and the available employee table to be dragged to
		WebElement employeeMenuInProject = driver.findElement(By.xpath("//div[@class = 'panel-info' and contains(.,'" + project + "') ]//div[text() = '" + employee + "']/../span[@title = 'employee menu']"));
		WebElement employeesAvaTable = driver.findElement(By.xpath("//li[@class = 'list-group-item']"));

		//drag and drop employee to available employee table
		GeneralMethods.dragAndDrop(employeeMenuInProject, employeesAvaTable, driver);
		
		//sleep for end of method 
		GeneralMethods.sleep(3000);
	}
}

