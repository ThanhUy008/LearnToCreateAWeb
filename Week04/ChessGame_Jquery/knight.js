
        function knightMoveRule(oldCor,type)
        {
            let x = oldCor.rowStart;
            let y = oldCor.columnStart;
            let corrArr = [];
            for(let i = 0 ; i< 65 ;i++)
            {
                corrArr[i] = 0;
            }
            let tempCor;
            
            //white pawn
            
           
            
            
            //left 1
            tempCor = (parseInt(oldCor.rowStart)) * 8 + parseInt(oldCor.columnStart) + 1;
            corrArr[tempCor] = 1;
            //left 2
            tempCor = (parseInt(oldCor.rowStart) - 2) * 8 + parseInt(oldCor.columnStart) + 1;

            corrArr[tempCor] = 1;
            //top1
            tempCor = (parseInt(oldCor.rowStart) - 3) * 8 + parseInt(oldCor.columnStart);
            corrArr[tempCor] = 1;
            //top2
            tempCor = (parseInt(oldCor.rowStart) - 3) * 8 + parseInt(oldCor.columnStart) - 2;
            corrArr[tempCor] = 1;
            //right1
            tempCor = (parseInt(oldCor.rowStart) - 2) * 8 + parseInt(oldCor.columnStart) - 3;
            corrArr[tempCor] = 1;
             //right2
            tempCor = (parseInt(oldCor.rowStart)) * 8 + parseInt(oldCor.columnStart) - 3;
            corrArr[tempCor] = 1;
            //down1
            tempCor = (parseInt(oldCor.rowStart) + 1) * 8 + parseInt(oldCor.columnStart) - 2;
            corrArr[tempCor] = 1;
            //down2
            tempCor = (parseInt(oldCor.rowStart) + 1 ) * 8 + parseInt(oldCor.columnStart);
            corrArr[tempCor] = 1;
            

           
           
            
            if(1)
            {
                if(x > 6)
                {
                    //down1
                    tempCor = (parseInt(oldCor.rowStart) + 1) * 8 + parseInt(oldCor.columnStart) - 2;
            
                    corrArr[tempCor] = 0;
                    //down2
                    tempCor = (parseInt(oldCor.rowStart) + 1 ) * 8 + parseInt(oldCor.columnStart);
                    
                    corrArr[tempCor] = 0;
                }
                if(x > 7)
                {
                    //lef1
                    tempCor = (parseInt(oldCor.rowStart)) * 8 + parseInt(oldCor.columnStart) + 1;
                    corrArr[tempCor] = 0;
                     //righ2
                    tempCor = (parseInt(oldCor.rowStart)) * 8 + parseInt(oldCor.columnStart) - 3;
                    corrArr[tempCor] = 0;
            
                }
                if(y < 4)
                {
                    //left 1
                    tempCor = (parseInt(oldCor.rowStart) - 2) * 8 + parseInt(oldCor.columnStart) - 3;
                    corrArr[tempCor] = 0;
                    //left 2
                    tempCor = (parseInt(oldCor.rowStart)) * 8 + parseInt(oldCor.columnStart) - 3;
                    corrArr[tempCor] = 0;
                }
                if(y < 3)
                {
                    //top 1
                    tempCor = (parseInt(oldCor.rowStart) - 3) * 8 + parseInt(oldCor.columnStart) - 2;
                    corrArr[tempCor] = 0;
                    //down 2
                    tempCor = (parseInt(oldCor.rowStart) + 1) * 8 + parseInt(oldCor.columnStart) - 2;
                    corrArr[tempCor] = 0;
                }
                if(x < 3)
                {
                    //top 1
                    tempCor = (parseInt(oldCor.rowStart) - 3) * 8 + parseInt(oldCor.columnStart) - 2;
                    corrArr[tempCor] = 0;
                    //top 2
                    tempCor = (parseInt(oldCor.rowStart) - 3) * 8 + parseInt(oldCor.columnStart);
                    corrArr[tempCor] = 0;
                }
                if(x < 2)
                {
                    //left 2
                    tempCor = (parseInt(oldCor.rowStart)) * 8 + parseInt(oldCor.columnStart) - 3;
                    corrArr[tempCor] = 0;
                    //right1
                    tempCor = (parseInt(oldCor.rowStart)) * 8 + parseInt(oldCor.columnStart) + 1;
                    corrArr[tempCor] = 0;
                }
                if(y > 7)
                {
                    //right1
                    tempCor = (parseInt(oldCor.rowStart)) * 8 + parseInt(oldCor.columnStart) + 1;
                    corrArr[tempCor] = 0;
                   
                    //right2
                    tempCor = (parseInt(oldCor.rowStart) - 2) * 8 + parseInt(oldCor.columnStart) + 1;
                    corrArr[tempCor] = 0;
                  
                }
                if(y > 8)
                {
                    
                    //top 2
                    tempCor = (parseInt(oldCor.rowStart) - 3) * 8 + parseInt(oldCor.columnStart);
                    corrArr[tempCor] = 0;
                    
                    //down 1
                    tempCor = (parseInt(oldCor.rowStart) + 1) * 8 + parseInt(oldCor.columnStart);
                    corrArr[tempCor] = 0;
                    
                }
            }
            
            //down1
            
                
                       
                for(let i = - 2; i <  3 ; i++)
                {
                    for(let j = -2; j <  3; j++)
                    {
                        tempCor = (parseInt(oldCor.rowStart) - 1 - i) * 8 + parseInt(oldCor.columnStart) - 1 - j;
                        let enemy = $(`#${tempCor}`);
                        

                         if(tempCor > 0 && tempCor < 65)
                        {
                            
                            if(corrArr[tempCor] != 0)
                            {
                                
                                if(enemy.html())
                                {
                                    if(type==1)
                                    {
                                        if(enemy.html().substring(28,33).localeCompare("white")==0)
                                        {    
                                            corrArr[tempCor] = 0
                                        
                                        }
                                        
                                    }
                                    else if(type == 2)
                                    {
                                        if(enemy.html().substring(28,33).localeCompare("black")==0)
                                        {  
                                            corrArr[tempCor] = 0
                                        
                                        }
                                    }                        
                                }
                            }
                        }
                    }
                }
                
            return corrArr;
        }

        function knightCorrectMove(oldCor,newCor,type)
        {
            let tempCor = (parseInt(newCor.rowStart) - 1) * 8 + parseInt(newCor.columnStart) - 1;
            let ememiesCors = knightMoveRule(oldCor,type);
            let returnVal = [false,turnBase];
            if(ememiesCors[tempCor] == 1)
            {
                if(turnBase == 1 && type == 1)
                {
                    returnVal[1] = 2;
                    returnVal[0] =true;
                    return returnVal;
                }
                
                if(turnBase==2 && type ==2)
                {
                    returnVal[1]=1;
                    returnVal[0] =true;
                    return returnVal;
                }
    
            }
            returnVal[0] =false;
            return returnVal;
        }