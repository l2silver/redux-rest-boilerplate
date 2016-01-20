import React, {Component} from 'react';
import SignupBox from './SignupPage/SignupBox';

const data = [{
				name: "email",
				value: "",
				type: "email"
				}
				]

export default class extends Component {
  render(){
    return (
      <div className="SignupPage">
      	<SignupBox inputs={data} />
      </div>
      );
  }
}