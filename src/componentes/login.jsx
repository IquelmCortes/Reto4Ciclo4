import '../App.css';

function Login() {
    return(
        <div className="container-fluid">
        <div id="myToast" className="toast position-fixed top-0 end-0" role="alert" aria-live="assertive" aria-atomic="true">
            <div className="toast-header">
                <img src="" className="rounded me-2" alt="" />
                <strong className="me-auto" id="toast-header">Bootstrap</strong>
                <small className="text-muted" id="toast-small">11 mins ago</small>
                <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
            </div>
            <div className="toast-body" id="toast-body">Hello, world! This is ba toast message.</div>
        </div>
            <form className="col-4 offset-md-4 form-register" id="form">
                <h4>Acceder</h4>
                <div className="form-group" id="group-email">
                    <div className="group-input">
                        <input type="email" className="control" name="txtemail" id="txtemail" placeholder="Ingrese su correo"/>
                        <i className="far fa-times-circle"></i>
                    </div>
                    <p className="form-error">El correo ingresado no es valido.</p>
                </div>
                <div className="form-group" id="group-password">
                    <div className="group-input">
                    <input type="password" className="control" name="txtpassword" id="txtpassword" placeholder="Ingrese su contraseña" />
                    <i className="far fa-times-circle"></i>
                    </div>
                    <p className="form-error">La contraseña debe tener de 4 a 12 digitos.</p>
                </div>
                <button type="button" className="button" onClick="acceder()">Acceder</button>
                <p className="form-registro">
                    ¿No tienes cuenta? Comunicate con el administrador
                </p>
            </form>
            

    </div>
    );
}

export default Login;