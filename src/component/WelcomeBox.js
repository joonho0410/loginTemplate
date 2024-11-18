import backgroundImg from "../assets/background.png"
import profileImg from "../assets/profileImage.png"

const WelcomeBox = () => {
    return (
        <div style={{position: "relative"}}>
            <img src={backgroundImg} height={215} style={{width:"100%", display: "block", textAlign: "center"}}></img>
            <span style={{position: "relative"}}>
                <img style={{position:"absolute", top: "-52px", margin: "0 24px"}}src={profileImg} width={104} height={104}/>
                <span style={{position:"relative", left:"152px", fontSize: '20px', whiteSpace: "no-wrap"}}>Welcome back, <b style={{color: "red"}}>Robert</b> </span>
            </span>
        </div>
    )
}

export default WelcomeBox