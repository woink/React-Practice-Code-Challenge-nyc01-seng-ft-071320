import React from 'react';

class Sushi extends React.Component {
	clickHandler = () => {
		return this.props.addToEaten(this.props.sush);
	};

  componentDidUpdate = () => {
    return this.props.eaten
  }

	render() {
		return (
			<div className="sushi">
				<div className="plate" onClick={this.clickHandler}>
					{
						/* Tell me if this sushi has been eaten! */
						this.props.eatenList.includes(this.props.sush) ? null : <img alt="" src={this.props.sush.img_url} width="100%" />
					}
				</div>
				<h4 className="sushi-details">
					{this.props.sush.name} - ${this.props.sush.price}
				</h4>
			</div>
		);
	}
}

export default Sushi;
