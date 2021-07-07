import {NavLink} from 'react-router-dom';

function Page404() {

    return (
        <div className='container text-center my-5'>
            <div className="row">
                <div className="col-4 offset-4">
                    <h1>Error 404:</h1>
                    <h1>Page is not found</h1>
                    <NavLink exact to="/" className="btn btn-info">Go to Home Page</NavLink>
                </div>
            </div>

        </div>
    )
}

export default Page404;