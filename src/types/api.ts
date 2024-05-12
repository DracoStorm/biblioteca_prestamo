
export type Student = {
    register: number;
    first_name: string;
    last_name: string;
    e_mail: string;
    loans_id: number;
}
export type StudentLoans = {
    id: number;
    loan_0: Loan;
    loan_1: Loan;
    loan_2: Loan;
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
    category: Category;
    editorial: Category;
}

export type Category = {
    id: number;
    name: string;
}
