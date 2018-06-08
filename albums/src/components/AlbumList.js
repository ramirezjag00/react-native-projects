import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
// import { fetchAlbums } from '../actions/index';
import AlbumDetail from './AlbumDetail';

export default class AlbumList extends Component {
  state = { albums: [] };

  componentDidMount() {
    // this.props.fetchAlbums();
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
    .then(response => this.setState({ albums: response.data }));
  }

  renderAlbums() {
   return this.state.albums.map(album => 
     <AlbumDetail key={album.title} album={album} />
   );
  }

  render() {
    console.log(this.state);
	return (
		<ScrollView>
			{ this.renderAlbums() }
		</ScrollView>
	);
  }
}