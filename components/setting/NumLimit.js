import { compose } from 'redux'
import { connect } from 'react-redux'
import { useState, useEffect } from 'react'
import { Button } from 'semantic-ui-react'
import ModalNumSet from './ModalNumSet'
import { serviceGetNumLimit } from '../../service/all'
import { } from '../../helper/core'
import { setAlert } from '../../redux/alert/actions'
import ModaLimitConfirm from './ModaLimitConfirm'
import { OperatorNum } from '../../helper/core'

const Numset = (props) => {
    const { num, token, date, } = props
    const [numsetOpen, setNumsetOpen] = useState(false)
    const [dataLimit, setDataLimit] = useState(false)
    const [numLimitSet, setNumLimitSet] = useState(false)
    const [numText, setNumText] = useState('')
    const [price, setPrice] = useState('')
    const [confirm, setConfirm] = useState(false)

    const nextShow = () => {
        setNumsetOpen(true)
        fetchDateTotal()
    }

    const setDeleteNewFetch = (e) => {
        fetchDateTotal()
    }

    const fetchDateTotal = async () => {
        var res
        res = await serviceGetNumLimit({
            token,
            lottery_name: props.menuStore.lottery_name,
            date,
        })
        if (res !== 'err') {
            setDataLimit(res)
        }
    }

    const closeNumset = () => {
        setNumsetOpen(false)
    }

    const closeComfirm = () => {
        setConfirm(false)
    }

    const nextOperationLimit = async () => {
        if (numText === '' && price === '') {
            props.setAlert('ป้อนเลขปิดตามรูปแบบที่กำหนด', 'negative')
        }
        else {
            var result = await OperatorNum(numText, props.menuStore.now_lotto, 'limit', price)
            if (result !== false) {
                setNumLimitSet(result.nums)
                setConfirm(true)
                setNumText('')
                setPrice('')
            } 
            else {
                props.setAlert('ผิดรูปแบบ', 'negative')
            }

        }
    }

    return (
        <>
            <main>
                <ModaLimitConfirm
                    head="เลขอั้น"
                    open={confirm}
                    close={closeComfirm}
                    numLimitSet={numLimitSet}

                />
                <ModalNumSet
                    head="รายการเลขอั้นรอบ"
                    open={numsetOpen}
                    close={closeNumset}
                    num={num}
                    list={dataLimit}
                    fetchNew={setDeleteNewFetch}
                    state="limit"
                />
                <h3 className="ui header mb-10 w-100">
                    <div className="content">
                        เลขอั้น
                        <div className="sub header">

                        </div>
                    </div>
                </h3>
                <div className="ui form w-100 mb-10">
                    <div className="field">
                        <textarea
                            placeholder='20-30-40-50-60-70-80=บลก'
                            className="setnum"
                            value={numText}
                            onChange={(e) => setNumText(e.target.value)}
                        />
                        <div className="ui input mb-5 w-100 mt-5">
                            <input
                                type="number"
                                placeholder="จำนวนอั้นต่อเลข"
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                            />
                        </div>
                    </div>
                </div>
                <div className="bt-manage">
                    <div className="bt-show mb-5">
                        <Button positive className="w-100" onClick={nextShow}><div>ดู</div></Button>
                        <Button color='instagram' className="w-100" onClick={nextOperationLimit}><div>เพิ่ม</div></Button>
                    </div>
                </div>

            </main>
            <style jsx>{`
                main {
                    margin: 20px 50px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    width: 250px;
                }
                .setnum {
                    height: 100px !important;
                }
                .bt-manage {
                    width: 250px;
                    display: flex;    
                    flex-direction: column; 
                }
                .bt-show {
                    display: flex;    
                }
            `}</style>
        </>
    )
}

const mapStateToProps = state => {
    return {
        settingStore: state.settingStore,
        menuStore: state.menuStore,
    }
}
export default compose(
    connect(mapStateToProps, {
        setAlert,
    })
)(Numset)