enum PatternType {
    //% block="Spotted"
    Spotted,
    //% block="Striped"
    Striped
    }

//% color=#00bbff
namespace AIForEarth{


    //% block="sequence %value|"
    export function test1(value: number){
        let i
        for (i = 0; i < value; i++) {
            agent.move(FORWARD, 3)
            agent.turn(TurnDirection.Right)
            agent.move(FORWARD, 3)
            agent.turn(TurnDirection.Right)
            agent.move(FORWARD, 3)
            agent.turn(TurnDirection.Right)
            agent.move(FORWARD, 3)
            agent.turn(TurnDirection.Right)
        }
    }
        
    //% block="run pattern || %patternType|at %speed|for %duration ms"
    //% duration.shadow=timePicker
    //% speed.min=0 speed.max=60
    //% expandableArgumentMode="enabled"
    export function test2(direction: PatternType,
        speed: number,
        duration: number){
            /*Code Random*/
    }

    //% block="run pattern variation || %patternType|at %speed|for %duration ms"
    //% duration.shadow=timePicker
    //% speed.min=0 speed.max=100
    //% expandableArgumentMode="toggle"
    export function test3(direction: PatternType,
        speed: number,
        duration: number){
            /*Code Random*/
    }

    //% block="tpTypeBlockExample"
    export function test4(){
            /*Code Random*/
    }
    
    //% block="return number"
    export function test5(): number {
        return 0;
    }

    //% block="return boolean"
    export function test6(): boolean {
        return false;
    }


    //% block="on event"
    export function test7(handler: () => void) {

    }
}