import { compose } from 'redux'
import { connect } from 'react-redux'
import { useState, useEffect } from 'react'
import { Button } from 'semantic-ui-react'
import ModalNumSet from './ModalNumSet'
import { serviceGetNumOff, serviceGetNumLimit } from '../../service/all'
import { OperatorNum } from '../../helper/core'
import { setAlert } from '../../redux/alert/actions'
import ModalOffConfirm from './ModalOffConfirm'

const Numset = (props) => {
    const { head, num, token, lottery_name, date, change, settingStore } = props
    const [numsetOpen, setNumsetOpen] = useState(false)
    const [data, setData] = useState(false)
    const [del, setDel] = useState(false)
    const [numtext, setNumText] = useState('')
    const [numOffSet, setNumOffSet] = useState(false)
    const [offConfirm, setOffConfirm] = useState(false)

    useEffect(() => {
        fetchDate()
    }, [])

    useEffect(() => {
        fetchDate()
    }, [del, change])



    const setDeleteNewFetch = () => {
        setDel(!del)
    }

    const fetchDate = async () => {
        var res
        if (num === 'off') {
            res = await serviceGetNumOff({
                token,
                lottery_name: props.menuStore.lottery_name,
                date,
            })
        }
        else if (num === 'limit') {
            res = await serviceGetNumLimit({
                token,
                lottery_name,
                date,
            })
        }
        if (res !== 'err') {
            setData(res)
        }

    }

    const closeNumset = () => {
        setNumsetOpen(false)
    }

    const nextOperationOff = async () => {
        if (numtext === '') {
            props.setAlert('ป้อนเลขปิดตามรูปแบบที่กำหนด', 'negative')
        }
        else {
            var result = await OperatorNum(numtext, props.menuStore.now_lotto, 'off')
            if (result !== false) {
                setNumOffSet(result.nums)
                setOffConfirm(true)
                setNumText('')
            }
            else {
                props.setAlert('ผิดรูปแบบ', 'negative')
            }

        }

    }

    const nextShow = () => {
        fetchDate()
        setNumsetOpen(true)
    }

    const closeOffConfirm = () => {
        setOffConfirm(false)
    }

    return (
        <>
            <main>
                <ModalOffConfirm
                    head="เลขปิด"
                    open={offConfirm}
                    close={closeOffConfirm}
                    numOffSet={numOffSet}
                />
                <ModalNumSet
                    head="รายการเลขปิดรอบ"
                    open={numsetOpen}
                    close={closeNumset}
                    num={num}
                    list={data}
                    del={del}
                    fetchNew={setDeleteNewFetch}
                    state="off"
                />
                <h3 className="ui header mb-10 w-100">
                    <div className="content">
                        {head}
                        <div className="sub header">

                        </div>
                    </div>
                </h3>
                <div className="ui form w-100 mb-10">
                    <div className="field">
                        <textarea
                            placeholder='20-30-40-50-60-70-80=บลก'
                            className="setnum"
                            value={numtext}
                            onChange={(e) => setNumText(e.target.value)}
                        />
                    </div>
                </div>
                <div className="bt-manage">
                    <Button positive className="w-100" onClick={nextShow}><div>ดู</div></Button>
                    <Button color='instagram' className="w-100" onClick={nextOperationOff}><div>เพิ่ม</div></Button>
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