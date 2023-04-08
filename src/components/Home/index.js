import {Component} from 'react'
import Cookies from 'js-cookie'
import Header from '../Header'
import LogoutButton from '../LogoutButton'

class Home extends Component {
  onClickLogout = () => {
    const {history} = this.props
    Cookies.remove('jwt_token')

    console.log(history)
    history.replace('/login')
  }

  render() {
    return (
      <div className="home-container">
        <Header />
        <h1 className="home-heading">Home Route</h1>
        <LogoutButton onclick={this.onClickLogout} />
      </div>
    )
  }
}

export default Home
