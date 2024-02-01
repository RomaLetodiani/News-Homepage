import News from '../News';
import Topics from '../Topics';
import { GlobalObj } from '../shared/GlobalObj';
import useMediaQuery from '../shared/hooks/useMediaQuery';

const Hero = () => {
  const { hero } = GlobalObj;
  const isAboveMd = useMediaQuery('(min-width: 768px)');
  return (
    <div>
      <div className="flex flex-col lg:flex-row x gap-8 justify-between my-10">
        <div className="flex flex-col gap-5 flex-[2]">
          <div>
            <img
              className="w-full object-cover h-full"
              src={isAboveMd ? hero.mainBanner.desktop : hero.mainBanner.mobile}
              alt={hero.mainBanner.alt}
            />
          </div>
          <div className="flex flex-col md:flex-row gap-5 md:gap-10">
            <h1 className="text-very-dark-blue font-bold text-[clamp(3rem,5vw,4rem)] font-sans leading-[4rem] flex-1">
              {hero.title}
            </h1>
            <div className="flex-1 flex flex-col items-start gap-5 md:gap-10">
              <p className="text-dark-gray-blue">{hero.desc}</p>
              <button className="text-off-white px-12 py-3 text-lg bg-soft-red hover:bg-very-dark-blue">
                {hero.button}
              </button>
            </div>
          </div>
        </div>
        <News {...hero.news} />
      </div>
      <Topics topics={hero.topics} />
    </div>
  );
};

export default Hero;
