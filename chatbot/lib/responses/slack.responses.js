module.exports = {
  additional_query : [
    "Would you like to me to ask Nigel for more information? (yes/no)",
    "Would you like to see notes or examples?"
  ],
  affirmations : [
    "Okay, let me check..."
  ],
  bye_msgs : [
    "See you later!", 
    "Bye for now!",
    "Have a great day!"
  ],
  error_msgs : [
    "Oh no! Something went wrong!",
    "Hmm...check back later...",
    "Not in the mood right now!!!",
    "404, you know what that means ~",
    "Sorry, Mika is is sitting on my keyboard right now."
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
    "Sorry, can't help you with that :(",
    "My Nathan might know!"
  ],
  other_msgs : [
    "poke",
    "Where should I hike this weekend?",
    "Mika is the cutest!!",
    "Mika will make it all better!",
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
  timeout : [
    "...I guess I'll go do something else then...",
    "So...no?",
    "No response?? Rude much?",
    "...",
    "If not, I'm just going to play with Mika"
  ],
  randomResponse : function(category) {
    return category[Math.floor(Math.random()*category.length)];  
  }
};