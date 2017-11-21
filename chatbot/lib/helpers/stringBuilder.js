module.exports = function(name, resourceArr) {
  const resultString = 'This is what Nigel knows about that: \n'; 
  let resourceString = resourceArr.reduce((previous, current) => {
    return previous.concat(`${current.url}\n`);
  }, '');

  return resultString.concat(resourceString);    
};