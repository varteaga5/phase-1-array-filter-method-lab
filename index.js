// Code your solution here
function findMatching (names, str) {
     return names.filter(x => x.toLowerCase() === str.toLowerCase() )
}

function fuzzyMatch (names, str) {
    return names.filter(x => x.slice(0,str.length) === str)
}
function matchName(drivers, str) {
    return drivers.filter(x => x.name === str)
}