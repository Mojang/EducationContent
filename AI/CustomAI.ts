//% color=#00bbff
namespace AIForEarth {

    /**
     * Test
     * @param dir the direction of detection
     */

    //% block="agent detect dry grass %dir"
    export function TestSequence(dir: SixDirection) {
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