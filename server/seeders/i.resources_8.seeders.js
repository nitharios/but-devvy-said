'use strict';

//contains topic_id 86 - 95
//TOTAL : 

module.exports = {

  up : (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('resources', [

      {
        name : 'Colin',
        cohort : 9,
        title : 'What is JSON?',
        tags : ['json', 'objects', 'arrays', 'javascript'],
        note : 'JSON is an easily readable and lightweight data format. It is a nest of objects and arrays used for structuring data. You must keep in mind that the keys for a JSON object are surrounded by quotes, unlike a regular object.',

        example : `{  
  "id": "0001",
  "type": "donut",
  "name": "Cake",
  "ppu": 0.55,
  "batters":
    {
      "batter":
        [
          { "id": "1001", "type": "Regular" },
          { "id": "1002", "type": "Chocolate" },
          { "id": "1003", "type": "Blueberry" },
          { "id": "1004", "type": "Devil's Food" }
        ]
    },
  "topping":
    [
      { "id": "5001", "type": "None" },
      { "id": "5002", "type": "Glazed" },
      { "id": "5005", "type": "Sugar" },
      { "id": "5007", "type": "Powdered Sugar" },
      { "id": "5006", "type": "Chocolate with Sprinkles" },
      { "id": "5003", "type": "Chocolate" },
      { "id": "5004", "type": "Maple" }
    ]
}`,

        link : 'http://bit.ly/2Aiqogc', //InfoWorld -- 'JSON Explained'
        createdAt : new Date(),
        updatedAt : new Date(),
        topic_id : 94 //'json'
      }

    ], {});

  },

  down : (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('resources', null, {});

  }

};