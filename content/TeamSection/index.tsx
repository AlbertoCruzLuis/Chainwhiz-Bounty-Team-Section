import { TeamCard } from 'components/TeamCard'
import { useTeam } from 'hooks/useTeam'
import { v4 as uuidv4 } from "uuid"
import { motion } from "framer-motion"

const loadAnimationVariants = {
  visible: (i:any) => ({
    opacity: 1,
    transition: {
      delay: i * 0.3,
      duration: 0.6
    }
  })
}

export const TeamSection = () => {
  const { data } = useTeam()

  return (
    <section className='flex flex-col gap-16'>
      <h1 className="text-white text-4xl font-bold text-center">About us</h1>
      <div className="grid grid-cols-4 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {data?.map(({ name, image, profession, socialNetworks }, index) => (
          <motion.div key={uuidv4()}
            custom={index}
            initial={{ opacity: 0 }}
            animate="visible"
            variants={loadAnimationVariants} >
            <TeamCard
              name={name}
              image={image}
              profession={profession}
              socialNetworks={socialNetworks}
              />
          </motion.div>
        ))}
      </div>
    </section>
  )
}