type Props = { title: string; desc: string; index: number };

const New = (props: Props) => {
  return (
    <div
      className={`${
        props.index === 1 &&
        'border-y-2 md:border-y-0 md:border-x-2 lg:border-y-2 lg:border-x-0 border-grayish-blue py-10 my-10 md:my-0 md:mx-5 lg:mx-0 md:py-0 md:px-5 lg:px-0 lg:py-10'
      }`}
    >
      <h4 className="text-off-white hover:text-soft-orange text-xl font-semibold">
        {props.title}
      </h4>
      <p className="text-off-white opacity-85 leading-5 mt-2">{props.desc}</p>
    </div>
  );
};

export default New;
