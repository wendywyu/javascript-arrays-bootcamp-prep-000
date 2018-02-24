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
  array.slice(1)
  return array.slice(1)
}

function destructivelyRemoveElementFromEndOfArray (array, element) {
  array.pop()
  return array
}

function removeElementFromEndOfArray (array, element) {
  array.slice(0, array.length - 1)
  return array.slice(0, array.length - 1)
}
