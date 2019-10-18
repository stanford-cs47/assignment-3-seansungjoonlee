/*
*
* Assignment 3
* Starter Files
*
* CS47
* Oct, 2018
*/

import React from 'react';
import { Dimensions, StyleSheet, Text, Image, View, SafeAreaView, FlatList } from 'react-native';
import { Images, Colors } from './App/Themes'
import APIRequest from './App/Config/APIRequest'

import News from './App/Components/News'
import Search from './App/Components/Search'

export default class App extends React.Component {

  state = {
    loading: true,
    articles : [],
    searchText: '',
    category: ''
  }

  componentDidMount() {
    this.loadArticles();
  }

 loadArticles = async (searchTerm = '', category = '') => {
    this.setState({articles:[], loading: true});
    var resultArticles = [];
    if (category === '') {
      resultArticles = await APIRequest.requestSearchPosts(searchTerm);
    } else {
      resultArticles = await APIRequest.requestCategoryPosts(category);
    }
    console.log(resultArticles);
    this.setState({loading: false, articles: resultArticles})
  }

  render() {
    const {articles, loading} = this.state;
    const dimensions = Dimensions.get('window');
    const imageWidth = dimensions.width;
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.logo}>
          <Image
            source={Images.logo}
            resizeMode="contain"
            style={{width: imageWidth, height: 100}}
          />
        </View>

        <Search loadArticles={this.loadArticles} />

        <FlatList
          data={this.state.articles}
          renderItem={( {item, index} ) =>
            <News data={item}/>
          }
          keyExtractor={(item, index) => {
            return index.toString()
          }}
        />



      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1 ,
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: '#fff',
    justifyContent: 'space-between',
  },
  logo: {
      width: '100%',
      overflow: 'visible',

  }
});
