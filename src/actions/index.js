export function selectTopic(topic){
  return {
    // needs to return action with a type property
    type: 'TOPIC_SELECTED',
    payload: topic
  };
}