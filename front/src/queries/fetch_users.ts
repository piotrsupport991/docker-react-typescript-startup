

import { gql } from '@apollo/client'

export const FETCH_USERS = gql`
{
  users{
    user_id
    firstname
    lastname
    is_admin
  }
}
`