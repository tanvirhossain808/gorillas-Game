import './InfoLeft.css'
const InfoLeft = () => {
    return (
        <div className="infoLeft">
            <h3> Player 1</h3>
            <p>Angle:<span className="angle">0</span>°</p>
            <p>Velocity:<span className="velocity">0</span></p>
        </div>
    );
};

export default InfoLeft;