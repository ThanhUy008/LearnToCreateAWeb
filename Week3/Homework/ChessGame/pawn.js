
       
       function willTransfrom(cor,type)
       {
            console.log(document.getElementById((parseInt(cor.rowStart) - 1) * 8 + parseInt(cor.columnStart) - 1).innerHTML.substring(23,27));
           
            if(document.getElementById((parseInt(cor.rowStart) - 1) * 8 + parseInt(cor.columnStart) - 1).innerHTML.substring(23,27) == "king")
            {
                console.log(document.getElementById((parseInt(cor.rowStart) - 1) * 8 + parseInt(cor.columnStart) - 1).innerHTML.substring(23,28));
           
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
                document.getElementById("l" + "1").innerHTML = `<div class="chesspiece quen white">♔</div>`;
                document.getElementById("l" + "1").style = `border-top: 1px solid black;
                border-left: 1px solid black;
                border-right: 1px solid black;
                border-bottom: 1px solid black;
                text-align: center;
                justify-items: center;
                font-size: 300%;
                line-height: 100%;
                padding: 5% 0%;
                
                user-select: none;
                /* supported by Chrome and Opera */
                -webkit-user-select: none;
                /* Safari */
                -khtml-user-select: none;
                /* Konqueror HTML */
                -moz-user-select: none;
                /* Firefox */
                -ms-user-select: none;
                /* Internet Explorer/Edge */`
                document.getElementById("l" + "2").innerHTML = `<div class="chesspiece bisp white">♗</div>`;
                document.getElementById("l" + "2").style = `
                border-left: 1px solid black;
                border-right: 1px solid black;
                border-bottom: 1px solid black;
                text-align: center;
                justify-items: center;
                font-size: 300%;
                line-height: 100%;
                padding: 5% 0%;
                
                user-select: none;
                /* supported by Chrome and Opera */
                -webkit-user-select: none;
                /* Safari */
                -khtml-user-select: none;
                /* Konqueror HTML */
                -moz-user-select: none;
                /* Firefox */
                -ms-user-select: none;
                /* Internet Explorer/Edge */`
                document.getElementById("l" + "3").innerHTML = `<div class="chesspiece rock white">♖</div>`;
                document.getElementById("l" + "3").style = `
                border-left: 1px solid black;
                border-right: 1px solid black;
                border-bottom: 1px solid black;
                text-align: center;
                justify-items: center;
                font-size: 300%;
                line-height: 100%;
                padding: 5% 0%;
                
                user-select: none;
                /* supported by Chrome and Opera */
                -webkit-user-select: none;
                /* Safari */
                -khtml-user-select: none;
                /* Konqueror HTML */
                -moz-user-select: none;
                /* Firefox */
                -ms-user-select: none;
                /* Internet Explorer/Edge */`
                document.getElementById("l" + "4").innerHTML = `<div class="chesspiece knig white">♘</div>`;
                document.getElementById("l" + "4").style = `
                border-left: 1px solid black;
                border-right: 1px solid black;
                border-bottom: 1px solid black;
                text-align: center;
                justify-items: center;
                font-size: 300%;
                line-height: 100%;
                padding: 5% 0%;
                
                user-select: none;
                /* supported by Chrome and Opera */
                -webkit-user-select: none;
                /* Safari */
                -khtml-user-select: none;
                /* Konqueror HTML */
                -moz-user-select: none;
                /* Firefox */
                -ms-user-select: none;
                /* Internet Explorer/Edge */`
                }
            if(type == 2)
            {
                document.getElementById("r" + "1").innerHTML = `<div class="chesspiece quen black">♔</div>`;
                document.getElementById("r" + "1").style = `border-top: 1px solid black;
                border-left: 1px solid black;
                border-right: 1px solid black;
                border-bottom: 1px solid black;
                text-align: center;
                justify-items: center;
                font-size: 300%;
                line-height: 100%;
                padding: 5% 0%;
                
                user-select: none;
                /* supported by Chrome and Opera */
                -webkit-user-select: none;
                /* Safari */
                -khtml-user-select: none;
                /* Konqueror HTML */
                -moz-user-select: none;
                /* Firefox */
                -ms-user-select: none;
                /* Internet Explorer/Edge */`
                document.getElementById("r" + "2").innerHTML = `<div class="chesspiece bisp black">♗</div>`;
                document.getElementById("r" + "2").style = `
                border-left: 1px solid black;
                border-right: 1px solid black;
                border-bottom: 1px solid black;
                text-align: center;
                justify-items: center;
                font-size: 300%;
                line-height: 100%;
                padding: 5% 0%;
                
                user-select: none;
                /* supported by Chrome and Opera */
                -webkit-user-select: none;
                /* Safari */
                -khtml-user-select: none;
                /* Konqueror HTML */
                -moz-user-select: none;
                /* Firefox */
                -ms-user-select: none;
                /* Internet Explorer/Edge */`
                document.getElementById("r" + "3").innerHTML = `<div class="chesspiece rock black">♖</div>`;
                document.getElementById("r" + "3").style = `
                border-left: 1px solid black;
                border-right: 1px solid black;
                border-bottom: 1px solid black;
                text-align: center;
                justify-items: center;
                font-size: 300%;
                line-height: 100%;
                padding: 5% 0%;
                
                user-select: none;
                /* supported by Chrome and Opera */
                -webkit-user-select: none;
                /* Safari */
                -khtml-user-select: none;
                /* Konqueror HTML */
                -moz-user-select: none;
                /* Firefox */
                -ms-user-select: none;
                /* Internet Explorer/Edge */`
                document.getElementById("r" + "4").innerHTML = `<div class="chesspiece knig black">♘</div>`;
                document.getElementById("r" + "4").style = `
                border-left: 1px solid black;
                border-right: 1px solid black;
                border-bottom: 1px solid black;
                text-align: center;
                justify-items: center;
                font-size: 300%;
                line-height: 100%;
                padding: 5% 0%;
                
                user-select: none;
                /* supported by Chrome and Opera */
                -webkit-user-select: none;
                /* Safari */
                -khtml-user-select: none;
                /* Konqueror HTML */
                -moz-user-select: none;
                /* Firefox */
                -ms-user-select: none;
                /* Internet Explorer/Edge */`
            }
                
           
        }
        function restorePreviousCol(turnBase)
        {
            if(turnBase == 3)
           {
            document.getElementById("l" + "1").innerHTML = ``;
            document.getElementById("l" + "1").style = `text-align: center;
            justify-items: center;
            font-size: 300%;
            line-height: 100%;
            padding: 5% 0%;
            
            user-select: none;
            /* supported by Chrome and Opera */
            -webkit-user-select: none;
            /* Safari */
            -khtml-user-select: none;
            /* Konqueror HTML */
            -moz-user-select: none;
            /* Firefox */
            -ms-user-select: none;
            /* Internet Explorer/Edge */`;
            document.getElementById("l" + "2").innerHTML = ``;
            document.getElementById("l" + "2").style = `text-align: center;
            justify-items: center;
            font-size: 300%;
            line-height: 100%;
            padding: 5% 0%;
            
            user-select: none;
            /* supported by Chrome and Opera */
            -webkit-user-select: none;
            /* Safari */
            -khtml-user-select: none;
            /* Konqueror HTML */
            -moz-user-select: none;
            /* Firefox */
            -ms-user-select: none;
            /* Internet Explorer/Edge */`;
            document.getElementById("l" + "3").innerHTML = ``;
            document.getElementById("l" + "3").style = `text-align: center;
            justify-items: center;
            font-size: 300%;
            line-height: 100%;
            padding: 5% 0%;
            
            user-select: none;
            /* supported by Chrome and Opera */
            -webkit-user-select: none;
            /* Safari */
            -khtml-user-select: none;
            /* Konqueror HTML */
            -moz-user-select: none;
            /* Firefox */
            -ms-user-select: none;
            /* Internet Explorer/Edge */`;
            document.getElementById("l" + "4").innerHTML = ``;
            document.getElementById("l" + "4").style = `text-align: center;
            justify-items: center;
            font-size: 300%;
            line-height: 100%;
            padding: 5% 0%;
            
            user-select: none;
            /* supported by Chrome and Opera */
            -webkit-user-select: none;
            /* Safari */
            -khtml-user-select: none;
            /* Konqueror HTML */
            -moz-user-select: none;
            /* Firefox */
            -ms-user-select: none;
            /* Internet Explorer/Edge */`;
           }
            if(turnBase == 4)
           {
            document.getElementById("r" + "1").innerHTML = ``;
            document.getElementById("r" + "1").style = `text-align: center;
            justify-items: center;
            font-size: 300%;
            line-height: 100%;
            padding: 5% 0%;
            
            user-select: none;
            /* supported by Chrome and Opera */
            -webkit-user-select: none;
            /* Safari */
            -khtml-user-select: none;
            /* Konqueror HTML */
            -moz-user-select: none;
            /* Firefox */
            -ms-user-select: none;
            /* Internet Explorer/Edge */`;
            document.getElementById("r" + "2").innerHTML = ``;
            document.getElementById("r" + "2").style = `text-align: center;
            justify-items: center;
            font-size: 300%;
            line-height: 100%;
            padding: 5% 0%;
            
            user-select: none;
            /* supported by Chrome and Opera */
            -webkit-user-select: none;
            /* Safari */
            -khtml-user-select: none;
            /* Konqueror HTML */
            -moz-user-select: none;
            /* Firefox */
            -ms-user-select: none;
            /* Internet Explorer/Edge */`;
            document.getElementById("r" + "3").innerHTML = ``;
            document.getElementById("r" + "3").style = `text-align: center;
            justify-items: center;
            font-size: 300%;
            line-height: 100%;
            padding: 5% 0%;
            
            user-select: none;
            /* supported by Chrome and Opera */
            -webkit-user-select: none;
            /* Safari */
            -khtml-user-select: none;
            /* Konqueror HTML */
            -moz-user-select: none;
            /* Firefox */
            -ms-user-select: none;
            /* Internet Explorer/Edge */`;
            document.getElementById("r" + "4").innerHTML = ``;
            document.getElementById("r" + "4").style = `text-align: center;
            justify-items: center;
            font-size: 300%;
            line-height: 100%;
            padding: 5% 0%;
            
            user-select: none;
            /* supported by Chrome and Opera */
            -webkit-user-select: none;
            /* Safari */
            -khtml-user-select: none;
            /* Konqueror HTML */
            -moz-user-select: none;
            /* Firefox */
            -ms-user-select: none;
            /* Internet Explorer/Edge */`;
           }
           
        }

       function pawnTransfrom(cor,picked,turnBase)
       {
           let returnVal = [false, turnBase];
            if(picked)
            {
                if(document.getElementById((parseInt(cor.rowStart)-1) * 8 + parseInt(cor.columnStart) - 1).innerHTML.substring(23,27) != "king")
                {
                    document.getElementById((parseInt(cor.rowStart)-1) * 8 + parseInt(cor.columnStart) - 1).innerHTML = "";
                    document.getElementById((parseInt(cor.rowStart)-1) * 8 + parseInt(cor.columnStart) - 1).appendChild(picked);
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
            let enemy = document.getElementById(cor);
            

            if(cross)
            {
                
                if(enemy.innerHTML)
                {
                    
                    if(type==1)
                    {
                        if(enemy.innerHTML.substring(28,33).localeCompare("black")==0)
                        {    
                            return 1;
                        
                        }
                        
                    }
                    else if(type == 2)
                    {
                        if(enemy.innerHTML.substring(28,33).localeCompare("white")==0)
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
                if(enemy.innerHTML)
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
                                moveCors[tempCor] = checkIfEnemiesForPawn(tempCor,0,type);
                            else
                                moveCors[tempCor] = checkIfEnemiesForPawn(tempCor,1,type);    
                            
                        }
                    }
                    else if(y==2)
                    {
                        if(i!=2)
                        {
                            if(i==1)
                                moveCors[tempCor] = checkIfEnemiesForPawn(tempCor,0,type);
                            else
                                moveCors[tempCor] = checkIfEnemiesForPawn(tempCor,1,type); 
                        }
                    }
                    else{
                        if(i==1)
                                moveCors[tempCor] = checkIfEnemiesForPawn(tempCor,0,type);
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
                                moveCors[tempCor] = checkIfEnemiesForPawn(tempCor,0,type);
                            else
                                moveCors[tempCor] = checkIfEnemiesForPawn(tempCor,1,type); 
                            
                        }
                    }
                    else if(y==2)
                    {
                        if(i!=2)
                        {
                            if(i==1)
                                moveCors[tempCor] = checkIfEnemiesForPawn(tempCor,0,type);
                            else
                                moveCors[tempCor] = checkIfEnemiesForPawn(tempCor,1,type); 
                        }
                    }
                    else{
                        if(i==1)
                                moveCors[tempCor] = checkIfEnemiesForPawn(tempCor,0,type);
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
                        console.log(true);   
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
                        console.log(returnVal[0]);
                        return returnVal;
                        
                    }
                }
                if(turnBase == 2 && type == 2)
                {
                    if(willTransfrom(newCor,type))
                    {
                        console.log(true);
                        savePawnCor.rowStart = newCor.rowStart;
                        savePawnCor.columnStart = newCor.columnStart;
                        pickForm(type);
                        returnVal[1] = 4;
                        returnVal[0] = true;
                        return returnVal;
                    }
                    else
                    {                   
                        console.log(true);     
                        returnVal[1] = 1;
                        returnVal[0] = true;
                        return returnVal;
                    }
                }

            }
            returnVal[0] = false;
            return returnVal;
        }