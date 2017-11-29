module.exports = function(topicName, infoType, infoArr) {
  if (infoArr.length < 1 || !infoArr.includes(null)) {
    const noResultString = `Sorry, no ${infoType} are available!`; 
    return noResultString;
  }

  const resultString = `Here are the available ${infoType}: \n`; 
  let infoString = '';
  let type = infoType.slice(0, infoType.length-1);
  let count = 0;

  if (infoArr.length > 0) {
    infoString = infoArr.reduce((previous, current) => {
      count++;
      return previous.concat(`${type} #${count}\n${current[type]}\n\n`);
    }, '');

    if (type === 'example') {
      infoString = '```' + infoString + '```';
    }

    return resultString.concat(infoString);
  }
};