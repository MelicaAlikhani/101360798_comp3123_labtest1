// Question 3: Remove Log files script.

const fs = require('fs');
const path = require('path');
const logsDir = path.join(__dirname, 'Logs');

// Check if the Logs directory exists
if (fs.existsSync(logsDir)) {
  const files = fs.readdirSync(logsDir);
  
  // Delete each file and output its name
  files.forEach((file) => {
    const filePath = path.join(logsDir, file);
    fs.unlinkSync(filePath);
    console.log(`Deleted file: ${file}`);
  });

  // Remove the Logs directory 
  fs.rmdirSync(logsDir);
  console.log('Removed Logs directory.');
} else {
  console.log('Logs directory does not exist. Nothing to delete.');
}
