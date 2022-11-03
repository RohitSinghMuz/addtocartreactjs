import { useLocation, useNavigate,useParams,useHref} from "react-router-dom";

const withRouter = (Component) => {

    return (props) => {
        const usehref=useHref()
      
        console.log(usehref)
        
        const navigate = useNavigate();
        const location = useLocation();
        let params = useParams();
        return <Component {...props} navigate={navigate} location={location} params={params}/>
    }
}

export default withRouter;



