import React, {Component} from 'react';
import {Text, View, Button, TextInput} from 'react-native';
import {Post} from '../../styles/Post';
import {postBlogs} from '../actions/index';
import {connect} from 'react-redux';

class PostBlog extends Component {
  state = {
    title: '',
    content: '',
  };
  submit = () => {
    this.props.postBlogs(this.state.title, this.state.content);
    this.setState({
      title: '',
      content: '',
    });
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={Post.container}>
        <View style={Post.container1}>
          <Text>POST PAGE</Text>
          <TextInput
            style={Post.textstyle}
            placeholder="title"
            onChangeText={title => this.setState({title})}
            value={this.state.title}
          />
          <TextInput
            style={Post.textstyle}
            placeholder="content"
            onChangeText={content => this.setState({content})}
            value={this.state.content}
          />
          <Button title="submit" onPress={this.submit} />
        </View>
        <View style={Post.container2}>
          <Button title="DISPLAY" onPress={() => navigate('DISPLAY')} />
        </View>
      </View>
    );
  }
}
export default connect(
  null,
  {postBlogs},
)(PostBlog);
