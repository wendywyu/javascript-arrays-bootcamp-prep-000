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

function accessElementInArray (array, element) {
  var accessElementInArray = [3];
  return (accessElementInArray[0]);
}

function destructivelyRemoveElementFromBeginningOfArray (array, element) {
  array.shift()
  return array
}

function removeElementFromBeginningOfArray (array, element) {
  removeElementFromBeginningOfArray.slice(1)
  return removeElementFromBeginningOfArray.slice(1)
}

function destructivelyRemoveElementFromEndOfArray (array, element) {
  destructivelyRemoveElementFromEndOfArray.pop()
  return destructivelyRemoveElementFromEndOfArray
}

function removeElementFromEndOfArray (array, element) {
  removeElementFromEndOfArray.slice(0, removeElementFromEndOfArray.length - 1)
  return removeElementFromEndOfArray.slice(0, removeElementFromEndOfArray.length - 1)
}
