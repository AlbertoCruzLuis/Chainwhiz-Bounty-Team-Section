import { FC } from 'react'
import Image from 'next/image'
import { BsTwitter, BsLinkedin } from "react-icons/bs"
import { MdOutlineMail } from "react-icons/md"
import { CustomLink } from 'components/CustomLink'

interface ITeamCardProps {
  name: string,
  image: string,
  profession: string,
  socialNetworks: {
    name: string,
    url: string,
  }[],
}

enum SocialNetworkIndex {
  Twitter,
  Linkedin,
  Email,
}

export const TeamCard: FC<ITeamCardProps> = ({ name, image, profession, socialNetworks }) => {
  return (
    <div className='flex flex-col gap-8 items-center'>
      <div className=''>
        <Image src={image} alt={name} width={200} height={200} />
      </div>
      <div className='flex flex-col gap-2 items-center'>
        <h2 className='text-gray-200 font-bold'>{name}</h2>
        <span className='text-gray-200'>{profession}</span>
      </div>
      <div className='grid grid-cols-3 gap-4'>
        <CustomLink 
          href={socialNetworks[SocialNetworkIndex.Twitter].url} 
          className='hover:scale-125 ease-in-out duration-200'>
          <BsTwitter className='text-primary-yellow' size="1.4rem" />
        </CustomLink>
        <CustomLink 
          href={socialNetworks[SocialNetworkIndex.Linkedin].url} 
          className='hover:scale-125 ease-in-out duration-200'>
          <BsLinkedin className='text-primary-yellow' size="1.4rem" />
        </CustomLink>
        <CustomLink 
          href={socialNetworks[SocialNetworkIndex.Email].url} 
          className='hover:scale-125 ease-in-out duration-200'>
          <MdOutlineMail className='text-primary-yellow' size="1.4rem" />
        </CustomLink>
      </div>
    </div>
  )
}