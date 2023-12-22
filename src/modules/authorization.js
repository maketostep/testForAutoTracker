import * as React from 'react';
import SignIn from './SignIn';


export default function Authorization(props) {
  let isAuth = false

  const handleSubmit = (event) => {
    // event.preventDefault()
    const data = new FormData(event.currentTarget);
    if(data.get('email') === 'test@mail.ru' && data.get('password') === '123321') {
      console.log('Success')
      isAuth = true
      localStorage.setItem('isAuth', JSON.stringify(isAuth))
    } else {
      // console.log('Error')
      isAuth = false
      localStorage.setItem('isAuth', JSON.stringify(isAuth))
    }
  }
  // const handleExit = (event) => {
  //   event.preventDefault()
  //   isAuth = false
  //   localStorage.setItem('isAuth', JSON.stringify(isAuth))
  //   window.location.reload()
  // }


  return (
    <SignIn handleSubmit={handleSubmit}/>
  )
}