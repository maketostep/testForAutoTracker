import './App.css';
import * as React from 'react'
import UpperNav from './modules/UpperNav';
import SignIn from './modules/authorization';
import Profile from './modules/profile';
import CurrentPage from './modules/CurrentPage'

export default function App() {
  
  let isAuth = false
  const [value, setValue] = React.useState('profiles');
  const currentPage = (event, newValue) => {
    setValue(newValue);
    console.log(newValue)
}
  const handleSubmit = (event) => {
    // event.preventDefault()
    const data = new FormData(event.currentTarget);
    if(data.get('email') === 'test@mail.ru' && data.get('password') === '123321') {
      // console.log('Success')                        /SNACKBAR
      isAuth = true
      localStorage.setItem('isAuth', JSON.stringify(isAuth))
    } else {
      // console.log('Error')                          /SNACKBAR
      isAuth = false
      localStorage.setItem('isAuth', JSON.stringify(isAuth))
    }
  };
  const handleExit = (event) => {
    event.preventDefault()
    isAuth = false
    localStorage.setItem('isAuth', JSON.stringify(isAuth))
    window.location.reload()
  }
  function authAct() {
    return JSON.parse(localStorage.getItem('isAuth')) === true ? <Profile handleExit={handleExit}/> : <SignIn handleSubmit={handleSubmit}/>
  }
  return (<div>
    <UpperNav value={value} currentPage={currentPage} isAuth={JSON.parse(localStorage.getItem('isAuth'))}/>
    
    {value !== 'profiles' ? <CurrentPage page={value}/> : authAct()}
  </div>)
}

