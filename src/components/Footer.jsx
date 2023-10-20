import React from 'react';
import SideIcons from './SideIcons';
import { TbYoga } from 'react-icons/tb'; 
import { TbSwimming } from 'react-icons/tb';
import { MdOutlineDirectionsBike } from 'react-icons/md';
import { GiWeightLiftingUp } from 'react-icons/gi';

function Footer() {
    const icons = [TbYoga, TbSwimming, MdOutlineDirectionsBike, GiWeightLiftingUp];
    return (
        <div className="footer">
            <SideIcons icons={icons}  />
            <small>Copyright SportSee ©2023</small> 
        </div>
    );
}

export default Footer;
