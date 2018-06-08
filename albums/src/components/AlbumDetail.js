import React from 'react';
import { View, Text, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';
// { album } = props.album
const AlbumDetail = ({ album }) => {
	// props.album.title
	// props.album.artist
	// props.album.thumbnail_image
	const { title, artist, thumbnail_image, image, url } = album;
	// styles.thumbnailStyle
	// styles.headerContentStyle
	const { thumbnailStyle, headerContentStyle, thumbnailContainerStyle, headerTextStyle, imageStyle } = styles;
	return (
			<Card>
				<CardSection>
					<View style={thumbnailContainerStyle}>
						<Image 
							style={thumbnailStyle}
							source={{ uri: thumbnail_image }} 
						/>
					</View>
					<View style={headerContentStyle}>
						<Text style={headerTextStyle}>{ title }</Text>
						<Text>{ artist }</Text>
					</View>
				</CardSection>

				<CardSection>
					<Image 
						style={imageStyle}
						source={{ uri: image }} 
					/>
				</CardSection>

				<CardSection>
					{/*pass an onPress prop from parent to child,
					Linking from ReactNative to route users to a specific url when button is pressed
					*/}
					<Button onPress={() => Linking.openURL(url)}>
						Buy Now
					</Button>
				</CardSection>
			</Card>
	);
};

const styles = {
	headerContentStyle: {
		flexDirection: 'column',
		justifyContent: 'space-around',
	},
	headerTextStyle: {
		fontSize: 18,
	},
	thumbnailStyle: {
		height: 50,
		width: 50,
	},
	thumbnailContainerStyle: {
		justifyContent: 'center',
		alignItems: 'center',
		marginLeft: 10,
		marginRight: 10,
	},
	imageStyle: {
		height: 300,
		// to max width of device flex and width
		flex: 1,
		width: null
	}
};

export default AlbumDetail;
