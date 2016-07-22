'use strict';
let tags = [
    'ITEM000001',
    'ITEM000001',
    'ITEM000001',
    'ITEM000001',
    'ITEM000001-7',
    'ITEM000003-2',
    'ITEM000005',
    'ITEM000005',
    'ITEM000005'
];
function getFormattedTags(tags){
  let result = tags.map((tag) => {
    if (tag.includes("-")){
      let temp = tag.split("-");
      return ({barcode: temp[0], count:parseInt(temp[1])});
    } else {
      return ({barcode: tag, count: 1});
    }
  });
  return result;
}