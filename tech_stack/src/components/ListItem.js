import React, { Component } from 'react';
import { 
	Text, 
	TouchableWithoutFeedback, 
	View,
	LayoutAnimation,
	Platform,
	UIManager,
} from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions';

class ListItem extends Component {
	// once the component mounted, and the OS is android, enable LayoutAnimation
	componentDidMount() {
		if (Platform.OS === 'android') {
			UIManager.setLayoutAnimationEnabledExperimental(true);
		}
	}
	// after the component has been updated, automatically call and apply layoutAnimation.spring to that component's content
	componentDidUpdate() {
        LayoutAnimation.spring();
    }

	renderDescription() {
		const { library, expanded } = this.props;

		if (expanded) {
			return (
				<CardSection>
					<Text style={{ flex: 1 }}>
						{library.description}
					</Text>
				</CardSection>
			);
		}
	}

	render() {
		const { titleStyle } = styles;
		const { id, title } = this.props.library;

		return (
			// this component registers a press event but does not give any feedback to the user when it occurs
			// should only have 1 child, so wrap your components into a view if more than 1
			// prop onPress handler, how to register a callback with a touchable feedback
			// then call our action creator selectLibrary
			<TouchableWithoutFeedback
				onPress={() => this.props.selectLibrary(id)}
			>
				<View>
					<CardSection>
						{/* from parent prop, library, and title based on the json */}
						<Text style={titleStyle}>
							{title}
						</Text>
					</CardSection>
					{this.renderDescription()}
				</View>
			</TouchableWithoutFeedback>
		);
	}
}

const styles = {
	titleStyle: {
		fontSize: 18,
		paddingLeft: 15
	},
};
// state.selectedLibraryId = { selectedLibraryId }
// ownProps = this.props
function mapStateToProps(state, ownProps) {
	// this type of technique, pre-calculation, inside the mapStateToProps will help in a more complex/larger app, compared to just having the logic inside the component's helper method
	const expanded = state.selectedLibraryId === ownProps.library.id;
	return {
		// expanded: expanded,
		expanded,
	};
}

export default connect(mapStateToProps, actions)(ListItem);
