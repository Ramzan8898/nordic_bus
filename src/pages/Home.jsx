import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_HERO_SECTION } from '../graphql/heroSection';

export default function Home() {
    const { data, loading, error } = useQuery(GET_HERO_SECTION);
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error</div>;
    return (
        <div className="">
            <h1 className="text-4xl font-bold mb-4">{data.pageBy.heroSection?.primaryHeading}</h1>
            <p className="text-lg">{data.pageBy.heroSection?.description}</p>
        </div>
    )
}