import { useDispatch } from 'react-redux';
import css from './UserMenu.module.css';
import { selectUser } from 'redux/selectors';
import { useSelector } from 'react-redux';
import { logOut } from 'redux/operations';

export const UserMenu = () => {
  const dispatch = useDispatch();

  const user = useSelector(selectUser);

  return (
    <div className={css.wrapper}>
      <p className={css.username}>{user.email}</p>
      <button
        className={css.btn}
        type="button"
        onClick={() => dispatch(logOut())}
      >
        Logout
      </button>
    </div>
  );
};
