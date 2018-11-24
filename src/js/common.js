
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

export const AuthUser = {
	isAuthenticated: false,
	role:"",
	authenticate(role) {
	  this.isAuthenticated = true;
	  this.role=role;
	  
	},
	signout() {
	  this.isAuthenticated = false;
	  this.role="";
	}
}

export const ROLE_ADMIN="ADMIN";
export const ROLE_CLIENT="CLIENT";
