import { useEffect, useRef } from "react";
import './Canva.css'

const Canva = ({ draw, setCtx, newGame, }) => {
    const canvasRef = useRef(null);
    useEffect(() => {

        const canvas = canvasRef.current;
        if (canvas) {
            // console.log(canvas)
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            // 
            const ctx = canvas.getContext("2d");
            ctx.save();
            ctx.translate(0, window.innerHeight);
            ctx.scale(1, -1);
            // ctx.scale(ctx.scale, ctx.scale);

            // console.log(ctx, "g");
            setCtx(ctx);
            newGame(ctx);
            // draw(ctx);


            // ctx.fillStyle = "#58A8D8";
            // ctx.fillRect(200, 200, 440, 320);
            // ctx.beginPath();
            // ctx.moveTo(200, 200);
            // ctx.lineTo(500, 350);
            // ctx.lineTo(200, 500);
            // ctx.fill();
            // ctx.fillRect(200, 200, 440, 320);





        }


    }, [])

    return (
        <div>


            <canvas className="canva" ref={canvasRef}>

            </canvas>

        </div>

    );
};

export default Canva;