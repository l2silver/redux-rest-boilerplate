import React, {Component} from 'react';

export default class extends Component {
	errors(){
		if(this.props.errors == 1)
		this.props.errors.map((error)=>{
			return (<p>{error}</p>);
		});
	}
	render(){
		return( 
			<div className="input-group">
				<input type={this.props.type} name={this.props.name} placeholder={this.props.name} value={this.props.value} />
				{this.errors()}
			</div>
			);
	}
}