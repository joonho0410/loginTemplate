const Miss = () => {
    return (
       <div style={{display:"flex", flexDirection:"column", gap:"24px", textAlign:"center"}}>
        <span style={{display: "inline-block", fontSize:"16px"}}><b>I'm not Robert</b></span>
        <div style={{display: "flex", gap:"24px"}}>
            <button style={{padding:"16px 16px", width:"100%", backgroundColor:"#1F2832", border:"none", borderRadius:"8px", color:"white", fontSize:"16px"}} type="button"><b>Login as new user</b></button>
            <button style={{padding:"16px 16px", width:"100%", backgroundColor:"white", border:"1px solid #D90327", borderRadius:"8px", color:"#D90327", fontSize:"16px"}} type="button"><b>Sign up</b></button>
        </div>
       </div> 
    )
}

export default Miss