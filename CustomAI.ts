//% color=#ec05cd 
namespace AIForEarth {

    let airBlock = Block.Air

    /**
     * Test
     * @param dir the direction of detection
     */

    //% block
    export function testAgent(dir: SixDirection) {
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