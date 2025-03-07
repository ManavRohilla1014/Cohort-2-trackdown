/*
## Write to a file
Using the fs library again, try to write to the contents of a file.
You can use the fs library to as a black box, the goal is to understand async tasks.

*/


const fs = require('fs').promises;

async function writeToFile(){
    const content = 'Hello there, how r u';
    const filename = 'sample.txt';

    try {
           await fs.writeFile(filename, content,'utf-8');
           console.log('Written succesfully'); 
    }
    catch(error){
        console.log('Error writing to the file');
    }
}




writeToFile();