export default {
    namespaced: true,
    state:{
        lists:[],
        type1:[],
        type2:[],
        type3:[],
    },
    mutations:{
        add(state,obj){
            state.lists.push(obj)
        },
        del(state,index){
            
            if(state.lists[index].type == 1){
                // console.log(state.lists,'yibuma ?')
                // console.log('1111111111')
                state.type1.splice(index,1)
            }else if(state.lists[index].type == 2){
                state.type2.splice(index,1)
            }else if(state.lists[index].type == 3){
                state.type3.splice(index,1)
            }
            state.lists.splice(index,1);
        }
    }
}