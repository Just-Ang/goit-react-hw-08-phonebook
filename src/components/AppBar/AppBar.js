 import { Navigation } from '..//Navigation/Navigaion';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import css from './AppBar.module.css';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/selectors';

 const AppBar = () => {

    const isLoggedIn = useSelector(selectIsLoggedIn);


  return (
    <header className={css.header}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};

export default AppBar