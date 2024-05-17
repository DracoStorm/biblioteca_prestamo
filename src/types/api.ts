
export type Student = {
    register: number;
    first_name: string;
    last_name: string;
    e_mail: string;
}
export type StudentLoans = {
    loans: Loan[]
}

export type Loan = {
    id: number;
    loan_date: Date;
    devolution_date: Date;
    renew_tries: number;
    book: Book;
}

export type Book = {
    id: number;
    title: string;
    author: string;
    category: SimpleKey;
    editorial: SimpleKey;
}

export type SimpleKey = {
    id: number;
    name: string;
}

export type Sesion = {
    register: number,
    first_name: string,
    last_name: string
}

export interface Category {
    id: number;
    name: string;
}
