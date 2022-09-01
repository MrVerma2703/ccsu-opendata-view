const average = arr => arr.reduce((a, b) => a + b) / arr.length

const extractTopics = obj => {
    // TODO extract all topic names and all weights and return them as an array
    // return [
    //    ["topic name", [15, 3, 13]]
    // ]
    const itemList = []
    for (let i in obj.topic) {
        const topic = obj.topic[i]

        const ws = []

        for (let j in topic.weights){
            const weight = topic.weights[j]
            ws.push(weight.weight);
        }
        
        const item = [topic.name, ws]
        itemList.push(item);
    }

    return itemList    
}
const testExtractTopics = topicList => {
    topicList.map(([name, weights]) => {
        console.assert(typeof name === "string", "the first element of topicList should be a string")
        console.assert(weights instanceof Array, "the second element should be an array of weights")
        weights.map(el => {
            console.assert(!Number.isNaN(el), "all the weights should be a number")
        })
    })
}

const createWeightedList = topicList => {
    // TODO take a topiclist and average out the weights
    // extractTopics' output
    // topicList = [
    //    ["topic name", [15, 3, 12]],
    //    ["topic name 2", [7, 3]],
    // ]
    // result = [
    //    ["topic name", 10],
    //    ["topic name 2", 5],
    // ]
}

const handleData = obj => {
    const topicList = extractTopics(obj)
    console.log(topicList)
    testExtractTopics(topicList)
    const weightList = createWeightedList(topicList)
    console.log(weightList)
}

// fetch data and generate the task list and the charts
fetch('https://raw.githubusercontent.com/quasilevel/ccsu-opendata/main/BCA/103.json')
.then(response => {
    return response.json();
}).then(handleData).catch(error => {
    console.error('Something went wrong ');
    console.error(error);
});
