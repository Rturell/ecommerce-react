function PrimaryButton({buttonText, href}) {
  return (
    <a
      href={href}
      className="text-white bg-purple hover:text-white hover:bg-pink focus:ring-4 focus:outline-none focus:ring-blue font-medium rounded-lg text-sm px-5 py-2.5 text-center"
    >
      {buttonText}
    </a>
  );
}

export default PrimaryButton;
