function countPositivesSumNegatives(data1) {
    return data1===null || data1.length===0?[]:
    [data1.reduce((sum,curr)=>sum +(curr>0?1:0),0),
        data1.reduce((sum,curr)=>sum +(curr<0?curr:0),0)];
  }