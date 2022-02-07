const FontWeights = () => {
  const fontWeights = [
    { id: 101, classTitle: 'fwThin', classValue: 'Thin' },
    { id: 102, classTitle: 'fwExtralight', classValue: 'Extralight' },
    { id: 103, classTitle: 'fwLight', classValue: 'Light' },
    { id: 104, classTitle: 'fwNormal', classValue: 'Normal' },
    { id: 105, classTitle: 'fwMedium', classValue: 'Medium' },
    { id: 106, classTitle: 'fwSemibold', classValue: 'Semibold' },
    { id: 107, classTitle: 'fwBold', classValue: 'Bold' },
    { id: 108, classTitle: 'fwExtrabold', classValue: 'Extrabold' },
    { id: 109, classTitle: 'fwHeavy', classValue: 'Heavy' },
  ];

  return (
    <>
      <div className='containerFluidSM containerSM-lg'>
        <div className='sectionTitle ffStyled primary'>
          <h5 className='fsH5 pb2'>Font Weights</h5>
        </div>

        <div className='row ffStyled fwBold primary mb1'>
          <div className='col6 col4-xs col3-sm'>Classes</div>
          <div className='col6 col8-xs col9-sm'>Values</div>
        </div>

        {fontWeights.map((fw) => (
          <div key={fw.id} className='row alignCenter mb1'>
            <div className='col6 col4-xs col3-sm fwBold'>
              <p className='fsSM'>.{fw.classTitle}:</p>
            </div>

            <div className='col6 col8-xs col9-sm'>
              <div className='displayFlex alignEnd'>
                <h6 className={`fsMD ffDef ${fw.classTitle}`}>
                  {fw.classValue}
                </h6>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default FontWeights;
