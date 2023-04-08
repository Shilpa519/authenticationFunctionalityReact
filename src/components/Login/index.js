import {Component} from 'react'
import Cookies from 'js-cookie'
import './index.css'

class Login extends Component {
  state = {username: 'rahul', password: 'rahul@2021'}

  submit = async event => {
    event.preventDefault()

    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {method: 'POST', body: JSON.stringify(userDetails)}

    const response = await fetch(url, options)

    const data = await response.json()

    if (response.ok === true) {
      this.onClickLogin(data.jwt_token)
      console.log('Logged in Successfully')
    }
  }

  onClickLogin = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {
      expires: 30,
      path: '/',
    })
    history.replace('/')
  }

  render() {
    return (
      <div className="login-container">
        <h1 className="login-heading">Please Login</h1>
        <button className="login-btn" type="button" onClick={this.submit}>
          Login with Sample Creds
        </button>
      </div>
    )
  }
}

export default Login
