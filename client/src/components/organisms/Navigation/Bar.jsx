import React from 'react';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import { IconButton, Avatar } from '@material-ui/core'
import AddSharpIcon from '@material-ui/icons/AddSharp';
import PollOutlinedIcon from '@material-ui/icons/PollOutlined';
import NotificationsOutlinedIcon from '@material-ui/icons/NotificationsOutlined';
import ErrorOutlineOutlinedIcon from '@material-ui/icons/ErrorOutlineOutlined';
import BusinessOutlinedIcon from '@material-ui/icons/BusinessOutlined';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import { Link } from 'react-router-dom'

require('./bar.scss')

function Bar() {
    return (
        <div className="bar">
            <div className="leftBar">
                <Link className="link" to='/groupe' style={{ textDecoration: 'none', color: 'white', background: 'hsla(0,0%,100%,.3)', height: '4vh' }}>
                    <BusinessOutlinedIcon />
                </Link>

                <Link className="link" to='/' style={{ textDecoration: 'none', color: 'white', background: 'hsla(0,0%,100%,.3)', height: '4vh' }}>
                    <HomeOutlinedIcon />
                </Link>

                <Link className="link" to='/tableau' style={{ textDecoration: 'none', color: 'white', background: 'hsla(0,0%,100%,.3)', height: '4vh', width: '7vw' }} >
                    <PollOutlinedIcon />
                    <h7>Tableaux</h7>
                </Link>
                <form className="forms">
                    <input type="text" placeholder="" />
                    <IconButton>
                        <SearchOutlinedIcon />
                    </IconButton>
                </form>
            </div>
            <Link to='/'>
                <img className="logo-b" src="./img/trello-clone.png" alt="logo" />
            </Link>
            <div className="rightBar">
                <IconButton>
                    <AddSharpIcon />
                </IconButton>
                <IconButton>
                    <NotificationsOutlinedIcon />

                </IconButton>
                <IconButton>
                    <ErrorOutlineOutlinedIcon />
                </IconButton>

                <Link to='/profil' >
                    <Avatar style={{ width: '30px', height: '33px' }} />
                </Link>
            </div>
        </div>
    )
}

export default Bar
