import { NavLink, useRouteError } from "react-router-dom"

export const ErrorPage = () => {
    const error = useRouteError();
    return (
        <div style={{textAlign: "center", padding: "5%"}}>
            <h1>404 Error Page</h1>
            {error && <p>{error.data}</p>}
            <img src="https://cdn3d.iconscout.com/3d/premium/thumb/404-error-7743230-6786251.png" alt="" />
            <NavLink to="/"><button style={{marginLeft: "45%"}}>Go Home</button></NavLink>
        </div>
    )
}