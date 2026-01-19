import fs from 'fs';
import path from 'path';
import os from 'os';

export const backupFolder = (sourceDir) => {
    //create unique folder name using timestamp
    const timestamp = Date.now();

    //create backup folder in project directory
    const backupDir = path.join(process.cwd(), `backup_${timestamp}`);
    fs.mkdirSync(backupDir);

    //read all files from source directory
    const files = fs.readFileSync(sourceDir);

    let copiedCount = 0;

    // copy each file to backup folder
    files.forEach((file) => {
        const srcPath = path.join(sourceDir, file);
        const destPath = path.join(backupDir, file);

        //copy only files (not folders)
        if(fs.statSync(srcPath).isFile()) {
            fs.copyFileSync(srcPath, destPath);
            copiedCount++;
        }
    });
}