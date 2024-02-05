export const useDrawings = () => {
    const drawBackground = (ctx) => {
        ctx.fillStyle = "#58A8D8";
        ctx.fillRect(0, 0, window.innerWidth, window.innerHeight)
    };
    const drawBuildings = () => {

    };
    const drawGorilla = () => {

    };
    const drawBomb = () => {

    };
    return { drawBomb, drawGorilla, drawBuildings, drawBackground }
}