import {gql} from '@apollo/client';

//Fetch Query used as a get method in api
export const SINGLE_USER = gql`
  query GET_USERS {
    getUser {
      id
      email
      nickname
      fullname
      countryCode
      profilePicture
    }
  }
`;

export const ROBOT_TOURNAMENTS = gql`
  query CurrentSessions {
    currentSessions {
      id
      title
      aggregateKey
      slug
      category
      stage
      acceptsNewTeams
      startsAt
      endsAt
      registrationFeeCents
      currency
      maxTeams
    }
  }
`;
