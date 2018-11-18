import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import phone2 from'./assets/phone2.png';
// import Layout from 'goodVibes/constants/Layout';



export default class Map extends React.Component{
	render(){
		return (

		<div style={{display: 'block', padding: 60, backgroundColor: '#ff4f55'}}>
					  
		<Container>

		<Row>
          <Col xs="12" sm="12" md="6">
          	<img src={phone2} className="map-style" style={{float: 'right'}}/>
          </Col>
          <Col xs="12" sm="12" md="6">
          	<h3 className="map-title" style={{color: '#1b134a'}}>Find dispensaries near you</h3>
          	<p className="map-text" style={{width: '50%'}}>Our platform allows you to see dispensaries near you</p>
          	<br />
          	<p className="map-text" style={{width: '50%'}}>order for delivery or schedule for pick up when you’re on your way home</p>
          </Col>
		</Row>
        
      </Container>

	    </div>
        )
	}
}



        // <Row>
        //   <Col>.col</Col>
        //   <Col>.col</Col>
        //   <Col>.col</Col>
        //   <Col>.col</Col>
        // </Row>
        // <Row>
        //   <Col xs="3">.col-3</Col>
        //   <Col xs="auto">.col-auto - variable width content</Col>
        //   <Col xs="3">.col-3</Col>
        // </Row>
        // <Row>
        //   <Col xs="6">.col-6</Col>
        //   <Col xs="6">.col-6</Col>
        // </Row>
        // <Row>
        //   <Col xs="6" sm="4">.col-6 .col-sm-4</Col>
        //   <Col xs="6" sm="4">.col-6 .col-sm-4</Col>
        //   <Col sm="4">.col-sm-4</Col>
        // </Row>
        // <Row>
        //   <Col sm={{ size: 6, order: 2, offset: 1 }}>.col-sm-6 .order-sm-2 .offset-sm-1</Col>
        // </Row>
        // <Row>
        //   <Col sm="12" md={{ size: 6, offset: 3 }}>.col-sm-12 .col-md-6 .offset-md-3</Col>
        // </Row>
        // <Row>
        //   <Col sm={{ size: 'auto', offset: 1 }}>.col-sm-auto .offset-sm-1</Col>
        //   <Col sm={{ size: 'auto', offset: 1 }}>.col-sm-auto .offset-sm-1</Col>
        // </Row>

// marginBottom: 80, 

// const styles = StyleSheet.create({
// 	adImage: {
// 		height: 200, 
// 		width: '100%', 
// 		borderRadius: 8,
// 	},
// 	imageShadow: {
// 		shadowOffset: {  width: 0,  height: 10,  },
// 		shadowColor: 'black',
// 		shadowOpacity: .7,
// 		shadowRadius: 10,
// 		position: 'absolute',
// 		bottom: 0,
// 		height: 10,
// 		width: '76%',
// 		marginLeft: '12%',
// 		zIndex: -1,
// 		backgroundColor: Layout.container.backgroundColor
// 	},
// 	learnMore: {
// 		backgroundColor: Layout.pink, 
// 		padding: 15, 
// 		borderRadius: 5 , 
// 		position: 'absolute', 
// 		bottom: 0, 
// 		right: 0
// 	},
// 	learnMoreText: {
// 		textAlign: 'center', 
// 		fontSize: 16, 
// 		color: 'white', 
		
// 	}
// })

