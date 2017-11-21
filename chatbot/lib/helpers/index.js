module.exports = function stringBuilder(resourceArr) {
  resultString = 'This is what Nigel knows: '; 

  let resourceString = resourceArr.reduce((previous, current) => {
    return previous.concat(`${current.url}\n`);
  }, '');

  return resultString.concat(resourceString);    
};