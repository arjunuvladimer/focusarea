import { CardActionTypes } from "./card.types";

export const cardAction = cardItem => ({
    type: CardActionTypes.SELECT_CARD,
    payload: cardItem 
})