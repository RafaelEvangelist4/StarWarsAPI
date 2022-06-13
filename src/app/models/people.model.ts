export interface People{
    id: number;
    name: string;
    height: number;
    mass: number;
    hair_color: string;
    skin_color: string;
    eye_color: string;
    birth_year: number;
    gender: string;
    homeworld: string;
    films: string[];
    species: string[];
    vehicles: string[];
    starships: string[];
    created: string;
    edited: string;
    url: string;
}

export class PeopleClass implements People{
    id: number = 0;
    name: string = "";
    height: number = 0;
    mass: number = 0;
    hair_color: string = "";
    skin_color: string = "";
    eye_color: string = "";
    birth_year: number = 0;
    gender: string = "";
    homeworld: string = "";
    films: string[] = [];
    species: string[]= [];
    vehicles: string[] = [];
    starships: string[] = [];
    created: string = "";
    edited: string = "";
    url: string = "";
    constructor(){}
}