
export const useGenealogy = async () => {
    const files = import.meta.glob("~/data/*.json");
    const people: Record<string, any> = {};

    for (const path in files) {
        const modulo: any = await files[path]();
        const person = modulo.default
        people[person.id] = modulo.default;

    }

    return people;
};
