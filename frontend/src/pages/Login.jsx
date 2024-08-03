import loginImg from "../assets/login.jpeg"
import Template from "../Components/Auth/Template"

function Login() {
  return (
    <Template
      title="Welcome Back"
      description1="Empower yourself to make a difference. Join us in creating a brighter future through food donation and volunteering. "
      description2="Let's build a community that cares, today and tomorrow."
      image={loginImg}
      formType="login"
    />
  )
}

export default Login