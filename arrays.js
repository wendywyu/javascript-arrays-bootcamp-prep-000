var chocolateBars = ['snickers', 'hundred grand', 'kit kat', 'skittles'];

function addElementToBeginningOfArray(array, element) {
  const addEtoBArray2 = [element, ...array]
  return addEtoBArray2
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)
  return array
}

function addElementToEndOfArray(array, element) {
  const array2 = [...array, element]
  return array2
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element);
  return array
}

function accessElementInArray () {
  var accessElementInArray = [3];
  return (accessElementInArray[0]);
}

function destructivelyRemoveElementFromBeginningOfArray () {
  var destructivelyRemoveElementFromBeginningOfArray = [1,2,3];
  destructivelyRemoveElementFromBeginningOfArray.shift()
  return destructivelyRemoveElementFromBeginningOfArray
}

function removeElementFromBeginningOfArray () {
  var removeElementFromBeginningOfArray = [1,2,3];
  removeElementFromBeginningOfArray.slice(1)
  return removeElementFromBeginningOfArray.slice(1)
}

function destructivelyRemoveElementFromEndOfArray () {
  var destructivelyRemoveElementFromEndOfArray = [1,2,3];
  destructivelyRemoveElementFromEndOfArray.pop()
  return destructivelyRemoveElementFromEndOfArray
}

function removeElementFromEndOfArray () {
  var removeElementFromEndOfArray = [1,2,3];
  removeElementFromEndOfArray.slice(0, removeElementFromEndOfArray.length - 1)
  return removeElementFromEndOfArray.slice(0, removeElementFromEndOfArray.length - 1)
}
