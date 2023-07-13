import React, { useEffect, useState } from 'react'

const useHorizontalScrolling = () => {
    const [data,setData] = useState({scrollAmount,boxCount,divScroll})
    const [ scrollAmountSum, setScrollAmountSum ] = useState(0);
    const [leftArrow, setLeftArrow] = useState(false);
    const [rightArrow, setRightArrow] = useState(true);
    useEffect(() => {}, [divScroll, leftArrow,rightArrow,data]);
    // scrolling using arrows hide/visible


    setScrollAmountSum((scrollAmountValue)=>{

        // get column-gap and margin-left to add into occupiedWidth
        let styles = window.getComputedStyle(divScroll.current); 
        let columnGap = parseInt(styles.columnGap,10);
        let marginLeft =  parseInt(styles.marginLeft,10);
  
        // total width of childrens
        const occupiedElements = divScroll.current.childNodes;
        let occupiedWidth = 0;
    
        for (let i = 0; i < occupiedElements.length; i++) {
          occupiedWidth += occupiedElements[i].offsetWidth;
        }
  
        // now check if occupeidWidth + columnGap + marginLeft is less than or equal to scrolling width;
        let visbile = (scrollAmountValue+divScroll.current.offsetWidth+scrollAmount) >= occupiedWidth+((columnGap*(boxCount-1))+(marginLeft*(boxCount-1)))
          if(visbile)
          {  
            setRightArrow(false);
          }
          else{
            setRightArrow(true);
          }
    
        if(scrollAmountValue+scrollAmount>=Math.abs(scrollAmount))
        {
          setLeftArrow(true);
        }
        else{
          setLeftArrow(false);
        }
       
        divScroll.current.scrollLeft = scrollAmountValue + scrollAmount;
       
        return scrollAmountValue + scrollAmount;
      })
     
   return {leftArrow,rightArrow,setData}
  
}

export default useHorizontalScrolling