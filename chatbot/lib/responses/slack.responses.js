module.exports = {
  bye_msgs : [
    "See you later!", 
    "Bye for now!",
    "Have a great day!"
  ],
  error_msgs : [
    "Oh no! Something went wrong!",
    "Hmm...check back later...",
    "Not in the mood right now!!!",
    "404, you know what that means ~"
  ],
  emojis : [
    ":eyes:", 
    ":heart:", 
    ":slightly_smiling_face:", 
    ":sleeping:"
  ],
  greetings : [
    "Hello!", 
    "Hey, how are you doing?",
    "Hi! Where is my Nathan?"
  ],
  missing_info : [
    "Hmm...Nigel didn't have any info for me.",
    "shrugs",
    "Sorry, can't help you with that :("
  ],
  notes_query : [
    'Would you like to see notes? (yes/no)'
  ],
  other_msgs : [
    "poke",
    "Where should I hike this weekend?",
    "Mika is the cutest!!",
    "Have you seen my Nathan?",
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
  ],
  randomResponse : function(category) {
    return category[Math.floor(Math.random()*category.length)];  
  }
};