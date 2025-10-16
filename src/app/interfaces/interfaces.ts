export interface RespuestaBD {
    page: number;
    per_page: number;
    total: number;
    total_pages: number;
    data: Personajes[];
}

export interface Personajes {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
}

export const respuestaEjemplo: RespuestaBD = {
    page: 1,
    per_page: 6,
    total: 12,
    total_pages: 2,
    data: [
        {
            id: 1,
            email: "george.bluth@reqres.in",
            first_name: "George",
            last_name: "Bluth",
            avatar: "https://reqres.in/img/faces/1-image.jpg"
        },
        {
            id: 2,
            email: "janet.weaver@reqres.in",
            first_name: "Janet",
            last_name: "Weaver",
            avatar: "https://reqres.in/img/faces/2-image.jpg"
        },
        {
            id: 3,
            email: "emma.wong@reqres.in",
            first_name: "Emma",
            last_name: "Wong",
            avatar: "https://reqres.in/img/faces/3-image.jpg"
        }
    ]
};