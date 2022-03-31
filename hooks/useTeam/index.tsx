import { useQuery } from 'react-query'

interface ITeamMember {
  name: string,
  image: string,
  profession: string,
  socialNetworks: {
    name: string,
    url: string,
  }[],
}

export const useTeam = () => {
  return useQuery<ITeamMember[], Error>('team', () => fetch('data/team.json').then(res => res.json()))
}