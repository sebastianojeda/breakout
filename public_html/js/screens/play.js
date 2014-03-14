game.PlayScreen = me.ScreenObject.extend({
	/**
	 *  action to perform on state change
	 */
        init: function() {
          this.parent(true);  
        },
	onResetEvent: function() {
            
            game.data.lives = 3;
            game.data.score = 0;
	    game.data.level = -1;
		// # bricks in the level
	    game.data.bricks = 0;
		// reset the score
	    game.data.score = 0;
            
        
            
                // *** App Academy ***
                // Load the level you created in the program Tiled
                me.levelDirector.loadLevel("level02");
                
                var ball = new game.BallEntity (40, 30, {});
                me.game.add(ball, 4);
                
                
                
                
		// add our HUD to the game world
		this.HUD = new game.HUD.Container();
                
		me.game.world.addChild(this.HUD);
},


	/**
	 *  action to perform when leaving this screen (state change)
	 */
	onDestroyEvent: function() {
		// remove the HUD from the game world
		me.game.world.removeChild(this.HUD);
},
                
        update: function() {
            brickList = me.game.getEntityByName("brick");
            console.log(brickList.length);
           
            if (brickList.length === 0) {
               console.log(brickList.length);
                me.levelDirector.nextLevel();
                me.levelDirector.loadLevel("level03");
                me.levelDirector.nextLevel();
                me.levelDirector.loadLevel("level04");
                me.levelDirector.nextLevel();
                me.levelDirector.loadLevel("level05");
                me.levelDirector.nextLevel();
                me.levelDirector.loadLevel("level06");
                me.levelDirector.nextLevel();
                me.levelDirector.loadLevel("level07");
                me.levelDirector.nextLevel();
                me.levelDirector.loadLevel("level08");
                me.levelDirector.nextLevel();
                me.levelDirector.loadLevel("level09");
                me.levelDirector.nextLevel();
                me.levelDirector.loadLevel("level010");
           }

},     
        
    countBrick: function (type) {
		game.data.bricks -=1;
		if (game.data.bricks === 0) {
			// all balls should be deactivated
			game.ball.active = false;
			this.nextLevel();
		}
	}    
        
        
        
        
        
});
