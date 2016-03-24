(function (window, document, navigato, myApp, $, DataBase, Game) {
    myApp.onPageInit('modo-humano', function (page) {
        Game.humano.start($(".modo-humano"));
        
        var pauseContinueGame = $(".pause-continue-game");
        pauseContinueGame.on("mousedown touchstart", function(e){
            e.preventDefault();
            $this = $(this);
            if($this.hasClass('pause-game')){
                $this.addClass('continue-game').removeClass('pause-game')
                window.$this = $this;
                Game.humano.pausarGerarMosquito();
            } else {
                $this.addClass('pause-game').removeClass('continue-game')
                Game.humano.gerarMosquito();
            }
            
        });
    });
    
    myApp.onPageBack("modo-humano", function(page){
       Game.humano.pausarGerarMosquito();
    });
    
    myApp.onPageInit('modo-mosquito', function (page) {
        //Game.mosquito.start($(".modo-mosquito"));
    });

})(window, document, navigator, myApp, Dom7, DataBase, Game)