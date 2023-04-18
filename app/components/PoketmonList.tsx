'use client'

import React, { useEffect, useState } from "react";
import PoketmonCard from "@/app/components/PoketmonCard";
import _ from 'lodash';

export const lastPoketmonNumber:number = 1010;
export const maxOffset: number = 20;

export default function PoketmonList() :JSX.Element {
    const [ page, setPage ] = useState<number>(0);
    const [ poketmonList, setPoketmonList ] = useState<IBasicName[]>([]);
    const [ nextPage, setNextPage ] = useState<boolean>(true);

    const goNextPage = () => {
        setPage(page + 1);
    }


    const fetchPoketmon = async () :Promise<void> => {

        const start: number = (page * maxOffset) + 1;
        const end: number = start + (maxOffset - 1);

        const fetchList = [];
        for(let i :number = start ; i <= end ; i ++) {
            fetchList.push(fetch(`https://pokeapi.co/api/v2/pokemon-species/${i}`)
                .then((res) => res.json()));
        }

        const poketmons = await Promise.all(fetchList);
        if(lastPoketmonNumber <= end) {
            setNextPage(false);
        }

        setPoketmonList(_.uniqBy(poketmonList.concat(poketmons), 'name')
            .sort((a: IBasicName, b: IBasicName) => a.id - b.id));
    }

    useEffect(() => {
        fetchPoketmon();
    }, [page, nextPage]);

    return (<>
            <div className="sm:columns-2 md:columns-4 lg:columns-5 2xl:columns-10">
                {
                    poketmonList.map((poketmon: IBasicName): React.ReactElement => {
                        // @ts-ignore
                        return (<PoketmonCard key={poketmon.id} {...poketmon} />)
                    })
                }
            </div>
            {
                nextPage ? <button onClick={goNextPage}>다음</button> : null
            }
        </>
    );
}


