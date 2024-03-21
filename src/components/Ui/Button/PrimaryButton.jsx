import { Link } from "react-router-dom";

function PrimaryButton({buttonText, href}) {
  
  return (

    <Link to={href} className="text-white bg-purple hover:text-white hover:bg-pink focus:ring-4 focus:outline-none focus:ring-blue font-medium rounded-lg text-sm px-5 py-2.5 text-center">
       {buttonText}
    </Link>

  );
}

export default PrimaryButton;
