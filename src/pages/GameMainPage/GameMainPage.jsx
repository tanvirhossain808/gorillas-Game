import { useState } from "react";
import Canva from "../../components/Canva/Canva";
import { useDrawings } from "../../hooks/DrawingHooks/DrawingHooks/UseDraings";

const GameMainPage = () => {
    const [phase, setPhase] = useState({});
    const [ctx, setCtx] = useState();
    // console.log('dff', ctx)
    const { drawBomb, drawGorilla, drawBuildings, drawBackground } = useDrawings();
    const initializeBombPosition = () => {

    };
    const draw = (ctx) => {
        ctx.save();
        ctx.translate(0, window.innerHeight);
        ctx.scale(1, -1);
        drawBackground(ctx)
        drawBuildings();
        drawGorilla(1);
        drawGorilla(2);
        drawBomb();
        ctx.restore();
    }
    const newGame = () => {
        setPhase(
            {
                phase: "aiming",
                currentPlayer: 1,
                bomb: {
                    x: undefined,
                    y: undefined,
                    velocity: { x: 0, y: 0 }
                },
                buildings: generateBuildings(),
            }
        );
        initializeBombPosition();
        draw(ctx);
        console.log('ct', ctx);
    }
    return (
        <div>
            <Canva draw={draw} setCtx={setCtx}></Canva>
        </div>
    );
};

export default GameMainPage;