export interface UserDetailsModel {
    data:    UserData;
    support: Support;
}

export interface UserData {
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