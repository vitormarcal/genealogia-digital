export interface Person {
    id: string;
    name: {
        first: string;
        family_name: string;
    };
    avatar?: string;
    sex: "M" | "F";
    birth: {
        date: {
            year?: number;
            month?: number;
            day?: number;
        };
        location: {
            city: string;
            state: string;
            country: string;
        };
    };
    decease?: {
        deceased: boolean;
        date?: {
            year?: number;
            month?: number;
            day?: number;
        };
        location?: {
            city: string;
            state: string;
            country: string;
        };
    };
    relationships: {
        children: string[];
        parents: string[];
        brothers: string[];
        partners: string[];
    };
    notes?: string;
    links?: {
        family_search?: string;
    };
}



export const useGenealogy = async (): Promise<Record<string, Person>> => {
    const files = import.meta.glob("~/data/*.json");
    const people: Record<string, Person> = {};

    for (const path in files) {
        const module = await files[path]();
        const person: Person = module as Person;
        people[person.id] = person;
    }

    return people;
};
