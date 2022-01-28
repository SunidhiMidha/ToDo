import { FETCH_TODO, ADD_TASK, DEL_TASK, TOGGLE_TASK} from '../actions/types'

const initialState = {
    items: []
}

const Reduc = (state = initialState, action) => {
    switch(action.type){
        case FETCH_TODO:
            return{
                ...state,
                items: action.payload
            }

        case ADD_TASK:
            return{
                ...state,
                items: [...state.items, action.payload ]
            }

        case DEL_TASK:
            return{
                items: [ ...state.items.filter(i => i.id!==action.payload) ]     
            }
        case TOGGLE_TASK:
            return{
                ...state,
                items: [
                    ...state.items.map( i => {
                        if(i.id === action.payload.id){
                            i.completed = !i.completed
                        }
                        return i
                    })
                ]
            }
        default: return state
    }
}

export default Reduc