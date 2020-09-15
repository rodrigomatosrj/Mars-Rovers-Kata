// Rover object goes here:
        let rovers = [{
            id:1,
            direction: "S",
            x: 0,
            y: 0,
            travelLog: [[0,0]]
        },
        {
            id:2,
            direction: "N",
            x: 1,
            y: 0,
            travelLog: [[1,0]]
        },
        {
            id:3,
            direction: "N",
            x: 1,
            y: 1,
            travelLog: [[1,1]]
        },
        {
            id:4,
            direction: "N",
            x: 1,
            y: 8,
            travelLog: [[1,8]]
        }];    


    let obstacles = [[1,1],[0,9],[0,1],[1,2]];



    function canGoAhead(rover){
        if(rover.x > 10 || rover.x < 0 || rover.y > 10 || rover.y < 0){ //GRID limits
                return false;
        }else{  
            for(let i=0;i<obstacles.length;i++){ //obstacles verify
                if(rover.x === obstacles[i][0] && rover.y === obstacles[i][1]){ //colision with an obstacle         
                    return false;
                    break;
                }
            }
            for(let i=0;i<rovers.length;i++){
                if(rover.x === rovers[i].x && rover.y === rovers[i].y && rover.id !== rovers[i].id ){ //colision with another rover
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
                    if(!canGoAhead(rover)){
                        rover++;                        
                        console.log(`Impossible going on ${rover.direction} direction at this moment! There is an obstacle/rover ahead or we are at the border of the grid!`);
                        return;
                    }
                    break;
                case("E"):
                    rover.y++;
                    if(!canGoAhead(rover)){
                        rover.y--;
                        console.log(`Impossible going on ${rover.direction} direction at this moment! There is an obstacle/rover ahead or we are at the border of the grid!`);
                        return;
                    }
                    break;
                case("S"):
                    rover.x++;
                    if(!canGoAhead(rover)){
                        rover--;
                        console.log(`Impossible going on ${rover.direction} direction at this moment! There is an obstacle/rover ahead or we are at the border of the grid!`);
                        return;
                    }
                    break;
                case("W"):
                    rover.y--;
                    if(!canGoAhead(rover)){
                        rover.y++;
                        console.log(`Impossible going on ${rover.direction} direction at this moment! There is an obstacle/rover ahead or we are at the border of the grid!`);
                        return;
                    }
                    break;    
            }
            rover.travelLog.push([rover.x,rover.y]);
            console.log(`moveForward was called: Facing ${rover.direction} PosX: ${rover.x} PosY: ${rover.y}`);
        }
        function moveBackward(rover) {
            switch(rover.direction){
                case("N"):
                    rover.x++;
                    if(!canGoAhead(rover)){
                        rover--;                        
                        console.log(`Impossible going on ${rover.direction} backwards direction at this moment! There is an obstacle/rover ahead or we are at the border of the grid!`);
                        return;
                    }
                    break;
                case("E"):
                    rover.y--;
                    if(!canGoAhead(rover)){
                        rover.y++;
                        console.log(`Impossible going on ${rover.direction} backwards direction at this moment! There is an obstacle/rover ahead or we are at the border of the grid!`);
                        return;
                    }
                    break;
                case("S"):
                    rover.x--;
                    if(!canGoAhead(rover)){
                        rover++;
                        console.log(`Impossible going on ${rover.direction} backwards direction at this moment! There is an obstacle/rover ahead or we are at the border of the grid!`);
                        return;
                    }
                    break;
                case("W"):
                    rover.y++;
                    if(!canGoAhead(rover)){
                        rover.y--;
                        console.log(`Impossible going on ${rover.direction} backwards direction at this moment! There is an obstacle/rover ahead or we are at the border of the grid!`);
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

      
    command(rovers[0],"frfffbrfffllbbbfdw");
    console.log(rovers[0].travelLog);
    command(rovers[1],"frfffbrfffllbbbfdw");
    console.log(rovers[1].travelLog);   
    command(rovers[2],"rffffllbbffffllffsssdabbrfffllbbb");
    console.log(rovers[1].travelLog);
    command(rovers[2],"rffffllbbffffllffsssdabbrfffllbbb");
    console.log(rovers[1].travelLog);
       
   