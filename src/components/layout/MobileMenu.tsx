import { GlobalObj } from '../shared/GlobalObj';
import { MenuIconClose } from '../shared/Icons';

type Props = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

const MobileMenu = (props: Props) => {
  const { header } = GlobalObj;
  return (
    <>
      <span
        className={`bg-black fixed top-0 bottom-0 transition-all duration-300 ease-in-out opacity-30 z-20 h-full w-1/3 pointer-events-none ${
          props.open ? 'left-0' : '-left-full'
        }`}
      ></span>

      <div
        className={`fixed w-2/3 transition-all duration-300 ease-in-out h-full bg-white z-30 flex flex-col gap-24 ${
          props.open ? 'right-0' : '-right-full'
        } top-0 bottom-0 p-5`}
      >
        <button className="self-end" onClick={() => props.setOpen(false)}>
          <MenuIconClose />
        </button>
        <div>
          <ul className="flex flex-col gap-8 text-lg from-neutral-600 text-very-dark-blue ">
            {header.map((item) => (
              <li className="hover:text-soft-red" key={item}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
