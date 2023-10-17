import { useMemo } from 'react';
import { 
    FaInstagram, 
    FaTwitter, 
    FaTiktok, 
    FaYoutube, 
    FaFacebookF, 
    FaGlobe
} from 'react-icons/fa';
import { IoChatbubbleEllipses } from 'react-icons/io5';
import { MdEmail } from 'react-icons/md';
import {
	RiLineFill, RiLinkedinBoxFill,
} from 'react-icons/ri';

/**
 * @typedef {Object} SocialMediaProps
 * @property {string} [icon]
 * @property {string} [href]
 * @property {string} [iconColor]
 * @property {string} [bgColor]
 * @property {string} [text]
 * @property {('instagram' | 'line' | 'tiktok' | 'facebook' | 'twitter'| 'youtube')} [icon]
 * @property {string} [className]
 * @property {string} [textClassName]
 */

/**
 * @param {SocialMediaProps} props
 */

export default function SocialMediaButton({
    icon,
    href,
    iconColor='shades-0',
    bgColor='shades-100', 
    className,
    text,
    textClassName
    }) {

    const SocialMediaIcon = useMemo(() => {
        switch (icon) {
            case 'instagram':
                return <FaInstagram className='w-full'/>
            case 'tiktok':
                return <FaTiktok className='w-full'/>
            case 'twitter':
                return <FaTwitter className='w-full'/>
            case 'youtube':
                return <FaYoutube className='w-full'/>
            case 'facebook':
                return <FaFacebookF className='w-full'/>
            case 'line':
                return <RiLineFill className='w-full'/>
            case 'linkedin':
                return <RiLinkedinBoxFill className='w-full'/>
            case 'website':
                return <FaGlobe className='w-full'/>
            case 'email':
                return <MdEmail className='w-full'/>
            case 'phone':
                return <IoChatbubbleEllipses className='w-full'/>
    }}, [icon])

    return (
        <a className='flex items-center gap-2'
            href={href} 
            target="_blank"
            rel="noreferrer" >
            <div 
                className={`rounded-lg drop-shadow-md w-7 h-7 flex flex-col align-center justify-center duration-300 p-1
                bg-${bgColor} text-${iconColor} hover:bg-${iconColor} hover:text-${bgColor} 
                ${className}`}
                >
                {SocialMediaIcon}
            </div>
            <span className={`${textClassName}`}>{text}</span>
        </a>
    );
}