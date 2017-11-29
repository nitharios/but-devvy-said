module.exports = function(topicName, infoType, infoArr) {
  const noResultString = `Sorry, no ${infoType}s are available!`; 

  if (infoArr.length < 1) {
    return noResultString;
  }

  const resultString = `Here are the available ${infoType}s: \n`; 
  let infoString = '';

  if (infoArr.length > 0) {
    infoString = infoArr.reduce((previous, current) => {
      if (!current[infoType]) return previous;

      return previous.concat(`${current.title}\n${current[infoType]}\n\n`);
    }, '');

    if (infoType === 'example') {
      infoString = '```' + infoString + '```';
    }

    return resultString.concat(infoString);
  }
};