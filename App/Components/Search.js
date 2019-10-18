/*
*
* Assignment 3
* Starter Files
*
* CS47
* Oct, 2018
*/

import React, { Component, useState } from 'react'
import { Keyboard } from 'react-native';
import PropTypes from 'prop-types' //consider using this!
import { FlatList, ActivityIndicator, StyleSheet, View, Button, TextInput, TouchableOpacity } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
import { Metrics, Colors } from '../Themes'


export default Search = (props) => {


  const [value, setValue] = useState("");

  onChangeText = text => {
    setValue(text);
  }

  onSubmitEdit = () => {
    props.loadArticles(value);
  }

  onPress = () => {
    props.loadArticles(value);
  }

    return (
      <View>

        <View>
          <TextInput
            style={{height: 40, borderColor: 'gray', borderWidth:1}}
            onChangeText={text=> this.onChangeText(text)}
            value={value}
            onSubmitEditing={this.onSubmitEdit}
            />
          <Button
            title="Submit"
            onPress={this.onPress}
          />

        </View>


      </View>
    );

}


const styles = StyleSheet.create({

});
