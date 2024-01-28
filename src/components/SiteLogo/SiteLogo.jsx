import anubis from './assets/anubis.png'

function SiteLogo() {
  return (
    <>
      <a href="/">
        <img className="h-[50px]" src={anubis} alt="" />
      </a>
    </>
  );
}

export default SiteLogo