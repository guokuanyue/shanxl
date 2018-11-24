const mutations = {
  add(state,payload){
    if(typeof payload == 'number'){
      state.count+=payload;
    }else{
      state.count+=1;
    }
  },
  reduce(state){
    state.count-=1;
  }
  
 
 };
 
 export default mutations;