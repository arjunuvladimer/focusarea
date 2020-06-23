import { CardActionTypes } from "./card.types"

const INITIAL_STATE = {
    cardList:[
        {
            id: 1,
            name:'Blood Glucose',
            selected: true
        },
        {
            id: 2,
            name:'Medication',
            selected: false
        },
        {
            id: 3,
            name:'Food Tracking',
            selected: false
        },
        {
            id: 4,
            name:'Exercise',
            selected: false
        },
        {
            id: 5,
            name:'Weight Management',
            selected: false
        },
        {
            id: 6,
            name:'Blood Pressure',
            selected: false
        },
        {
            id: 7,
            name:'A1C',
            selected: false
        }
    ]
}

export const cardReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CardActionTypes.SELECT_CARD:
            return {
                ...state,
                cardList: state.cardList.map(cardItem => 
                    cardItem.id === action.payload.id ?
                    {...cardItem, selected:!cardItem.selected}
                    : 
                    cardItem
                    )
            }
        default:
           return state
    }
}