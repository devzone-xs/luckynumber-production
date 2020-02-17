const Create = (props) => {
    const { inputText, handleChangeInputText, checkInputText, errMessage, resetErrMessage } = props
    return (
        <>
            <div className="card create mx-10">
                <header>สร้างรายการ</header>
                <div className="ui form error">
                    <div className="field">
                        <textarea placeholder='Number Set' value={inputText} onChange={handleChangeInputText} onClick={resetErrMessage} />
                    </div>

                    {errMessage ?
                        <><div className="ui error message">
                            <div className="header"><div>ผิดรูปแบบ</div></div>
                            <p>รูปแบบที่คุณป้อนมาผิด หรืออาจยังไม่รองรับ</p>
                        </div></>
                        : ''}
                    <div className="next">
                        <span className="pattern mb-5" onClick={props.openPattern}>ดูรูปแบบที่รองรับ</span>
                        <div className="ui submit button secondary" onClick={checkInputText}><div>ตรวจสอบ</div></div>
                    </div>

                </div>
            </div>
            <style jsx>{`
                .create {
                    padding: 10px;
                }
                header {
                    margin: 10px 0;
                    font-size: 16px;
                }
                .next {
                    display: flex;
                    flex-direction: column;
                }
                .submit {
                    width: 180px;
                }
                .pattern:hover {
                    cursor: pointer;
                    user-select: none;
                    color: #2185d0;
                }
            `}</style>
        </>
    )
}

export default Create