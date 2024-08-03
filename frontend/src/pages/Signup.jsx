import signupImg from "../assets/signup.png"
import Template from "../Components/Auth/Template"

function Signup() {
  return (
    <Template
      title="Join the Community of Change-Makers at Feed Forward for Free"
      description1="Develop skills to make a real impact."
      description2="Let's create a world where no one goes hungry."
      image={signupImg}
      formType="signup"
    />
  )
}

export default Signup;