// Question 3: Create Log files script

const fs = require('fs');
const path = require('path');

// The path for the Logs directory
const logsDir = path.join(__dirname, 'Logs');

// Create the Logs directory if it does not exist
if (!fs.existsSync(logsDir)) {
  fs.mkdirSync(logsDir);
  console.log('Created Logs directory.');
} else {
  console.log('Logs directory already exists.');
}

// Change the current working directory to Logs
process.chdir(logsDir);
console.log('Changed working directory to:', process.cwd());
for (let i = 0; i < 10; i++) {
  const fileName = `log${i}.txt`;
  const fileContent = `This is log file number ${i}\n`;
  fs.writeFileSync(fileName, fileContent);
  console.log(`Created file: ${fileName}`);
}
