export type Response = {
    letter: string;
    className: string;
};

export type keyStyle = {
    [key: string]: string;
};

export type ActionData = {
    formError?: string;
    fieldErrors?: {
        username: string | undefined;
        password: string | undefined;
        country?: string | undefined;
    };
    fields?: {
        username: string;
        password: string;
        country?: string;
    };
};

export type ModalProps = {
    icon: string;
    title: string;
    message: string;
    iconStyle: string;
};

export type User = {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    username: string;
    passwordHash: string;
    score: Number;
    country: string;
    countryEmoji: string;
};

export type PaginationProps = {
    totalUsers: number;
    users: User[];
    page: number;
    lastPage: number;
    paginate: (arg0: number) => void;
};
