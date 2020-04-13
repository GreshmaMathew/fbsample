import React, {Component} from 'react';
import {Text, View, Button, FlatList} from 'react-native';
import {Display} from '../../styles/Display';
import {getBlogs, deleteBlogs} from '../actions/index';
import {connect} from 'react-redux';
import _ from 'lodash';
class DisplayBlog extends Component {
  componentDidMount() {
    this.props.getBlogs();
  }
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={Display.container}>
        <View style={Display.container1}>
          <FlatList
            style={Display.flatliststyle}
            data={this.props.listOfBlogs}
            keyExtractor={item => item.key}
            renderItem={({item}) => {
              return (
                <View style={Display.flatlistcontainer}>
                  <Text style={Display.titlestyle}>{item.title}</Text>
                  <Text style={Display.contentstyle}>{item.content}</Text>
                  <View style={Display.container4}>
                    <View>
                      <Button
                        style={Display.buttonstyle1}
                        title="delete"
                        onPress={() => this.props.deleteBlogs(item.key)}
                      />
                    </View>
                    <View>
                      <Button
                        style={Display.buttonstyle1}
                        title="update"
                        onPress={() => navigate('EDIT', {...item})}
                      />
                    </View>
                  </View>
                </View>
              );
            }}
          />
        </View>
        <View style={Display.container2}>
          <Button
            style={Display.buttonstyle}
            title="POST"
            onPress={() => navigate('POST')}
          />
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
export default connect(
  mapStateToProps,
  {getBlogs, deleteBlogs},
)(DisplayBlog);
