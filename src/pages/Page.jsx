import { useLocation } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";
import Header from "../components/Header";
const GET_PAGE_BY_URI = gql`
  query GetPageByUri($uri: String!) {
    pageBy(uri: $uri) {
      title
      content
    }
  }
`;

export default function Page() {
    const { pathname } = useLocation();

    const { data, loading, error } = useQuery(GET_PAGE_BY_URI, {
        variables: {
            uri: pathname,
        },
    });

    if (loading) return <div>Loading...</div>;
    if (error || !data?.pageBy) return <div>Page not found</div>;

    return (
        <div className="container mx-auto p-4">
            <h1
                className="text-3xl font-bold mb-4"
                dangerouslySetInnerHTML={{ __html: data.pageBy.title }}
            />
            <div
                className="prose max-w-none"
                dangerouslySetInnerHTML={{ __html: data.pageBy.content }}
            />
        </div>
    );
}
