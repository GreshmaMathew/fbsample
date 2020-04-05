import React, {Component} from 'react';
import {Text, View, Button, FlatList} from 'react-native';
import {styles} from '../styles/blogStyle';
import {getBlogs, deleteBlogs} from '../actions';
import {connect} from 'react-redux';
import _ from 'lodash';

class Blogs extends Component {
  componentDidMount() {
    this.props.getBlogs();
  }
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={styles.container2}>
          <FlatList
            style={styles.flatliststyle}
            data={this.props.listOfBlogs}
            keyExtractor={(item) => item.key}
            renderItem={({item}) => {
              return (
                <View style={styles.flatlistcontainer}>
                  <Text style={styles.titlestyle}>{item.title}</Text>
                  <Text style={styles.contentstyle}>{item.content}</Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-around',
                      paddingTop: 30,
                    }}>
                    <View>
                      <Button
                        style={{width: '30%'}}
                        title="delete"
                        onPress={() => this.props.deleteBlogs(item.key)}
                      />
                    </View>
                  </View>
                </View>
              );
            }}
          />
        </View>
        <View style={styles.container3}>
          <Button title="POST" onPress={() => navigate('POST')} />
        </View>
      </View>
    );
  }
}
function mapStateToProps(state) {
  const listOfBlogs = _.map(state.blogsList.blogsList, (val, key) => {
    return {
      ...val,
      key: key,
    };
  });
  return {
    listOfBlogs,
  };
}
export default connect(mapStateToProps, {getBlogs, deleteBlogs})(Blogs);
