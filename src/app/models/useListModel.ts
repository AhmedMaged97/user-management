export interface useListModel {
    page:        number;
    per_page:    number;
    total:       number;
    total_pages: number;
    data:        userList[];
    support:     Support;
}

export interface userList {
    id:         number;
    email:      string;
    first_name: string;
    last_name:  string;
    avatar:     string;
}

export interface Support {
    url:  string;
    text: string;
}
