import Topic from './Topic';

type Props = {
  topics: {
    id: number;
    title: string;
    desc: string;
    img: { link: string; alt: string };
  }[];
};

const Topics = (props: Props) => {
  return (
    <div className="flex flex-col md:flex-row gap-8 justify-center">
      {props.topics.map((topic) => (
        <Topic key={topic.id} {...topic} />
      ))}
    </div>
  );
};

export default Topics;
