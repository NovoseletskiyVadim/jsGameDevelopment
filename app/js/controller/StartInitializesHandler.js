// Describes event handler click button "Start"

export default class StartInitializesHandler{

    constructor(
        scoreObject,
        scoreLocalStorageObject,
        createTerretoryBoardObject,
        boardLocalStorageObject,
        dataObject,
        viewCurrentDataScoreObject

    ){

        this.score=scoreObject;
        this.scoreLocalStorage=scoreLocalStorageObject;
        this.createTerretoryBoard=createTerretoryBoardObject;
        this.boardLocalStorage=boardLocalStorageObject;
        this.objectData=dataObject;
        this.view=viewCurrentDataScoreObject;
        this.start=document.getElementById('start');

    }

    
    initializationPlay(){

        let that=this;

        this.start.onclick=function(){

            console.log("click start is ok")

            let checkResult=that.scoreLocalStorage.outPutScore();
        
            if(checkResult===null){
                
                let getNamePlayerValue=that.view.getInputNameValue();
                let namePlayerBlack=getNamePlayerValue.namePlayerBlack;
                let namePlayerWhite=getNamePlayerValue.namePlayerWhite;
                        
                if(namePlayerBlack=='' && namePlayerWhite==''){
                    alert('Перед початком гри, введіть імена гравців ')
                }
                else if(namePlayerBlack=='' || namePlayerWhite==''){
        
                    let result =(namePlayerBlack=='')? 'заповніть імя чорного гравця' : 'заповніть імя білого гравця'
                    alert(result);
                }
                else{
        
                    let arrayObjects=that.createTerretoryBoard.createArrayObjects()
        
                    
                    if (that.score && arrayObjects){

                        that.score.namePlayerBlack=namePlayerBlack;
                        that.score.namePlayerWhite=namePlayerWhite;
                        that.scoreLocalStorage.saveScore(that.score);
        
                        that.boardLocalStorage.saveBoard(arrayObjects);
        
                        let scoreInfo=that.scoreLocalStorage.outPutScore();
                        
                        that.view.viewScore(scoreInfo);
        
                        console.log('save new score in the local storage ');
                    }
                    else{
                        console.error('error save new score in local storage');
                    };
                };
 
            }  
            else if (checkResult.phase==='startGame'){
        
                that.view.viewScore(that.scoreLocalStorage.outPutScore());        
                
                alert('Игра уже начата. Что бы начать сначала завершите партию.')
                
            }
            else if(checkResult.phase==='endGame'){
                
                that.view.viewScore(that.scoreLocalStorage.outPutScore());  

                console.log('end game');
                let getNamePlayerValue=that.view.getInputNameValue();
                console.log('getNamePlayerValue=',getNamePlayerValue);

                let namePlayerBlack=getNamePlayerValue.namePlayerBlack;
                let namePlayerWhite=getNamePlayerValue.namePlayerWhite;
                        
                if(namePlayerBlack=='' && namePlayerWhite==''){
                    alert('Перед початком гри, введіть імена гравців ')
                }
                else if(namePlayerBlack=='' || namePlayerWhite==''){
        
                    let result =(namePlayerBlack=='')? 'заповніть імя чорного гравця' : 'заповніть імя білого гравця'
                    alert(result);
                }
                else{
        
                    let arrayObjects=that.createTerretoryBoard.createArrayObjects()
        
                    
                    if (that.score && arrayObjects){

                        that.score.namePlayerBlack=namePlayerBlack;
                        that.score.namePlayerWhite=namePlayerWhite;
                        that.scoreLocalStorage.saveScore(that.score);
        
                        that.boardLocalStorage.saveBoard(arrayObjects);
        
                        let scoreInfo=that.scoreLocalStorage.outPutScore();
                        
                        that.view.viewScore(scoreInfo);
        
                        console.log('save new score in the local storage ');
                    }
                    else{
                        console.error('error save new score in local storage');
                    };
                };

            };
             
        };
    };
};









