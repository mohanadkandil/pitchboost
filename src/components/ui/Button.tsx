import { VariantProps, cva } from "class-variance-authority";
import { FC } from "react";

const buttonClasses = cva(
  [
    "rounded-3xl",
    "font-bold",
    "hover:scale-110",
    "active:scale-100",
    "transition",
    "duration-200",
    "ease-in-out",
  ],
  {
    variants: {
      intent: {
        primary: "bg-[#FF7F50] text-white",
        secondary: "bg-[#D6DEE7] text-black",
        text: "bg-transparent text-[#FF7F50]",
      },
      size: {
        small: "py-2 px-4 text-sm",
        medium: "py-3 px-6 text-base",
        large: "py-4 px-8 text-lg",
      },
    },
    defaultVariants: {
      intent: "primary",
      size: "medium",
    },
  }
);

// derive the props from the class variance authority
export interface ButtonProps
  extends React.HTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonClasses> {}

const Button: FC<ButtonProps> = ({
  children,
  intent,
  size,
  className,
  ...props
}) => {
  return (
    <button className={buttonClasses({ intent, size, className })} {...props}>
      {children}
    </button>
  );
};

export default Button;
