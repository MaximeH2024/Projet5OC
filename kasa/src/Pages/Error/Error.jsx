import { Link } from 'react-router-dom';
import './Error.scss'; 

function Error() {
    return (
        <main>
            <section className='error'>
                <h1>404</h1>
                <h2>Oups! La page que vous demandez n&apos;existe pas.</h2>
                <Link to="/">Retourner sur la page d&apos;accueil</Link>
            </section>
        </main>
        
        
    )
}

export default Error