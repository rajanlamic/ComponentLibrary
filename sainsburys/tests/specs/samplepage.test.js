/**
 * Created by Rajan on 27/10/2015.
 */



   this.LoginPage = $page("Login page", {
        email: ".gb_P", // css locator

        load: function () {
            this.open("https://www.google.co.uk/");
            //return this.waitForIt();
        },
        loginAs: function (userName, password) {
            this.email.click();
        }
    });

test("login page", function() {

    var driver = createDriver("https://www.google.co.uk/",
        "640x480",
        "firefox");

    // now you can use it like this
    var loginPage = new LoginPage(driver).load();
    loginPage.loginAs("rajanlamic@gmail.com", "Gyalthum1$");
});
