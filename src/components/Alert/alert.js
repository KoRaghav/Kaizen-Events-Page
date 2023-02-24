import { useNavigate } from "react-router-dom";

export default function Alert () {
    let navigate = useNavigate(); 
    const home = () =>{ 
      let path = `/`; 
      navigate(path,{ state: { alert:false } });
    }
    return (
        <center>
        <div class="alert alert-success alert-dismissible fade show" role="alert" style={{"border-radius":"0px"}}>
          <strong>Registered Successfully!</strong> Check out more events below
          <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={home}></button>
        </div>
      </center>

    )
}