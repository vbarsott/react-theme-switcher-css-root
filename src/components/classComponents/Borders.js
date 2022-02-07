import React from 'react';

const Borders = () => {
  const bordersClasses = {
    id: 1100,
    borders: [
      { id: 1101, classTitle: 'border', classValue: 'border' },
      { id: 1102, classTitle: 'bdTop', classValue: 'bdTop' },
      { id: 1103, classTitle: 'bdLeft', classValue: 'bdLeft' },
      { id: 1104, classTitle: 'bdBottom', classValue: 'bdBottom' },
      { id: 1105, classTitle: 'bdRight', classValue: 'bdRight' },
    ],
    borderRadius: [
      {
        id: 1106,
        classTitle: 'br5px',
        classValue: 'br5px',
        value: '5px',
      },
      {
        id: 1107,
        classTitle: 'br10px',
        classValue: 'br10px',
        value: '10px',
      },
      {
        id: 1108,
        classTitle: 'br15px',
        classValue: 'br15px',
        value: '15px',
      },
      {
        id: 1109,
        classTitle: 'br20px',
        classValue: 'br20px',
        value: '20px',
      },
    ],
  };

  return (
    <>
      <div className='containerFluidSM containerSM-lg'>
        <div className='sectionTitle ffStyled primary'>
          <h5 className='fsH5 pb2'>Borders</h5>
        </div>

        <div className='row ffStyled fwBold primary mb1'>
          <div className='col5 col4-xs col3-sm'>Classes</div>
          <div className='col7 col6-xs col4-sm'>Appearances</div>
        </div>

        <div className='row alignCenter mb1'>
          <div className='col5 col4-xs col3-sm'>
            <p className='fsSM fwBold'>bdDef:</p>
          </div>

          <div className='col7 col6-xs col4-sm'>
            <p className='fsSM fwBold'>
              1px solid <span className='borderColor'> borderColor </span>
            </p>
          </div>
        </div>

        <div className='rowWrapper pb2'>
          {bordersClasses.borders.map((bd) => (
            <div key={bd.id} className='row alignCenter mb1'>
              <div className='col5 col4-xs col3-sm'>
                <p className='fsSM fwBold'>.{bd.classValue}:</p>
              </div>

              <div className='col7 col4-xs col3-sm'>
                <div className={`textCenter p1 ${bd.classValue}`}>
                  {bd.classTitle}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className='sectionTitle ffStyled primary'>
          <h5 className='fsH5 pb2'>Border Radiuses</h5>
        </div>

        <div className='row ffStyled fwBold primary mb1'>
          <div className='col4 col4-xs col3-sm'>Classes</div>
          <div className='col3 col2-xs'>Values</div>
          <div className='col4 col4-xs col3-sm'>Appearances</div>
        </div>

        <div className='row alignCenter mb1'>
          <div className='col4 col4-xs col3-sm'>
            <p className='fsSM fwBold'>.brDef:</p>
          </div>

          <div className='col3 col6-xs col4-sm'>
            <p className='fsSM fwBold'>1px</p>
          </div>
        </div>

        <div className='row alignCenter mb1'>
          <div className='col4 col4-xs col3-sm'>
            <p className='fsSM fwBold'>.brRound:</p>
          </div>
          <div className='col3 col2-xs'>
            <div className='fwBold'>50%</div>
          </div>
          <div className='col1'>
            <div className='p1 vw10 vw5-sm textCenter border brRound'>R</div>
          </div>
        </div>

        {bordersClasses.borderRadius.map((br) => (
          <div key={br.id} className='row alignCenter mb1'>
            <div className='col4 col4-xs col3-sm'>
              <p className='fsSM fwBold'>.{br.classValue}:</p>
            </div>

            <div className='col3 col2-xs col2-sm'>
              <div className='fwBold'>{br.value}</div>
            </div>

            <div className='col4 col4-xs col3-sm'>
              <div className={`border textCenter p1 ${br.classValue}`}>
                {br.classTitle}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Borders;
