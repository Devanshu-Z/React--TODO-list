
import React, { useState } from 'react';
import { StyleSheet, Text, View,FlatList  } from 'react-native';
import Header from './components/header';
import TodoItem from './components/todoItem';
import AddTodo from './components/addTodo';

export default function App() {
  const [Todo , setTodo] = useState([
    {task: 'Learn React', key:'1'},
    {task: 'Submit Assignment', key:'2'},
    {task: 'Get the Offer', key:'3'},
  ]);

  const pressHandler =  (key) => {
    setTodo((prevTodo) => {
      return prevTodo.filter(todo  => todo.key != key);
    });
  }

  const submitHandler =  (text) => {
    setTodo((prevTodo) => {
      return [
        {task:text, key:Math.random().toString},
        ...prevTodo
      ]
    })
  }
  

  
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <AddTodo submitHandler={submitHandler}/>
        <View style={styles.list}>
          <FlatList
            data = {Todo}
            renderItem ={({item}) => (
            <TodoItem item ={item} pressHandler ={pressHandler}/>
            )}
          
          />
        </View>
      </View>
     </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
  content:{
    padding : 40,
    
  },
  list:{
    marginTop:20,

  },

  
  
  
});
