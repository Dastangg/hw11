import { useRef, useState } from 'react';
import './App.css';
import AddUser from './components/users/AddUser';
import UserList from './components/users/UserList';









// function App(){
//   const inputRef=useRef()

//   const sumbitHandler=(e)=>{
//     e.preventDefault()
//     console.log(inputRef.current.value);
    

//   }

//   return(
//     <form onSumbit={sumbitHandler}>
//       <input ref={inputRef} type='text' />
//       <button type='submit'>Add </button>
//     </form>
//   )
// }







function App() {
  const [userList, setUserList] = useState([])

  const addUserHandler = (name,age) => {
    setUserList([...userList, {name, age, id: Math.random().toString()}])
  }
  return (
    <>
          <AddUser addUser={addUserHandler}/>
          <UserList users={userList}/>
          {/* <ErrorModal /> */}
    </>
  );
}

export default App;
