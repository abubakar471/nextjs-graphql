import {gql} from  "graphql-tag";

export const typeDefs = gql`
    type User {
        id: ID!
        name: String!
    }

    type WeatherInterface {
      zip: String!
      weather: String!
      tempC: String!
      tempF: String!
      friends: [String!]
    }
    
    input WeatherInput {
        zip: String!
        weather: String!
        tempC: String!
        tempF: String!
    }

    type Query {
        hello: String!
        users: [User!]!
        weather(zip: String!): [WeatherInterface!]!
    }

    type Mutation {
        weather(data: WeatherInput!): [WeatherInterface!]!
    }
`
