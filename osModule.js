const os = require('os');
const localAddress = {
    runningIp: "",
    setAddress: function () {
        if (this.runningIp == "") {
            let networkInterfaces = os.networkInterfaces();
            Object.values(networkInterfaces).some(interfaces =>
                interfaces.some(interfaceObj => {
                    this.runningIp = interfaceObj.address.includes("192.168.1") ? interfaceObj.address : "";
                })
            );
            return this.runningIp;
        } else {
            return this.runningIp;
        }
    }
}
// console.log(localAddress.setAddress());
module.exports = localAddress;