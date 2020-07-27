import React from 'react';
import {View, Text, StyleSheet } from 'react-native';



const Header = props => (
	<View style={style.container}>
		<Text style={style.title}>{ props.title }</Text>
	</View>
);

const style = StyleSheet.create({
	container: {
		marginTop: 40,
		backgroundColor: '#2504A1',

		alignItems: 'center',
		justifyContent: 'center',
},
	title: {
		fontSize: 50,
		color: '#FFFFFF',
	}
});

export default Header;