import './InfoLeft.css'
const InfoLeft = ({ velocityAngle: { leftAngle, leftVelocity } }) => {
    return (
        <div className="infoLeft">
            <h3> Player 1</h3>
            <p>Angle:<span className="angle">{leftAngle}</span>°</p>
            <p>Velocity:<span className="velocity">{leftVelocity}</span></p>
        </div>
    );
};

export default InfoLeft;