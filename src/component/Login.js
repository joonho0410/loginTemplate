import WelcomeBox from "./WelcomeBox"
import LoginForm from "./LoginForm"
import Miss from "./Miss"

const Login = () => {
    return (
        <div style={{display:"flex", flexDirection:"column", boxSizing:"border-box", width :"502px", height: "auto", backgroundColor:"#C6D1DC", borderRadius:"16px", padding:"24px 24px", color:"black", gap:"24px"}}>
            <WelcomeBox/>
            <LoginForm/>
            <Miss/>
        </div>
    )
}

export default Login