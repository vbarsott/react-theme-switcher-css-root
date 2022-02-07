import React from 'react';

const LineHeight = () => {
  const lineHeight = {
    id: 1000,
    lhs: [
      { id: 1001, classTitle: 'lhDef', classValue: '1' },
      { id: 1002, classTitle: 'lh1', classValue: '1.1' },
      { id: 1003, classTitle: 'lh2', classValue: '1.2' },
      { id: 1004, classTitle: 'lh3', classValue: '1.3' },
      { id: 1005, classTitle: 'lh4', classValue: '1.4' },
      { id: 1006, classTitle: 'lh5', classValue: '1.5' },
    ],
  };
  return (
    <>
      <div className='containerFluidSM containerSM-lg'>
        <div className='sectionTitle ffStyled primary'>
          <h5 className='fsH5 pb2'>Line Height</h5>
        </div>

        <div className='row ffStyled fwBold primary mb1'>
          <div className='col4 col3-xs'>Classes</div>
          <div className='col3 col2-xs'>Values</div>
          <div className='col5 col7-xs'>Appearances</div>
        </div>

        {lineHeight.lhs.map((lh) => (
          <div key={lh.id} className='row alignCenter mb1'>
            <div className='col4 col3-xs'>
              <p className='fsSM fwBold'>.{lh.classTitle}:</p>
            </div>

            <div className='col3 col2-xs'>
              <div className='displayFlex alignEnd'>
                <h6 className={`fsMD ffDef ${lh.classTitle}`}>
                  {lh.classValue}
                </h6>
              </div>
            </div>

            <div className='col5 col7-xs'>
              <div className='displayFlex alignEnd'>
                <h6 className={`border px1 fsMD ffDef ${lh.classTitle}`}>
                  LH
                </h6>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default LineHeight;