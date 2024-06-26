import './Cripto.css';

import { Link } from 'react-router-dom'

// 'ffc' snippet
function Cripto({id, name, priceUsd, symbol, changePercent24Hr}) {
    return ( 
        <Link to={`/criptomonedas/${id}`} className='link-cripto'>
            <div className='cripto'>
                <h2>{name}</h2>
                <div className="info">
                    <p><span className="label">Precio: </span>{parseFloat(priceUsd).toFixed(5)}</p>
                    <p><span className="label">Código: </span>{symbol}</p>
                    <p>
                        <span className="label">Variación 24h: </span>
                        <span className={changePercent24Hr > 0 ? 'positivo' : 'negativo'}>
                            {parseFloat(changePercent24Hr).toFixed(3)}%
                        </span>
                    </p>

                </div>
            </div>
        </Link>
    );
}

export default Cripto;