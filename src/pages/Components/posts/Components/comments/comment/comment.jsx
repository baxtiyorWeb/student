import React from "react"
// import io from "socket.io-client"




const Comment = ()=>{
    // const conntectSocket = ()=>{
    //    io("http://localhost:9999")
    // }

    return(
        <div className="posts">
            <div className="your-comment">
                <div className="you-about">
                {/*<button onClick={conntectSocket}>connect</button>*/}
                    <img src="" alt="" className="user-img"/>
                    <span className="user-name">Baxtiyor Qurbonnazarov</span>
                </div>
                <p>Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit. A ad animi est ipsa
                    laborum laudantium magni modi, molestiae numquam
                    quo!</p>
                <span className="date-time-comment">23-1-2023</span>
            </div>
            <div className="user-comment">
                <div className="user-about">
                        <img src="" alt="" className="user-img"/>
                        <span className="user-name">Baxtiyor Qurbonnazarov</span>
                    </div>
                    <p>Lorem ipsum dolor sit amet,
                        consectetur adipisicing elit. A ad animi est ipsa
                        laborum laudantium magni modi, molestiae numquam
                        quo!</p>
                    <span className="date-time-comment">23-1-2023</span>
          </div>
        </div>
    )
}
export default Comment