import { useQuery } from "@tanstack/react-query";

import axios from "axios";

const spaceXAPIRoadster = "https://api.spacexdata.com/v4/roadster";



interface TeslaCars {
    name: string,
    details: string,
    flickr_images: string[];

}

const spaceXAPICompany = "https://api.spacexdata.com/v4/company";
interface SpaceXCompanyInfo {

    headquarters: {
        address: string,
        city: string,
        state: string,
    },

    links: {
        website: string,
        flickr: string,
        twitter: string,
        elon_twitter: string,
    },
}

 
export function sleep(ms = 2500): Promise<void> {
    console.log(' delay the data load to show UX fallback options');
    return new Promise((resolve) => setTimeout(resolve, ms));
}


export const usePost = () => {
    return useQuery({
        queryKey: ['post'],
        queryFn: async () => {
            await sleep();
            const { data } = await axios.get(
                `${spaceXAPIRoadster}`,
            )
            return data as TeslaCars
        }
    })

}

export function usePosts() {
    return useQuery({
        queryKey: ['posts'],
        queryFn: async () => {
            await sleep();
            const { data } = await axios.get(
                `${spaceXAPICompany}`,
            )
            return data as SpaceXCompanyInfo
        },
    })
}








