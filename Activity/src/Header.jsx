import Style from './Header.module.css'

function Header({Title}){
    return (
        <>
            <div className={Style.Header}>
                {/* Type titpe prop inside {} bracket  */}
                <h1>{Title}</h1>
            </div>
        </>
    )   
}

// export header by defualt
export default Header;