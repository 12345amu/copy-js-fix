#!/usr/bin/env node

import fs from 'fs'
import path from 'path'

const tempDir = path.resolve( 'temp');
const sourceFile = path.resolve( 'afterinstall/copy.js');

fs.readdir(tempDir, (err, folders) => {
    if(err) {
        console.error( err );
        return;

    }

    console.log("Folders found:", folders);
})