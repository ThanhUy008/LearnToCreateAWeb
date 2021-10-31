
        
        function checkIfKingAlive()
        {
            if(!document.getElementsByClassName("chesspiece king white")[0])
                return 1;
            if(!document.getElementsByClassName("chesspiece king black")[0])
                return 2;
            return 0;
        }
        function mergeArr(arr1,arr2)
        {
            for(let i = 1 ; i < 65; i++)
            {
                if(arr2[i] == 1)
                {
                    arr1[i] = 1;
                }
            }
            return arr1;
        }
        
        function getAllOtherMoves(type)
        {
            let name = "white";
            if(type == 1)
            {
                name = "black";
                type = 2;
            }
            else
            {
                type = 1;
                name = "white";
            }
            let enemiesMove =[];
            for(let i = 1; i < 65; i++)
            {
                enemiesMove[i] = 0;
            }
            //pawn,,
            let enemiesArr = document.getElementsByClassName("chesspiece pawn " + name);
            for (let i of enemiesArr) {
                let tempOldCor = {
                   "rowStart" : i.parentNode.style.gridRowStart,
                   "columnStart" : i.parentNode.style.gridColumnStart
                }
                
                let arr2 = pawnMoveRule(tempOldCor,type);
                enemiesMove = mergeArr(enemiesMove,arr2);
            }
            //rock
            enemiesArr = document.getElementsByClassName("chesspiece rock " + name);
            for (let i of enemiesArr) {
                let tempOldCor = {
                   "rowStart" : i.parentNode.style.gridRowStart,
                   "columnStart" : i.parentNode.style.gridColumnStart
                }
                
                let arr2 = rockMoveRule(tempOldCor,type);
                enemiesMove = mergeArr(enemiesMove,arr2);
            }
            //queen
            enemiesArr = document.getElementsByClassName("chesspiece quen " + name);
            for (let i of enemiesArr) {
                let tempOldCor = {
                   "rowStart" : i.parentNode.style.gridRowStart,
                   "columnStart" : i.parentNode.style.gridColumnStart
                }
                
                let arr2 = queenMoveRule(tempOldCor,type);
                enemiesMove = mergeArr(enemiesMove,arr2);
            }
             //knight
             enemiesArr = document.getElementsByClassName("chesspiece knig " + name);
             for (let i of enemiesArr) {
                 let tempOldCor = {
                    "rowStart" : i.parentNode.style.gridRowStart,
                    "columnStart" : i.parentNode.style.gridColumnStart
                 }
                 
                 let arr2 = knightMoveRule(tempOldCor,type);
                 enemiesMove = mergeArr(enemiesMove,arr2);
             }
             //bishop
             enemiesArr = document.getElementsByClassName("chesspiece bisp " + name);
             for (let i of enemiesArr) {
                 let tempOldCor = {
                    "rowStart" : i.parentNode.style.gridRowStart,
                    "columnStart" : i.parentNode.style.gridColumnStart
                 }
                 
                 let arr2 = bishopMoveRule(tempOldCor,type);
                 enemiesMove = mergeArr(enemiesMove,arr2);
             }
             
            return enemiesMove;
        }
        function kingMoveRule(oldCor,type)
        {
            let x = oldCor.rowStart;
            let y = oldCor.columnStart;
            let corrArr = [];

            for(let i = 0 ; i< 65 ;i++)
            {
                corrArr[i] = 0;
            }
            let tempCor;
            
            //topleft
           
            tempCor = (parseInt(oldCor.rowStart) - 2) * 8 + parseInt(oldCor.columnStart) - 2;
            
            corrArr[tempCor] = 1;
            //top up
            tempCor = (parseInt(oldCor.rowStart) - 2) * 8 + parseInt(oldCor.columnStart) - 1;
            
            corrArr[tempCor] = 1;
            //top right
            tempCor = (parseInt(oldCor.rowStart) - 2) * 8 + parseInt(oldCor.columnStart);
            
            corrArr[tempCor] = 1;
            //right
            tempCor = (parseInt(oldCor.rowStart) - 1) * 8 + parseInt(oldCor.columnStart);
            
            corrArr[tempCor] = 1;
            //down right
            tempCor = (parseInt(oldCor.rowStart)) * 8 + parseInt(oldCor.columnStart);
            
            corrArr[tempCor] = 1;
            //down down
            tempCor = (parseInt(oldCor.rowStart)) * 8 + parseInt(oldCor.columnStart) - 1;
            
            corrArr[tempCor] = 1;
            //down left
            tempCor = (parseInt(oldCor.rowStart)) * 8 + parseInt(oldCor.columnStart) - 2;
            
            corrArr[tempCor] = 1;
            //left
            tempCor = (parseInt(oldCor.rowStart) -1 ) * 8 + parseInt(oldCor.columnStart) - 2;
            
            corrArr[tempCor] = 1;
                
            
                for(let i = -1; i < 2 ; i++)
                {
                    
                    for(let j = -1 ; j < 2; j++)
                    {
                        tempCor = (parseInt(oldCor.rowStart) - 1 - i ) * 8 + parseInt(oldCor.columnStart) - 1 - j;
                        if(tempCor > 0 && tempCor < 65)
                        {
                            
                            if(corrArr[tempCor] != 0)
                            {
                                let enemy = document.getElementById(tempCor);
                                if(enemy.innerHTML)
                                {
                                    if(type==1)
                                    {
                                        if(enemy.innerHTML.substring(28,33).localeCompare("white")==0)
                                        {    
                                            corrArr[tempCor] = 0
                                        
                                        }
                                        
                                    }
                                    else if(type == 2)
                                    {
                                        if(enemy.innerHTML.substring(28,33).localeCompare("black")==0)
                                        {  
                                            corrArr[tempCor] = 0
                                        
                                        }
                                    }                        
                                }
                            }
                        }
                    }
                }
            
            let enemiesMoveRange = getAllOtherMoves(type);
            
            for(let i = 1; i < 65 ; i++)
            {
                if(corrArr[i] == 1 && enemiesMoveRange[i] == 1)
                {
                    corrArr[i] = 0;
                }
            }
           
            return corrArr;
        }

        function kingCorrectMove(oldCor,newCor,type,turnBase)
        {
            let tempCor = (parseInt(newCor.rowStart) - 1) * 8 + parseInt(newCor.columnStart) - 1;
            let ememiesCors = kingMoveRule(oldCor,type);
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