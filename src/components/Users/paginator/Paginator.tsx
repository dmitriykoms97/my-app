import React, {useState} from 'react';
import s from "./paginator.module.css";
import cn from 'classnames';

type PropsType = {
    totalItemsCount: number
    pageSize: number
    onPageChanged: (pageNumber: number) => void
    currentPage: number
    portionSize: number
}

const Paginator = (props: PropsType) => {
    debugger

    let pagesCount = Math.ceil(props.totalItemsCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    let portionCount = Math.ceil(pagesCount / props.portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionNumber = (portionNumber - 1) * props.portionSize + 1;
    let rightPortionNumber = portionNumber * props.portionSize;

    return (
        <div className={s.paginator}>
            {portionNumber > 1 &&
            <button onClick={() => {setPortionNumber((portionNumber - 1))}}>Prev</button>}
            <div>
                {pages
                    .filter(p => p >= leftPortionNumber && p <= rightPortionNumber)
                    .map(p => {
                    //@ts-ignore
                    return <span className={ cn({
                        [s.selectedPage] : props.currentPage === p
                    }, s.pageNumber) }
                                 key={p}
                                 onClick={() => {
                                     props.onPageChanged(p)
                                 }
                                 }>{p}</span>

                })}
                { portionCount > portionNumber &&
                <button onClick={() => { setPortionNumber(portionNumber + 1) }}>Next</button>}


            </div>
        </div>
    )
};

export default Paginator;