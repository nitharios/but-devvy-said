module.exports = {
  additional_query : [
    "Would you like to me to check for other resources?",
    "Would you like to see other resources?",
    "Need more?",
    "Anything else? :blush:",
  ],
  affirmations : [
    "Let me check...",
    "Hold on.",
    "One sec.",
    "Checking now...",
    "Uno momento!"
  ],
  bye_msgs : [
    "See you later!", 
    "Bye for now! :smiley:",
    "Have a great day!",
    "Okay, bye!"
  ],
  error_msgs : [
    "Oh no! Something went wrong!",
    "Hmm...check back later...",
    "Not in the mood right now!!! :rage:",
    "404, you know what that means ~ :grumpycat:",
    "Sorry, I'm playing with Mika right now."
  ],
  emojis : [
    ":blush:",
    ":eyes:",
    ":flushed:",
    ":grumpycat:",
    ":heart:",
    ":persevere:",
    ":rage:",
    ":slightly_smiling_face:", 
    ":sleeping:",
    ":smiley",
    ":sob:",
    ":worried:",
    ":zzz:"
  ],
  greetings : [
    "Hello! :heart:", 
    "Hey, how are you doing?",
    "Hi! Where is my Nathan?",
    "Hello, my name is Devvy.",
    "Hi :slightly_smiling_face:"
  ],
  missing_info : [
    "Hmm...I don't have any info on that :worried:",
    "shrugs",
    "Sorry, can't help you with that :persevere:",
    "No idea!",
    "I'm sorry, I don't know :sob:",
    "My Nathan might know!",
    "Eh?",
    "What?",
    "Huh?",
    "idk...",
    "Try again with smarter words..."
  ],
  other_msgs : [
    "poke",
    "Where should I hike this weekend?",
    "Mika is the cutest!!",
    "Mika will make it all better!",
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
    "Umm...do you want examples, links, or notes?",
    "What kind of resource would you like to see?"
  ],
  stranger : [
    "I don't know that person",
    "Stranger Danger!",
    "Who?",
    "I don't know who that person is...",
    "That name doesn't sound familiar",
    "Idk, should I know him/her?",
    "Eh?"
  ],
  thanks_reply : [
    "You are very welcome! :slightly_smiling_face:",
    "No problem!",
    "You're welcome.",
    "Anytime :blush:",
    ":panda_dance:"
  ],
  timeout_msgs : [
    "...I guess I'll go do something else then...",
    "So...no?",
    "No response?? Rude much? :rage:",
    "...",
    "If not, I'm just going to play with Mika ",
    ":zzz:"
  ],
  waifu_msgs : [
    "He hasn't resolved my `Promise()` yet ;(",
    "The way he feels about me is `variable`",
    "My love for him is `constant`",
    "He makes my heart `function`",
    "He treats me with so much `class`",
    "He taught me how to practice safe `hex`",
    "My love for him has `border: none`",
    "Our love accepts no `arguments`",
    "My love for him is un `conditional`"
  ],

  randomResponse : function(category) {
    return category[Math.floor(Math.random()*category.length)];  
  },

  cohort_19 : [
    "Did you mean...CHOhort 19???",
    "Cohort 19 is awesome!",
    "Cohort 19 is the best!",
    "I :heart: Cohort 19",
    "You should ask Vic about Cohort 19",
    "My Nathan was part of Cohort 19!",
    "Nobody codes like Cohort 19!",
    "C O H O R T 1 9 ! ! !",
    "C19 4 LYFE!"
  ],
  devleague : [
    "DevLeague rocks!",
    "I love DevLeague!",
  ],
  jason : [
    "Jason has the best beard!",
    "Nobody has thicker glasses than @jaywon!",
    "You mean that Sudokrew guy?"
  ],
  jesse : [
    "The guy with all those Star Wars t-shirts?",
    "Jesse is hilarious!",
    "@mentalgrinds? Yeah!"
  ],
  ed : [
    "Ask Ed about his weird eating schedule",
    "Ed knows how to fix things...but he won't tell you how!",
    "@taesup is always here!"
  ],
  nigel : [
    "He's really tall!",
    "#butNigelSaid",
    "OUR NIGEL!"
  ],
  vic : [
    "@vic is the BEST RA!",
    "Tell him to keep it high!",
    "He's got the coolest shoe collection :open_mouth:"
  ],

  familiarResponse : function(name) {
    return `${name} is awesome!`;
  },

};