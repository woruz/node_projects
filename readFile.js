const fs = require('fs');

fs.readFile('data.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading the file:', err);
        return;
    }

    const word_count = count(data);
    console.log('Total word count:', word_count);
});

function count(text) {
    const words = text.split(" ");
    const filtered_words = words.filter(word => word !== '');
    return filtered_words.length;
}