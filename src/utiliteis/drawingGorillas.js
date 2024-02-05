export function drawGorillaBody(ctx) {
    ctx.fillStyle = "black";

    ctx.beginPath();

    // Starting Position
    ctx.moveTo(0, 15);

    // Left Leg
    ctx.lineTo(-7, 0);
    ctx.lineTo(-20, 0);

    // Main Body
    ctx.lineTo(-13, 77);
    ctx.lineTo(0, 84);
    ctx.lineTo(13, 77);

    // Right Leg
    ctx.lineTo(20, 0);
    ctx.lineTo(7, 0);

    ctx.fill();
}

export function drawGorillaLeftArm(player, phase, ctx) {
    ctx.strokeStyle = "black";
    ctx.lineWidth = 18;

    ctx.beginPath();
    ctx.moveTo(-13, 50);

    if (
        (phase.phase === "aiming" && phase.currentPlayer === 1 && player === 1) ||
        (phase.phase === "celebrating" && phase.currentPlayer === player)
    ) {
        ctx.quadraticCurveTo(-44, 63, -28, 107);
    } else {
        ctx.quadraticCurveTo(-44, 45, -28, 12);
    }

    ctx.stroke();
}

export function drawGorillaRightArm(player, phase, ctx) {
    ctx.strokeStyle = "black";
    ctx.lineWidth = 18;

    ctx.beginPath();
    ctx.moveTo(+13, 50);

    if (
        (phase.phase === "aiming" && phase.currentPlayer === 2 && player === 2) ||
        (phase.phase === "celebrating" && phase.currentPlayer === player)
    ) {
        ctx.quadraticCurveTo(+44, 63, +28, 107);
    } else {
        ctx.quadraticCurveTo(+44, 45, +28, 12);
    }

    ctx.stroke();
}

export function drawGorillaFace() {
    // ...
}