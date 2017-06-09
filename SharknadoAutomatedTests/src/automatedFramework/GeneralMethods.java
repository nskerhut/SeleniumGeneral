package automatedFramework;

import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class GeneralMethods {
	  
	private GeneralMethods() {
		    throw new IllegalAccessError("Utility class");
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
	
	public static void jsClick(WebElement click, WebDriver driver)
	{
		((JavascriptExecutor) driver).executeScript("arguments[0].click();", new Object[] {click});

	}
	
	
	//found this at https://www.packtpub.com/books/content/javascript-execution-selenium
	//uses JS to simulate drag and drop
	private static void dragDrop(WebElement elementToDrag, WebElement target, WebDriver driver) throws Exception 
	{
		JavascriptExecutor js = (JavascriptExecutor) driver;
		js.executeScript("function createEvent(typeOfEvent) {\n" +	
		"var event = document.createEvent(\"CustomEvent\");\n" + 
		"event.initCustomEvent(typeOfEvent, true, true, null);\n" + 
		"   event.dataTransfer = {\n" + "       data: {},\n" +
		"       setData: function (key, value) {\n" +
		"           this.data[key] = value;\n" +
		"       },\n" +
		"       getData: function (key) {\n" +
		"           return this.data[key];\n" +
		"       }\n" +
		"   };\n" +
		"   return event;\n" +
		"}\n" +
		"\n" +
		"function dispatchEvent(element, event, transferData) {\n" +
		"   if (transferData !== undefined) {\n" +
		"       event.dataTransfer = transferData;\n" +
		"   }\n" +
		"   if (element.dispatchEvent) {\n" +
		"       element.dispatchEvent(event);\n" +
		"   } else if (element.fireEvent) {\n" +
		"       element.fireEvent(\"on\" + event.type, event);\n" +
		"   }\n" +
		"}\n" +
		"\n" +
		"function simulateHTML5DragAndDrop(element, target) {\n" +
		"   var dragStartEvent = createEvent('dragstart');\n" +
		"   dispatchEvent(element, dragStartEvent);\n" +
		"   var dropEvent = createEvent('drop');\n" +
		"   dispatchEvent(target, dropEvent, dragStartEvent.dataTransfer);\n" +
		"   var dragEndEvent = createEvent('dragend'); \n" + "   dispatchEvent(element, dragEndEvent, dropEvent.dataTransfer);\n" +
		"}\n" +
		"\n" +
		"var elementToDrag = arguments[0];\n" +
		"var target = arguments[1];\n" +
		"simulateHTML5DragAndDrop(elementToDrag, target);", elementToDrag, target);
	}
	
	public static void dragAndDrop(WebElement elementToDrag, WebElement target, WebDriver driver)
	{
		try {
			dragDrop(elementToDrag, target, driver);
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
}
