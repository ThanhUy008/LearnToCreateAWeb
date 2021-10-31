

function rockMoveRule(oldCor,type)
{
            let x = oldCor.rowStart;
            let y = oldCor.columnStart;
            let left,right,up,down;
      
            let corArr = [];
            for(let i = 0 ; i< 65 ;i++)
            {
                corArr[i] = 0;
            }
                let tempCor;
                

            
                for(let i = y-1; i > 1 ; i--)
                {
                    tempCor = (parseInt(x)-1) * 8 + parseInt(i) - 1;

                    left = $(`#${tempCor}`);
                    
                    
                    if(left.html().substring(12,22).localeCompare("chesspiece") == 0)
                    {
                        if(left.html().substring(28,33).localeCompare("white") == 0 && type == 1)
                        {
                            break;
                        }
                        if(left.html().substring(28,33).localeCompare("black") == 0 && type == 2)
                        {
                            break;
                        }
                        corArr[tempCor] = 1;
                        break;
                        
                    }
                    corArr[tempCor] = 1;
                    
                }
            
                for(let i = parseInt(y) + 1; i < 10 ; i++)
                {
                    tempCor = (parseInt(x)-1) * 8 + parseInt(i) - 1;

                    right = $(`#${tempCor}`);
                    
                    
                    if(right.html().substring(12,22).localeCompare("chesspiece") == 0)
                    {
                        if(right.html().substring(28,33).localeCompare("white") == 0 && type  == 1)
                        {
                            break;
                        }
                        if(right.html().substring(28,33).localeCompare("black") == 0 && type  == 2)
                        {
                            break;
                        }
                        corArr[tempCor] = 1;
                        break;
                    }
                    corArr[tempCor] = 1;

                }
                for(let i = x - 1; i > 0 ; i--)
                {
                    tempCor = (parseInt(i)-1) * 8 + parseInt(y) - 1;

                    up = $(`#${tempCor}`);
                    
                    
                    if(up.html().substring(12,22).localeCompare("chesspiece") == 0)
                    {
                    
                        if(up.html().substring(28,33).localeCompare("white") == 0 && type == 1)
                        {
                            break;
                        }
                        if(up.html().substring(28,33).localeCompare("black") == 0 && type  == 2)
                        {
                            break;
                        }
                        corArr[tempCor] = 1;
                        break;
                    }
                    corArr[tempCor] = 1;
                    

                }
                for(let i = parseInt(x) + 1; i < 9 ; i++)
                {
                    tempCor = (parseInt(i)-1) * 8 + parseInt(y) - 1;
                    down = $(`#${tempCor}`);
                    
                
                    if(down.html().substring(12,22).localeCompare("chesspiece") == 0)
                    {
                        if(down.html().substring(28,33).localeCompare("white") == 0 && type  == 1)
                        {
                            break;
                        }
                        if(down.html().substring(28,33).localeCompare("black") == 0 && type  == 2)
                        {
                            break;
                        }

                        corArr[tempCor] = 1;
                        break;
                    }
                    corArr[tempCor] = 1;
                    

                }
                

                
            return corArr;
}

    function rockCorrectMove(oldCor,newCor,type,turnBase)
    {
        let tempCor = (parseInt(newCor.rowStart) - 1) * 8 + parseInt(newCor.columnStart) - 1;
            let ememiesCors = rockMoveRule(oldCor,type);
            let returnVal = [false,turnBase];
            if(ememiesCors[tempCor] == 1)
            {
                if(turnBase == 1 && type == 1)
                {
                    returnVal[1] = 2;
                    returnVal[0] =true;
                    return returnVal;
                }
                
                if(turnBase==2 && type == 2)
                {
                    returnVal[1]=1;
                    returnVal[0] =true;
                    return returnVal;
                }
    
            }
            returnVal[0] =false;
            return returnVal;
    }