import React from 'react'

class Click extends React.Component {
  constructor(){
      super();
      this.state = {render:''}
  }
  handleClick(cardName, e){
      console.log(cardName);
      this.setState({render:cardName});        
  }
  _renderSubComp(){
      switch(this.state.render){
          case 'About Me': return <About1/>
          case 'My Stack' : return <About2/>
      }
  }
  render() {
      return (
          <div className="cards">
              <ul style={{display: 'inline'}}>
                  <li className="li1" onClick={this.handleClick.bind(this, 'About Me')}>TidBits About Me</li>
                  <li className="li2" onClick={this.handleClick.bind(this, 'My Stack')}>My Stack</li>
              </ul>
              {this._renderSubComp()}
          </div>
      );
  }
}
export default Click;

class About1 extends React.Component{
  render(){
    return(
        <div className="aboutContainer">
        <div className="Info">
          <h1 className='aboutInfoh1'>Hi, I'm Nisa.</h1>
          <div className="text">
            <div className="aboutText">
              <p className='aboutInfoP'>Web developer/artist based in NorthWest Ohio.</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

class About2 extends React.Component{
  render(){
    return(
        <div className="aboutContainer">
        <div className="Info">
          <h1 className='aboutInfoh1'>My Stack</h1>
          <div className="text">
            <div className="aboutText">
              <h2 className="aboutInfoh2">Languages</h2>
              <hr/>
              <p className='aboutInfoP'>HTML</p>
              <br/>
              <p className='aboutInfoP'>CSS</p>
              <br/>
              <p className='aboutInfoP'>JavaScript</p>
              <br/>
              <p className='aboutInfoP'>React</p>
              <br/>
              <p className='aboutInfoP'>Java</p>
              <h2 className="aboutInfoh2">Frameworks</h2>
              <hr />
              <p className='aboutInfoP'>Bootstrap</p>
              <br/>
              <p className='aboutInfoP'>Semantic-UI</p>
              <br/>
              <p className='aboutInfoP'>Redux</p>
              <br/>
              <p className='aboutInfoP'>Styled-Components</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
