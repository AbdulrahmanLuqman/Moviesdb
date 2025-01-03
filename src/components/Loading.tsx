import Logo from "../assets/logo.webp"

const Loading = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
        <img src={Logo} alt="" className="animate-bounce" />
    </div>
  )
}

export default Loading