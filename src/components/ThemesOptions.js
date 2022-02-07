const ThemesOptions = ({ themes, handleThemeChange }) => {
  return (
    <>
      <div className='containerFluidSM containerSM-lg'>
        <div className='mainTitle py2'>
          <h6 className='ffStyled fsH5 primary'>Themes Options:</h6>
        </div>

        <div className='buttonsWrap'>
          <div className='buttons row gapSM justifyStart'>
            {themes.map((themesOption) => (
              <div key={themesOption.id}>
                <button
                  type='button'
                  onClick={handleThemeChange}
                  value={themesOption.themeValue}
                  className='btn btnMD light'
                  style={{
                    backgroundColor: themesOption.themeClasses.btnColor,
                  }}>
                  {themesOption.themeName}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* <div className='filters'>
          <select
            id='themes-options'
            name='theme-option'
            value={themeSelected}
            onChange={handleThemeChange}>
            {themesOptions.map((themesOption) => (
              <option key={themesOption.id} value={themesOption.themeValue}>
                {themesOption.themeName}
              </option>
            ))}
          </select>
        </div> */}
      </div>
    </>
  );
};

export default ThemesOptions;
