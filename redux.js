// 引入store
import {createStore} from 'rudex';
// 创建reducer
function counter(data=0,action){
    // type 是 dispatch时 默认带上的数据
    let {type} = action
    switch(type){
        case 'INCREATE':
            return ++data;
        default:
            return data;
    }
}
// 创建store
let store = createStore(counter)
// 触发dispatch reducer会触发行为 store的data会发生改变
$(document).click(ev=>{
    store.dispatch('INCREATE');
})
// 监听store的变化
store.subscribe(ev=>{
    // 调用方法直接获取到data的数据
    let state = store.getState();
    console.log(state)
})