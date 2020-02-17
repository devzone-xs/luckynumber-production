const Header = (props) => {
    return (
        <>
            <header>
                <div>{props.children}</div>
            </header >
            <style jsx>{`
                header {
                    background-color: #fff;
                    height: 50px;
                    min-height: 50px;
                    display: flex;
                    align-items: center;
                    border-bottom: 1px solid #cdced2;
                    width: 2560px;
                    min-width: 2560px;
                }
                div {
                    padding-left: 30px; 
                    font-size: 18px;
                }
                @media(max-width: 1441px) {
                    header {
                        width: 100%;
                        min-width: 100%;  
                    }  
                }
                @media(max-width: 1025px) {
                    header {
                        width: 100%;
                        min-width: 100%;  
                    }  
                }
                @media(max-width: 769px) {
                    header {
                        width: 775px;
                        min-width: 775px;  
                    }  
                }
                @media(max-width: 426px) {
                    header {
                        width: 425px;
                        min-width: 426px;  
                    }  
                    div {
                        padding-left: 45px; 
                    }
                }
                @media(max-width: 376px) {
                    header {
                        width: 376px;
                        min-width: 376px;  
                    }  
                }
                @media(max-width: 321px) {
                    header {
                        width: 321px;
                        min-width: 321px;  
                    }  
                }
            `}</style>
        </>
    )
}

export default Header