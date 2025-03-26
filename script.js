#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { program } from 'commander';



program 
.option('-t, --tempDir <path>', 'specify the temporary directory', 'temp')
.option('-s, --sourceFile <path>', 'specify the source file to copy', 'afterinstall/copy.js')
.parse(process.argv);

const options = program.opts();

const tempDir = path.resolve(options.tempDir); 
const sourceFile = path.resolve(options.sourceFile); 
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