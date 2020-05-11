import React, { Component } from 'react';
import Card from '@bit/react-bootstrap.react-bootstrap.card';
import ReactBootstrapStyle from '@bit/react-bootstrap.react-bootstrap.internal.style-links';

class Example extends Component {
	render() {
		return (
			<>
				<Card bg="primary" text="white" style={{ width: '18rem' }}>
					<Card.Header>Header</Card.Header>
					<Card.Body>
						<Card.Title>Primary Card Title</Card.Title>
						<Card.Text>
							Some quick example text to build on the card title and make up the bulk
							of the card's content.
      </Card.Text>
					</Card.Body>
				</Card>
				<br />

				<Card bg="secondary" text="white" style={{ width: '18rem' }}>
					<Card.Header>Header</Card.Header>
					<Card.Body>
						<Card.Title>Secondary Card Title</Card.Title>
						<Card.Text>
							Some quick example text to build on the card title and make up the bulk
							of the card's content.
      </Card.Text>
					</Card.Body>
				</Card>
				<br />

			


		
			
			</>
		)
	}
}

export default () => (<div><ReactBootstrapStyle /><Example /></div>)