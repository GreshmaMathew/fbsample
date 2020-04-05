import firbase from '../fb/fb';
import {firebase} from '@react-native-firebase/database';
export function getBlogs() {
  return dispatch => {
    firbase
      .database()
      .ref('/blogs')
      .on('value', snapshot => {
        dispatch({
          type: 'BLOGS_FETCH',
          payload: snapshot.val(),
        });
      });
  };
}
export function postBlogs(title, content) {
  return dispatch => {
    firebase
      .database()
      .ref('/blogs')
      .push({title, content});
  };
}
export function deleteBlogs(key) {
  return dispatch => {
    firebase
      .database()
      .ref(`/blogs/${key}`)
      .remove();
  };
}
