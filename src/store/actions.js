
const actions ={
  addAction(context){
     context.commit('add',10)
  },
  reduceAction({commit,dispatch,getters,state}){
    console.log(arguments,'arguments')
    //做一些异步操作
    commit('reduce')
  }
}
export default actions;