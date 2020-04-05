import React, {Component} from 'react';
import {Text, View, TextInput, Button} from 'react-native';
import {styles} from '../styles/postStyle';
import {connect} from 'react-redux';
import {postBlogs} from '../actions';
class Post extends Component {
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
      <View style={styles.container}>
        <Text style={styles.textstyle}>BLOG POST</Text>
        <TextInput
          style={styles.textinputstyle}
          placeholder="ENTER BLOG TITLE"
          onChangeText={title => this.setState({title})}
          value={this.state.title}
        />
        <TextInput
          style={styles.textinputstyle}
          placeholder="ENTER BLOG CONTENT"
          onChangeText={content => this.setState({content})}
          value={this.state.content}
        />
        <Button title="SUBMIT" onPress={this.submit} />
        <Button title="GO TO BLOG CONTENT" onPress={() => navigate('BLOGS')} />
      </View>
    );
  }
}

export default connect(null, {postBlogs})(Post);
