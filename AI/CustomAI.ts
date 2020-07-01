//% color=#00bbff
namespace AIForEarth {

    let airBlock = Block.Air

    /**
     * Test
     * @param dir the direction of detection
     */

    //% block
    export function TestSequence() {
        agent.move(FORWARD, 3)
        agent.turn(TurnDirection.Right)
        agent.move(FORWARD, 3)
        agent.turn(TurnDirection.Right)
        agent.move(FORWARD, 3)
        agent.turn(TurnDirection.Right)
        agent.move(FORWARD, 3)
        agent.turn(TurnDirection.Right)
        return 0
    }
}