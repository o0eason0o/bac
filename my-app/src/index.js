import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Map from './map';
import Connections from './connections';

import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class Square extends React.Component {
  render() {
    return (
      <button className="square" 
      onClick={()=> this.props.onClick()}>
        {this.props.value}
      </button>
    );
  }
}

class Board extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			squares: Array(9).fill(null),
		};
	}


  renderSquare(i) {
    return (<Square value={this.state.squares[i]} 
    	onClick={()=>{ this.handleClick(i)}} />
    	);
  }

  render() {
    const status = 'Next player: X';

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class TwinBox extends React.Component {
  render(){
    return (
    <div>
      <div style={{height: 36, color: '#666666', backgroundImage: 'url(${./assets/background.png})'}}>YESS</div>
      <div style={{height: 400, color: '#666666', backgroundColor: '#f6f6f6'}}>YESS</div>

      <Map />

      <Connections />

      <div style={{height: '80vh', color: '#666666', backgroundColor: '#ffffff'}}></div>
      <div style={{color: '#ffffff', backgroundColor: '#1b134a', textAlign: 'center', padding: '5px'}}>
        <a style={{fontSize: '0.6em'}}>&reg;2018 Good Vibes Tech, LLC</a>
      </div>

    </div>

    );
  }
}


class Game extends React.Component {
  render() {
    return (
      <div>
        <TwinBox />
      </div>
    );
  }
}

// class Game extends React.Component {
//   render() {
//     return (
//       <div className="game">
//         <div className="game-board">
//           <Board />
//         </div>
//         <div className="game-info">
//           <div>{/* status */}</div>
//           <ol>{/* TODO */}</ol>
//         </div>
        
//       </div>
//     );
//   }
// }

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
