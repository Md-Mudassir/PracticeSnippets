function recurring(inp){
  for(let i=0;i<inp.length;i++){
    for(let j=i+1;j<inp.length;j++){
      if(inp[i]===inp[j])
      return inp[i]
    }
  }
}

recurring([1,2,3,1,2])