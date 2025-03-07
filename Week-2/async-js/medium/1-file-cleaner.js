/*
## File cleaner
Read a file, remove all the extra spaces and write it back to the same file.

For example, if the file input was
```
hello     world    my    name   is       raman
```
After the program runs, the output should be

```
hello world my name is raman
```
*/

const fs = require('fs').promises;

async function readWriteToFile(inputFile){
    try{
        let content = await fs.readFile(inputFile, 'utf-8');
        console.log('Input Content: ' + content );

        let cleanData = content.trim().replace(/\s+/g,' ');

        await fs.writeFile(inputFile, cleanData, 'utf-8');

        let outputData = await fs.readFile(inputFile,'utf-8');
        console.log('Output Data: ' + outputData);


        console.log('Operation Succesful');

    }
    catch(error){
        console.log('Operation unsuccesful', error);
    }
}

readWriteToFile('input.txt');