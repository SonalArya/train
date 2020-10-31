class Form{
    constructor(){
        
        this.button1 = createButton("engine1");
        this.button2 = createButton("engine2");
        this.greeting = createElement("h1");

        //this.reset = createButton("Reset");
    }

    hide(){
        this.button1.hide();
        this.button2.hide();
        this.greeting.hide();
    }

    display(){
        //create the title
        var title = createElement("h1");
        title.html("train maniya");
        title.position(displayWidth/2.25, displayHeight/2.5 - (displayHeight/8));

        this.button1.position(displayWidth/2.25, displayHeight/2.5);
        this.button2.position(displayWidth/2.1, displayHeight/2.5 + (displayHeight/20));
        //this.reset.position(10, 10);

        //do stuff when you hit the play button
        this.button1.mousePressed(()=>{
            title.hide();
            
            this.button1.hide();
            this.button2.hide();

            
            test=1;
            background(bg);  
            boggie1.show();
            boggie2.show();
            boggie3.show();
            boggie4.show();
            boggie5.show();
            boggie6.show();

                        
            rock1.show();
            
            chain1.show();
            chain2.show();
            chain3.show();
            chain4.show();
            chain5.show();
            this.greeting.html("Welcome !!!!");
            this.greeting.position(displayWidth/2, 125);
        });

        this.button2.mousePressed(()=>{
            title.hide();
            
            this.button1.hide();
            this.button2.hide();

            
            test=2;
            background(bg);  
                    boggie1.show();
                    boggie2.show();
                    boggie3.show();
                    boggie4.show();
                    boggie5.show();
                    boggie6.show();
                                        
                    rock1.show();
                    
                    chain1.show();
                    chain2.show();
                    chain3.show();
                    chain4.show();
                    chain5.show();
            this.greeting.html("Welcome !!!!");
            this.greeting.position(displayWidth/2, 125);
        });
        /*reset time
        this.reset.mousePressed(()=>{
            player.updateCount(0);
            game.updateState(0);

            database.ref('/').update({
                players: null,
                finishedPlayers: 0
            })
        });*/
    }
}