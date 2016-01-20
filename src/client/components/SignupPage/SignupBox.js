import React, {Component} from 'react';
import SignupBoxInput from './SignupBox/SignupBoxInput'

const 

export default class extends Component {
	inputs(){
		/*
		console.log("start inputs");
		if(this.props.inputs){
			console.log('inputs exist');
			this.props.inputs.map((input)=>{
				return (
					<SignupBoxInput name={input.name} value={input.value} type={input.type} />
					);
			});	
		}
		*/
		return (<h2>Hello2</h2>);
	}
	render(){
		return(
			<div className="SignupBoxComp">
				{this.inputs()}
				<h1>Hello2</h1>
			</div>
			);
	}
	
}