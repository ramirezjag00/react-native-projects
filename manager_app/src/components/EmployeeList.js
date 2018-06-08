import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView } from 'react-native';
import { employeesFetch } from '../actions';
import ListItem from './ListItem';

class EmployeeList extends Component {
	componentWillMount() {
		this.props.employeesFetch();

		this.createDataSource(this.props);
	}

	componentWillReceiveProps(nextProps) {
    // nextProps are the next set of props that this component
    // will be rendered with
    // this.props is still the old set of props

		this.createDataSource(nextProps);
	}
	// constructor() {
	// 	super();
	// 	// request for the employees
	// 	this.props.employeesFetch();
	// 	// call the helper method that tells ListView what to show, employees
	// 	this.createDataSource(this.props);
	// 	// console.log('constructor', this.props);
	// }

	// componentDidUpdate() {
	// 	this.createDataSource(this.props);
	// }

	// once the request has been received, update the UI
	// componentDidUpdate(prevProps) {
	// 	this.createDataSource(prevProps);
		// console.log('componentDidUpdate', prevProps);
	// }

	// { employees } = this.props.employees
	createDataSource({ employees }) {
		// check ListView Documentation from react-native
		// this block of code tells ListView what to show on the screen
		const ds = new ListView.DataSource({
			rowHasChanged: (r1, r2) => r1 !== r2
		});

		this.state = {
			dataSource: ds.cloneWithRows(employees),
		};
	}

	renderRow(employee) {
		return <ListItem employee={employee} />;
	}

	render() {
		// console.log(this.props);
		return (
			<ListView
				enableEmptySections
				dataSource={this.state.dataSource}
				//helper method that tells ListView how to render the data
				renderRow={this.renderRow}
			/>
		);
	}
}

// state.employees is an object
function mapStateToProps(state) {
	// it has many key value pairs, 
	// for each key value pair, 
	// run the fat arrow function with each value (val which is the user model) and key (user id)
	const employees = _.map(state.employees, (val, uid) => {
		// we then create a new object, push in all the values and the uid to an array
		return { ...val, uid };
	});

	return { employees };
}

export default connect(mapStateToProps, { employeesFetch })(EmployeeList);
