const Breakpoints = () => {
  const breakpoints = {
    id: 900,
    bps: [
      { id: 901, classTitle: 'bpXXS', classValue: '0' },
      { id: 902, classTitle: 'bpXS', classValue: '420px' },
      { id: 903, classTitle: 'bpSM', classValue: '576px' },
      { id: 904, classTitle: 'bpMD', classValue: '768px' },
      { id: 905, classTitle: 'bpLG', classValue: '992px' },
      { id: 906, classTitle: 'bpXL', classValue: '1200px' },
      { id: 907, classTitle: 'bpXXL', classValue: '1400px' },
    ],
  };

  return (
    <>
      <div className='containerFluidSM containerSM-lg'>
        <div className='sectionTitle ffStyled primary'>
          <h5 className='fsH5 pb2'>Breakpoints</h5>
        </div>

        <div className='row ffStyled fwBold primary mb1'>
          <div className='col3'>Titles</div>
          <div className='col9'>Values</div>
        </div>

        <div className='rowWrapper'>
          {breakpoints.bps.map((bp) => (
            <div key={bp.id} className='row alignCenter mb1'>
              <div className='col3 fwBold'>
                <p className='fsSM'>{bp.classTitle}:</p>
              </div>
              <div className='col9'>
                <h6 className='fsSM ffDef'>{bp.classValue}</h6>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Breakpoints;
