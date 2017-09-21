import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView,
  TouchableHighlight,
  Modal,
  TextInput
} from 'react-native';

const styles = require('./src/style');
import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBZiLvP-U6CB9RajeNIQH7yZkCUferCcDw",
  authDomain: "itemlister-4fb9d.firebaseapp.com",
  databaseURL: "https://itemlister-4fb9d.firebaseio.com",
  projectId: "itemlister-4fb9d",
  storageBucket: "itemlister-4fb9d.appspot.com"
  //messagingSenderId: "877848947270"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
import Toolbar from './src/component/toolbar/toolbar';
import AddButton from './src/component/addbutton/addbutton';


export default class FirstApp extends Component {

  constructor() {
    super();
    let ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      text: '',
      itemDataSource: ds,
      modalVisible: false
    }

    this.itemsRef = this.getRef().child('items');
    this.renderRow = this.renderRow.bind(this);
    this.pressRow = this.pressRow.bind(this);
  }
  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  getRef() {
    return firebaseApp.database().ref();
  }

  componentDidMount() {
    this.getItems(this.itemsRef);
  }

  componentWillMount() {
    this.getItems(this.itemsRef);
  }


  addItem() {
    this.setModalVisible(true);
  }

  getItems(itemsRef) {
    //let items = [{ title: 'Item One' }, { title: 'Item two' }]; //static data

    itemsRef.on('value', (snap) => {
      let items = [];
      snap.forEach((child) => {
        items.push({
          title: child.val().title,
          _key: child.key
        });
      });
      this.setState({
        itemDataSource: this.state.itemDataSource.cloneWithRows(items)
      });
    });

  }

  pressRow(item) {
    // console.log('item');
    this.itemsRef.child(item._key).remove();
  }

  renderRow(item) {
    return (
      <TouchableHighlight onPress={() => {
        this.pressRow(item);
      }}>
        <View style={styles.li}>
          <Text style={styles.liText}>
            {item.title}
          </Text>
        </View>

      </TouchableHighlight>
    );
  }



  render() {
    return (
      <View>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => { }}
        /*{ alert("Modal has been closed.") }*/
        >
          <View style={{ marginTop: 22 }}>
            <View>
              <Text>Hello World!</Text>

              <toolbar title="Add Item" />

              <TextInput value={this.state.text}
                placeholder="Add Item"
                onChangeText={(value) => this.setState({ text: value }
                )} />

              <TouchableHighlight onPress={() => {
                this.itemsRef.push({ title: this.state.text });
                this.setModalVisible(!this.state.modalVisible)
              }}>
                <Text>Save Item</Text>
              </TouchableHighlight>


              <TouchableHighlight onPress={() => {
                this.setModalVisible(!this.state.modalVisible)
              }}>
                <Text>Cancel</Text>
              </TouchableHighlight>

            </View>
          </View>
        </Modal>

        <toolbar title="ItemLister App" />
        <ListView
          dataSource={this.state.itemDataSource}
          renderRow={this.renderRow}
        />
        <AddButton onPress={this.addItem.bind(this)} title="Add Item" />

      </View>
    );
  }
}

AppRegistry.registerComponent('FirstApp', () => FirstApp);
