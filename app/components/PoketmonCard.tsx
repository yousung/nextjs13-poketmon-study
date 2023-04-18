import React from "react";
import {Response} from "next/dist/compiled/@edge-runtime/primitives/fetch";
import Image from "next/image";

export default function PoketmonCard(props : IPoketmon) {
    const languageIndex = props.names.findIndex((name: IName) => {
        return name.language.name === 'ko';
    })

    const language: IName = props.names[languageIndex];

    return (
        <div className="p-5">
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <Image className="rounded-t-lg" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${props.id}.png`} width={320} height={320} alt={language.name} />
                <div className="p-5">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{props.id}</h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{language.name}</p>
                </div>
            </div>
        </div>
    )
}

