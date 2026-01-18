//Task1: Folder-Based Notes Manager

const fs = required('fs');
const path = required('path');

// create notes folder if it doesn't exist
const notesDir = path.join(Process.cwd(), "notes");
if (!fs.existsSync(notesDir)){
    fs.mkdirSync(notesDir);
}

//create a new note
export const createNote = (title, content) => {
    const filePath = path.join(notesDir, `${title}.txt`);
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(`Note "${title}" created successfully.`);
}