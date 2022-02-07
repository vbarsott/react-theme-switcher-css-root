import React from 'react';

const Footer = () => {
  let date = new Date().getFullYear();

  return (
    <>
      <div className='footerWrapper bgPrimary light py1'>
        <div className='containerFluidSM containerSM-lg'>
          <footer>
            <p className='fwBold textCenter'>
              &copy; Designed by Vanessa Barsotti {date}
            </p>
          </footer>
        </div>
      </div>
    </>
  );
};

export default Footer;
