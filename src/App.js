import React, { Component } from 'react';
import Main from "./components/Main";
import Wrapper from  "./components/Wrapper";
import Header from "./components/Header"


class App extends Component {
  state = {  }
  render() { 
    return (  

      <div>
        <Wrapper>
          <Header />
          <Main />
        </Wrapper>
      </div>
    );
  }
}
 
export default App;
