import './InfoRight.css'
const InfoRight = ({ velocityAngle }) => {
    const { rightAngle, rightVelocity } = velocityAngle;
    return (
        <div className="infoRight">
            <h3> Player 2</h3>
            <p>Angle:<span className="angle">{rightAngle}</span>°</p>
            <p>Velocity:<span className="velocity">{rightVelocity}</span></p>
        </div>
    );
};

export default InfoRight;