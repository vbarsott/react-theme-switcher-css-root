const FontSizes = () => {
  const fontSizes = {
    id: 100,
    fSizes: [
      {
        id: 101,
        classTitle: 'fsDef',
        classValue: '1',
        description: 'fsDef',
      },
      {
        id: 102,
        classTitle: 'fsXS',
        classValue: '0.9',
        description: 'XS',
      },
      {
        id: 103,
        classTitle: 'fsSM',
        classValue: '1',
        description: 'SM',
      },
      {
        id: 104,
        classTitle: 'fsMD',
        classValue: '1.1',
        description: 'MD',
      },
      {
        id: 105,
        classTitle: 'fsLG',
        classValue: '1.2',
        description: 'LG',
      },
      {
        id: 106,
        classTitle: 'fsXL',
        classValue: '1.4',
        description: 'XL',
      },
      {
        id: 107,
        classTitle: 'fsXXL',
        classValue: '2',
        description: 'XXL',
      },
    ],
    fHeadings: [
      {
        id: 101,
        classTitle: 'fsH1',
        classValue: '2.2',
        description: 'H1',
      },
      {
        id: 102,
        classTitle: 'fsH2',
        classValue: '1.8',
        description: 'H2',
      },
      {
        id: 103,
        classTitle: 'fsH3',
        classValue: '1.6',
        description: 'H3',
      },
      {
        id: 104,
        classTitle: 'fsH4',
        classValue: '1.4',
        description: 'H4',
      },
      {
        id: 105,
        classTitle: 'fsH5',
        classValue: '1.2',
        description: 'H5',
      },
      {
        id: 106,
        classTitle: 'fsH6',
        classValue: '1.1',
        description: 'H6',
      },
    ],
  };

  return (
    <>
      <div className='containerFluidSM containerSM-lg'>
        <div className='sectionTitle ffStyled primary'>
          <h5 className='fsH5 pb2'>Headings</h5>
        </div>

        <div className='row ffStyled fwBold primary mb1'>
          <div className='col3'>Classes</div>
          <div className='col3'>rem</div>
          <div className='col3'>Styled</div>
          <div className='col3'>Accent</div>
        </div>

        <div className='rowWrapper pb2'>
          {fontSizes.fHeadings.map((fhs) => (
            <div key={fhs.id} className='row alignCenter mb1'>
              <div className='col3 fwBold'>
                <p className='fsSM'>.{fhs.classTitle}:</p>
              </div>

              <div className='col3'>
                <h6 className={`lhDef ffDef ${fhs.classTitle}`}>
                  {fhs.classValue}
                </h6>
              </div>
              <div className='col3'>
                <h6 className={`lhDef ffStyled ${fhs.classTitle}`}>
                  {fhs.description}
                </h6>
              </div>
              <div className='col3'>
                <h6 className={`lhDef ffAccent ${fhs.classTitle}`}>
                  {fhs.description}
                </h6>
              </div>
            </div>
          ))}
        </div>

        <div className='sectionTitle ffStyled primary'>
          <h5 className='fsH5 pb2'>Font Sizes</h5>
        </div>

        <div className='row ffStyled primary mb1'>
          <div className='col3'>Classes</div>
          <div className='col3'>rem</div>
          <div className='col3'>Styled</div>
          <div className='col3'>Accent</div>
        </div>

        {fontSizes.fSizes.map((fss) => (
          <div key={fss.id} className='row alignCenter mb1'>
            <div className='col3 fwBold'>
              <p className='fsSM'>.{fss.classTitle}:</p>
            </div>

            <div className='col3'>
              <h6 className={`lhDef ffDef ${fss.classTitle}`}>
                {fss.classValue}
              </h6>
            </div>
            <div className='col3'>
              <h6 className={`lhDef ffStyled ${fss.classTitle}`}>
                {fss.description}
              </h6>
            </div>
            <div className='col3'>
              <h6 className={`lhDef ffAccent ${fss.classTitle}`}>
                {fss.description}
              </h6>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default FontSizes;
