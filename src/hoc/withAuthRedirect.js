import { connect } from "react-redux"
import { Navigate } from "react-router-dom"

let mstp = (state) => ({
    isAuth: state.userAuth.isAuth
})

export let withAuthRedirect = (Component) => {
  let AuthRedirectContainer = (props) => {
    if (!props.isAuth) return <Navigate to='/login' />
    return <Component {...props} />
  } 

  let ConnectedAuthRedirectContainer = connect(mstp)(AuthRedirectContainer)

  return ConnectedAuthRedirectContainer
} 