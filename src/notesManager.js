//Task1: Folder-Based Notes Manager

import fs from "fs";
import path from "path";

// create notes folder if it doesn't exist
const notesDir = path.join(process.cwd(), "notes");
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

//update a note
export const updateNote = (title, content) => {
    const filePath = path.join(notesDir, `${title}.txt`);

    if(!fs.existsSync(filePath)){
        console.log(`Note "${title}" does not exist.`);
        return;
    }

    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(`Note "${title}" updated successfully.`);
}

//delete a note
export const deleteNote = (title) => {
    const filePath = path.join(notesDir, `${title}.txt`);

    if(!fs.existsSync(filePath)){
        console.log(`Note "${title}" does not exist.`);
        return;
    }

    fs.unlinkSync(filePath);
    console.log(`Note "${title}" deleted successfully.`);
}

//list all notes
export const listNotes = () => {
    const files = fs.readdirSync(notesDir);

    if(files.length === 0){
        console.log("No notes found.");
        return;
    }

    console.log("Notes:");
    files.forEach(file => console.log(file));
}