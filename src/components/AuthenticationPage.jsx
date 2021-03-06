
const AuthenticationPage = props => {

    const handleConnexionSubmit = (event) => {
        event.preventDefault();
        //security stuffs
        props.setIsUserAuthenticated(true);
        props.setAuthContext({
            authVisible: false, userStatus: "utilisateur"
        });
        switch (props.authContext.check) {
            case "delete_project":
                props.setConfirmContext({
                    visible: true,
                    purpose: "delete_project"
                })
                break;
            case "add_project":
                props.setAddItemContext(true);
                break;
            default:
                break;
        }
    }

    return (
        <div className="auth-page">
            <h2>IDENTIFICATION DU COMPTE {props.authContext.userStatus.toUpperCase()} <i className="material-icons">lock</i></h2>
            <form onSubmit={handleConnexionSubmit}>
                <p>
                    <label htmlFor="name">Votre nom : </label>
                    <input type="text" required/>
                </p>
                <p>
                    <label htmlFor="email">Votre e-mail : </label>
                    <input type="text" required/>
                </p>
                <p>
                    <label htmlFor="name">Mot de passe : </label>
                    <input type="password" required/>
                </p>
                <p>
                    <input className="bg-front" type="submit" value="Connexion"/>
                </p>
            </form>
            <div className="page-notif">
                <div className="content">
                    <i className="material-icons">info</i> 
                    <span>
                        Seuls les {props.authContext.userStatus}s sont permis d'accéder à la page
                    </span>
                </div>
            </div>
            <p className="footer">powered by Cris Cirhuza</p>
        </div>
    );
}

export default AuthenticationPage;
