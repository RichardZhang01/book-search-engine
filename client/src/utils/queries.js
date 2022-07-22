import { gql } from '@apollo/client'

export const QUERY_ME = gql`
    query me {
        me {
            _id
            email
            bookCount
            username
            savedBooks {
                bookId
                authors
                description
                image
                title
                link
            }
        }
    }
`;