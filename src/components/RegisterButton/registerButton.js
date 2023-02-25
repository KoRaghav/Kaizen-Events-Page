import './registerButton.css'
import { useNavigate } from 'react-router-dom';

function RegisterButton ({id}) {

    let navigate = useNavigate(); 
    const form = (id) =>{ 
      let path = `/form/${id}`; 
      navigate(path);
    }

    return (
        <button class="btn-anim" onClick={()=>form(id)}>
            Register Now
        </button>
    );
}

export default RegisterButton