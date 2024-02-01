import New from './New';

type Props = {
  title: string;
  items: {
    title: string;
    desc: string;
  }[];
};

const News = (props: Props) => {
  return (
    <div className="flex-1 lg:max-w-[379px] bg-very-dark-blue p-8 flex flex-col">
      <h2 className="text-4xl mb-5 font-semibold text-soft-orange">
        {props.title}
      </h2>
      <div className="flex-1 flex flex-col md:flex-row lg:flex-col justify-between">
        {props.items.map((item, index) => (
          <New
            index={index}
            key={item.title}
            title={item.title}
            desc={item.desc}
          />
        ))}
      </div>
    </div>
  );
};

export default News;
