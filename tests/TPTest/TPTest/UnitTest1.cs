using NUnit.Framework;
using OpenQA.Selenium;
using OpenQA.Selenium.Chrome;
using OpenQA.Selenium.Support.UI;

namespace TPTest
{
    public class Tests
    {
        IWebDriver driver;

        [SetUp]
        public void Setup()
        {
            driver = new ChromeDriver();
        }

        [Test]
        public void TestFormSubmission()
        {
            driver.Navigate().GoToUrl("https://terlickaplachta.cz/testprihlasky/prihlaseni.html");

            // Vypln�n� prvn� ��sti formul��e
            IWebElement jmenoInput = driver.FindElement(By.Id("jmeno"));
            jmenoInput.SendKeys("Chrome");

            IWebElement prijmeniInput = driver.FindElement(By.Id("prijmeni"));
            prijmeniInput.SendKeys("Doe");

            IWebElement juniorCheckbox = driver.FindElement(By.Id("junior"));
            juniorCheckbox.Click();

            IWebElement mailInput = driver.FindElement(By.Id("mail"));
            mailInput.SendKeys("sebastian.walent@gmail.com");

            IWebElement klubInput = driver.FindElement(By.Id("klub"));
            klubInput.SendKeys("Klub XYZ");

            IWebElement licenceInput = driver.FindElement(By.Id("licence"));
            licenceInput.SendKeys("123456");

            SelectElement statSelect = new SelectElement(driver.FindElement(By.Id("staty")));
            statSelect.SelectByValue("CZE");

            // Kliknut� na tla��tko "Pokra�ovat"
            IWebElement pokracovatButton = driver.FindElement(By.Id("ss_button"));
            pokracovatButton.Click();

            // Vypln�n� druh� ��sti formul��e
            IWebElement rgAnoButton = driver.FindElement(By.Id("rgtrue"));
            rgAnoButton.Click();

            // Vypln�n� t�et� ��sti formul��e
            IWebElement nssNeButton = driver.FindElement(By.Id("nsstrue"));
            nssNeButton.Click();

            // Vypln�n� posledn� ��sti formul��e
            SelectElement kategorieSelect = new SelectElement(driver.FindElement(By.Id("kategorie")));
            kategorieSelect.SelectByValue("nss_a");

            IWebElement nazevModeluInput = driver.FindElement(By.Id("nazev_modelu"));
            nazevModeluInput.SendKeys("Model XYZ");

            IWebElement delkaInput = driver.FindElement(By.Id("delka"));
            delkaInput.SendKeys("1000");

            IWebElement plochaInput = driver.FindElement(By.Id("plocha"));
            plochaInput.SendKeys("10.5");

            IWebElement vytlakInput = driver.FindElement(By.Id("vytlak"));
            vytlakInput.SendKeys("250");

            IWebElement meritkoInput = driver.FindElement(By.Id("meritko"));
            meritkoInput.SendKeys("10");

            

            IWebElement fs_button = driver.FindElement(By.Id("fs_button"));
            fs_button.Click();
            // Kliknut� na tla��tko "Dokon�it"
            IWebElement dokoncitButton = driver.FindElement(By.Id("finish_button"));
            dokoncitButton.Click();


            Assert.Pass();
        }

        [Test]
        public void TestFormSubmissionJustRG()
        {
            driver.Navigate().GoToUrl("https://terlickaplachta.cz/testprihlasky/prihlaseni.html");

            // Vypln�n� prvn� ��sti formul��e
            IWebElement jmenoInput = driver.FindElement(By.Id("jmeno"));
            jmenoInput.SendKeys("Chrome");

            IWebElement prijmeniInput = driver.FindElement(By.Id("prijmeni"));
            prijmeniInput.SendKeys("Doe");

            IWebElement juniorCheckbox = driver.FindElement(By.Id("junior"));
            juniorCheckbox.Click();

            IWebElement mailInput = driver.FindElement(By.Id("mail"));
            mailInput.SendKeys("sebastian.walent@gmail.com");

            IWebElement klubInput = driver.FindElement(By.Id("klub"));
            klubInput.SendKeys("Klub XYZ");

            IWebElement licenceInput = driver.FindElement(By.Id("licence"));
            licenceInput.SendKeys("123456");

            SelectElement statSelect = new SelectElement(driver.FindElement(By.Id("staty")));
            statSelect.SelectByValue("CZE");

            // Kliknut� na tla��tko "Pokra�ovat"
            IWebElement pokracovatButton = driver.FindElement(By.Id("ss_button"));
            pokracovatButton.Click();

            // Vypln�n� druh� ��sti formul��e
            IWebElement rgAnoButton = driver.FindElement(By.Id("rgtrue"));
            rgAnoButton.Click();

            // Kliknut� na tla��tko "Dokon�it"
            IWebElement dokoncitButton = driver.FindElement(By.Id("finish_button"));
            dokoncitButton.Click();

            Assert.Pass();
        }

        [TearDown]
        public void TearDown()
        {
           driver.Quit();
        }
    }
}
