let person1 = ['Me', 'You', 'Michael', 'Veronika', 'Yoda', 'Ben Kenobi', 'Robin Hood', 'Madonna', 'Robbie Williams', 'Santa Clause'];
let person2 = ['your sister', 'my mother', 'our oncle', 'Sarah Bullock', 'Lord Sidius', 'Darth Vader', 'Hitler', 'Albert Einstein', 'Ariana Grande', 'Donald Duck'];
let weather = ['rainy', 'snowy', 'sunndy', 'misty', 'hot', 'cold', 'muggy', 'bright', 'dark', 'cloudy']
let daytime = ['morning', 'afternoon', 'evening', 'midnight', 'noon', 'night', 'early morning', 'late morning', 'early evening', 'late evening']
let place = ['cinema', 'hotel', 'spa', 'supermarket', 'restaurant', 'street', 'cathedral', 'lake', 'golf court', 'club house', 'festival'];


function locSel(array){
    return Math.floor(Math.random() * array.length)
}

function randomMessage(arr1, arr2, arr3, arr4, arr5) {
    console.log(`${person1[locSel(person1)]} and ${person2[locSel(person2)]} have spent a ${weather[locSel(weather)]} ${daytime[locSel(daytime)]} together at the ${place[locSel(place)]}.`)
}

randomMessage(person1, person2, weather, daytime, place);

