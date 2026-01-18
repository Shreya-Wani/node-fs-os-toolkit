import fs from "fs";
import path from "path";
import os from "os";

//detect OS username
const username = os.userInfo().username;

//Create a folder in home directory
const homeDir = os.homedir();
const logDir = path.join(homeDir, "my_app_logs");

if (!fs.existsSync(logDir)){
    fs.mkdirSync(logDir, { recursive: true });
}

//Create daily log files (YYYY-MM-DD.log)
export const logMessage = (message) => {
    const today = new Date().toISOString().split('T')[0];
    const logFile = path.log(logDir, `$(today).log`);

    const time = new Date().toLocaleTimeString();
    const log = `[${time}] ${message}\n`;

    fs.appendFileSync(logFile, log);
    console.log("Log saved");
};