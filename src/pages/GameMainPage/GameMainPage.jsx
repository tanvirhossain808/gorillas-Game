import { useEffect, useState, usephase } from "react";
import Canva from "../../components/Canva/Canva";
import { useDrawings } from "../../hooks/DrawingHooks/DrawingHooks/UseDraings";

const GameMainPage = () => {
    const { drawBomb, drawGorilla, drawBuildings, drawBackground, generateBuildings } = useDrawings();
    const [phase, setPhase] = useState({
        phase: "aiming",
        currentPlayer: 1,
        bomb: {
            x: undefined,
            y: undefined,
            velocity: { x: 0, y: 0 }
        },
        buildings: generateBuildings(),
    });
    // console.log(phase)
    const [ctx, setCtx] = useState();
    // console.log('dff', ctx)
    function initializeBombPosition() {
        const building =
            phase.currentPlayer === 1
                ? phase.buildings.at(1) // Second building
                : phase.buildings.at(-2); // Second last building

        const gorillaX = building.x + building.width / 2;
        const gorillaY = building.height;

        const gorillaHandOffsetX = phase.currentPlayer === 1 ? -28 : 28;
        const gorillaHandOffsetY = 107;

        phase.bomb.x = gorillaX + gorillaHandOffsetX;
        phase.bomb.y = gorillaY + gorillaHandOffsetY;
        phase.bomb.velocity.x = 0;
        phase.bomb.velocity.y = 0;
    }


    useEffect(() => {
        if (ctx) {
            draw(ctx);
            initializeBombPosition();
        }

    }, [phase])

    const newGame = (ctx) => {
        setPhase({
            phase: "aiming",
            currentPlayer: 1,
            bomb: {
                x: undefined,
                y: undefined,
                velocity: { x: 0, y: 0 }
            },
            buildings: generateBuildings(),
        })
        console.log(ctx)
        // setPhase(
        //     {
        //         phase: "aiming",
        //         currentPlayer: 1,
        //         bomb: {
        //             x: undefined,
        //             y: undefined,
        //             velocity: { x: 0, y: 0 }
        //         },
        //         buildings: generateBuildings(),
        //     }
        // );
        console.log(phase.buildings)
        // phase.buildings.forEach(building => {
        //     ctx.fillStyle = "#152A47";
        //     ctx.fillRect(building.x, 0, building.width, building.height);
        //     ctx.translate(0, window.innerHeight);
        //     ctx.scale(1, -1);

        // })

        // initializeBombPosition();
        setCtx(ctx)
        // draw(ctx);
        // console.log('ct', ctx);
    };

    const draw = (ctx) => {
        // ctx.save();

        // ctx.translate(0, window.innerHeight);
        // ctx.scale(-1, 1);
        // ctx.translate(0, window.innerHeight);
        // ctx.scale(1, -1);
        drawBackground(ctx)
        drawBuildings(phase.buildings, ctx);

        drawGorilla(1, phase, ctx);
        drawGorilla(2, phase, ctx);
        drawBomb();

        ctx.restore();

        // newGame();
    };

    return (
        <div>
            <Canva draw={draw} setCtx={setCtx} newGame={newGame}></Canva>
        </div>
    );
};

export default GameMainPage;