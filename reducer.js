const START_TIMER = 'START_TIMER';
const RESTART_TIMER = 'RESTART_TIMER';
const ADD_SECOND = 'ADD_SECOND';

function startTimer(){
    return {
        type: START_TIMER
    }
}

function restartTimer(){
    return {
        type: RESTART_TIMER
    }
}

function addSecond(){
    return {
        type: ADD_SECOND
    }
}

const TIME_DURATION = 1500;

const initialState = {
    isPlaying: false,
    timerDuration: TIME_DURATION,
    elapsedTime: 0
}

function reducer(state = initialState, action){
    switch(action.type){
        case START_TIMER:
            return applyStartTimer(state);
            break;
        case RESTART_TIMER:
            return applyRestartTimer(state);
            break;
        case ADD_SECOND:
            return applyAddSecond(state);
            break;
        default:
            return state;
            break;
    }
}

function applyStartTimer(state){
    return {
        ...state,
        isPlaying: true
    }
}

function applyRestartTimer(state){
    return {
        ...state,
        isPlaying: false,
        elapsedTime: 0
    }
}

function applyAddSecond(state){
    if(state.elapsedTime < TIME_DURATION){
        return { 
            ...state,
            elapsedTime: state.elapsedTime + 1
        }
    }else{
        return {
            ...state,
            isPlaying: false
        }
    }
}

const actionCreators = {
    startTimer,
    restartTimer,
    addSecond
}

export { actionCreators };
export default reducer;