const fs = require('fs');
const path = require('path');

const DATA_FILE = path.join(process.cwd(), 'subscribers.json');

function readSubscribers() {
  try {
    if (!fs.existsSync(DATA_FILE)) {
      return [];
    }
    const data = fs.readFileSync(DATA_FILE, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading subscribers:', error);
    return [];
  }
}

function writeSubscribers(subscribers) {
  try {
    fs.writeFileSync(DATA_FILE, JSON.stringify(subscribers, null, 2));
    return true;
  } catch (error) {
    console.error('Error writing subscribers:', error);
    return false;
  }
}

module.exports = { readSubscribers, writeSubscribers };