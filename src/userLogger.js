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