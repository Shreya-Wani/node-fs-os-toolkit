import {
  createNote,
  readNote,
  updateNote,
  deleteNote,
  listNotes
} from "./src/notesManager.js";

import { logMessage } from "./src/userLogger.js";
import { backupFolder } from "./src/backup.js";
import { takeSnapshot } from "./src/snapshot.js";
import { cleanDirectory } from "./src/cleaner.js";

const command = process.argv[2];

switch (command) {

  // NOTES COMMANDS
  case "note:create":
    createNote(process.argv[3], process.argv[4]);
    break;

  case "note:read":
    readNote(process.argv[3]);
    break;

  case "note:update":
    updateNote(process.argv[3], process.argv[4]);
    break;

  case "note:delete":
    deleteNote(process.argv[3]);
    break;

  case "note:list":
    listNotes();
    break;

  // LOGGER COMMAND
  case "log":
    logMessage(process.argv[3]);
    break;

  // BACKUP COMMAND
  case "backup":
    backupFolder(process.argv[3]);
    break;

  // SNAPSHOT COMMAND
  case "snapshot":
    takeSnapshot();
    break;

  // CLEANER COMMAND
  case "clean":
    cleanDirectory(process.argv[3], process.argv[4]);
    break;

  default:
    console.log(`
Available Commands:

Notes:
  node app.js note:create <title> <content>
  node app.js note:read <title>
  node app.js note:update <title> <content>
  node app.js note:delete <title>
  node app.js note:list

Logger:
  node app.js log "message"

Backup:
  node app.js backup <folderPath>

System Snapshot:
  node app.js snapshot

Directory Cleaner:
  node app.js clean <folderPath> <days>
`);
}
