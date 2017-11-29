module.exports = function(topicName, infoType, infoArr) {
  console.log(infoArr);
  

  const resultString = `Here are the available ${infoType}: \n`;
  const noResultString = `Sorry, no ${infoType} are available!`; 
  let infoString = '';
  let type = infoType.slice(0, infoType.length-1);

  if (infoArr.length > 0) {
    infoString = infoArr.reduce((previous, current) => {
      return previous.concat(`${current[type]}\n`);
    }, '');
    
    return resultString.concat(infoString);    

  } else {
     return noResultString;

  }
};