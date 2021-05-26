import './../../css/navbar.css';
import Links from './links/Links';
function NavBar() {
  const userLinksConnected = [
    { name: 'About', path: '/about' },
    { name: 'Home', path: '/' },
    { name: 'Login', path: '/login' },
    { name: 'Register', path: '/register' },
  ];
  const userLinksNotConnected = ['Home', 'Login', 'Register', 'About'];

  return (
    <header>
      <nav className="navbar" style={navBarStyle}>
        <div>
          {/* icon here */}

          <h1 style={h1Style}>
            <i class="fas fa-id-card-alt" style={{ marginRight: '10px' }}></i>{' '}
            Track Contact
          </h1>
        </div>
        {/*  import Links Componenet */}
        <Links
          connected={userLinksConnected}
          notConnected={undefined}
          name={'Youssra'}
          isOk={false}
          n={1234}
        />
      </nav>
    </header>
  );
}

const navBarStyle = {
  padding: '0.6rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  backgroundColor: '#003699',
  color: 'white',
  fontFamily: 'Roboto, sans-serif',
};

const h1Style = {
  fontSize: '2rem',
};

export default NavBar;
