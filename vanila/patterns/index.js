const patternDictionary = [{
  pattern: '\\b(?<greeting>Hi|Hello|Hey)\\b',
  intent: 'Hello'
}, {
   pattern: '\\b(Bye|Exit|Goodbye|seeya)\\b',
   intent: 'Exit'
}, {
  pattern:'\\b(Who)\\b',
  intent: 'Intro'
}, {
  pattern: 'like\\sin\\s\\b(?<city>.+)',
  intent: 'CurrentWeather'
}];

module.exports = patternDictionary;