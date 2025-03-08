// This code initializes a new Next.js project and sets up the folder structure for the frontend and backend.

// Create the folder structure
const fs = require('fs');
const path = require('path');

// Define the directories to create
const directories = [
    'frontend',
    'backend',
    'docs',
    'assets'
];

// Create each directory
directories.forEach(dir => {
    const dirPath = path.join(__dirname, dir);
    if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath);
    }
});

// Initialize Next.js in the frontend directory
const { exec } = require('child_process');
exec('npx create-next-app frontend --use-npm', (error, stdout, stderr) => {
    if (error) {
        console.error(`Error initializing Next.js: ${error.message}`);
        return;
    }
    if (stderr) {
        console.error(`stderr: ${stderr}`);
        return;
    }
    console.log(`stdout: ${stdout}`);
});

// Initialize Node.js with Express in the backend directory
exec('npm init -y', { cwd: 'backend' }, (error, stdout, stderr) => {
    if (error) {
        console.error(`Error initializing Node.js: ${error.message}`);
        return;
    }
    if (stderr) {
        console.error(`stderr: ${stderr}`);
        return;
    }
    console.log(`stdout: ${stdout}`);
    
    // Install Express
    exec('npm install express', { cwd: 'backend' }, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error installing Express: ${error.message}`);
            return;
        }
        if (stderr) {
            console.error(`stderr: ${stderr}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
    });
});

// Set up TailwindCSS in the frontend directory
exec('npm install -D tailwindcss postcss autoprefixer', { cwd: 'frontend' }, (error, stdout, stderr) => {
    if (error) {
        console.error(`Error installing TailwindCSS: ${error.message}`);
        return;
    }
    if (stderr) {
        console.error(`stderr: ${stderr}`);
        return;
    }
    console.log(`stdout: ${stdout}`);
});
