export interface UserListModel {
    page:        number;
    per_page:    number;
    total:       number;
    total_pages: number;
    data:        UserList[];
    support:     Support;
}

export interface UserList {
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
