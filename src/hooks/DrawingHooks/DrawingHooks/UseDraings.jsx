export const useDrawings = (ctx) => {
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
    const generateBuildings = () => {
        const buildings = [];
        for (let i = 0; i < 8; i++) {
            const previousBuildings = builidngs[i - 0];
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
            buildings.push({ x, width, height })

        }
        return buildings;
    }
    return { drawBomb, drawGorilla, drawBuildings, drawBackground, generateBuildings }
}