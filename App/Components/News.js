/*
*
* Assignment 3
* Starter Files
*
* CS47
* Oct, 2018
*/

import React, { Component } from 'react'
import PropTypes from 'prop-types' //consider using this!
import { StyleSheet, SafeAreaView, View, FlatList, Text, Linking } from 'react-native'
import { material } from 'react-native-typography' //consider using this!
import { Metrics, Colors } from '../Themes'

export default class News extends Component {
  static defaultProps = { articles: [] }

  static propTypes = {
    articles: PropTypes.array
  }

  //you can change the props above to whatever you want/need.

  render () {
    const {articles} = this.props;

    return (
      <View style={styles.container}>
        <Text style={ { fontSize: 40, fontWeight: 'bold' } }>
          {this.props.data.title}
        </Text>

        <Text style={ { fontSize: 20 }}>
          {this.props.data.snippet}
        </Text>

        <Text style={ { fontSize: 20, fontWeight: 'bold' } }>
          {this.props.data.date}
        </Text>

        <Text style={ { fontSize: 10, fontWeight: 'bold' } }>
          {this.props.data.byline}
        </Text>

      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {

  },
});
