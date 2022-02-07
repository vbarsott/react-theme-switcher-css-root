import Borders from './Borders';
import Breakpoints from './Breakpoints';
import FontFamilies from './FontFamilies';
import FontSizes from './FontSizes';
import FontWeights from './FontWeights';
import Grid from './Grid';
import LetterSpacing from './LetterSpacing';
import LineHeight from './LineHeight';
import Spacing from './Spacing';
import ThemeColors from './ThemeColors';

const ThemeClasses = ({ themes, themeSelected }) => {
  let theme = themes.find((th) => themeSelected === th.themeValue);

  return (
    <>
      <section className='py2 bdBottom'>
        <ThemeColors />
      </section>

      <section className='py2 bdBottom'>
        <FontFamilies theme={theme} />
      </section>

      <section className='py2 bdBottom'>
        <FontSizes />
      </section>

      <section className='py2 bdBottom'>
        <FontWeights />
      </section>

      <section className='py2 bdBottom'>
        <LetterSpacing />
      </section>

      <section className='py2 bdBottom'>
        <LineHeight />
      </section>

      <section className='py2 bdBottom'>
        <Spacing />
      </section>

      <section className='py2 bdBottom'>
        <Borders />
      </section>

      <section className='py2 bdBottom'>
        <Breakpoints />
      </section>

      <section className='py2 bdBottom'>
        <Grid />
      </section>
    </>
  );
};

export default ThemeClasses;
