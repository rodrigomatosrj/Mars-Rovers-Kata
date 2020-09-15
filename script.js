// Rover object goes here:
        let rover = {
            direction: "N",
            x: 0,
            y: 0,
            travelLog: [[0,0]]
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
                    if(rover.x !== 0){
                        rover.x--;
                    }else{
                        console.log(`Impossible going on ${rover.direction} direction at this moment!`);
                        return;
                    }
                    break;
                case("E"):
                    if(rover.y !== 10){
                        rover.y++;
                    }else{
                        console.log(`Impossible going on ${rover.direction} direction at this moment!`);
                        return;
                    }
                    break;
                case("S"):
                    if(rover.x !== 10){
                        rover.x++;
                    }else{
                        console.log(`Impossible going on ${rover.direction} direction at this moment!`);
                        return;
                    }
                    break;
                case("W"):
                    if(rover.y !== 0){
                        rover.y--;
                    }else{
                        console.log(`Impossible going on ${rover.direction} direction at this moment!`);
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