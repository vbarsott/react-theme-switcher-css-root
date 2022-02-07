import React from 'react';

const Header = () => {
  return (
    <>
      <div className='headerWrapper bgPrimary light py2'>
        <div className='containerFluidSM containerSM-lg'>
          <header>
            <div className='headerRow row justifyBetween alignCenter'>
              <div className='brand'>
                <h1 className='ffStyled fsH2'>Theme Switcher</h1>
              </div>
            </div>
          </header>
        </div>
      </div>
    </>
  );
};

export default Header;
