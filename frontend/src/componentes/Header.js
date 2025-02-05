import '../styles/Header.css'
function Header(){
    return(
        `
        <header>
        <div class="header-container">
            <figure class="logo-container">
                <img src="../public/img/logo.png" alt="Logo">
            </figure>
            <div class="text-container">
                <h1>Sistema de Delivery de Emprendimientos</h1>
                <h2>UIDE - Campus Loja</h2>
            </div>
        </div>
        </header>
        `
    )
}

// Exportar el componente Proyecto
export default Header