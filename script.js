#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

const tempDir = path.resolve('temp'); 
const sourceFile = path.resolve('afterinstall/copy.js'); 
// console.log("folder:",sourceFile)

fs.readdir(tempDir, (err, folders) => {
    if (err) return console.error( err );

    console.log("Folders found:", folders);

    folders.forEach(folder => {
        const destination = path.join(tempDir, folder, 'adapt_framework/grunt/copy.js');

        fs.copyFile(sourceFile, destination, (err) => {
            if (err) console.error( err );
            else console.log(`Copied to ${destination}`);
        });
    });
});