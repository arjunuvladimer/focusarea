import {createSelector} from 'reselect'

const selectCard = state => state.card

export const selectCardList = createSelector(
    [selectCard],
    card => card.cardList
)