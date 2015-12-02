/**
 * Created by Rajan on 27/10/2015.
 */
test("simple test", function() {

    var driver = createDriver("http://localhost:3000/users",
        "640x480",
        "firefox");

    checkLayout(driver, "./tests/specs/users.gspec", ["all", "desktop"]);
});