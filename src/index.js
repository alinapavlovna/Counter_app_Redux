import {createStore} from 'redux';


const reducer = (state = 0, action) => { // должен быть чистой функцией - зависеть ТОЛЬКО от state, action
    switch(action.type){
        case 'INC':
            return state + 1;
        case 'DEC': 
            return state - 1;
        case 'RES': 
            return 0;
        default:
            return state;
    }
}

let count = document.getElementById('counter');
const store = createStore(reducer);

store.subscribe( () => { //подписка на action 
    count.textContent = store.getState();
})


document.getElementById('inc').addEventListener('click', () => {
    store.dispatch({type: 'INC'}); //cоздаем действие - action
});

document.getElementById('dec').addEventListener('click', () => {
    store.dispatch({type: 'DEC'});
});

document.getElementById('res').addEventListener('click', () => {
    store.dispatch({type: 'RES'});
});
