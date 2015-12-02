/**
 * Created by Rajan on 27/10/2015.
 */
this.devices = {
    mobile: {
        deviceName: "mobile",
        size: "400x700"
    },
    tablet: {
        deviceName: "tablet",
        size: "600x800"
    },
    desktop: {
        deviceName: "desktop",
        size: "1024x768"
    }
};

forAll(devices, function (device) {
    test("Users page on ${deviceName}", function (device){
        var driver = createDriver("http://localhost:3000/users",
            device.size);
    });
});