import React from 'react'
import './card-item.styles.css'
import {connect} from 'react-redux'
import {cardAction} from '../../redux/card/card.action.js'

const CardItem = ({item, cardAction}) => (
    <div className="column">
        <div className={`${item.selected ? 'bgColor': '' } card`} onClick={ () => cardAction(item)}>
            <div className="container">
                <h3><b>{item.name}</b></h3>
            </div>
        </div>
    </div>
)

const mapDispatchToProps = dispatch => ({
    cardAction: item => dispatch(cardAction(item))
})

export default connect(null,mapDispatchToProps)(CardItem)