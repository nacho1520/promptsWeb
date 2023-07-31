"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Profile from "@/components/Profile";

const ProfilePage = ({ params }) => {
    const searchParams = useSearchParams();
    const [ posts, setPosts ] = useState([]);
    const userName = searchParams.get('name');

    useEffect(() => {
        const fetchPost = async () => {
            const response = await fetch(`/api/users/${ params?.id }/posts`);
            const data = await response.json();
            setPosts(data);
        }
        if(params?.id) fetchPost();
    }, [params.id]);

    return(
        <Profile
            name= { userName }
            desc={`Welcome to ${ userName }'s personalized profile page. Explore ${ userName }'s exceptional prompts and be inspired by the power of their imagination`}
            data={posts}
        />
    )
};

export default ProfilePage;