import React from 'react';

const ThemeColors = () => {
  const themeColors = [
    {
      id: 104,
      classTitle: 'primary',
      classColor: 'primary',
      classBg: 'bgPrimary',
    },
    {
      id: 105,
      classTitle: 'secondary',
      classColor: 'secondary',
      classBg: 'bgSecondary',
    },
    {
      id: 106,
      classTitle: 'tertiary',
      classColor: 'tertiary',
      classBg: 'bgTertiary',
    },
    {
      id: 107,
      classTitle: 'accent',
      classColor: 'accent',
      classBg: 'bgAccent',
    },
    {
      id: 108,
      classTitle: 'dark',
      classColor: 'dark',
      classBg: 'bgDark',
    },
    {
      id: 109,
      classTitle: 'success',
      classColor: 'success',
      classBg: 'bgSuccess',
    },
    {
      id: 110,
      classTitle: 'info',
      classColor: 'info',
      classBg: 'bgInfo',
    },
    {
      id: 111,
      classTitle: 'warning',
      classColor: 'warning',
      classBg: 'bgWarning',
    },
    {
      id: 112,
      classTitle: 'danger',
      classColor: 'danger',
      classBg: 'bgDanger',
    },
    {
      id: 113,
      classTitle: 'error',
      classColor: 'error',
      classBg: 'bgError',
    },
  ];

  return (
    <>
      <div className='containerFluidSM containerSM-lg'>
        <div className='sectionTitle ffStyled primary'>
          <h5 className='fsH5 pb2'>Theme Colors</h5>
        </div>

        <div className='row ffStyled fwBold primary mb1'>
          <div className='col5 col4-xs col3-sm'>Classes</div>
          <div className='col7 col4-xs col4-sm'>Appearance</div>
        </div>

        <div className='row alignCenter'>
          <div className='col5 col4-xs col3-sm'>
            <p className='fsSM fwBold'>.themeBg:</p>
          </div>
          <div className='col7 col4-xs col4-sm'>
            <div className='border fsXS p1 light textCenter themeBg'>
              themeBg
            </div>
          </div>
        </div>

        <div className='row alignCenter'>
          <div className='col5 col4-xs col3-sm'>
            <p className='fsSM fwBold'>.textColor:</p>
          </div>
          <div className='col7 col4-xs col4-sm'>
            <div className='border fsXS p1 bgLight textCenter'>textColor</div>
          </div>
        </div>

        <div className='row alignCenter'>
          <div className='col5 col4-xs col3-sm'>
            <p className='fsSM fwBold'>.strokeColor:</p>
          </div>
          <div className='col7 col4-xs col4-sm'>
            <div className='border fsXS p1 bgLight strokeColor textCenter'>
              strokeColor
            </div>
          </div>
        </div>

        <div className='row alignCenter'>
          <div className='col5 col4-xs col3-sm'>
            <p className='fsSM fwBold'>.borderColor:</p>
          </div>
          <div className='col7 col4-xs col4-sm'>
            <div className='border fsXS p1 bgLight borderColor textCenter'>
              borderColor
            </div>
          </div>
        </div>

        {themeColors.map((tc) => (
          <div key={tc.id} className='row alignCenter'>
            <div className='col5 col4-xs col3-sm'>
              <p className={`fsSM fwBold ${tc.classColor}`}>
                .{tc.classTitle}:
              </p>
            </div>

            <div className='col3 col4-xs col4-sm'>
              <div className={`fsXS border p1 light textCenter ${tc.classBg}`}>
                light
              </div>
            </div>
            <div className='col4 col4-xs col4-sm'>
              <div
                className={`fsXS border p1 bgLight textCenter ${tc.classColor}`}>
                bgLight
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ThemeColors;
