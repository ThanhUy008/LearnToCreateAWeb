
       
       function willTransfrom(cor,type)
       {
           
            if($(`#${(parseInt(cor.rowStart) - 1) * 8 + parseInt(cor.columnStart) - 1}`).html().substring(23,27) == "king")
            {
           
                return false;
            }
            if(type==1)
            {
                if(cor.rowStart == 1)
                {
                    return true;
                }
            }
            if(type==2)
            {
                if(cor.rowStart == 8)
                {
                    return true;
                }     
            }
            return false;
       }
       function pickForm(type)
       {
           
            if(type == 1 )
            {
                $("#l" + "1").html(`<div class="chesspiece quen white">♔</div>`);
                
                $("#l" + "2").html(`<div class="chesspiece bisp white">♗</div>`);
               
                $(`#l3`).html(`<div class="chesspiece rock white">♖</div>`);
               
                $("#l" + "4").html(`<div class="chesspiece knig white">♘</div>`);
                
                $(".placeHolder.left").each(function(index,value){
                    $(value).css({
                    'border-left': '1px solid black',
                    'border-top': '1px solid black',
                    'border-bottom': '1px solid black',
                    'text-align' : 'center',
                    'justify-items' : 'center',
                    'font-size' : '300%',
                    'line-height' : '100%',
                    'padding' : '5% 0%',
                    
                    'user-select' : 'none',
                    /* supported by Chrome and Opera */
                    '-webkit-user-select' : 'none',
                    /* Safari */
                    '-khtml-user-select' : 'none',
                    /* Konqueror HTML */
                    '-moz-user-select' : 'none',
                    /* Firefox */
                    '-ms-user-select' : 'none',
                    /* Internet Explorer/Edge */ 
                    });
                });
            }
            if(type == 2)
            {
                $("#r" + "1").html(`<div class="chesspiece quen black">♔</div>`);
                
                $("#r" + "2").html(`<div class="chesspiece bisp black">♗</div>`);
                
                $("#r" + "3").html(`<div class="chesspiece rock black">♖</div>`);
               
                $("#r" + "4").html(`<div class="chesspiece knig black">♘</div>`);
                
                $(".placeHolder.right").each(function(index,value){
                    $(value).css({
                    'border-top': '1px solid black',
                    'border-right': '1px solid black',
                    'border-bottom': '1px solid black',
                    'text-align' : 'center',
                    'justify-items' : 'center',
                    'font-size' : '300%',
                    'line-height' : '100%',
                    'padding' : '5% 0%',
                    
                    'user-select' : 'none',
                    /* supported by Chrome and Opera */
                    '-webkit-user-select' : 'none',
                    /* Safari */
                    '-khtml-user-select' : 'none',
                    /* Konqueror HTML */
                    '-moz-user-select' : 'none',
                    /* Firefox */
                    '-ms-user-select' : 'none',
                    /* Internet Explorer/Edge */ 
                    });
                });
                
            }
            
           
        }
        function restorePreviousCol(turnBase)
        {
            if(turnBase == 3)
           {
            for(let n = 1; n<5;n++)
            {
                $('#l' + n).html("");
            }
            $(".placeHolder.left").each(function(index,value){
                $(value).css({
                'border-left': '',
                'border-top': '',
                'border-bottom': '',
                });
            });
           }
            if(turnBase == 4)
           {
            for(let n = 1; n<5;n++)
            {
                $('#r' + n).html("");
            }
            $(".placeHolder.right").each(function(index,value){
                $(value).css({
                'border-top': '',
                'border-right': '',
                'border-bottom': ''
                });
            });
           }
           
        }

       function pawnTransfrom(cor,picked,turnBase)
       {
           let returnVal = [false, turnBase];
            if(picked)
            {
                if($(`#${(parseInt(cor.rowStart) - 1) * 8 + parseInt(cor.columnStart) - 1}`).html().substring(23,27) != "king")
                {
                    $(`#${(parseInt(cor.rowStart) - 1) * 8 + parseInt(cor.columnStart) - 1}`).html("");
                    $(`#${(parseInt(cor.rowStart) - 1) * 8 + parseInt(cor.columnStart) - 1}`).append(picked);
                }
                if(turnBase == 3)
                { 
                    restorePreviousCol(turnBase);
                    returnVal[1] = 2;
                    returnVal[0] = true;
                    return returnVal;
                }
                
                if(turnBase == 4)
                {
                    restorePreviousCol(turnBase);
                    returnVal[1] = 1;
                    returnVal[0] = true;
                    return returnVal;
                    
                }
            }
            
            returnVal[0] = false;
            return returnVal;
        }

       function checkIfEnemiesForPawn(cor,cross,type)
       {
            let enemy = $(`#${cor}`);
            
            if(cross)
            {
                
                if(enemy.html())
                {
                    
                    if(type==1)
                    {
                        if(enemy.html().substring(28,33).localeCompare("black")==0)
                        {    
                            return 1;
                        }
                        
                    }
                    else if(type == 2)
                    {
                        if(enemy.html().substring(28,33).localeCompare("white")==0)
                        {  
                            return 1;
                        }
                    }
                    
                    return 0; 
                                          
                }
                else 
                    return 0; 
            }
            else
            {
                if(enemy.html())
                    return 0;
                else
                    return 1;
            }
            
       }
       
       function pawnMoveRule(oldCor,type)
        {
            let x = oldCor.rowStart;
            let y = oldCor.columnStart;
            //white pawn
            let moveCors = [];
            let tempCor;
            
            for(let i = 0 ;i < 65 ;i++)
            {
                moveCors[i] = 0;
            }
            if(type == 1)
            {
                //first move
                if(oldCor.rowStart == 7)
                {
                    tempCor = (parseInt(x)-3) * 8 + parseInt(y) - 1;
                    moveCors[tempCor] = checkIfEnemiesForPawn(tempCor,0,type);
                }
                
                for(let i = 0 ; i < 3 ; i++)
                {
                    tempCor = (parseInt(x)-2) * 8 + parseInt(y) - i;
                    if(x == 1)
                    {
                        break;
                    }
                    if(y==9)
                    {
                        if(i!=0)
                        {
                            if(i==1)
                            {
                                let tempHold = checkIfEnemiesForPawn(tempCor,0,type);
                                if(tempHold == 0)
                                {
                                    moveCors[(parseInt(x)-3) * 8 + parseInt(y) - 1] = 0;
                                }
                                moveCors[tempCor] = tempHold;
                            }
                            else
                                moveCors[tempCor] = checkIfEnemiesForPawn(tempCor,1,type);    
                            
                        }
                    }
                    else if(y==2)
                    {
                        if(i!=2)
                        {
                            if(i==1)
                            {
                                let tempHold = checkIfEnemiesForPawn(tempCor,0,type);
                                if(tempHold == 0)
                                {
                                    moveCors[(parseInt(x)-3) * 8 + parseInt(y) - 1] = 0;
                                }
                                moveCors[tempCor] = tempHold;
                            }
                            else
                                moveCors[tempCor] = checkIfEnemiesForPawn(tempCor,1,type); 
                        }
                    }
                    else{
                        if(i==1)
                        {
                            let tempHold = checkIfEnemiesForPawn(tempCor,0,type);
                            if(tempHold == 0)
                            {
                                moveCors[(parseInt(x)-3) * 8 + parseInt(y) - 1] = 0;
                            }
                            moveCors[tempCor] = tempHold;
                        }
                        else
                            moveCors[tempCor] = checkIfEnemiesForPawn(tempCor,1,type); 
                    }

                    
                }
                
            }
            
            else if(type == 2)
            {
                
                
                //first move
                if(oldCor.rowStart == 2)
                {
                    tempCor = (parseInt(x)+1) * 8 + parseInt(y) - 1;
                   
                    moveCors[tempCor] = checkIfEnemiesForPawn(tempCor,0,type);
                }
                for(let i = 0 ; i < 3 ; i++)
                {
                    tempCor = (parseInt(x)) * 8 + parseInt(y) - i;
                    if(x == 8)
                    {
                        break;
                    }
                    if(y==9)
                    {
                        if(i!=0)
                        {
                            
                            
                            if(i==1)
                            {
                                let tempHold = checkIfEnemiesForPawn(tempCor,0,type);
                                if(tempHold == 0)
                                {
                                    moveCors[(parseInt(x)+1) * 8 + parseInt(y) - 1] = 0;
                                }
                                moveCors[tempCor] = tempHold;
                            }
                            else
                                moveCors[tempCor] = checkIfEnemiesForPawn(tempCor,1,type); 
                            
                        }
                    }
                    else if(y==2)
                    {
                        if(i!=2)
                        {
                            if(i==1)
                            {
                                let tempHold = checkIfEnemiesForPawn(tempCor,0,type);
                                if(tempHold == 0)
                                {
                                    moveCors[(parseInt(x)+1) * 8 + parseInt(y) - 1] = 0;
                                }
                                moveCors[tempCor] = tempHold;
                            }
                            else
                                moveCors[tempCor] = checkIfEnemiesForPawn(tempCor,1,type); 
                        }
                    }
                    else{
                        if(i==1)
                        {
                            let tempHold = checkIfEnemiesForPawn(tempCor,0,type);
                            if(tempHold == 0)
                            {
                                moveCors[(parseInt(x)+1) * 8 + parseInt(y) - 1] = 0;
                            }
                            moveCors[tempCor] = tempHold;
                        }
                        else
                            moveCors[tempCor] = checkIfEnemiesForPawn(tempCor,1,type); 
                    }
                    
                }
                  
            }
            
            return moveCors;
        }

        function pawnCorrectMove(oldCor,newCor,type,turnBase)
        {
            
            let tempCor = (parseInt(newCor.rowStart) - 1) * 8 + parseInt(newCor.columnStart) - 1;
            let enemiesCors = pawnMoveRule(oldCor,type);
            let returnVal = [false,turnBase];
            if(enemiesCors[tempCor] == 1)
            {
                if(turnBase == 1 && type == 1)
                {
                    if(willTransfrom(newCor,type))
                    {
                        savePawnCor.rowStart = newCor.rowStart;
                        savePawnCor.columnStart = newCor.columnStart;
                        
                        pickForm(type);
                        returnVal[1] = 3;
                        returnVal[0] = true;
                        return returnVal;
                    }
                    else
                    {         
                                       
                        returnVal[1] = 2;
                        returnVal[0] = true;
                        return returnVal;
                        
                    }
                }
                if(turnBase == 2 && type == 2)
                {
                    if(willTransfrom(newCor,type))
                    {
                        savePawnCor.rowStart = newCor.rowStart;
                        savePawnCor.columnStart = newCor.columnStart;
                        pickForm(type);
                        returnVal[1] = 4;
                        returnVal[0] = true;
                        return returnVal;
                    }
                    else
                    {                   
                        returnVal[1] = 1;
                        returnVal[0] = true;
                        return returnVal;
                    }
                }

            }
            returnVal[0] = false;
            return returnVal;
        }