import './styles/css/styles.css';
import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ThemesOptions from './components/ThemesOptions';
import ThemeClasses from './components/classComponents/ThemeClasses';

function App() {
  const [themeSelected, setThemeSelected] = useState('blue');

  const themes = [
    {
      id: 1,
      themeName: 'Blue',
      themeValue: 'blue',
      themeClasses: {
        id: 11,
        btnColor: '#4682b4',
        ffDef: 'Montserrat, sans-serif',
        ffStyled: 'Alfa Slab One, cursive',
        ffAccent: 'The Nautigal, cursive',
      },
    },
    {
      id: 2,
      themeName: 'Orange',
      themeValue: 'orange',
      themeClasses: {
        id: 12,
        btnColor: '#fd7e14',
        ffDef: 'Montserrat, sans-serif',
        ffStyled: 'Balsamiq Sans, cursive',
        ffAccent: 'Moon Dance, cursive',
      },
    },
    {
      id: 3,
      themeName: 'Teal',
      themeValue: 'teal',
      themeClasses: {
        id: 13,
        btnColor: '#008080',
        ffDef: 'Comfortaa, cursive',
        ffStyled: 'Ranchers, cursive',
        ffAccent: 'Licorice, cursive',
      },
    },
  ];

  let themeValue = themes.find(
    (th) => th.themeValue === themeSelected
  ).themeValue;

  const handleThemeChange = (e) => {
    const { value } = e.target;
    setThemeSelected(value);
  };

  return (
    <>
      <div
        data-theme={themeValue}
        id='appWrapper'
        className='appWrapper bgLight'>
        <Header />

        <div className='mainWrapper'>
          <main>
            <section className='pb2 bdBottom'>
              <ThemesOptions
                themes={themes}
                handleThemeChange={handleThemeChange}
              />
            </section>

            <ThemeClasses themes={themes} themeSelected={themeSelected} />
          </main>
        </div>

        <Footer />
      </div>
    </>
  );
}

export default App;
