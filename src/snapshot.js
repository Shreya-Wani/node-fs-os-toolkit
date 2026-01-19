import fs from "fs";
import os from "os";
import path from "path";

export const takeSnapshot = () => {
  // Build snapshot file path inside OS temp directory
  const snapshotFile = path.join(os.tmpdir(), "system_snapshots.log");

  // Collect system information
  const time = new Date().toLocaleString();
  const user = os.userInfo().username;
  const cpuCores = os.cpus().length;
  const freeMemory = (os.freemem() / 1024 / 1024 / 1024).toFixed(2);

   // Format snapshot data
    const snapshot = `
    Time: ${time}
    User: ${user}
    CPU Cores: ${cpuCores}
    Free Memory: ${freeMemory} GB
    ---------------------
    `;

    // Append snapshot to file (do not overwrite old data)
    fs.appendFileSync(snapshotFile, snapshot);

    console.log("System snapshot saved");
}
