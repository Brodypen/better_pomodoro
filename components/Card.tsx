import clsx from "clsx";

const Card = ({ className, children }) => {
  return (
    <div
      className={clsx(
        "rounded-3xl px-8 py-4 drop-shadow-xl bg-pomocard",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Card;