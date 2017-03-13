function dataTypes(type){
  if(typeof type === "string")
    return type.length;
  if(typeof type === "number")
    return type < 100 ? "less than 100": type > 100 ? 'more than 100' : 'equal to 100';
  if(typeof type == 'undefined' || type === null)
    return 'no value';
  if(typeof type === "boolean")
    return type;
  if(typeof type === "function")
    return type(true);
  if(typeof type === "object")
    return type[2];
}

module.exports = dataTypes;