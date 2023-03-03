import './Header.css'

export const Header = () => {
    return (
        <header className="header_cabecalho">
            <div className='teste'>

                <div className='header_cabecalho_titulos'>
                    
                    <nav className='nav'>
                        <h2 className="header_titulo">Bem-vindo a</h2>
                        <h1 className='header_titulo2'>Market Tech</h1>
                    </nav>
                </div>

                <div className='header_img'>
                    <img className='imagem_search' src='/Assets/Vector.png' alt="A imagem de uma lupa" />
                </div>
            </div>
        </header>
    )
}
