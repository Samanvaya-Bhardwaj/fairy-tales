import React, { useState, useEffect } from 'react';
import AnotherComponent from './AnotherComponent';
import * as XLSX from 'xlsx';

function Main() {
  const [words, setWords] = useState([]);
  const [showContent, setShowContent] = useState(false);


  useEffect(() => {
    fetch('https://www.terriblytinytales.com/test.txt')
      .then((response) => response.text())
      .then((text) => {
        const arr = text.split(/[^\w]+/);
        const wordCount = {};
        for (let i = 0; i < arr.length; i++) {
          const word = arr[i].toLowerCase();
          if (wordCount[word]) {
            wordCount[word]++;
          } else {
            wordCount[word] = 1;
          }
        }
        const wordList = Object.entries(wordCount).map(([word, frequency]) => ({
          word,
          frequency,
        }));
        wordList.sort((a, b) => b.frequency - a.frequency);
        setWords(wordList.slice(0, 20));
        console.log(words);
      });
  }, []);

  const handleClick = () => {
    if(showContent === false){
    setShowContent(true);
    } else{
      setShowContent(false);
    }
  };

  const exportToExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(words);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Word Data');
    XLSX.writeFile(workbook, 'word_data.xlsx');
  };


  return (
    <div className='main'>
      <h1>Top 20 Most Occurring Words:</h1>

      <button onClick={handleClick}>Submit</button>
      {showContent &&<AnotherComponent wordData={words} /> }
      <button onClick={exportToExcel}>Export</button>


    </div>
  );
}

export default Main;