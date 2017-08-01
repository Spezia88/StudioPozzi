
export function	getKeys (obj){
   		var keys = [];
   		for(var key in obj){

      		keys.push(key);
   		}
   		return keys;
}

export function removeIndexFromArray(arr,index) {
   
      
      arr.splice(index, 1);
      
      return arr;
}

