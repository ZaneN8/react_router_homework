import React from "react";
import {Spring} from 'react-spring/renderprops';
// import { Bounce, fadeIn } from "react-animations";

export default function Scott() {
    return (
      <Spring
        from={{ opacity: 0, marginTop: -500}}
        to={{ opacity: 1, marginTop: 0}}
        config={{duration: 1000}}
      >
        {props => (
          <div style={props}>
            <div style= {style1}>
              <p>Rock Paper Scissors</p>
              <h1> Shoot</h1>
              <Spring
                from={{ number: 5}}
                to={{number: 0}}
                config={{duration: 5000}}
              >
                {props => (
                  <div style={props}>
                    <h1 style ={countdown}>
                      {props.number.toFixed()}
                    </h1>
                  </div>
                )}
              </Spring>
            </div>
          </div>
        )}
      </Spring>
    )
}

const style1 = {
  background:'pink',
  color: 'brown',
}

const countdown = {
  background: '#333',
  textAlign:'center',
  width: '100px',
  borderRadius: '50%',
  margin: '1rem auto'
};
// import { Animate } from 'react-simple-animate';

// class Scott extends React.Component {
 
//   state = {
//     play: false
//   }
  
//   render() {
//     return (
//       <Animate
//         play={this.state.play}
//         startStyle={{ transform: 'translateX(0px)' }}
//         endStyle={{ transform: 'translate(300px)' }}
//       >
//         <Scott/>
//       </Animate>
//     )
//   }
// }

// export default Scott;
