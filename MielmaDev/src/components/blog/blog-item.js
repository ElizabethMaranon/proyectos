import React from "react"; // Importar react

const BlogItem = props => { // recibir accesorios
  const { // Desestructurar
    id,
    blog_status,
    content,
    title,
    featured_image_url
  } = props.blogItem;
  return (

    <div>
      <h1>{title}</h1>
      <div>{content}</div>
    </div>
  );
};

export default BlogItem; // exportar componente