import React from 'react'
import './card.styles.css'

import {connect} from 'react-redux'
import {selectCardList} from '../../redux/card/card.selector'
import {createStructuredSelector} from 'reselect'
import CardItem from '../card-item/card-item.component'

const Card = ({cardList}) => (
   <div className='row'>
        {
            cardList.map(cardItem => <CardItem key ={cardItem.id} item = {cardItem} /> )
        }
   </div>
)

const mapStateToProps = createStructuredSelector({
    cardList: selectCardList
})
export default connect(mapStateToProps,null)(Card)