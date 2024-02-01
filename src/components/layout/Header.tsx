import { useEffect, useState } from 'react';
import { GlobalObj } from '../shared/GlobalObj';
import useMediaQuery from '../shared/hooks/useMediaQuery';
import { MenuIcon } from '../shared/Icons';
import MobileMenu from './MobileMenu';

const Header = () => {
  const { header } = GlobalObj;
  const { logo } = GlobalObj;
  const isAboveMd = useMediaQuery('(min-width: 768px)');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    isAboveMd && setOpen(false);
  }, [isAboveMd]);

  return (
    <div className="flex justify-between items-center gap-5 w-full">
      <img src={logo} alt="logo" />
      <nav>
        {isAboveMd ? (
          <ul className="flex gap-10 text-lg text-dark-gray-blue ">
            {header.map((item) => (
              <li className="cursor-pointer hover:text-soft-red" key={item}>
                {item}
              </li>
            ))}
          </ul>
        ) : (
          <span onClick={() => setOpen(true)}>
            <MenuIcon />
          </span>
        )}
      </nav>
      {!isAboveMd && <MobileMenu open={open} setOpen={setOpen} />}
    </div>
  );
};

export default Header;
