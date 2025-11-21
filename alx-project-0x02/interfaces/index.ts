import React from "react";

export interface CardProps {
  title: string;
  content: string;
}

export type PostType = CardProps;

export interface PostModalProps {
  isOpen: boolean;
  onClose: () => void;
  addPost: (post: CardProps) => void;
}

export interface ButtonProps {
  size: "small" | "medium" | "large";
  shape: "rounded-sm" | "rounded-md" | "rounded-full";
  children: React.ReactNode;
  styles: string;
  onclick?: () => void;
}
