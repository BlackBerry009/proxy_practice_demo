function sum(a,b){
  return a + b;
}

function validateFunc(func,...types){
  return new Proxy(func,{
    apply(target,thisArgument,argumentList){
      types.forEach( (type,i) => {
        const arg = argumentList[i];
        if(typeof arg !== type){
          throw new TypeError(`第${i+1}个参数类型${type}与值不匹配`)
        }
      } )
      return Reflect.apply(target,thisArgument,argumentList)
    }
  })
}

const sumProxy = validateFunc(sum,"number","number")
console.log(sumProxy(1,3))