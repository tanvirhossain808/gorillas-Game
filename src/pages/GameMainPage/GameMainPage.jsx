import './GameMainPage.css'
import { useEffect, useState, usephase } from "react";
import Canva from "../../components/Canva/Canva";
import { useDrawings } from "../../hooks/DrawingHooks/DrawingHooks/UseDraings";
import InfoLeft from "../../components/InfoLeft/InfoLeft";
import InfoRight from "../../components/InfoRight/InfoRight";

const GameMainPage = () => {
    const [leftPosition, setLeftPosition] = useState(0);
    const [bottomPosition, setBottomPostion] = useState(0);
    const [draggingPhase, setDraggingPhase] = useState({
        isDragging: false,
        dragStartX: undefined,
        dragStartY: undefined

    })

    const { drawBomb, drawGorilla, drawBuildings, drawBackground, generateBuildings, calculateScale } = useDrawings();
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
        const grabAreaRadius = 25;
        // const left = phase.bomb.x * phase.scale - grabAreaRadius;
        // const bottom = phase.bomb.y * phase.scale - grabAreaRadius;
        const left = phase.bomb.x - grabAreaRadius;
        const bottom = phase.bomb.y - grabAreaRadius;
        setLeftPosition(left);
        setBottomPostion(bottom);

    }
    console.log(phase)
    console.log(leftPosition, 'left')
    useEffect(() => {
        if (ctx) {
            calculateScale(phase);
            initializeBombPosition();
            draw(ctx);
            console.log(phase, 'f')
        }

    }, [phase])

    const newGame = (ctx) => {
        setPhase({
            phase: "aiming",
            scale: 1,
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
    const handleMouseDown = (e) => {
        if (phase.phase === "aiming") {
            setDraggingPhase({
                isDragging: true,
                dragStartX: e.clientX,
                dragStartY: e.clientY
            })
            console.log(draggingPhase.dragStartX)

        }
    }
    const draw = (ctx) => {
        // ctx.save();

        // ctx.translate(0, window.innerHeight);
        // ctx.scale(-1, 1);
        // ctx.translate(0, window.innerHeight);
        // ctx.scale(1, -1);
        drawBackground(ctx, phase)
        drawBuildings(phase.buildings, ctx);

        drawGorilla(1, phase, ctx);
        drawGorilla(2, phase, ctx);
        drawBomb(phase, ctx);

        ctx.restore();

        // newGame();
        console.log(leftPosition, 'd')
    };
    const handleMouseMove = (e) => {
        const { isDragging, dragStartX, dragStartY } = draggingPhase
        if (isDragging) {
            let deltaX = e.clientX - dragStartX;
            let deltaY = e.clientY - dragStartY;

            phase.bomb.velocity.x = -deltaX;
            phase.bomb.velocity.y = +deltaY;
            // setInfo(deltaX, deltaY);
            ctx.save();
            ctx.translate(0, window.innerHeight);
            ctx.scale(1, -1);
            // ctx.scale(ctx.
            draw(ctx);
        }
    }
    return (
        <div>
            <Canva draw={draw} setCtx={setCtx} newGame={newGame}></Canva>

            <InfoLeft></InfoLeft>
            <InfoRight></InfoRight>


            <div onMouseMove={handleMouseMove} onMouseDown={(e) => handleMouseDown(e)} className="bombGrabArea" style={{ left: `${leftPosition}px`, bottom: `${bottomPosition}px`, cursor: draggingPhase.isDragging ? 'grabbing' : 'grab', }}>
            </div>
        </div >
    );
};

export default GameMainPage;