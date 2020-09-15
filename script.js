// Rover object goes here:
        let rover = {
            direction: "N",
            x: 0,
            y: 0,
            travelLog: [[0,0]]
        }


    let obstacles = [[1,1],[0,9],[0,1],[1,2]];



    function canGoAhead(coordX,coordY,obstacles){
        if(coordX > 10 || coordX < 0 || coordY > 10 || coordY < 0){ //limite do GRID
                return false;
        }else{  
            for(let i=0;i<obstacles.length;i++){
                if(coordX === obstacles[i][0] && coordY === obstacles[i][1]){
                    //colision
                    return false;
                    break;
                }
            }
            return true;
        }
    }

// ======================
        function turnLeft(rover) {
            switch(rover.direction){
                case("N"):
                    rover.direction = "W";
                    break;
                case("W"):    
                    rover.direction = "S";
                    break;
                case("S"):    
                    rover.direction = "E";
                    break;
                case("E"):    
                    rover.direction = "N";
                    break;
            }
            console.log(`turnLeft was called! Rover Mars is facing ${rover.direction}`);
        }
        
        function turnRight(rover) {
            switch(rover.direction){
                case("N"):
                    rover.direction = "E";
                    break;
                case("E"):    
                    rover.direction = "S";
                    break;
                case("S"):    
                    rover.direction = "W";
                    break;
                case("W"):    
                    rover.direction = "N";
                    break;
            }
            console.log(`turnRight was called! Rover Mars is facing ${rover.direction}`);
        }
        
        function moveForward(rover) {
            switch(rover.direction){
                case("N"):
                    rover.x--;
                    if(!canGoAhead(rover.x,rover.y,obstacles)){
                        rover++;                        
                        console.log(`Impossible going on ${rover.direction} direction at this moment! There is an obstacle ahead or we are at the border of the grid!`);
                        return;
                    }
                    break;
                case("E"):
                    rover.y++;
                    if(!canGoAhead(rover.x,rover.y,obstacles)){
                        rover.y--;
                        console.log(`Impossible going on ${rover.direction} direction at this moment! There is an obstacle ahead or we are at the border of the grid!`);
                        return;
                    }
                    break;
                case("S"):
                    rover.x++;
                    if(!canGoAhead(rover.x,rover.y,obstacles)){
                        rover--;
                        console.log(`Impossible going on ${rover.direction} direction at this moment! There is an obstacle ahead or we are at the border of the grid!`);
                        return;
                    }
                    break;
                case("W"):
                    rover.y--;
                    if(!canGoAhead(rover.x,rover.y,obstacles)){
                        rover.y++;
                        console.log(`Impossible going on ${rover.direction} direction at this moment! There is an obstacle ahead or we are at the border of the grid!`);
                        return;
                    }
                    break;    
            }
            rover.travelLog.push([rover.x,rover.y]);
            console.log(`moveForward was called: Facing ${rover.direction} PosX: ${rover.x} PosY: ${rover.y}`);
        }
        function moveBackward(rover) {
            switch(rover.direction){
                case("S"):
                    if(rover.x !== 0){
                        rover.x--;
                    }else{
                        console.log(`Impossible going on N(backwards) direction at this moment!`);
                        return;
                    }
                    break;
                case("W"):
                    if(rover.y !== 10){
                        rover.y++;
                    }else{
                        console.log(`Impossible going on E(backwards) direction at this moment!`);
                        return;
                    }
                    break;
                case("N"):
                    if(rover.x !== 10){
                        rover.x++;
                    }else{
                        console.log(`Impossible going on S(backwards) direction at this moment!`);
                        return;
                    }
                    break;
                case("E"):
                    if(rover.y !== 0){
                        rover.y--;
                    }else{
                        console.log(`Impossible going on W(Backwards) direction at this moment!`);
                        return;
                    }
                    break;    
            }
            rover.travelLog.push([rover.x,rover.y]);
            console.log(`moveBackward was called: Facing ${rover.direction} PosX: ${rover.x} PosY: ${rover.y}`);
        }

        function command(rover,commands){
            if(typeof(commands) !== "string" || commands.length === 0) {
                console.log("You must inform the rover object and a list of commands");
                return;
            }else{
                for(let i=0;i<commands.length;i++){
                    switch(commands[i]){
                        case("f"):
                            moveForward(rover);    
                            break;
                        case("b"):
                            moveBackward(rover);    
                            break;    
                        case("r"):
                            turnRight(rover);
                            break;
                        case("l"):
                            turnLeft(rover);
                            break;
                        default:
                            console.log(`Comando inválido: ${commands[i]}`);
                            break;  
                    }
                }
            }


        }

       console.log(typeof(Rover));
       command(rover,"rffffllbbffffllffsssdabbrfffllbbb");
       console.log(rover.travelLog);

   canGoAhead(0,1,obstacles);