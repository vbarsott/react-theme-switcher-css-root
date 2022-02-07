import React from 'react';

const LetterSpacing = () => {
  const letterSpacings = [
    { id: 104, classTitle: 'lsDef', classValue: '1px', description: 'Default' },
    { id: 101, classTitle: 'lsSM', classValue: '1px', description: 'Small' },
    { id: 102, classTitle: 'lsMD', classValue: '3px', description: 'Medium' },
    { id: 103, classTitle: 'lsLG', classValue: '6px', description: 'Large' },
  ];

  return (
    <>
      <div className='containerFluidSM containerSM-lg'>
        <div className='sectionTitle ffStyled primary'>
          <h5 className='fsH5 pb2'>Letter Spacing</h5>
        </div>

        <div className='row ffStyled fwBold primary mb1'>
          <div className='col3'>Classes</div>
          <div className='col9'>Values</div>
        </div>

        {letterSpacings.map((ls) => (
          <>
            <div key={ls.id} className='row alignCenter mb1'>
              <div className='col3 fwBold'>
                <p className='fsSM'>.{ls.classTitle}:</p>
              </div>

              <div className='col9'>
                <h6 className='fsSM ffDef'>{ls.classValue}</h6>
              </div>
            </div>
          </>
        ))}

        <div className='row ffStyled fwBold primary mb1'>
          <div className='col3'>Appearances</div>
        </div>

        {letterSpacings.map((ls) => (
          <>
            <div key={ls.id} className='row alignCenter mb1'>
              <div className='col4 col3-sm ffDef'>
                <h6 className={`fsMD fwBold ${ls.classTitle}`}>
                  {ls.description}
                </h6>
              </div>
              <div className='col4 col3-sm ffStyled'>
                <h6 className={`fsMD fwBold ${ls.classTitle}`}>
                  {ls.description}
                </h6>
              </div>
              <div className='col4 col3-sm ffAccent'>
                <h6 className={`fsMD fwBold ${ls.classTitle}`}>
                  {ls.description}
                </h6>
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default LetterSpacing;
