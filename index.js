function updateObjectWithKeyAndValue(object, key, value){
//var newObj = Object.assign({},object)
var newObj = Object.assign({},object, {[key] : value})
  return newObj
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  //var newObj = Object.assign({},object)
Object.assign(object, {[key] : value})
    return
}


/*
    destructivelyUpdateObjectWithKeyAndValue(object, key, value)
      4) updates `object` with the given `key` and `value` (it is destructive) and returns the entire updated object
    deleteFromObjectByKey(object, key)
      5) deletes `key` from a clone of object and returns the new object (it is non-destructive)
      6) does not modify the original object (it is non-destructive)
    destructivelyDeleteFromObjectByKey(object, key)
      7) returns object without the delete key/value pair
      8) modifies the original object*/
