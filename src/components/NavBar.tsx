import Logo from './Logo';

const NavBar: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div>
      <nav className='nav-bar'>
        <Logo />
        {children}
      </nav>
    </div>
  );
};

export default NavBar;
