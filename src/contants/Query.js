import { gql } from "@apollo/client";

export const TopicQuery = (name, first) => ({
    query: gql`
        query {
            topic(name:"${name.toLowerCase()}"){
                name
                relatedTopics(first:${first}){
                    id
                    name,
                    stargazerCount
                }
            }
        }
    `,
  });
