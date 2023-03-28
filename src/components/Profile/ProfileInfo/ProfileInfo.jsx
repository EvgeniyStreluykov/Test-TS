import React from 'react';
import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img src='https://png.pngtree.com/thumb_back/fh260/background/20190221/ourmid/pngtree-travel-promotion-background-creative-synthesis-parent-child-tour-couple-tour-image_13277.jpg' alt='fon' />
      </div>
      <div className={s.descriptionBlock}>
        ava + description
      </div>
    </div>
  );
}

export default ProfileInfo;
