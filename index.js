// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

const s="s"
console.log(s.startsWith('s'))

function findMatching(drivers, string) {
    return drivers.filter(driver =>
      driver.toLowerCase() === string.toLowerCase()
    );
  }
console.log(findMatching(drivers, 'bobby'))


function fuzzyMatch(drivers, string) {
    return drivers.filter(driver =>
         driver.toLowerCase().startsWith(string.toLowerCase())
      );
}

console.log(fuzzyMatch(drivers, 'sa'))

function matchName(driver,string) {
        return driver.filter(obj =>
            obj.name.toLowerCase()===string.toLowerCase()
          );
    }
