const FontFamilies = ({ theme }) => {
  return (
    <>
      <div className='containerFluidSM containerSM-lg'>
        <div className='sectionTitle ffStyled primary'>
          <h5 className='fsH5 pb2'>Font Families</h5>
        </div>

        <div className='row ffStyled fwBold primary mb1'>
          <div className='col5 col4-xs col3-sm'>Classes</div>
          <div className='col7 col8-xs col9-sm'>Values</div>
        </div>

        <div className='row alignCenter mb1'>
          <div className='col5 col4-xs col3-sm'>
            <p className='fsSM fwBold'>.ffDef:</p>
          </div>

          <div className='col7 col8-xs col9-sm'>
            <h6 className='fsSM ffDef'>{theme.themeClasses.ffDef}</h6>
          </div>
        </div>

        <div className='row alignCenter mb1'>
          <div className='col5 col4-xs col3-sm'>
            <p className='fsSM fwBold'>.ffStyled:</p>
          </div>

          <div className='col7 col8-xs col9-sm'>
            <h6 className='ffStyled fsSM'>{theme.themeClasses.ffStyled}</h6>
          </div>
        </div>

        <div className='row alignCenter mb1'>
          <div className='col5 col4-xs col3-sm'>
            <p className='fsSM fwBold'>.ffAccent:</p>
          </div>

          <div className='col7 col8-xs col9-sm'>
            <h6 className='ffAccent fsSM'>{theme.themeClasses.ffAccent}</h6>
          </div>
        </div>
      </div>
    </>
  );
};

export default FontFamilies;
