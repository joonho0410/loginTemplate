const LoginForm = () => {
    return (
        <form style={{display:"flex", flexDirection:"column", gap:"24px"}}>
            <div style={{display: "flex", flexDirection:"column", gap:"8px"}}>
                <label style={{fontSize:"16px"}}> <b>Email</b> </label>
                <input style={{padding:"16px 16px", fontSize:"16px", borderRadius:"8px", border:"1px solid #C6D1DC"}} type="text" placeholder="robert@email.com"/>
            </div>
            <div style={{display: "flex", flexDirection:"column", gap:"8px"}}>
                <label style={{fontSize:"16px"}}> <b>password</b> </label>
                <input style={{padding:"16px 16px", fontSize:"16px", borderRadius:"8px", border:"1px solid #C6D1DC", }} type="password"/>
            </div>
            <span style={{display: "flex", justifyContent:"space-between", fontSize: "16px"}}>
                <span style ={{left: "0px"}}>
                    <input type="checkbox"/> 
                    <span>Remember me</span>
                </span>
                <span style ={{right: "0px", textDecoration:"underline"}}>Forgot password?</span>
            </span>
            <button style={{padding:"16px 16px", backgroundColor:"#D90327", color:"white", borderRadius:"8px", border:"none", fontSize:"16px"}}type="submit"> <b>Login</b> </button>
        </form>
    )
}

export default LoginForm