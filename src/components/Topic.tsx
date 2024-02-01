type Props = {
  img: {
    link: string;
    alt: string;
  };
  id: number;
  title: string;
  desc: string;
};

const Topic = (props: Props) => {
  return (
    <div className="flex gap-5 flex-1 max-h-40">
      <div className="w-1/3">
        <img
          className="w-full object-cover h-full"
          src={props.img.link}
          alt={props.img.alt}
        />
      </div>
      <div className="w-2/3 flex flex-col justify-between">
        <h3 className="text-dark-gray-blue text-3xl md:text-[clamp(1.5rem,2.5vw,2.5rem)] leading-7 font-black opacity-50">
          0{props.id}
        </h3>
        <h4 className="text-very-dark-blue hover:text-soft-red text-lg md:text-[clamp(1rem,1.5vw,1.3rem)] font-bold">
          {props.title}
        </h4>
        <p className="text-dark-gray-blue tracking-wider leading-relaxed">
          {props.desc}
        </p>
      </div>
    </div>
  );
};

export default Topic;
