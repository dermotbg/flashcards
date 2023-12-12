import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Center,
  Image,
} from '@chakra-ui/react'

import { createAvatar } from '@dicebear/core'
import { croodles as style } from '@dicebear/collection'

import { useEffect } from 'react'
import Loading from './Loading'
import { useDispatch, useSelector } from 'react-redux'
import { getAllAvatars, getAllUsers } from '../reducers/leaderboardReducer'


const Leaderboards = () => {

  const users = useSelector((state) => state.leaderboard.users)
  const avatars = useSelector((state) => state.leaderboard.avatars)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllUsers())
    dispatch(getAllAvatars())
  },[dispatch])

  if(!users[0]) return <Loading />


  return(
    <Center>
      <TableContainer>
        <Table variant={'simple'}>
          <TableCaption>Leaderboards</TableCaption>
          <Thead>
            <Tr>
              <Th>Avatar</Th>
              <Th>Username</Th>
              <Th>Score</Th>
              <Th>Rated Cards</Th>
            </Tr>
          </Thead>
          <Tbody>
            {users.map(user => {
              const avatar = avatars.find(a => a.id === user.avatar.id)
              const newAvatar = createAvatar(style, avatar).toDataUriSync()
              return (
                <Tr key={user.username}>
                  <Td>
                    <Image borderRadius={'full'} src={newAvatar} />
                  </Td>
                  <Td>
                    {user.username}
                  </Td>
                  <Td>
                    {user.score}
                  </Td>
                  <Td>
                    {user.ratedCards.length}
                  </Td>
                </Tr>
              )
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </Center>
  )
}

export default Leaderboards