import React, { useState } from 'react';
import { Drawer, Divider, Grow } from '@material-ui/core';
import colors from '../utils/color';
import images from '../utils/image';

require('./_nav.scss');


export default function SideMenu({
  setBGImage,
  setOpen,
  open,

}) {

  const [openOptionColor, setOpenOptionColor] = useState(false);
  const [openOptionImage, setOpenOptionImage] = useState(false);


  return (
    <Drawer
      open={open}
      onClose={() => setOpen(!open)}
      anchor="right"
      classesName="drawerPaper"
    >
      <div className="titleContainer">
        <h2 className="title">Change Background</h2>
      </div>
      <Divider />
      <div className="menuContainer">
        <div
          className="menu"
          style={{
            backgroundImage: `url(https://images4.alphacoders.com/199/thumb-350-199218.jpg)`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
          onClick={() => setOpenOptionImage(true)}
        >
          <span>Photo</span>
        </div>

        <div className="menu"
          style={{
            backgroundImage: `url(https://htmlcolorcodes.com/assets/images/html-color-codes-color-palette-generators-hero.jpg)`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
          onClick={() => {
            setOpenOptionColor(true);
            setOpenOptionImage(false);
          }}
        >
          <span>Couleur</span>
        </div>
      </div>
      {openOptionImage ? (
        <Grow in={openOptionImage}>
          <div className="menuContainer">
            {images.map((image, index) => {
              return (
                <div
                  key={index}
                  className="menu"
                  style={{
                    backgroundImage: `url(${image})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                  }}
                  onClick={() => setBGImage(image)}
                >
                </div>
              )
            })}
          </div>
        </Grow>) : (<Grow in={openOptionColor}>
          <div className="menuContainer">
            {colors.map((color, index) => {
              return (
                <div
                  key={index}
                  className="menu"
                  style={{
                    backgroundColor: color,
                  }}
                  onClick={() => setBGImage(color)}
                >
                </div>
              )
            })}
          </div>
        </Grow>)}
    </Drawer>
  );
}
