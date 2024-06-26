import Link from "next/link";

const Button = ({ link, text }) => {
  return (
    <>
      <div style={{ marginTop: 30 }}>
        <Link
          href={link}
          style={{
            paddingLeft: 20,
            paddingRight: 20,
            paddingTop: 10,
            paddingBottom: 10,
            backgroundColor: "black",
            color: "white",
            borderRadius: 50,
          }}
        >
          {text}
        </Link>
      </div>
    </>
  );
};

export default Button;
