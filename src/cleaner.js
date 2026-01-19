import fs from 'fs';
import path from 'path';
import os from 'os';

export const cleanDirectory = (dirPath, days) => {
    // read all files from the given directory
    const files = fs.readFileSync(dirPath);

    //current time in milliseconds
    const now = Date.now();

    //create log file path in user's home directory
    const logFile = path.join(os.homedir(), "deleted_files.log");

    // Loop through each file in the directory
    files.forEach((file) => {
        const filePath = path.join(dirPath, file);

        // Get file information
        const stats = fs.statSync(filePath);

        // Calculate file age in days
        const ageInDays =
            (now - stats.mtimeMs) / (1000 * 60 * 60 * 24);
    })
}