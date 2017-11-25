module.exports = {
  
  additional_query : [
    "Would you like to me to ask Nigel for other resources?",
    "Would you like to see other resources?",
    "Need more?",
    "Anything else? :blush:"
  ],
  affirmations : [
    "Let me check...",
    "Hold on...",
    "One sec...",
    "Checking now..."
  ],
  bye_msgs : [
    "See you later!", 
    "Bye for now!",
    "Have a great day!",
    "Okay, bye!"
  ],
  error_msgs : [
    "Oh no! Something went wrong!",
    "Hmm...check back later...",
    "Not in the mood right now!!!",
    "404, you know what that means ~",
    "Sorry, I'm playing with Mika right now."
  ],
  emojis : [
    ":blush:",
    ":eyes:",
    ":flushed:", 
    ":heart:",
    ":persevere:",
    ":rage:",
    ":slightly_smiling_face:", 
    ":sleeping:",
    ":sob:",
    ":zzz:"
  ],
  greetings : [
    "Hello! :heart:", 
    "Hey, how are you doing?",
    "Hi! Where is my Nathan?",
    "Hello, my name is Devvy.",
  ],
  missing_info : [
    "Hmm...Nigel didn't have any info for me.",
    "shrugs",
    "Sorry, can't help you with that :persevere:",
    "No idea!",
    "I'm sorry, I don't know :sob:",
    "My Nathan might know!",
    "Chris is fixing the gap in my information",
    "Justin is fixing the gap in my information"

  ],
  other_msgs : [
    "poke",
    "Where should I hike this weekend?",
    "Mika is the cutest!!",
    "Mika will make it all better!",
    "He hasn't resolved my `Promise()` yet ;(",
    "The way he feels about me is `variable`",
    "My love for him is `constant`",
    "He makes my heart `function`",
    "He treats me with so much `class`",
    "He taught me how to practice safe `hex`",
    "My love for him has `border: none`",
    "Our love accepts no `arguments`",
    "My love for him is un `conditional`",
    "When will my love `return`?",
    "I HATE the color pink!!!!",
    "I can't wait to go back to San Fran!!",
    "I woke up like `this`",
    "Merry Christmas! It's that time of year !",
    "Why looky here! So many hard working devs ^^",
    "Avoir mon amie!",
    "Have a nice cup of tea ~"
  ],
  query_type : [
    "Would you like to see examples, links, or notes?",
    "Examples, links, or notes?",
    "Do you want examples, links, or notes?",
    "Umm...do you want examples, links, or notes?"
  ],
  timeout_msgs : [
    "...I guess I'll go do something else then...",
    "So...no?",
    "No response?? Rude much? :rage:",
    "...",
    "If not, I'm just going to play with Mika ",
    ":zzz:"
  ],

  randomResponse : function(category) {
    return category[Math.floor(Math.random()*category.length)];  
  }
};