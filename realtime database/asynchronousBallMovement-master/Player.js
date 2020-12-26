class Player{
    constructor(){}
    getState(){
        var gameStateRef = database.ref('gameSate');
        gameStateRef.on("value",function(data){
            gameState = data.val();
        })
    }
    updateCount(count){
        database.ref('/').update({
            playerCount:count
        });
    }
    update(name){
        var playerIndex = "player"+playerCount;
        database.ref(playerIndex).set({
            name:name
        });
    }
}