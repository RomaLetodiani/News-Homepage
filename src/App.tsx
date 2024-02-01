import Header from './components/layout/Header';
import Hero from './components/layout/Hero';

const App = () => {
  return (
    <div className="bg-off-white flex justify-center items-center min-h-screen min-w-[280px] p-5">
      <div className="max-w-[1150px] w-full">
        <Header />
        <Hero />
      </div>
    </div>
  );
};

export default App;
