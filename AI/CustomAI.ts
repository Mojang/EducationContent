//% color=#00bbff
namespace AI {

    /**
     * Test
     * @param value, the number of sequence loops
     */

    //% block
    export function TestSequence(value: number){
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
}