module.exports = function(topicName, infoType, infoArr) {
  const resultString = `Here are the available ${infoType}: \n`;
  const noResultString = `Sorry, no ${infoType} are available!`; 
  let infoString = '';

  if (infoArr.length > 0) {
    infoString = infoArr.reduce((previous, current) => {
      return previous.concat(`${current.url}\n`);
    }, '');
    
    return resultString.concat(infoString);    

  } else {
     return noResultString;

  }
};