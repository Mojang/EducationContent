//% color=#00bbff
namespace AIForEarth {

    /**
     * Test
     * @param dir the direction of detection
     */

    //% block="$value|"
    export function TestSequence(value: number){
        let i;
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
}