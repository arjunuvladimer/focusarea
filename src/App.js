import React from 'react';
import './App.css';

class App extends React.Component{
  constructor(){
    super()
    this.state = {
      backgroundColor:false
    }
  }

  handleClick =  () => {
    this.setState({
      backgroundColor: !this.state.backgroundColor
    })
  } 
  render(){
    return (
    <div>
      <div className='focus-page'>
        <h1 style={{fontWeight:'500',fontSize:'28px'}}>What are your main areas of focus?</h1>
        <h2 style={{fontWeight:'normal',fontSize:'19px'}}>This will help us build a personalized experience for you</h2>
          <div className="row">
  
            <div className="column">
               <div className={`${this.state.backgroundColor ? '':'bgColor'} card`} onClick={this.handleClick}>
                  <div className="container">
                    <h3><b>Blood Glucose</b></h3>
                  </div>
                </div>
              </div>
  
            <div className="column">
              <div className={`${this.state.backgroundColor ? 'bgColor':''} card`} onClick={this.handleClick}>
                <div className="container">
                  <h3><b>Medication</b></h3>
                </div>
              </div>
            </div>

            <div className="column">
              <div className={`${this.state.backgroundColor ? 'bgColor':''} card`} onClick={this.handleClick}>
                <div className="container">
                  <h3><b>Food Tracking</b></h3>
                </div>
              </div>
            </div>

            <div className="column">
              <div className={`${this.state.backgroundColor ? 'bgColor':''} card`} onClick={this.handleClick}>
                <div className="container">
                  <h3><b>Exercise</b></h3>
                </div>
              </div>
            </div>

            <div className="column">
              <div className={`${this.state.backgroundColor ? 'bgColor':''} card`} onClick={this.handleClick}>
                <div className="container">
                  <h3><b>Weight Management</b></h3>
                </div>
              </div>
            </div>

            <div className="column">
              <div className={`${this.state.backgroundColor ? 'bgColor':''} card`} onClick={this.handleClick}>
                <div className="container">
                  <h3><b>Blood Pressure</b></h3>
                </div>
              </div>
            </div>

            <div className="column">
              <div className={`${this.state.backgroundColor ? 'bgColor':''} card`} onClick={this.handleClick}>
                <div className="container">
                  <h3><b>A1C</b></h3>
                </div>
              </div>
            </div>

          </div>

          
      

      </div>

      <div className='row-dot'>
          <div className='column-dot'>
            BACK
          </div>
          <div className='column-dot'>
            <div style={{textAlign:'center'}}>
              <span className="dot" onclick="currentSlide(1)"></span>
              <span className="dot" onclick="currentSlide(2)"></span>
              <span className="dot" onclick="currentSlide(3)"></span>
              <span className="dot" onclick="currentSlide(3)"></span>
              <span className="dot active" onclick="currentSlide(3)"></span>
            </div>
          </div>
          <div className='column-dot'>
          DONE
          </div>
        </div>
      

    </div>
    )
  }
}

export default App;
