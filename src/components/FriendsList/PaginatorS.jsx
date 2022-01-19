// import React, {useState} from "react";
// import s from "./Paginator.module.css";
// import cn from "classnames"
//
//
// let PaginatorS = ({totalUsersCount, pageSize, currentPage, onPageChanged, portionSize= 10}) => {
//
//     let pagesCount = Math.ceil(totalUsersCount / pageSize);
//     let pages = [];
//     for(let i = 1; i < pagesCount; i++) {
//         pages.push(i)
//     }
//
//     let portionCount = Math.ceil(pagesCount / portionSize);
//     let [portionNumber, setPortionNumber] = useState(1);
//     // let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
//     // let rightPortionPageNumber = portionNumber * portionSize;
//     //
//     // let minPortion = (leftPortionPageNumber) => {
//     //     if (leftPortionPageNumber < portionSize ) {
//     //         return true
//     //     }
//     // }
//     // let maxPortion = (rightPortionPageNumber) => {
//     //     if (rightPortionPageNumber > portionSize ) {
//     //         return true
//     //     }
//     // }
//
//     let leftPortionPageNumber =  0  ;
//     let rightPortionPageNumber = 11  ;
//
//     return <div className={s.paginator}>
//         {portionNumber  > 1 &&
//             <button onClick={ () => {setPortionNumber(leftPortionPageNumber - portionSize ) }}>PREV</button> }
//         {pages
//             .filter  ((p) => {
//                 if (p > leftPortionPageNumber && p < rightPortionPageNumber) {
//                     return true
//                 }
//             })
//             .map((p) => {
//                 return <span className={ cn ({
//                     [s.selectedPage] : currentPage === p }, s.pageNumber ) }
//                              key = {p}
//                              onClick={(e) => {
//                                  onPageChanged(p);
//                              }}>{p}</span>
//             })}
//         { portionCount > portionNumber &&
//             <button onClick={() => {setPortionNumber(rightPortionPageNumber + portionSize ) }}>NEXT</button> }
//     < /div>
// };
//
// export default PaginatorS;