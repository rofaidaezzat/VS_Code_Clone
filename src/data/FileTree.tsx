import { IFile } from "../interfaces";
import { v4 as uuid } from "uuid";
export const fileTree: IFile = {
  id: uuid(),
  name: "vs code clone",
  isFolder: true,
  children: [
    {
      id: uuid(),
      name: "node_module",
      isFolder: true,
      children: [
        {
          id: uuid(),
          name: ".vite",
          isFolder: true,
          children: [
            {
              id: uuid(),
              name: "react.js",
              isFolder: false,
              content: `interface Iprops {
  msg: string;
}
const ErrorMsg = ({ msg }: Iprops) => {
  return msg ? (
    <span className="block text-red-700 font-semibold text-sm  ">{msg}</span>
  ) : null;
};
export default ErrorMsg;
`,
            },
          ],
        },
      ],
    },
    {
      id: uuid(),
      name: "public",
      isFolder: true,
      children: [
        {
          id: uuid(),
          name: "index.html",
          isFolder: false,
          content: `import { Iforminput, Iproduct } from "../interfaces";
import { v4 as uuid} from 'uuid';

export const productlist:Iproduct[]=[
    {
        id:uuid(),
        title :"2022 Geneis GV70",
        description :"A luxury brand go A  ",
        imageURL:"src/assets/images/image.png",
        price:"500000",
        colors:["#ff0032" ,"#2563eb","#ff6E31"],
        category:{
            name:"cars",
            imageURL:"src/assets/images/image.png",
        },


    },
    {
        id:uuid(),
        title :"chevrolet spark .995cc",
        description :"A luxury brand go ",
        imageURL:"src/assets/images/black_e4d19185-c19d-4e7c-a14a-8d2a29c7bad3.webp",
        price:"100000",
        colors:["#ff0032" ,"#2563eb","#ff6E31"],
        category:{
            name:"cars",
            imageURL:"src/assets/images/black_e4d19185-c19d-4e7c-a14a-8d2a29c7bad3.webp",
        },

`,
        },
      ],
    },
    {
      id: uuid(),
      name: "src",
      isFolder: true,
      children: [
        {
          id: uuid(),
          name: "component",
          isFolder: true,
          children: [
            {
              id: uuid(),
              name: "Button.tsx",
              isFolder: false,
              content: `import { ButtonHTMLAttributes, ReactNode } from "react";

interface Iprops extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className: string;
  width?: "w-full" | "w-fit";
}
function Button({ children, className, width = "w-full", ...rest }: Iprops) {
  return (
    <button className={} {...rest}>
      {children}
    </button>
  );
}
export default Button;
`,
            },
          ],
        },
      ],
    },
  ],
};
