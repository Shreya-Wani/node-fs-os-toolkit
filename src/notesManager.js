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

//read a note
export const readNote = (title) => {
    const filePath = path.join(notesDir, `${title}.txt`)

    if(!fs.existsSync(filePath)){
        console.log(`Note "${title}" does not exist.`);
        return;
    }   

    const data = fs.readFileSync(filePath, 'utf-8');
    console.log(data);
}