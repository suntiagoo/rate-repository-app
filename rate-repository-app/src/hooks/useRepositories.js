import { useState, useEffect } from "react";
//import { useQuery, gql } from "@apollo/client";
import { useQuery } from "@apollo/client/react";
import { GET_REPOSITORIES } from "../graphql/queries";

const useRepositories = () => {
  const [repositories, setRepositories] = useState();
  const [loading, setLoading] = useState(false);

  const fetchRepositories = () => {
    setLoading(true);

    // Replace the IP address part with your own IP address!
    const repositories = useQuery(GET_REPOSITORIES, {
      fetchPolicy: "cache-and-network",
    });

    setLoading(false);
    setRepositories(repositories);
  };

  useEffect(() => {
    fetchRepositories();
  }, []);

  return { repositories, loading, refetch: fetchRepositories };
};

export default useRepositories;
