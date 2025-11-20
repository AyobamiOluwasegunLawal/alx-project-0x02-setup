export interface CardProps {
  title: string;
  content: string;
}

export type PostType = CardProps

export interface PostModalProps {
  isOpen: boolean;
  onClose: () => void;
  addPost: (post: CardProps) => void;
}
