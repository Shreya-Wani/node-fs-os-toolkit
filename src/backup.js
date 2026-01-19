import fs from 'fs';
import path from 'path';
import os from 'os';

export const backupFolder = (sourceDir) => {
    //create unique folder name using timestamp
    const timestamp = Date.now();

    //create backup folder in project directory
    const backupDir = path.join(process.cwd(), `backup_${timestamp}`);
    fs.mkdirSync(backupDir);
}