import { CardProps } from "@/interfaces";
import React, { ReactNode } from "react";

const PostModal: React.FC = () => {
  const [formData, setFormData] = React.useState<CardProps>({
    title: "",
    content: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  return (
    <form onClick={handleSubmit}>
      <div>
        <label htmlFor="title">Title</label>

        <input
          name="title"
          type="text"
          placeholder="title"
          onChange={handleChange}
          value={formData.title}
        />
      </div>

      <div>
        <label htmlFor="content">Content</label>

        <input
          name="content"
          type="text"
          placeholder="content"
          onChange={handleChange}
          value={formData.content}
        />
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default PostModal;
