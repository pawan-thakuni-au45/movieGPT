  const validate=(email,password)=>{
      const isEmailValid= /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-]+)(\.[a-zA-Z]{2,5}){1,2}$/.test(email)
      if(!isEmailValid) return "Email ID is not Valid"
      const isPasswordValid=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password)

      
      if(!isPasswordValid) return "Password is not Valid"

      return null
  }
  export default validate