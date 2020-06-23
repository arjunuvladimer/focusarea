import React from 'react'
import './focus-page.styles.css'
import Card from '../../component/card/card.component'

const FocusPage = () => (
    <>
      <div className='focus-page'>
        <h1 style={{fontWeight:'500',fontSize:'28px'}}>What are your main areas of focus?</h1>
        <h2 style={{fontWeight:'normal',fontSize:'19px'}}>This will help us build a personalized experience for you</h2>
        <Card />
      </div>

      <div className='row-dot'>
          <div className='column-dot'>
            BACK
          </div>
          <div className='column-dot'>
            <div style={{textAlign:'center'}}>
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot active"></span>
            </div>
          </div>
          <div className='column-dot'>
            DONE
          </div>
      </div>
    </>
)

export default FocusPage

