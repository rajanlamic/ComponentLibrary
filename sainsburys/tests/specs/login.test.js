/**
 * Created by Rajan on 27/10/2015.
 */

afterTest(function (test) {
    console.log("after test", test);
    var driver = session.get("driver");
    if (driver != null) {
        if (test.isFailed()) {
            session.report().info("Screenshot").withAttachment("Screenshot", takeScreenshot(driver));
        }
        driver.quit();
    }
});

test("login test", function() {



    var driver = createDriver("https://www.google.co.uk/",
        "640x480",
        "firefox");

    session.put("driver", driver);

    WelcomePage = $page("Welcome page", {
        gmailLink: ".gb_P",
    });

    var welcomePage = new WelcomePage(driver).waitForIt();
    checkLayout(driver, "./tests/specs/login.gspec", ["all", "desktop"]);
    welcomePage.gmailLink.click();

    //driver.quit();

});
