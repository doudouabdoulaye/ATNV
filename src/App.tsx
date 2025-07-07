import Features from './components/Features';
import Hero from './components/Hero';
import MainLayout from './Layouts/MainLayouts';

function App() {
  return (
    <div>
    <MainLayout>
      <Hero />
      <Features/>
    </MainLayout>
    </div>
  );

}
export default App;
