import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Todos from './components/Todos';
import Footer from './components/Footer';
import { useEffect, useState } from 'react';
import AddTodo from './components/AddTodo';

function App() {
  let initTodod;
  if (localStorage.getItem("todos") === null) {
    initTodod = [];
  }
  else {
    initTodod = localStorage.getItem("todos");
  }



  const onDelete = (todo) => {
    setTodos(todosList.filter((e) => {
      return e !== todo;
    }))
    localStorage.setItem("todos", JSON.stringify(todosList));
  }


  const addTodo = (title, desc) => {
    let myTodo = {
      sno: todosList.length,
      title: title,
      desc: desc
    }
    setTodos([...todosList,myTodo]);
    localStorage.setItem("todos", JSON.stringify(todosList));
  }

  const [todosList, setTodos] = useState(initTodod);

  // useEffect(() => {
  //   localStorage.setItem("todos", todosList);
  // }, [todosList]);

  return (
    <>
      <Header title="Todo's" searchBar={false} />
      <AddTodo addTodo={addTodo} />
      <Todos todos={todosList} onDelete={onDelete} />

      <Footer />
    </>
  );
}

export default App;
