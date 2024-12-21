const fs = require('fs');
const path = require('path');

// הגדרת הנתיב לתיקייה שמכילה את הקבצים
const dirPath = path.join(__dirname, 'text');

// רשימת שמות הקבצים
const inputFiles = [
  'text1.txt',
  'text2.txt',
  'text3.txt',
  'text4.txt',
  'text5.txt',
  'text6.txt',
  'text7.txt',
  'text8.txt',
  'text9.txt',
  'text10.txt',
];

const outputFile = path.join(dirPath, 'output.txt'); // קובץ הפלט
const writeStream = fs.createWriteStream(outputFile); // יצירת stream לכתיבה

(async function processFiles() {
  try {
    for (let i = 0; i < inputFiles.length; i++) {
      const filePath = path.join(dirPath, inputFiles[i]);
      const linesToCopy = i + 1; // מספר השורות להעתיק מקובץ זה

      // קריאת הקובץ ומפצל שורות
      const fileContent = fs.readFileSync(filePath, 'utf-8');
      const lines = fileContent.split('\n');

      // כתיבת השורות הנדרשות לפלט
      for (let j = 0; j < linesToCopy && j < lines.length; j++) {
        writeStream.write(lines[j] + '\n');
      }
    }
    console.log('העתקת השורות הסתיימה בהצלחה!');
  } catch (error) {
    console.error('שגיאה:', error.message);
  } finally {
    writeStream.end(); // סגירת ה-stream של הכתיבה
  }
})();
