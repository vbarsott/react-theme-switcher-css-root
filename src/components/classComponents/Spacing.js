import React from 'react';

const Spacing = () => {
  const spacingClass = {
    id: 800,
    spacingSizes: [
      { id: 801, classTitle: '0', classValue: '0' },
      { id: 802, classTitle: '0.5rem', classValue: '1' },
      { id: 803, classTitle: '1rem', classValue: '2' },
      { id: 804, classTitle: '1.5rem', classValue: '3' },
      { id: 805, classTitle: '2rem', classValue: '4' },
      { id: 806, classTitle: '2.5rem', classValue: '5' },
      { id: 807, classTitle: '3rem', classValue: '6' },
    ],
    mClasses: [
      { id: 808, classTitle: 'm0' },
      { id: 809, classTitle: 'm1' },
      { id: 810, classTitle: 'm2' },
      { id: 811, classTitle: 'm3' },
      { id: 812, classTitle: 'm4' },
      { id: 813, classTitle: 'm5' },
      { id: 814, classTitle: 'm6' },
    ],
    mlClasses: [
      { id: 815, classTitle: 'ml0' },
      { id: 816, classTitle: 'ml1' },
      { id: 817, classTitle: 'ml2' },
      { id: 818, classTitle: 'ml3' },
      { id: 819, classTitle: 'ml4' },
      { id: 820, classTitle: 'ml5' },
      { id: 821, classTitle: 'ml6' },
    ],
    mrClasses: [
      { id: 822, classTitle: 'mr0' },
      { id: 823, classTitle: 'mr1' },
      { id: 824, classTitle: 'mr2' },
      { id: 825, classTitle: 'mr3' },
      { id: 826, classTitle: 'mr4' },
      { id: 827, classTitle: 'mr5' },
      { id: 828, classTitle: 'mr6' },
    ],
    mtClasses: [
      { id: 829, classTitle: 'mt0' },
      { id: 830, classTitle: 'mt1' },
      { id: 831, classTitle: 'mt2' },
      { id: 832, classTitle: 'mt3' },
      { id: 833, classTitle: 'mt4' },
      { id: 834, classTitle: 'mt5' },
      { id: 835, classTitle: 'mt6' },
    ],
    mbClasses: [
      { id: 836, classTitle: 'mb0' },
      { id: 837, classTitle: 'mb1' },
      { id: 838, classTitle: 'mb2' },
      { id: 839, classTitle: 'mb3' },
      { id: 840, classTitle: 'mb4' },
      { id: 841, classTitle: 'mb5' },
      { id: 842, classTitle: 'mb6' },
    ],
    pClasses: [
      { id: 843, classTitle: 'p0' },
      { id: 844, classTitle: 'p1' },
      { id: 845, classTitle: 'p2' },
      { id: 846, classTitle: 'p3' },
      { id: 847, classTitle: 'p4' },
      { id: 848, classTitle: 'p5' },
      { id: 849, classTitle: 'p6' },
    ],
    plClasses: [
      { id: 850, classTitle: 'pl0' },
      { id: 851, classTitle: 'pl1' },
      { id: 852, classTitle: 'pl2' },
      { id: 853, classTitle: 'pl3' },
      { id: 854, classTitle: 'pl4' },
      { id: 855, classTitle: 'pl5' },
      { id: 856, classTitle: 'pl6' },
    ],
    prClasses: [
      { id: 857, classTitle: 'pr0' },
      { id: 858, classTitle: 'pr1' },
      { id: 859, classTitle: 'pr2' },
      { id: 860, classTitle: 'pr3' },
      { id: 861, classTitle: 'pr4' },
      { id: 862, classTitle: 'pr5' },
      { id: 863, classTitle: 'pr6' },
    ],
    ptClasses: [
      { id: 864, classTitle: 'pt0' },
      { id: 865, classTitle: 'pt1' },
      { id: 866, classTitle: 'pt2' },
      { id: 867, classTitle: 'pt3' },
      { id: 868, classTitle: 'pt4' },
      { id: 869, classTitle: 'pt5' },
      { id: 870, classTitle: 'pt6' },
    ],
    pbClasses: [
      { id: 871, classTitle: 'pb0' },
      { id: 872, classTitle: 'pb1' },
      { id: 873, classTitle: 'pb2' },
      { id: 874, classTitle: 'pb3' },
      { id: 875, classTitle: 'pb4' },
      { id: 876, classTitle: 'pb5' },
      { id: 877, classTitle: 'pb6' },
    ],
  };

  return (
    <>
      <div className='containerFluidSM containerSM-lg'>
        <div className='sectionTitle ffStyled primary'>
          <h5 className='fsH5 pb2'>Spacing</h5>
        </div>

        <div className='row ffStyled fwBold primary mb1'>
          <div className='col3'>Sizes</div>
          <div className='col9'>Values</div>
        </div>

        <div className='rowWrapper'>
          {spacingClass.spacingSizes.map((ss) => (
            <div key={ss.id} className='row alignCenter mb1'>
              <div className='col3 fwBold'>
                <p className='fsSM'>{ss.classValue}:</p>
              </div>
              <div className='col9'>
                <h1 className='fsSM ffDef'>{ss.classTitle}</h1>
              </div>
            </div>
          ))}
        </div>

        <div className='rowWrapper bdTop'>
          <h6 className='fsSM py1 ffStyled primary'>Margins</h6>
          <div className='row justifyStart alignCenter bdBottom py1'>
            {spacingClass.mClasses.map((m) => (
              <div key={m.id} className='mr1 mb1'>
                <div className='bgPrimary border'>
                  <div className={`bgLight textCenter p1 ${m.classTitle}`}>
                    .{m.classTitle}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className='rowWrapper'>
          <h6 className='fsSM py1 ffStyled primary'>Margin Left</h6>
          <div className='row justifyStart alignCenter bdBottom py1'>
            {spacingClass.mlClasses.map((ml) => (
              <div key={ml.id} className='mr1 mb1'>
                <div className='bgPrimary border'>
                  <div className={`bgLight textCenter p1 ${ml.classTitle}`}>
                    .{ml.classTitle}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className='rowWrapper'>
          <h6 className='fsSM py1 ffStyled primary'>Margin Right</h6>
          <div className='row justifyStart alignCenter bdBottom py1'>
            {spacingClass.mrClasses.map((mr) => (
              <div key={mr.id} className='mr1 mb1'>
                <div className='bgPrimary border'>
                  <div className={`bgLight textCenter p1 ${mr.classTitle}`}>
                    .{mr.classTitle}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className='rowWrapper'>
          <h6 className='fsSM py1 ffStyled primary'>Margin Top</h6>
          <div className='row justifyStart alignCenter bdBottom py1'>
            {spacingClass.mtClasses.map((mt) => (
              <div key={mt.id} className='mr1 mb1'>
                <div className='bgPrimary border'>
                  <div className={`bgLight textCenter p1 ${mt.classTitle}`}>
                    .{mt.classTitle}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className='rowWrapper'>
          <h6 className='fsSM py1 ffStyled primary'>Margin Bottom</h6>
          <div className='row justifyStart alignCenter bdBottom py1'>
            {spacingClass.mbClasses.map((mb) => (
              <div key={mb.id} className='mr1 mb1'>
                <div className='bgPrimary border'>
                  <div className={`bgLight textCenter p1 ${mb.classTitle}`}>
                    .{mb.classTitle}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className='rowWrapper'>
          <h6 className='fsSM py1 ffStyled primary'>Paddings</h6>
          <div className='row justifyStart alignCenter bdBottom py1'>
            {spacingClass.pClasses.map((p) => (
              <div key={p.id} className='mr1 mb1'>
                <div className='bgLight border'>
                  <div className={`bgLight textCenter ${p.classTitle}`}>
                    <div className='bgPrimary light p1'>.{p.classTitle}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className='rowWrapper'>
          <h6 className='fsSM py1 ffStyled primary'>Padding Left</h6>
          <div className='row justifyStart alignCenter bdBottom py1'>
            {spacingClass.plClasses.map((pl) => (
              <div key={pl.id} className='mr1 mb1'>
                <div className='bgLight border'>
                  <div className={`bgLight textCenter ${pl.classTitle}`}>
                    <div className='bgPrimary light p1'>.{pl.classTitle}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className='rowWrapper'>
          <h6 className='fsSM py1 ffStyled primary'>Padding Right</h6>
          <div className='row justifyStart alignCenter bdBottom py1'>
            {spacingClass.prClasses.map((pr) => (
              <div key={pr.id} className='mr1 mb1'>
                <div className='bgLight border'>
                  <div className={`bgLight textCenter ${pr.classTitle}`}>
                    <div className='bgPrimary light p1'>.{pr.classTitle}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className='rowWrapper'>
          <h6 className='fsSM py1 ffStyled primary'>Padding Top</h6>
          <div className='row justifyStart alignCenter bdBottom py1'>
            {spacingClass.ptClasses.map((pt) => (
              <div key={pt.id} className='mr1 mb1'>
                <div className='bgLight border'>
                  <div className={`bgLight textCenter ${pt.classTitle}`}>
                    <div className='bgPrimary light p1'>.{pt.classTitle}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className='rowWrapper'>
          <h6 className='fsSM py1 ffStyled primary'>Padding Bottom</h6>
          <div className='row justifyStart alignCenter bdBottom py1'>
            {spacingClass.pbClasses.map((pb) => (
              <div key={pb.id} className='mr1 mb1'>
                <div className='bgLight border'>
                  <div className={`bgLight textCenter ${pb.classTitle}`}>
                    <div className='bgPrimary light p1'>.{pb.classTitle}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Spacing;
