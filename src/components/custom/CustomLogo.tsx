import React from 'react'
import { Link } from 'react-router'
import logo from "./../../assets/Logo.png";

interface Props {
    subtitle?:string;
}

export const CustomLogo = ({subtitle = 'Shop'}: Props) => {
    return (
        <Link to="/" className='flex items-center whitespace-nowrap'>
            <img
            src={logo}
            alt="Powerblade"
            className="w-24 sm:w-28 md:w-36"
          />
        </Link>

    )
}
