import { codeCategoryToName } from '../../helper/convert'
import { NunOffSortByNum } from '../../helper/sort'

const Items = (props) => (
    <div>{NunOffSortByNum(props.digit).map((item, key) => (
        <>{
            props.status === 'numoff' ?
                <span key={key} className={props.status}>{item.numoff} {codeCategoryToName(item.category)}</span> :
                <span key={key} className={props.status}>{item.numlimit} {codeCategoryToName(item.category)} {item.limit}</span>
        }</>
    ))}
        <style jsx>{`
            span {
                height: 20px;
                //width: 35px;
                min-width: 35px;
                margin-right: 5px;
                margin-bottom: 5px;
                padding: 0 8px;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 5px;
            }
            .numoff {
                background-color: #FADCDF;
                color: #EC1C24;
            }
            .numlimit {
                background-color: #FBF5E2;
                color: #FFB400;
            }
            div {
                margin: 10px;
                display: flex;
                flex-wrap: wrap;
               
            }
        `}</style>
    </div>
)

export default Items