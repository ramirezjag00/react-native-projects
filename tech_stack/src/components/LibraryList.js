import React, { Component } from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux';
import ListItem from './ListItem';

class LibraryList extends Component {
	constructor(props) {
		super(props);

		// check ListView Documentation from react-native
		// this block of code tells ListView what to show on the screen
		const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2
		});
		// what data to use
		// take this list of libraries (this.props.libraries) and use it to render it to the screen using the ds
		this.state = {
			dataSource: ds.cloneWithRows(this.props.libraries),
		};
	}

	renderRow(library) {
		return <ListItem library={library} />;
	}

	render() {
		return (
			<ListView
				dataSource={this.state.dataSource}
				//helper method that tells ListView how to render the data
				renderRow={this.renderRow}
			/>
		);
	}
}

// state.libraries = { libraries }
function mapStateToProps({ libraries }) {
	return {
		libraries
	};
}

export default connect(mapStateToProps)(LibraryList);
