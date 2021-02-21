import React, { useState } from 'react';
import AddTitreListe from './AddTitleListe';
import TopBar from '../Nav/TopBar';
import SideMenu from '../Nav/SideMenu';

require('./_list.scss')

export default function AdminListe({ tableauId, tableauUser, type }) {

    const [open, setOpen] = useState(false);
    const [backgroundImage, setBackgroundImage] = useState('');

    return (
        <div
            className="divListeComplet"
            style={{
                backgroundImage: `url("https://images2.alphacoders.com/100/thumb-1920-1003880.png")`,
                backgroundColor: backgroundImage,
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
            }}>
            <TopBar setOpen={setOpen} />
            <div id="listePosition" >
                <AddTitreListe tableauId={tableauId} type={type} />
            </div>
            <SideMenu
                open={open}
                setOpen={setOpen}
                setBGImage={setBackgroundImage}
            />
        </div>
    );
}