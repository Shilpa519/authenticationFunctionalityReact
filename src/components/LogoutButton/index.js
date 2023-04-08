import './index.css'

const LogoutButton = props => {
  const {onclick} = props

  const onClickLogout = () => {
    onclick()
  }

  return (
    <>
      <button type="button" className="logout-btn" onClick={onClickLogout}>
        Logout
      </button>
    </>
  )
}

export default LogoutButton
