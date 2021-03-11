import './Card.css'
import React from 'react'

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {

    var i = 0;
    function move() {
        if (i === 0) {
            i = 1;
            var elem = document.getElementById("myBar");
            console.log("RIO: ", elem)
            var width = 1;
            var id = setInterval(frame, 10);
            function frame() {
                /*encher barra até 100% */
                if (width >= 100) {
                    clearInterval(id);
                    i = 0;
                }
                else {
                    width++;
                    elem.style.width = width + "%";
                }
            }
        }
    }

    const cardStyle = {
        backgroundColor: props.cor || '#F00',
        borderColor: props.cor || '#F00'
    }

    return (
        <div className="Card" style={cardStyle}>
            <div className="Title"> {props.titulo} </div>
            <div className="Content">
                {props.children}
            </div>
            <div id="myProgress">
                <div id="myBar"></div>
            </div>
            {/* <button onClick={move()}>Refresh</button> */}
        </div>
    )
}