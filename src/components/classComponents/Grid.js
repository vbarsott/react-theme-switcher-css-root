const Grid = () => {
  const grids = {
    id: 1200,
    gaps: [
      { id: 1201, classTitle: 'gapSM', classValue: '0.5rem' },
      { id: 1202, classTitle: 'gapMD', classValue: '1rem' },
      { id: 1203, classTitle: 'gapMD', classValue: '1.5rem' },
    ],
    containers: [
      { id: 1210, classTitle: 'containerFluidSM', classValue: '0.5rem' },
      { id: 1211, classTitle: 'containerFluidMD', classValue: '1rem' },
      { id: 1212, classTitle: 'containerFluidLG', classValue: '1.5rem' },
      { id: 1213, classTitle: 'containerSM', classValue: '0.5rem' },
      { id: 1214, classTitle: 'containerMD', classValue: '1rem' },
      { id: 1215, classTitle: 'containerLG', classValue: '1.5rem' },
    ],
  };

  return (
    <>
      <div className='containerFluidSM containerSM-lg'>
        <div className='sectionTitle ffStyled primary'>
          <h5 className='fsH5 pb2'>Containers</h5>
        </div>

        <div className='row ffStyled fwBold primary mb1'>
          <div className='col5 col4-xs col3-sm'>Classes</div>
          <div className='col7 col8-xs col9-sm'>Padding X</div>
        </div>

        <div className='rowWrapper pb2'>
          {grids.containers.map((c) => (
            <div key={c.id} className='row alignCenter mb1'>
              <div className='col5 col4-xs col3-sm fwBold'>
                <p className='fsSM'>.{c.classTitle}:</p>
              </div>
              <div className='col7 col8-xs col9-sm'>
                <h6 className='fsSM ffDef'>{c.classValue}</h6>
              </div>
            </div>
          ))}
        </div>

        <div className='sectionTitle ffStyled primary'>
          <h5 className='fsH5 pb2'>Grids</h5>
        </div>

        <div className='row ffStyled fwBold primary mb1'>
          <div className='col3'>Classes</div>
          <div className='col9'>Padding</div>
        </div>

        <div className='rowWrapper pb2'>
          {grids.gaps.map((gap) => (
            <div key={gap.id} className='row alignCenter mb1'>
              <div className='col3 fwBold'>
                <p className='fsSM'>.{gap.classTitle}:</p>
              </div>
              <div className='col9'>
                <h6 className='fsSM ffDef'>{gap.classValue}</h6>
              </div>
            </div>
          ))}
        </div>

        <div className='row ffStyled fwBold primary mb1'>
          <div className='col12'>Appearances</div>
        </div>

        <div className='row'>
          <div className='col12 mx1 mb1'>
            <div className='row textCenter fsSM gapSM'>
              <div className='col4 border'>
                <p className='border p1'>SM</p>
              </div>
              <div className='col4 border'>
                <p className='border p1'>SM</p>
              </div>
              <div className='col4 border'>
                <p className='border p1'>SM</p>
              </div>
            </div>
          </div>
          <div className='col12 mx2 mb1'>
            <div className='row textCenter fsSM gapMD'>
              <div className='col4 border'>
                <p className='border p1'>MD</p>
              </div>
              <div className='col4 border'>
                <p className='border p1'>MD</p>
              </div>
              <div className='col4 border'>
                <p className='border p1'>MD</p>
              </div>
            </div>
          </div>

          <div className='col12 mx3'>
            <div className='row textCenter fsSM gapLG'>
              <div className='col4 border'>
                <p className='border p1'>LG</p>
              </div>
              <div className='col4 border'>
                <p className='border p1'>LG</p>
              </div>
              <div className='col4 border'>
                <p className='border p1'>LG</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Grid;
