import { Dispatch, SetStateAction } from "react";

interface AvatarCardProps {
    user: User;
}

interface ModalProps {
    isOpen: boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
}

interface User {
    id: number | undefined;
    first_name: string | undefined;
    last_name: string | undefined;
    avatar: string;
    email: string;
}

interface ApiResponse {
    page: number;
    per_page: number;
    total: number;
    total_pages: number;
    data: User[];
}