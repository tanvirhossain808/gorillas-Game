import { drawGorillaBody, drawGorillaFace, drawGorillaLeftArm, drawGorillaRightArm } from "../../../utiliteis/drawingGorillas";

export const useDrawings = (ctx) => {
    const drawBackground = (ctx, phase) => {
        ctx.fillStyle = "#58A8D8";
        // ctx.fillRect(0, 0, window.innerWidth / phase.scale, window.innerHeight / phase.scale);
        ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);


    };
    const drawBuildings = (buildings, ctx) => {
        buildings.forEach(building => {
            ctx.fillStyle = "#152A47";
            ctx.fillRect(building.x, 0, building.width, building.height);
            // ctx.translate(0, window.innerHeight);
            // ctx.scale(1, -1);
        });
    }
    const drawGorilla = (player, phase, ctx) => {
        ctx.save();
        const building = player === 1 ? phase.buildings.at(1) : phase.buildings.at(-2);
        ctx.translate(building.x + building.width / 2, building.height);
        drawGorillaBody(ctx);
        drawGorillaLeftArm(player, phase, ctx);
        drawGorillaRightArm(player, phase, ctx);
        drawGorillaFace(player, phase, ctx);

        ctx.restore();
    };
    const drawBomb = (phase, ctx) => {
        if (phase.phase === "aiming") {
            ctx.strokeStyle = "rgba(255, 255, 255, 0.7)";
            ctx.setLineDash([3, 8]);
            ctx.lineWidth = 3;

            ctx.beginPath();
            ctx.moveTo(phase.bomb.x, phase.bomb.y);
            ctx.lineTo(
                phase.bomb.x + phase.bomb.velocity.x,
                phase.bomb.y + phase.bomb.velocity.y
            );
            ctx.stroke();
        }


        ctx.fillStyle = "white";
        ctx.beginPath();
        ctx.arc(phase.bomb.x, phase.bomb.y, 6, 0, 2 * Math.PI);
        ctx.fill();
    };
    const generateBuildings = () => {
        const bulidngs = [];
        for (let i = 0; i < 8; i++) {
            const previousBuildings = bulidngs[i - 1];
            const x = previousBuildings ? previousBuildings.x + previousBuildings.width + 4 : 0;
            const minWidth = 80;
            const maxWidth = 130;
            const width = minWidth + Math.random() * (maxWidth - minWidth);
            const platfromWithGorila = i === 1 || i === 6;
            const minHeight = 40;
            const maxHeight = 300;
            const minHeightWithGorila = 30;
            const maxHeightWithGorila = 150;
            const height = platfromWithGorila ? minHeightWithGorila + Math.random() * (maxHeightWithGorila - minHeightWithGorila) : minHeight + Math.random() * (maxHeight - minHeight);
            bulidngs.push({ x, width, height })

        }
        return bulidngs;
    }
    const calculateScale = (phase) => {
        const lastBuilding = phase.buildings.at(-1);

        const totalWidthOfTheCity = lastBuilding.x + lastBuilding.width;

        phase.scale = window.innerWidth / totalWidthOfTheCity;
    }
    const setInfo = (deltaX, deltaY, phase, setVelocityAngle, velocityAngle) => {
        const hypotenuse = Math.sqrt(deltaX ** 2 + deltaY ** 2);
        const angleInRadians = Math.round(Math.asin(deltaY / hypotenuse));
        const angleInDegrees = Math.round((angleInRadians / Math.PI) * 180);
        // { leftVelocity: 0, leftAngle: 0, rightVelocity: 0, rightAngle: 0 }
        if (phase.currentPlayer === 1) {
            setVelocityAngle({ ...velocityAngle, leftAngle: angleInDegrees, leftVelocity: angleInRadians })
        } else {

            setVelocityAngle({ ...velocityAngle, rightVelocity: angleInRadians, rightAngle: angleInDegrees })
        }
        console.log(velocityAngle, 'velocityAngle');
    }
    const throwBomb = (phasePosition, setPreviousAnimationTimestamp, setPhase) => {
        setPhase({
            ...phasePosition, phase: "in flight"
        });
        setPreviousAnimationTimestamp(undefined);
        // requestAnimationFrame(animate);
    }
    return { drawBomb, drawGorilla, drawBuildings, drawBackground, generateBuildings, calculateScale, setInfo, throwBomb }
}