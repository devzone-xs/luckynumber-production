const Header = (props) => (
    <>
        <header>{props.children}</header>
        <style jsx>{`
            header {
                display: flex;
                align-items: center;
                padding: 0 20px;
                height: 35px;
                font-size: 14px;
                border-bottom: 1px solid #cdced2;
            }
        `}</style>
    </>
)

export default Header