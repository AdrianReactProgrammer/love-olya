import { useParams } from 'react-router-dom';

let withRouter = (Component) => {
    let useParamsComponent = (props) => {
        return <Component {...props} params={useParams()} />
    }

    return useParamsComponent
}

export default withRouter